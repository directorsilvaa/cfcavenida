import { Button } from "@/components/ui/button";
import { Units } from "@/components/units";
import { CountingNumberAnimation } from "@/components/counting-number-animation";
import { ClientsCount } from "@/components/clients-count";
import { CarFront } from "lucide-react";
import { Customers } from "@/components/customers";
import { Treinamento } from "@/components/treinamento";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContactButton } from "@/components/contact-button";

export default function Home() {
  return (
    <main>
      <div className="container h-[700px] lg:h-[400px]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full max-w-[700px] lg:mt-8 mt-16 mx-auto">
            Sua Jornada Rumo à Habilitação Começa Aqui!
          </h1>

          <p className="text-sm md:text-md opacity-75 my-6 mx-auto max-w-[700px]">
            Transforme-se em um Motorista Confiante e Seguro com Nossa
            Experiência e Dedicação ao Ensino de Direção.
          </p>

          <div className="flex item-center justify-center gap-2">
            <ContactButton />
            <Dialog>
              <DialogTrigger asChild>
              <Button variant={"secondary"}>Pré cadastro</Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription>
                    Escolha uma das nossas 
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-2.5">
                  <Input type="text" placeholder="Nome Completo*" />
                  <Input type="text" placeholder="Telefone/Whatsapp*" />
                  <Input type="email" placeholder="Email*" />
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione A Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Selecione A Categoria</SelectLabel>
                        <SelectItem value="a">Categoria A - Moto</SelectItem>
                        <SelectItem value="b">Categoria B - Carro</SelectItem>
                        <SelectItem value="aeb">
                          Categoria A/B - Carro/Moto
                        </SelectItem>
                        <SelectItem value="d">Categoria D - Ônibus</SelectItem>
                        <SelectItem value="e">
                          Categoria E - Caminhão
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Escolha A " />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Escolha A </SelectLabel>
                        <SelectItem value="a">
                          Av. João Durval Carneiro
                        </SelectItem>
                        <SelectItem value="b">Av. Artêmia Pires</SelectItem>
                      </SelectGroup>
                      <SelectItem value="c">Feira X </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full">Fazer pré cadastro</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="mt-12 flex-col lg:flex-row flex items-center justify-center gap-5">
            <div className="w-full flex flex-col items-start lg:w-auto px-12 bg-white space-y-2 border p-5 rounded-xl shadow-md hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3">
                <CarFront className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-extrabold">
                  <CountingNumberAnimation
                    targetNumber={11548}
                    duration={2000}
                  />
                </h2>
              </div>
              <p>Alunos habilitados</p>
            </div>
            <div className="w-full flex flex-col items-start lg:w-auto px-12 bg-white space-y-2 border p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-center gap-3">
                <CarFront className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-extrabold flex items-center">
                  <CountingNumberAnimation targetNumber={87} duration={2000} />%
                </h2>
              </div>
              <p>Aprovação</p>
            </div>
          </div>
        </div>
      </div>
      <Units />
      <ClientsCount />
      <Treinamento />
      <Customers />
    </main>
  );
}
