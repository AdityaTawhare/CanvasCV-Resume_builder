import React from "react";
import Title from "./Title";
import { BookUserIcon, Star } from "lucide-react";

const Testimonial = () => {

    const row1Data = [
        {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
            name: 'Sarah Chen',
            role: 'Software Engineer @ Stripe',
            handle: '@sarahcodes',
            text: 'The AI enhancement transformed my dry bullet points into measurable, high-impact achievements. Got 4 interview calls in my first week!',
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
            name: 'Alex Rivera',
            role: 'Product Designer',
            handle: '@alexrivera_ux',
            text: 'Importing my old PDF resume was flawless. The AI OCR caught every project and skill, saving me hours of tedious manual formatting.',
        },
        {
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
            name: 'Michael Patel',
            role: 'Full Stack Developer',
            handle: '@mpatel_dev',
            text: 'The ATS-friendly templates are clean, modern, and pass screening filters effortlessly. Landed my dream job at a high-growth tech startup.',
        },
        {
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
            name: 'Emily Watson',
            role: 'Data Scientist',
            handle: '@emilydata',
            text: 'The AI professional summary generator captured my key technical strengths perfectly. Best resume tool I have ever used by far!',
        },
    ];

    const row2Data = [
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'David Kim',
            role: 'Technical Product Manager',
            handle: '@davidk_pm',
            text: 'Being able to live-preview layout changes and customize accent colors made my resume stand out immediately to hiring managers.',
        },
        {
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200',
            name: 'Jessica Taylor',
            role: 'Cloud Solutions Architect',
            handle: '@jessicataylor',
            text: 'The AI-powered bullet suggestions tailored for technical roles are unbelievably sharp. Super fast and intuitive interface.',
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200',
            name: 'Liam O\'Connor',
            role: 'DevOps Engineer',
            handle: '@liam_dev',
            text: 'From uploading an old messy PDF to exporting a clean, recruiter-approved resume took literally 5 minutes. Absolute game changer!',
        },
        {
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200',
            name: 'Sophia Martinez',
            role: 'Frontend Engineer',
            handle: '@sophiam_design',
            text: 'The public share link feature allowed me to send a live, interactive resume directly in my job applications and emails.',
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-5 rounded-2xl mx-3.5 bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 w-80 shrink-0 flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img className="size-11 rounded-full object-cover border border-slate-200" src={card.image} alt={card.name} />
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1">
                                <p className="font-semibold text-slate-800 text-sm">{card.name}</p>
                                <svg className="fill-green-500 size-3.5" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                                </svg>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">{card.role}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-0.5 mt-3 text-amber-400">
                    {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-400 stroke-none" />
                    ))}
                </div>

                <p className="text-sm pt-2.5 text-slate-700 leading-relaxed font-normal">"{card.text}"</p>
            </div>
            <span className="text-[11px] text-slate-400 pt-3">{card.handle}</span>
        </div>
    );

    return (
        <>
            <div id='testimonials' className='flex flex-col items-center my-10 scroll-mt-12'>
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-400/10 rounded-full px-4 py-1.5">
                    <BookUserIcon className="size-4.5 stroke-green-600" />
                    <span>Testimonials</span>
                </div>
                <Title 
                    title="Loved by Candidates Who Got Hired" 
                    description="Discover how job seekers used CanvasCV to transform their resumes and land interviews at top companies." 
                />
            </div>

            <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner flex transform-gpu min-w-[200%] pt-6 pb-4">
                    {[...row1Data, ...row1Data].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-2 pb-6">
                    {[...row2Data, ...row2Data].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>

            <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 28s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }

            .marquee-inner:hover {
                animation-play-state: paused;
            }
        `   }</style>
        </>
    );
};

export default Testimonial;
