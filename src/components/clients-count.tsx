import {
  BookCheck,
  BookText,
  CarFront,
  CheckCircle,
  FilePenLine,
  Heart,
  NotepadTextDashed,
} from "lucide-react";
import { CountingNumberAnimation } from "./counting-number-animation";

export function ClientsCount() {
  return (
    <div className="mt-28 container">
      <h2 className="text-3xl lg:text-6xl  opacity-20 font-black text-center uppercase">
        Informações
      </h2>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-8 gap-8">
        <div className="grid-1"></div>
        <div className="col-span-2 space-y-4">
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <NotepadTextDashed className="text-primary" />
            <h4 className="text-sm font-semibold">
              Código de Trânsito Brasileiro
            </h4>
          </div>
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <CheckCircle className="text-primary" />
            <h4 className="text-sm font-semibold">Consultar resultado exame</h4>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <BookText className="text-primary" />
            <h4 className="text-sm font-semibold">Dentra - BA</h4>
          </div>
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <Heart className="text-primary" />
            <h4 className="text-sm font-semibold">Consultar resultado exame</h4>
          </div>
        </div>
        <div className="col-span-2 space-y-4">
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <FilePenLine className="text-primary" />
            <h4 className="text-sm font-semibold">Cadastro Gov.br</h4>
          </div>
          <div className="w-full rounded-md border border-gray-300 hover:border-primary transition-all p-4 flex items-center gap-3">
            <BookCheck className="text-primary" />
            <h4 className="text-sm font-semibold">Simulado Dentran</h4>
          </div>
        </div>
        <div className="grid-1"></div>
      </div>
    </div>
  );
}
