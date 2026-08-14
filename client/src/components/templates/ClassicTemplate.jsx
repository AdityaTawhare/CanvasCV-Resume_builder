import { Mail, Phone, MapPin, Linkedin, Globe, ExternalLink } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const str = String(dateStr).trim();
        if (/^\d{4}$/.test(str)) return str;
        if (str.includes("-")) {
            const [year, month] = str.split("-");
            if (year && month) {
                const date = new Date(Number(year), Number(month) - 1);
                if (!isNaN(date.getTime())) {
                    return date.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short"
                    });
                }
            }
        }
        return str;
    };

    return (
        <div className="max-w-4xl mx-auto p-6 print:p-3 bg-white text-gray-800 leading-snug text-xs">
            {/* Header */}
            <header className="text-center mb-3 pb-2 border-b-2" style={{ borderColor: accentColor }}>
                <h1 className="text-2xl font-bold mb-1 tracking-tight" style={{ color: accentColor }}>
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="size-3" style={{ color: accentColor }} />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <div className="flex items-center gap-1">
                            <Linkedin className="size-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.personal_info.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
                        </div>
                    )}
                    {data.personal_info?.website && (
                        <div className="flex items-center gap-1">
                            <Globe className="size-3" style={{ color: accentColor }} />
                            <span className="break-all">{data.personal_info.website.replace(/^https?:\/\/(www\.)?/, '')}</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-2.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider mb-1 pb-0.5 border-b" style={{ color: accentColor, borderColor: accentColor + '40' }}>
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 text-[11.5px] leading-relaxed">{data.professional_summary}</p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-2.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider mb-1 pb-0.5 border-b" style={{ color: accentColor, borderColor: accentColor + '40' }}>
                        Experience
                    </h2>

                    <div className="space-y-1.5">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="border-l-2 pl-2.5" style={{ borderColor: accentColor }}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-xs">{exp.position}</h3>
                                        <p className="text-gray-600 font-medium text-[11px]">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-[11px] text-gray-500 font-medium">
                                        <p>{formatDate(exp.start_date || exp.startDate)} - {exp.is_current ? "Present" : formatDate(exp.end_date || exp.endDate)}</p>
                                    </div>
                                </div>
                                {exp.description && (
                                    <div className="text-gray-700 text-[11px] leading-relaxed whitespace-pre-line mt-0.5">
                                        {exp.description}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-2.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider mb-1 pb-0.5 border-b" style={{ color: accentColor, borderColor: accentColor + '40' }}>
                        Projects
                    </h2>

                    <div className="space-y-1.5">
                        {data.project.map((proj, index) => (
                            <div key={index} className="border-l-2 border-gray-300 pl-2.5">
                                <div className="flex justify-between items-baseline gap-2">
                                    <div className="flex items-baseline gap-1.5 flex-wrap">
                                        <span className="font-semibold text-gray-900 text-xs">{proj.name}</span>
                                        {proj.type && <span className="text-[11px] text-gray-500 font-medium">({proj.type})</span>}
                                    </div>
                                    {proj.link && (
                                        <a 
                                            href={proj.link.startsWith("http") ? proj.link : `https://${proj.link}`} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-[11px] font-semibold hover:underline shrink-0 ml-auto flex items-center gap-1"
                                            style={{ color: accentColor }}
                                        >
                                            <span>{proj.link.toLowerCase().includes("github") ? "GitHub" : "Link"}</span>
                                            <ExternalLink className="size-3" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-gray-700 text-[11px] leading-relaxed mt-0.5">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-2.5">
                    <h2 className="text-xs font-bold uppercase tracking-wider mb-1 pb-0.5 border-b" style={{ color: accentColor, borderColor: accentColor + '40' }}>
                        Education
                    </h2>

                    <div className="space-y-1.5">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-xs">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600 text-[11px]">{edu.institution}</p>
                                    {edu.gpa && <p className="text-[10.5px] text-gray-500 font-medium">GPA: {edu.gpa}</p>}
                                </div>
                                <div className="text-[11px] text-gray-500 font-medium">
                                    <p>{formatDate(edu.graduation_date || edu.graduationDate)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section className="mb-1">
                    <h2 className="text-xs font-bold uppercase tracking-wider mb-1 pb-0.5 border-b" style={{ color: accentColor, borderColor: accentColor + '40' }}>
                        Core Skills
                    </h2>

                    <div className="flex gap-2 flex-wrap text-[11px] leading-snug">
                        {data.skills.map((skill, index) => (
                            <div key={index} className="text-gray-700 font-medium">
                                • {skill}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default ClassicTemplate;