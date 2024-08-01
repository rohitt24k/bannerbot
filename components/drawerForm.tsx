import { dataTypes, dummyData } from "@/lib/data";
import { useState } from "react";
import Template1 from "./templates/1";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import CarouselSpacing from "./carousel";
import { templateMapping } from "@/lib/templateMapping";
import { motion, Variants } from "framer-motion";
import { item, list } from "@/lib/framerHelper";

interface Props {
  className?: string;
  index: number;
  setData: React.Dispatch<React.SetStateAction<dataTypes[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DrawerForm({
  className,
  index,
  setData,
  setOpen,
}: Props) {
  const [posterData, setPosterData] = useState(dummyData[index]);

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      image: { files: File[] };
      heading: { value: string };
      description: { value: string };
      buttonText: { value: string };
    };

    const file = target.image.files?.[0];
    const fileURL = (file && URL.createObjectURL(file)) || posterData.image;
    const heading = target.heading.value;
    const description = target.description.value;
    const buttonText = target.buttonText.value;

    setData((prev) => {
      const updatedData = [...prev];
      updatedData[index] = {
        ...posterData,
        heading,
        description,
        buttonText,
        image: fileURL,
      };
      return updatedData;
    });
    dummyData[index] = {
      ...posterData,
      heading,
      description,
      buttonText,
      image: fileURL,
    };
    setOpen(false);
  }

  const Component = templateMapping[posterData.template];
  return (
    <div className=" overflow-auto w-full flex flex-col gap-4 newScrollBar">
      <motion.div
        className=" grid place-items-center "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
      >
        {
          <Component
            heading={posterData.heading}
            description={posterData.description}
            buttonText={posterData.buttonText}
            image={posterData?.image}
            showEdit={false}
          />
        }
      </motion.div>
      <motion.form
        className={cn("grid gap-4 ", className)}
        onSubmit={handleSubmit}
        variants={item}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="grid gap-2" variants={list}>
          <Label htmlFor="image">Image</Label>
          <Input
            type="file"
            accept="image/*"
            id="image"
            onChange={(e) =>
              setPosterData((prev) => {
                const file = e.target.files?.[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  return {
                    ...prev,
                    image: url,
                  };
                }
                return prev;
              })
            }
          />
        </motion.div>

        <motion.div variants={list} className=" overflow-auto">
          <CarouselSpacing setPosterData={setPosterData} />
        </motion.div>

        {(["heading", "description", "buttonText"] as const).map((item) => (
          <motion.div className="grid gap-2" variants={list} key={item}>
            <Label htmlFor={item}>
              {item[0].toUpperCase() + item.slice(1)}
            </Label>
            <Input
              type="text"
              id={item}
              defaultValue={posterData[item]}
              onChange={(e) =>
                setPosterData((prev) => ({ ...prev, [item]: e.target.value }))
              }
            />
          </motion.div>
        ))}

        <Button type="submit">Save changes</Button>
      </motion.form>
    </div>
  );
}
