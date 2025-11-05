// components/product/ProductActions.tsx
'use client';

import { Share, Share2, ShoppingCart } from "lucide-react";

interface ProductActionsProps {
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onAddToCart: () => void;
}

export function ProductActions({
    quantity,
    onQuantityChange,
    onAddToCart,
}: ProductActionsProps) {
    const handleIncrement = () => {
        onQuantityChange(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            onQuantityChange(quantity - 1);
        }
    };

    return (
        <div className="mt-auto space-y-4 pt-6 border-t border-gray-200">
            {/* Selector de Cantidad */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cantidad
                </label>
                <div className="flex items-center space-x-3">
                    <button
                        onClick={handleDecrement}
                        disabled={quantity <= 1}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[#D4741C] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    </button>

                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-20 h-10 text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4741C] focus:border-transparent"
                    />

                    <button
                        onClick={handleIncrement}
                        className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[#D4741C] transition-colors flex items-center justify-center"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Botones de Acción */}
            <div className="space-y-3">
                {/* Botón Solicitar Cotización (Principal) */}
                <button
                    onClick={onAddToCart}
                    className="w-full bg-[#561A16] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#D4741C] transition-colors flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Solicitar Cotización</span>
                </button>

                {/* Botones Secundarios */}
                <div className="grid grid-cols-1 gap-3">
                    <button
                        className="py-3 px-4 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-[#D4741C] hover:text-[#D4741C] transition-colors flex items-center justify-center space-x-2"
                    >
                        <Share2 className="w-5 h-5" />
                        <span>Compartir</span>
                    </button>
                </div>
            </div>

            {/* Información Adicional */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">¿Necesitas una cotización personalizada?</p>
                        <p>Contáctanos directamente para pedidos al por mayor o productos especializados.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}