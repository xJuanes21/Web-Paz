// components/ui/EmptyState.tsx
interface EmptyStateProps {
    message: string;
    showClearButton?: boolean;
    onClear?: () => void;
}

export function EmptyState({ message, showClearButton, onClear }: EmptyStateProps) {
    return (
        <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
                <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-500 mb-2">
                No se encontraron productos
            </h3>
            <p className="text-gray-400 mb-4">{message}</p>
            {showClearButton && onClear && (
                <button
                    onClick={onClear}
                    className="bg-[#561A16] text-white px-4 py-2 rounded-lg hover:bg-[#D4741C] transition-colors"
                >
                    Limpiar búsqueda
                </button>
            )}
        </div>
    );
}