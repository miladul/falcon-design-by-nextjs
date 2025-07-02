// app/api/products/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch("http://157.230.240.97:9999/api/v1/shop/products");
        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
