import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
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
        <div className="max-w-5xl mx-auto bg-white text-zinc-800">
            <div className="grid grid-cols-3">

                <div className="col-span-1 py-5 flex items-center justify-center">
                    {/* Image */}
                    {data.personal_info?.image && typeof data.personal_info.image === 'string' ? (
                        <div className="mb-2">
                            <img src={data.personal_info.image} alt="Profile" className="w-24 h-24 object-cover rounded-full mx-auto shadow-sm" style={{ background: accentColor+'70' }} />
                        </div>
                    ) : (
                        data.personal_info?.image && typeof data.personal_info.image === 'object' ? (
                            <div className="mb-2">
                                <img src={URL.createObjectURL(data.personal_info.image)} alt="Profile" className="w-24 h-24 object-cover rounded-full mx-auto shadow-sm" />
                            </div>
                        ) : null
                    )}
                </div>

                {/* Name + Title */}
                <div className="col-span-2 flex flex-col justify-center py-5 px-6">
                    <h1 className="text-3xl font-bold text-zinc-700 tracking-wider">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    <p className="uppercase text-zinc-600 font-medium text-xs tracking-widest mt-1">
                        {data?.personal_info?.profession || "Profession"}
                    </p>
                </div>

                {/* Left Sidebar */}
                <aside className="col-span-1 border-r border-zinc-300 p-5 pt-0">


                    {/* Contact */}
                    <section className="mb-5">
                        <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-2">
                            CONTACT
                        </h2>
                        <div className="space-y-1.5 text-xs">
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={13} style={{ color: accentColor }} />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail size={13} style={{ color: accentColor }} />
                                    <span>{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={13} style={{ color: accentColor }} />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section className="mb-5">
                            <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-2">
                                EDUCATION
                            </h2>
                            <div className="space-y-3 text-xs">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <p className="font-semibold uppercase">{edu.degree}</p>
                                        <p className="text-zinc-600">{edu.institution}</p>
                                        <p className="text-[11px] text-zinc-500">
                                            {formatDate(edu.graduation_date)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-xs font-semibold tracking-widest text-zinc-600 mb-2">
                                SKILLS
                            </h2>
                            <ul className="space-y-1 text-xs">
                                {data.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </aside>

                {/* Right Content */}
                <main className="col-span-2 p-6 pt-0">

                    {/* Summary */}
                    {data.professional_summary && (
                        <section className="mb-5">
                            <h2 className="text-xs font-semibold tracking-widest mb-2" style={{ color: accentColor }} >
                                SUMMARY
                            </h2>
                            <p className="text-xs text-zinc-700 leading-normal">
                                {data.professional_summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience && data.experience.length > 0 && (
                        <section>
                            <h2 className="text-xs font-semibold tracking-widest mb-3" style={{ color: accentColor }} >
                                EXPERIENCE
                            </h2>
                            <div className="space-y-4 mb-5">
                                {data.experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-semibold text-xs text-zinc-900">
                                                {exp.position}
                                            </h3>
                                            <span className="text-[11px] text-zinc-500">
                                                {formatDate(exp.start_date || exp.startDate)} -{" "}
                                                {exp.is_current ? "Present" : formatDate(exp.end_date || exp.endDate)}
                                            </span>
                                        </div>
                                        <p className="text-xs mb-1 font-medium" style={{ color: accentColor }} >
                                            {exp.company}
                                        </p>
                                        {exp.description && (
                                            <ul className="list-disc list-inside text-xs text-zinc-700 leading-normal space-y-0.5">
                                                {exp.description.split("\n").map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.project && data.project.length > 0 && (
                        <section>
                            <h2 className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: accentColor }}>
                                PROJECTS
                            </h2>
                            <div className="space-y-3">
                                {data.project.map((project, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between items-baseline gap-2">
                                            <div className="flex items-baseline gap-1.5 flex-wrap">
                                                <h3 className="text-xs font-semibold text-zinc-800">{project.name}</h3>
                                                {project.type && (
                                                    <span className="text-[11px] font-medium" style={{ color: accentColor }}>
                                                        • {project.type}
                                                    </span>
                                                )}
                                            </div>
                                            {project.link && (
                                                <a 
                                                    href={project.link.startsWith("http") ? project.link : `https://${project.link}`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="text-[11px] font-semibold hover:underline shrink-0 ml-auto flex items-center gap-1"
                                                    style={{ color: accentColor }}
                                                >
                                                    <span>{project.link.toLowerCase().includes("github") ? "GitHub" : "Link"}</span>
                                                    <ExternalLink className="size-3" />
                                                </a>
                                            )}
                                        </div>
                                        {project.description && (
                                            <ul className="list-disc list-inside text-xs text-zinc-700 space-y-0.5 mt-0.5">
                                                {project.description.split("\n").map((line, i) => (
                                                     <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}

export default MinimalImageTemplate;