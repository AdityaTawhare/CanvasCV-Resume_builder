import Resume from "../models/Resume.js";
import ai, { googleAI } from "../configs/ai.js";
import pdfParse from "pdf-parse/lib/pdf-parse.js";

const getModel = () => {
    const envModel = process.env.OPENAI_MODEL;
    if (!envModel || envModel === 'gemini-2.5-flash') {
        return 'gemini-3.6-flash';
    }
    return envModel;
};

// controller for enhanching a resume's professional summary
// POST: /api/ai/enhance-pro-summary 


export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const { userContent } = req.body;

        if (!userContent) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        const response = await ai.chat.completions.create({
            model: getModel(),
            messages: [
                { role: 'system', content: 'You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlights key skills, experience, and career objectives. Make it compelling and ATS-friendly, and only return text no options or anything else.' },
                { role: 'user', content: userContent },
            ],
        })

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({ enhancedContent });
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

// controller for enhanching a resume's job description
// POST: /api/ai/enhance-job-description 

export const enhanceJobDescription = async (req, res) => {
    try {
        const { userContent } = req.body;

        if (!userContent) {
            return res.status(400).json({ message: "Missing required fields" })
        }

        const response = await ai.chat.completions.create({
            model: getModel(),
            messages: [
                { role: 'system', content: 'You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be 1-2 sentences also highlights key responsibilities and achivements. Use action verbs and quantifiable results where possible. Make it ATS-friendly, and only return text no options or anything else.' },
                { role: 'user', content: userContent },
            ],
        })

        const enhancedContent = response.choices[0].message.content;
        return res.status(200).json({ enhancedContent });
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}


const sanitizeString = (val) => {
    if (!val) return "";
    if (typeof val === "string") return val;
    if (typeof val === "object") {
        if (val.default !== undefined) return String(val.default);
        if (val.value !== undefined) return String(val.value);
    }
    return String(val);
};

const sanitizeParsedData = (data) => {
    if (!data || typeof data !== "object") return {};
    
    return {
        professional_summary: sanitizeString(data.professional_summary),
        skills: Array.isArray(data.skills) 
            ? data.skills.map(s => typeof s === "string" ? s : sanitizeString(s)).filter(Boolean)
            : [],
        personal_info: {
            image: sanitizeString(data.personal_info?.image),
            full_name: sanitizeString(data.personal_info?.full_name),
            profession: sanitizeString(data.personal_info?.profession),
            email: sanitizeString(data.personal_info?.email),
            phone: sanitizeString(data.personal_info?.phone),
            location: sanitizeString(data.personal_info?.location),
            linkedin: sanitizeString(data.personal_info?.linkedin),
            website: sanitizeString(data.personal_info?.website),
        },
        experience: Array.isArray(data.experience)
            ? data.experience.map(exp => ({
                company: sanitizeString(exp.company),
                position: sanitizeString(exp.position),
                start_date: sanitizeString(exp.start_date || exp.startDate),
                end_date: sanitizeString(exp.end_date || exp.endDate),
                description: sanitizeString(exp.description),
                is_current: Boolean(exp.is_current || exp.isCurrent),
            }))
            : [],
        project: Array.isArray(data.project)
            ? data.project.map(proj => ({
                name: sanitizeString(proj.name),
                type: sanitizeString(proj.type),
                description: sanitizeString(proj.description),
            }))
            : [],
        education: Array.isArray(data.education)
            ? data.education.map(edu => ({
                institution: sanitizeString(edu.institution),
                degree: sanitizeString(edu.degree),
                field: sanitizeString(edu.field),
                graduation_date: sanitizeString(edu.graduation_date || edu.graduationDate),
                gpa: sanitizeString(edu.gpa),
            }))
            : [],
    };
};

// controller for uploading a resume using AI
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
    try {
        const { resumeText, pdfBase64, title } = req.body;
        const userId = req.userId;

        let textToProcess = resumeText;

        if (!textToProcess && pdfBase64) {
            try {
                const base64Data = pdfBase64.replace(/^data:application\/pdf;base64,/, "");
                const buffer = Buffer.from(base64Data, 'base64');
                const parsedPdf = await pdfParse(buffer);
                textToProcess = parsedPdf.text;
            } catch (err) {
                console.warn('pdf-parse failed, will fallback to Gemini native OCR:', err.message);
            }
        }

        const systemPrompt = "You are an expert AI Agent to extract structured data from a resume."

        const userPrompt = `Extract data from this resume.
        Provide extracted data as a valid JSON object matching this exact structure:
        
        {
          "professional_summary": "Summary text of candidate...",
          "skills": ["JavaScript", "React", "Node.js"],
          "personal_info": {
            "image": "",
            "full_name": "Full Name",
            "profession": "Software Engineer",
            "email": "email@example.com",
            "phone": "+1 234 567 8900",
            "location": "City, Country",
            "linkedin": "linkedin.com/in/profile",
            "website": "example.com"
          },
          "experience": [
            {
              "company": "Company Name",
              "position": "Job Title",
              "start_date": "YYYY-MM",
              "end_date": "YYYY-MM",
              "description": "Responsibilities and achievements...",
              "is_current": false
            }
          ],
          "project": [
            {
              "name": "Project Name",
              "type": "Project Type",
              "description": "Project details..."
            }
          ],
          "education": [
            {
              "institution": "University Name",
              "degree": "Bachelor of Science",
              "field": "Computer Science",
              "graduation_date": "YYYY-MM",
              "gpa": "3.8"
            }
          ]
        }`;

        let extractedData = "";

        if (textToProcess && textToProcess.trim()) {
            // Text successfully extracted -> use OpenAI format chat completions
            const response = await ai.chat.completions.create({
                model: getModel(),
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: `${userPrompt}\n\nResume Content:\n${textToProcess}` },
                ],
                response_format: { type: "json_object" },
            })
            extractedData = response.choices[0].message.content;
        } else if (pdfBase64) {
            // Text extraction empty (scanned/image PDF) -> send PDF directly to Gemini native vision OCR
            const base64Data = pdfBase64.replace(/^data:application\/pdf;base64,/, "");
            const geminiResponse = await googleAI.models.generateContent({
                model: getModel(),
                contents: [
                    {
                        inlineData: {
                            data: base64Data,
                            mimeType: 'application/pdf'
                        }
                    },
                    `${systemPrompt}\n\n${userPrompt}`
                ],
                config: {
                    responseMimeType: 'application/json'
                }
            });
            extractedData = geminiResponse.text;
        } else {
            return res.status(400).json({ message: "Could not extract text or read the uploaded PDF" })
        }

        const rawParsed = JSON.parse(extractedData);
        const parsedData = sanitizeParsedData(rawParsed);
        const newResume = await Resume.create({ userId, title, ...parsedData });
        res.json({ resumeId: newResume._id });
    }
    catch (error) {
        return res.status(400).json({ message: error.message })
    }
}