// types/index.ts
export interface Product {
    id: number;
    name: string;
    category_id: number;
    sku: string;
    barcode: string;
    slug: string;
    description: string;
    total_stock_qty: number;
    image: Record<string, { url: string }>;
    is_variant: boolean;
    thumbnail: string;
}

