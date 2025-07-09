"use client";
import Image from "next/image";
import React from "react";

interface BackgroundImageProps {
    src: string;
    alt?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt = "Background" }) => (
    <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
            src={src}
            alt={alt}
            fill
            className="object-cover w-full h-full opacity-70 transition-all duration-1000"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
    </div>
);

export default BackgroundImage; 