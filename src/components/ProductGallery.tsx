// components/ProductGallery.tsx
interface Props {
    images: Record<string, { url: string }>;
}

export default function ProductGallery({ images }: Props) {
    const urls = Object.values(images).map(img => img.url);
    return (
        <div>
            <img src={urls[0]} alt="Main product" className="w-full h-auto rounded" />
            <div className="flex gap-2 mt-4">
                {urls.map((url, i) => (
                    <img key={i} src={url} className="w-16 h-16 object-cover rounded border" />
                ))}
            </div>
        </div>
    );
}
