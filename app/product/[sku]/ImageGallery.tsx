'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  imageUrls: string[];
  title: string;
}

export default function ImageGallery({ imageUrls, title }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-96 w-full bg-muted">
            {imageUrls[selectedImage] && (
              <Image
                src={imageUrls[selectedImage]}
                alt={title}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            )}
          </div>
        </CardContent>
      </Card>

      {imageUrls.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {imageUrls.map((url, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`relative h-20 border-2 rounded-lg overflow-hidden ${
                selectedImage === idx ? 'border-primary' : 'border-muted'
              }`}
            >
              <Image
                src={url}
                alt={`${title} - Image ${idx + 1}`}
                fill
                className="object-contain p-2"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
