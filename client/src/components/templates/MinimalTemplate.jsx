
import { ExternalLink } from "lucide-react";

const MinimalTemplate = ({ data, accentColor }) => {
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
        <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 font-light text-xs leading-normal">
            {/* Header */}
            <header className="mb-4 text-center">
                <h1 className="text-2xl font-bold mb-2 tracking-wide text-zinc-900">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
                    {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                    {data.personal_info?.linkedin && (
                        <span className="break-all">{data.personal_info.linkedin}</span>
                    )}
                    {data.personal_info?.website && (
                        <span className="break-all">{data.personal_info.website}</span>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-3.5">
                    <p className="text-gray-700 leading-normal">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-3.5">
                    <h2 className="text-xs uppercase tracking-widest mb-1.5 font-bold" style={{ color: accentColor }}>
                        Experience
                    </h2>

                    <div className="space-y-2">
                        {data.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="text-xs font-semibold">{exp.position}</h3>
                                    <span className="text-[11px] text-gray-500">
                                        {formatDate(exp.start_date || exp.startDate)} - {exp.is_current ? "Present" : formatDate(exp.end_date || exp.endDate)}
                                    </span>
                                </div>
                                <p className="text-gray-600 mb-1 text-[11px] font-medium">{exp.company}</p>
                                {exp.description && (
                                    <div className="text-gray-700 leading-normal whitespace-pre-line text-xs">
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
                <section className="mb-3.5">
                    <h2 className="text-xs uppercase tracking-widest mb-1.5 font-bold" style={{ color: accentColor }}>
                        Projects
                    </h2>

                    <div className="space-y-2">
                        {data.project.map((proj, index) => (
                            <div key={index} className="space-y-0.5">
                                <div className="flex justify-between items-baseline gap-2">
                                    <div className="flex items-baseline gap-2 flex-wrap">
                                        <h3 className="text-xs font-semibold">{proj.name}</h3>
                                        {proj.type && <span className="text-[11px] text-gray-500 font-normal">({proj.type})</span>}
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
                                <p className="text-gray-600 text-xs leading-normal">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-3.5">
                    <h2 className="text-xs uppercase tracking-widest mb-1.5 font-bold" style={{ color: accentColor }}>
                        Education
                    </h2>

                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-baseline">
                                <div>
                                    <h3 className="font-semibold text-xs">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600 text-[11px]">{edu.institution}</p>
                                    {edu.gpa && <p className="text-[11px] text-gray-500">GPA: {edu.gpa}</p>}
                                </div>
                                <span className="text-[11px] text-gray-500">
                                    {formatDate(edu.graduation_date)}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2 className="text-xs uppercase tracking-widest mb-1.5 font-bold" style={{ color: accentColor }}>
                        Skills
                    </h2>

                    <div className="text-gray-700 text-xs">
                        {data.skills.join(" • ")}
                    </div>
                </section>
            )}
        </div>
    );
}

export default MinimalTemplate;