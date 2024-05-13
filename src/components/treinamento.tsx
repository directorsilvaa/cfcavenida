"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export function Treinamento() {
  return (
    <div className="w-full mt-24 bg-black py-14">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
          Centro de Treinamento
        </h2>
        <p className="text-center max-w-[1000px] mt-4 mx-auto text-white">
          Nosso espaço de formação é reservado de forma exclusiva para os
          estudantes da Avenida, oferecendo um ambiente propício para as sessões
          de treinamento. Oferecemos comodidades como sanitários, bebedouros e
          um percurso de aprendizado semelhante ao dos testes práticos do
          DETRAN. Adicionalmente, todas as áreas são mantidas sob vigilância
          contínua, assegurando o bem-estar e a proteção de nossos aprendizes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 items-center">
          <div className="col-span-1 h-[300px] overflow-hidden">
            <Image
              src={"/treinamento.jpg"}
              width={400}
              height={200}
              alt="unidade.pngsd"
            />
          </div>
          <div className="col-span-1 h-[300px] overflow-hidden">
            <Image
              src={"/02.jpeg"}
              width={400}
              height={200}
              alt=""
            />
          </div>
          <div className="col-span-1 h-[300px] overflow-hidden">
            <Image
              src={"/01.jpeg"}
              width={400}
              height={200}
              alt=""
            />
          </div>
          <div className="col-span-1 h-[300px] overflow-hidden">
            <Image
              src={"/03.jpeg"}
              width={400}
              height={200}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="mx-auto mt-10 uppercase bg-black hover:bg-secondary hover:text-black text-white">
            <ChevronRight />
            Ver fotos
          </Button>
        </div>
      </div>
    </div>
  );
}
