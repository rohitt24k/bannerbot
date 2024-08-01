import { motion } from "framer-motion";
import { Edit2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  image: string;
  width?: number;
  heading: string;
  description: string;
  buttonText: string;
  handleEdit?: () => void;
  showEdit?: boolean;
}

function Template3({
  image,
  width = 300,
  heading,
  description,
  buttonText,
  handleEdit,
  showEdit = true,
}: Props) {
  return (
    <div
      className="relative border border-border rounded-xl overflow-hidden"
      style={{
        width: width,
        height: width,
        position: "relative",
      }}
    >
      <div className=" relative z-10 p-4 py-8 w-full h-full flex flex-col ">
        <div className=" flex-1 flex flex-col justify-between gap-4">
          <h1 className=" uppercase text-red-400 text-2xl font-bold w-[100%] ">
            {heading}
          </h1>
          <p className=" text-red-200 w-[30%] text-xs ">{description}</p>
          <div className=" text-xs z-10 cursor-pointer  text-white">
            <Button variant={"destructive"} size={"sm"}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>

      {showEdit && (
        <motion.div
          className="absolute top-0 right-0 z-10 p-2 m-2 bg-accent rounded-full cursor-pointer border border-border"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 100px 50px rgba(0,0,0,0.3)",
          }}
          onClick={handleEdit}
        >
          <Edit2 size={18} />
        </motion.div>
      )}
      <div
        style={{ width: "64%", height: "64%" }}
        className="absolute bottom-0 right-0 "
      >
        <Image src={image} alt="image" layout="fill" objectFit="cover" />
      </div>
      <div
        className="absolute top-0 left-0"
        style={{
          backgroundImage: "url('/template3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default Template3;
