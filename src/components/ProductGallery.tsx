"use client";

import { useState, useRef } from "react";

interface Props {
    images: Record<string, { url: string }>;
}

export default function ProductGallery({ images }: Props) {
    const urls = Object.values(images).map((img) => img.url);
    const [mainImage, setMainImage] = useState(urls[0]);

    const [zoomStyle, setZoomStyle] = useState({});
    const imageContainerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { left, top, width, height } =
        imageContainerRef.current?.getBoundingClientRect() || {};
        const x = ((e.clientX - (left || 0)) / (width || 1)) * 100;
        const y = ((e.clientY - (top || 0)) / (height || 1)) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: "scale(3)", // zoom level
        });
    };

    const resetZoom = () => {
        setZoomStyle({});
    };

    return (
        <div>
            <div
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetZoom}
                className="relative overflow-hidden"
            >
                <img
                    src={mainImage}
                    alt="Main product"
                    style={zoomStyle}
                    className="w-full h-auto rounded main-image transition-transform duration-200 ease-in-out"
                />
            </div>

            <div className="flex gap-2 mt-4 other-image">
                {urls.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        onClick={() => setMainImage(url)}
                        className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                            mainImage === url ? "border-blue-500 opacity-50" : "border-gray-300 opacity-100"
                        }`}
                        alt={`Thumbnail ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
