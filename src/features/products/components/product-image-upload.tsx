"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ImagePlus, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ProductImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) return;

    // Filter only image files
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length === 0) return;

    // Create preview URLs
    const newPreviewUrls = imageFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);

    if (newPreviewUrls.length > 0) {
      setMainImageIndex(0);
    }

    // Reset Input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <Label>
        Product Images <span className="text-red-500">*</span>
      </Label>

      {/* Preview images area */}
      {previewUrls.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
          {previewUrls.map((url, index) => (
            <div
              key={index}
              className={cn(
                "relative aspect-square group border rounded-md overflow-hidden",
                {
                  "ring-2 ring-primary": mainImageIndex === index,
                },
              )}
            >
              <Image
                alt={`Product Preview ${index + 1}`}
                src={url}
                fill
                className="object-cover"
              />

              {/* Main Image Badge */}
              {mainImageIndex === index && (
                <Badge className="absolute top-1 left-1">Main</Badge>
              )}

              {/* Image Control Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-1 right-1 flex items-center gap-1">
                <Button
                  type="button"
                  variant="secondary"
                  className="size-6 sm:size-8 rounded-full"
                >
                  <Star
                    size={16}
                    className={cn({
                      "fill-yellow-400 text-yellow-400":
                        mainImageIndex === index,
                    })}
                  />
                </Button>
                <Button>
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Image button */}
      {previewUrls.length === 0 && (
        <div
          className="border rounded-md p-8 flex flex-col gap-2 items-center justify-center cursor-pointer hover:bg-muted transition-colors"
          onClick={triggerFileInput}
        >
          <ImagePlus size={40} />
          <Button type="button" variant="secondary" size="sm">
            Browse Files
          </Button>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFileChange(event)}
      />
    </div>
  );
};

export default ProductImageUpload;
