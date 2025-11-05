import { useEffect } from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    accentColor?: string;
    autoplay?: boolean;
    autoplayInterval?: number;
}

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    accentColor = '#D4741C',
    autoplay = false,
    autoplayInterval = 3000
}: PaginationProps) => {

    // Autoplay functionality
    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            onPageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1);
        }, autoplayInterval);

        return () => clearInterval(interval);
    }, [autoplay, currentPage, totalPages, autoplayInterval, onPageChange]);

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            {/* Previous button */}
            <button
                onClick={() => onPageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="group relative p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:hover:scale-100"
                style={{
                    borderColor: `${accentColor}40`
                }}
                aria-label="Página anterior"
            >
                <svg
                    className="w-5 h-5 text-white transition-transform group-hover:-translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Page indicators */}
            <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => onPageChange(index)}
                        className={`relative overflow-hidden rounded-full transition-all duration-300 ${currentPage === index ? 'w-12 h-3' : 'w-3 h-3 hover:scale-125'
                            }`}
                        style={{
                            backgroundColor: currentPage === index ? accentColor : 'rgba(255, 255, 255, 0.2)',
                        }}
                        aria-label={`Ir a página ${index + 1}`}
                        aria-current={currentPage === index ? 'page' : undefined}
                    >
                        {currentPage === index && (
                            <div
                                className="absolute inset-0 animate-pulse"
                                style={{ backgroundColor: accentColor, opacity: 0.5 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Next button */}
            <button
                onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}
                disabled={currentPage === totalPages - 1}
                className="group relative p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:hover:scale-100"
                style={{
                    borderColor: `${accentColor}40`
                }}
                aria-label="Página siguiente"
            >
                <svg
                    className="w-5 h-5 text-white transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};