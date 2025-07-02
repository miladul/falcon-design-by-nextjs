"use client";

import { useState } from "react";

interface Props {
    images: Record<string, { url: string }>;
}

export default function ProductGallery({ images }: Props) {
    const urls = Object.values(images).map((img) => img.url);
    const [mainImage, setMainImage] = useState(urls[0]);

    return (
        <div>
            <img
                src={mainImage}
                alt="Main product"
                className="w-full h-auto rounded main-image"
            />
            <div className="flex gap-2 mt-4 other-image">
                {urls.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        onMouseEnter={() => setMainImage(url)} // 👈 Hover to change image
                        className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                            mainImage === url ? "border-blue-500" : "border-gray-300"
                        }`}
                        alt={`Thumbnail ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
