// hooks/useScrollParallax.ts
'use client';
import { useState, useEffect } from 'react';

export function useScrollParallax() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
}