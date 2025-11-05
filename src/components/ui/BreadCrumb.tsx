// components/ui/Breadcrumb.tsx
'use client';
import { useRouter } from 'next/navigation';

interface BreadcrumbItem {
    label: string;
    href?: string;
    active?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    const router = useRouter();

    return (
        <div className="flex items-center space-x-2 text-sm text-[#561A16] mb-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {item.href ? (
                        <button
                            onClick={() => router.push(item.href!)}
                            className="hover:text-[#D4741C] transition-colors"
                        >
                            {item.label}
                        </button>
                    ) : (
                        <span className={item.active ? 'font-medium' : ''}>
                            {item.label}
                        </span>
                    )}

                    {index < items.length - 1 && <span>{'>'}</span>}
                </div>
            ))}
        </div>
    );
}