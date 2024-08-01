"use client";
import { dummyData } from "@/lib/data";
import DrawerDialog from "@/components/drawerDialog";
import { useState } from "react";
import { templateMapping } from "@/lib/templateMapping";
import { motion, Variants } from "framer-motion";
import { item, list } from "@/lib/framerHelper";

export default function Component() {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(dummyData);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-background">
      <DrawerDialog
        open={open}
        setOpen={setOpen}
        index={index}
        setData={setData}
      />
      <motion.div
        className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        variants={item}
        initial="hidden"
        animate="visible"
      >
        {data.map((item, i) => {
          const Component = templateMapping[item.template];
          return (
            <motion.div variants={list} key={i}>
              <Component
                image={item.image}
                heading={item.heading}
                description={item.description}
                buttonText={item.buttonText}
                handleEdit={() => {
                  setOpen(true);
                  setIndex(i);
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
