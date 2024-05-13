"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";

interface IComponentProps {
  imageURl: string;
  title: string;
  description: string;
  modalDescription: string;
  onClick: () => void;
}

export function FeatureCard({
  imageURl,
  title,
  description,
  modalDescription,
}: IComponentProps) {
  return (
    <Dialog>
      <Image src={imageURl} width={500} height={500} alt="Carro" />

      <div className="mt-8 border-l-4 border-primary p-5">
        <h2 className="text-lg text-black font-bold">{title}</h2>
        <p className="text-md my-4">{description}</p>
        <DialogTrigger asChild>
          <Button>
            <ChevronRight /> Ver detalhes
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{modalDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
