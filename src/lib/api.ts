// lib/api.ts
export const API_BASE = 'http://157.230.240.97:9999/api/v1';

export async function fetchProductDetails(slug: string) {
    const res = await fetch(`${API_BASE}/product/${slug}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    const json = await res.json();
    return json.data;
}

export async function fetchCategories() {
    const res = await fetch(`${API_BASE}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const json = await res.json();
    return json.data;
}
