
import React, { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        // Only run on desktop, disable on touch devices
        if ('ontouchstart' in window) return;

        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setHidden(false);
        };

        const handleMouseDown = () => setClicked(true);
        const handleMouseUp = () => setClicked(false);

        const handleLinkHoverStart = () => setLinkHovered(true);
        const handleLinkHoverEnd = () => setLinkHovered(false);

        const handleMouseLeave = () => setHidden(true);
        const handleMouseEnter = () => setHidden(false);

        document.addEventListener('mousemove', updateCursorPosition);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Add event listeners to all links and buttons
        const links = document.querySelectorAll('a, button, [role="button"]');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHoverStart);
            link.addEventListener('mouseleave', handleLinkHoverEnd);
        });

        return () => {
            document.removeEventListener('mousemove', updateCursorPosition);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);

            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHoverStart);
                link.removeEventListener('mouseleave', handleLinkHoverEnd);
            });
        };
    }, []);

    // Don't render on touch devices
    if ('ontouchstart' in window) return null;

    return (
        <>
            {/* Cursor dot */}
            <div
                className={`cursor-dot fixed rounded-full w-1 h-1 bg-white z-[9999] pointer-events-none transition-transform duration-100 ${hidden ? 'opacity-0' : 'opacity-100'} ${clicked ? 'scale-50' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%)`,
                }}
            />

            <div
                className={`cursor-outline fixed rounded-full border border-white z-[9999] pointer-events-none transition-all duration-200 ${hidden ? 'opacity-0' : 'opacity-60'} ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150 bg-white/10' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: `translate(-50%, -50%)`,
                    width: linkHovered ? '48px' : '24px',
                    height: linkHovered ? '48px' : '24px',
                    transitionTimingFunction: 'cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                }}
            />
        </>
    );
};

export default Cursor;
