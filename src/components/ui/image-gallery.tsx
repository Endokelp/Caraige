import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageGalleryProps {
  title?: string;
  description?: string;
  images?: string[];
}

const defaultImages = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/carriage-4-edited-2.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/Wedding-Carriage-1-1.jpg",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/3bbba0d1-2c61-4fd6-8386-031416df6d89-lacrossewagonhitch-com/assets/images/IMG_0002-3.jpeg",
  "https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549467794-6d9333939912?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?q=80&w=800&auto=format&fit=crop",
];

export default function ImageGallery({ 
  title = "Our Latest Creations", 
  description = "A visual collection of our most recent works – each piece crafted with intention, emotion, and style.",
  images = defaultImages 
}: ImageGalleryProps) {
  return (
    <section className="w-full flex flex-col items-center justify-start py-24 bg-background">
      <div className="max-w-3xl text-center px-4 mb-12">
        <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-2 h-[500px] w-full max-w-7xl px-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative group flex-grow transition-all w-32 rounded-lg overflow-hidden h-[500px] duration-500 hover:w-[400px] md:hover:w-[600px]"
          >
            <Image
              className="h-full w-full object-cover object-center"
              src={src}
              alt={`Wagon Gallery ${idx + 1}`}
              fill
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
