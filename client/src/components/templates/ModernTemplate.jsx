import React from "react";
import { Mail, Phone, MapPin, Linkedin, Globe, ExternalLink } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
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
		<div className="max-w-4xl mx-auto bg-white text-gray-800">
			{/* Header */}
			<header className="p-5 text-white" style={{ backgroundColor: accentColor }}>
				<h1 className="text-2xl font-bold mb-2">
					{data.personal_info?.full_name || "Your Name"}
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
					{data.personal_info?.email && (
						<div className="flex items-center gap-1.5">
							<Mail className="size-3.5" />
							<span>{data.personal_info.email}</span>
						</div>
					)}
					{data.personal_info?.phone && (
						<div className="flex items-center gap-1.5">
							<Phone className="size-3.5" />
							<span>{data.personal_info.phone}</span>
						</div>
					)}
					{data.personal_info?.location && (
						<div className="flex items-center gap-1.5">
							<MapPin className="size-3.5" />
							<span>{data.personal_info.location}</span>
						</div>
					)}
					{data.personal_info?.linkedin && (
						<a target="_blank" rel="noopener noreferrer" href={data.personal_info?.linkedin} className="flex items-center gap-1.5">
							<Linkedin className="size-3.5" />
							<span className="break-all text-xs">
								{data.personal_info.linkedin.split("https://www.")[1] || data.personal_info.linkedin.split("https://")[1] || data.personal_info.linkedin}
							</span>
						</a>
					)}
					{data.personal_info?.website && (
						<a target="_blank" rel="noopener noreferrer" href={data.personal_info?.website} className="flex items-center gap-1.5">
							<Globe className="size-3.5" />
							<span className="break-all text-xs">
								{data.personal_info.website.split("https://")[1] || data.personal_info.website}
							</span>
						</a>
					)}
				</div>
			</header>

			<div className="p-5 text-xs">
				{/* Professional Summary */}
				{data.professional_summary && (
					<section className="mb-4">
						<h2 className="text-sm font-bold uppercase tracking-wider mb-1.5 pb-1 border-b border-gray-200" style={{ color: accentColor }}>
							Professional Summary
						</h2>
						<p className="text-gray-700 leading-normal text-xs">{data.professional_summary}</p>
					</section>
				)}

				{/* Experience */}
				{data.experience && data.experience.length > 0 && (
					<section className="mb-4">
						<h2 className="text-sm font-bold uppercase tracking-wider mb-2 pb-1 border-b border-gray-200" style={{ color: accentColor }}>
							Experience
						</h2>

						<div className="space-y-2.5">
							{data.experience.map((exp, index) => (
								<div key={index} className="relative pl-3 border-l-2" style={{ borderColor: accentColor }}>
									<div className="flex justify-between items-start mb-0.5">
										<div>
											<h3 className="text-xs font-semibold text-gray-900">{exp.position}</h3>
											<p className="text-gray-600 font-medium text-[11px]">{exp.company}</p>
										</div>
										<div className="text-[11px] text-gray-500">
											{formatDate(exp.start_date || exp.startDate)} - {exp.is_current ? "Present" : formatDate(exp.end_date || exp.endDate)}
										</div>
									</div>
									{exp.description && (
										<p className="text-gray-700 leading-normal text-xs whitespace-pre-line">
											{exp.description}
										</p>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Projects */}
				{data.project && data.project.length > 0 && (
					<section className="mb-4">
						<h2 className="text-sm font-bold uppercase tracking-wider mb-2 pb-1 border-b border-gray-200" style={{ color: accentColor }}>
							Projects
						</h2>

						<div className="space-y-2">
							{data.project.map((proj, index) => (
								<div key={index} className="p-2.5 bg-gray-50 rounded-lg">
									<div className="flex justify-between items-center mb-1 gap-2">
										<div className="flex items-center gap-2 flex-wrap">
											<h3 className="font-semibold text-xs text-gray-900">{proj.name}</h3>
											{proj.type && (
												<span className="text-[10px] px-1.5 py-0.5 bg-gray-200 rounded text-gray-700 font-medium">
													{proj.type}
												</span>
											)}
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
									<p className="text-xs text-gray-600 leading-normal">{proj.description}</p>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Education */}
				{data.education && data.education.length > 0 && (
					<section className="mb-4">
						<h2 className="text-sm font-bold uppercase tracking-wider mb-2 pb-1 border-b border-gray-200" style={{ color: accentColor }}>
							Education
						</h2>

						<div className="space-y-2">
							{data.education.map((edu, index) => (
								<div key={index}>
									<h3 className="font-semibold text-xs text-gray-900">
										{edu.degree} {edu.field && `in ${edu.field}`}
									</h3>
									<p className="text-xs" style={{ color: accentColor }}>{edu.institution}</p>
									<div className="flex justify-between items-center text-[11px] text-gray-600">
										<span>{formatDate(edu.graduation_date || edu.graduationDate)}</span>
										{edu.gpa && <span>GPA: {edu.gpa}</span>}
									</div>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Skills */}
				{data.skills && data.skills.length > 0 && (
					<section>
						<h2 className="text-sm font-bold uppercase tracking-wider mb-2 pb-1 border-b border-gray-200" style={{ color: accentColor }}>
							Skills
						</h2>

						<div className="flex flex-wrap gap-1.5">
							{data.skills.map((skill, index) => (
								<span
									key={index}
									className="px-2.5 py-0.5 text-xs text-white rounded-full font-medium"
									style={{ backgroundColor: accentColor }}
								>
									{skill}
								</span>
							))}
						</div>
					</section>
				)}
			</div>
		</div>
	);
};

export default ModernTemplate;