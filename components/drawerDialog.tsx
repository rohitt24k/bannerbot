import { useMediaQuery } from "@/hooks/use-media-query";
import { dataTypes } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import DrawerForm from "./drawerForm";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Button } from "./ui/button";

interface props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setData: React.Dispatch<React.SetStateAction<dataTypes[]>>;
}

export default function DrawerDialog({ open, setOpen, index, setData }: props) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px] flex flex-col  max-h-[85vh] ">
          <DialogHeader>
            <DialogTitle>Edit Poster</DialogTitle>
          </DialogHeader>
          <DrawerForm index={index} setData={setData} setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className=" flex flex-col  max-h-[85vh] ">
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit Poster</DrawerTitle>
        </DrawerHeader>
        <DrawerForm
          className="px-4"
          index={index}
          setData={setData}
          setOpen={setOpen}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
