import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />
            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />
            case "minimal-image":
                return <MinimalImageTemplate data={data} accentColor={accentColor} />
            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />
        }
    }

    return (
        <div className="w-full bg-gray-100 overflow-y-auto">
            <div id='resume-preview' className={"border-gray-200 print:shadow-none print:border-none " + classes}>
                {renderTemplate()}
            </div>
            <style>
                {`
                @page {
                    size: A4 portrait;
                    margin: 0mm !important;
                }
                @media print {
                    html, body {
                        background: #ffffff !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    body * {
                        visibility: hidden !important;
                    }
                    #resume-preview, #resume-preview * {
                        visibility: visible !important;
                    }
                    #resume-preview {
                        position: absolute !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0.35in 0.45in !important;
                        box-sizing: border-box !important;
                        box-shadow: none !important;
                        border: none !important;
                        background: #ffffff !important;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default ResumePreview