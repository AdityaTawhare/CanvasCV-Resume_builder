import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Github, Linkedin, Twitter, Sparkles, ArrowUpRight } from 'lucide-react'
import CanvasCVLogo from '../CanvasCVLogo'

const Footer = () => {
    return (
        <>
            <footer id="contact" className="scroll-mt-12 overflow-hidden py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from-white via-green-100/60 to-white mt-32 border-t border-slate-200/70">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 md:gap-14">
                    {/* Brand & Tagline */}
                    <div className="max-w-sm space-y-4">
                        <Link to="/" className="inline-block">
                            <CanvasCVLogo />
                        </Link>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Paint your career story beautifully. ATS-friendly, interview-winning resumes crafted in minutes.
                        </p>
                        <div className="flex items-center gap-2 text-xs text-green-700 bg-green-500/10 px-3 py-1.5 rounded-full w-fit">
                            <Sparkles className="size-3.5" />
                            <span>100% Free & ATS-Optimized</span>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-wrap items-start gap-10 sm:gap-14 xl:gap-20">
                        {/* Product */}
                        <div>
                            <p className="text-slate-900 font-semibold text-sm">Product</p>
                            <ul className="mt-3 space-y-2.5">
                                <li><a href="#" className="hover:text-green-600 transition">Home</a></li>
                                <li><Link to="/app" className="hover:text-green-600 transition">Resume Builder</Link></li>
                                <li><a href="#features" className="hover:text-green-600 transition">AI Enhancer</a></li>
                                <li><a href="#testimonials" className="hover:text-green-600 transition">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <p className="text-slate-900 font-semibold text-sm">Resources</p>
                            <ul className="mt-3 space-y-2.5">
                                <li><a href="#features" className="hover:text-green-600 transition">ATS Optimization</a></li>
                                <li><a href="#features" className="hover:text-green-600 transition">Smart PDF Parser</a></li>
                                <li><a href="#testimonials" className="hover:text-green-600 transition">Success Stories</a></li>
                                <li><Link to="/app" className="hover:text-green-600 transition">Live Dashboard</Link></li>
                            </ul>
                        </div>

                        {/* Contact & Support */}
                        <div>
                            <p className="text-slate-900 font-semibold text-sm">Contact & Support</p>
                            <ul className="mt-3 space-y-2.5">
                                <li>
                                    <a 
                                        href="mailto:aditawhare@gmail.com" 
                                        className="flex items-center gap-1.5 text-slate-700 hover:text-green-600 font-medium transition"
                                    >
                                        <Mail className="size-4 text-green-600" />
                                        <span>aditawhare@gmail.com</span>
                                    </a>
                                </li>
                                <li className="text-xs text-slate-500">Fast response within 24 hours</li>
                                <li className="pt-2">
                                    <Link 
                                        to="/app?state=register" 
                                        className="inline-flex items-center gap-1 text-xs text-green-600 hover:text-green-700 font-semibold transition"
                                    >
                                        <span>Get started for free</span>
                                        <ArrowUpRight className="size-3.5" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <p className="text-slate-600">
                        © 2026 CanvasCV • Built by <a href="https://github.com/AdityaTawhare" target="_blank" rel="noreferrer" className="font-semibold text-slate-800 hover:text-green-600 transition underline decoration-dotted">Aditya</a>
                    </p>
                    <div className="flex items-center gap-5 text-slate-500">
                        <a href="https://github.com/AdityaTawhare" target="_blank" rel="noreferrer" title="GitHub" className="hover:text-green-600 transition">
                            <Github className="size-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-tawhare21/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-green-600 transition">
                            <Linkedin className="size-4" />
                        </a>
                        <a href="https://x.com/AdityaTawhare21" target="_blank" rel="noreferrer" title="X (Twitter)" className="hover:text-green-600 transition">
                            <Twitter className="size-4" />
                        </a>
                    </div>
                </div>
            </footer>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}

export default Footer