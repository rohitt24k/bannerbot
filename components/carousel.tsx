import { dataTypes } from "@/lib/data";
import { MouseEvent, useRef, useState } from "react";
import ImageContainer from "./imageContainer";
import { motion, Variants } from "framer-motion";
import { item } from "@/lib/framerHelper";

interface props {
  setPosterData: React.Dispatch<React.SetStateAction<dataTypes>>;
}

export default function CarouselSpacing({ setPosterData }: props) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  function handleImageSelect(imageUrl: string) {
    setPosterData((prev) => ({ ...prev, image: imageUrl }));
  }

  return (
    <motion.div
      className="flex gap-2 flex-nowrap overflow-x-auto cursor-grab select-none no-scrollbar"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      variants={item}
      initial="hidden"
      animate="visible"
    >
      <ImageContainer
        imageUrl="/image1.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image2.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image3.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image4.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image5.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image6.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image7.jpeg"
        handleImageSelect={handleImageSelect}
      />
      <ImageContainer
        imageUrl="/image8.jpeg"
        handleImageSelect={handleImageSelect}
      />
    </motion.div>
  );
}
