import React from 'react'

const CanvasCVLogo = ({ size = 'md' }) => {
    const sizes = {
        sm: { icon: 28, font: 15, gap: 7 },
        md: { icon: 36, font: 19, gap: 9 },
        lg: { icon: 44, font: 23, gap: 11 },
    }
    const s = sizes[size] || sizes.md

    return (
        <div
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: `${s.gap}px`,
                userSelect: 'none',
                textDecoration: 'none',
            }}
        >
            {/* Icon Mark */}
            <div style={{ position: 'relative', width: s.icon, height: s.icon, flexShrink: 0 }}>
                {/* Outer glow ring */}
                <div style={{
                    position: 'absolute',
                    inset: '-2px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #00C951, #009E35)',
                    opacity: 0.25,
                    filter: 'blur(4px)',
                }} />

                {/* Main icon box */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '9px',
                    background: 'linear-gradient(145deg, #00C951 0%, #008E30 100%)',
                    boxShadow: '0 2px 10px rgba(0, 166, 62, 0.35), inset 0 1px 0 rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    {/* Subtle shine overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: '50%',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)',
                        borderRadius: '9px 9px 0 0',
                    }} />

                    {/* Brush stroke lines inside */}
                    <svg
                        width={Math.round(s.icon * 0.6)}
                        height={Math.round(s.icon * 0.6)}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Three resume lines */}
                        <rect x="2" y="3.5" width="14" height="2.8" rx="1.4" fill="white" opacity="1"/>
                        <rect x="2" y="9" width="10" height="2.8" rx="1.4" fill="white" opacity="0.8"/>
                        <rect x="2" y="14.5" width="12" height="2.8" rx="1.4" fill="white" opacity="0.6"/>
                        {/* Paintbrush dot — bottom right */}
                        <circle cx="19" cy="17.5" r="2.2" fill="white" opacity="0.95"/>
                        {/* Tiny brush handle line */}
                        <rect x="18.2" y="12" width="1.6" height="4.8" rx="0.8" fill="white" opacity="0.6"/>
                    </svg>
                </div>
            </div>

            {/* Wordmark */}
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{
                    fontFamily: "'Segoe UI', 'Inter', 'Helvetica Neue', Arial, sans-serif",
                    fontSize: `${s.font}px`,
                    fontWeight: 800,
                    letterSpacing: '-0.6px',
                    display: 'flex',
                    alignItems: 'baseline',
                }}>
                    <span style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Canvas
                    </span>
                    <span style={{
                        background: 'linear-gradient(135deg, #00C951 0%, #009E35 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontWeight: 900,
                    }}>
                        CV
                    </span>
                </span>
                {/* Tagline — only for large size */}
                {size === 'lg' && (
                    <span style={{
                        fontFamily: "'Segoe UI', 'Inter', Arial, sans-serif",
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.5px',
                        color: '#64748b',
                        marginTop: '2px',
                        textTransform: 'uppercase',
                    }}>
                        Paint your career story
                    </span>
                )}
            </div>
        </div>
    )
}

export default CanvasCVLogo
