import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { list } from "@/lib/framerHelper";

interface props {
  imageUrl: string;
  handleImageSelect: (imageUrl: string) => void;
}

export default function ImageContainer({ imageUrl, handleImageSelect }: props) {
  return (
    <motion.div
      className="rounded-full overflow-hidden flex-shrink-0 cursor-pointer w-[70px] h-[70px] select-none relative"
      onClick={() => handleImageSelect(imageUrl)}
      variants={list}
    >
      <Image
        src={imageUrl}
        fill
        sizes="70px"
        style={{ objectFit: "cover" }}
        alt="image"
        draggable={false}
      />
    </motion.div>
  );
}
