"use client";

import { MapPin, PhoneIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Units() {
  const router = useRouter();

  return (
    <div className="w-full container flex flex-col md:flex-row items-center rounded-xl overflow-hidden gap-8">
      <div className="w-full lg:w-1/3 py-10 flex items-center justify-end flex-col bg-gray-400 min-h-[550px] rounded-xl bg-unit02 bg-cover bg-center">
        <h4 className="text-[12px] opacity-80 font-semibold uppercase text-white">
          AUTOESCOLA AVENIDA
        </h4>
        <h2 className="text-2xl font-bold text-white my-4 max-w-[380px] text-center">
          Av. Artêmia Pires, 4679A - Bairro Sim
        </h2>

        <div className="flex items-center gap-6">
          <Link
            target="_blank"
            href={
              "https://www.google.com/maps/place/Autoescola+Avenida+SIM/@-12.2466515,-38.9261701,17z/data=!3m1!4b1!4m6!3m5!1s0x71439e0c7b5bf65:0x74e4ae800344fcf6!8m2!3d-12.2466568!4d-38.9235952!16s%2Fg%2F11sj9qn3c_?entry=ttu"
            }
          >
            <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
              <MapPin />
            </Button>
          </Link>
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=7530229951&text&type=phone_number&app_absent=0"
            }
          >
            <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
              <PhoneIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/3 py-10 flex items-center justify-end flex-col rounded-xl bg-gray-400 min-h-[550px] bg-unit02new bg-cover bg-center">
        <h4 className="text-[12px] opacity-80 font-semibold uppercase text-white">
          SEDE AUTOESCOLA AVENIDA
        </h4>
        <h2 className="text-2xl font-bold text-white my-4 max-w-[380px] text-center">
          Av. João Durval Carneiro, 267
        </h2>

        <div className="flex items-center gap-6">
          <Link
            target="_blank"
            href={
              "https://www.google.com/maps/place/Auto+Escola+Avenida/@-12.2765379,-38.960756,17z/data=!3m1!4b1!4m6!3m5!1s0x71437ae26f3f699:0x62800563bc88080f!8m2!3d-12.2765432!4d-38.9561426!16s%2Fg%2F11c1ww436y?entry=ttu"
            }
          >
            <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
              <MapPin />
            </Button>
          </Link>
          <Link
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=5575988445004&text&type=phone_number&app_absent=0"
            }
          >
            <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
              <PhoneIcon />
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/3 py-10 flex items-center justify-end flex-col bg-gray-400 min-h-[550px] rounded-xl bg-breve bg-cover bg-center">
        <h4 className="text-[12px] opacity-80 font-semibold uppercase text-white">
          {/* AUTOESCOLA AVENIDA */}
        </h4>
        <h2 className="text-2xl font-bold text-white my-4 max-w-[380px] text-center">
          {/* EM BREVE EM FEIRA DE SANTANA */}
        </h2>
        <div className="flex items-center gap-6">
          <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
            <MapPin />
          </Button>
          <Button className="bg-secondary hover:bg-secondary/80 text-black rounded-full w-14 h-14">
            <PhoneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
