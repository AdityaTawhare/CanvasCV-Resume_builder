import React, { useState } from "react";
import { Zap, Sparkles, FileText, Palette } from "lucide-react";
import Title from "./Title";

const Features = () => {
    const [activeHover, setActiveHover] = useState(0);

    const featureList = [
        {
            title: "AI Content Enhancement",
            description: "Generate compelling professional summaries and impactful job descriptions optimized for ATS screening in one click.",
            icon: Sparkles,
            color: "violet",
            cardBg: "bg-violet-100",
            cardBorder: "border-violet-300",
            iconColor: "text-violet-600"
        },
        {
            title: "Smart PDF Import & OCR",
            description: "Upload your existing PDF resume and let our intelligent AI parser automatically extract and populate all your details.",
            icon: FileText,
            color: "green",
            cardBg: "bg-green-100",
            cardBorder: "border-green-300",
            iconColor: "text-green-600"
        },
        {
            title: "ATS-Ready Templates & Styling",
            description: "Select from recruiter-approved templates, customize colors and layouts, and download high-resolution PDFs instantly.",
            icon: Palette,
            color: "orange",
            cardBg: "bg-orange-100",
            cardBorder: "border-orange-300",
            iconColor: "text-orange-600"
        }
    ];

    return (
        <div id='features' className='flex flex-col items-center my-10 scroll-mt-12'>

            <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1">
                <Zap width={14} />
                <span>Simple Process</span>
            </div>
            <Title title='Build your dream resume' description='Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and recruiter-tested templates.' />

            <div className="flex flex-col md:flex-row items-center xl:-mt-10">
                <img className="max-w-2xl w-full xl:-ml-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="Resume builder workflow" />
                <div className="px-4 md:px-0 space-y-3">
                    {featureList.map((feature, index) => {
                        const Icon = feature.icon;
                        const isActive = activeHover === index;

                        return (
                            <div 
                                key={index}
                                onMouseEnter={() => setActiveHover(index)}
                                className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
                            >
                                <div className={`w-full p-6 border rounded-xl transition-all duration-200 flex gap-4 ${
                                    isActive 
                                        ? `${feature.cardBorder} ${feature.cardBg} shadow-sm` 
                                        : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                                }`}>
                                    <div className="mt-0.5">
                                        <Icon className={`size-6 ${feature.iconColor}`} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <h3 className="text-base font-semibold text-slate-800">{feature.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </div>
    );
};
export default Features
