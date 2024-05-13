"use client";
import { FeatureCard } from "./features/feature-card";

interface IComponentProps {
  hiddenTitle?: boolean;
}

export function Features({ hiddenTitle }: IComponentProps) {
  return (
    <div className="w-full mt-28 container">
      {!hiddenTitle && (
        <h2 className="text-3xl lg:text-6xl  opacity-20 font-black text-center uppercase">
          Serviços
        </h2>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/carro.svg"
            title="Categoria A - Moto"
            description="A obtenção da licença na categoria 'A' concede ao indivíduo o direito de
            conduzir automóveis de duas ou três rodas, equipados ou não com sidecar."
            modalDescription="A categoria 'A' na autoescola permite aos futuros condutores a habilidade de pilotar veículos motorizados de duas ou três rodas, independentemente de terem ou não um carro lateral acoplado. Essa categoria inclui motocicletas, motonetas, ciclomotores e triciclos. Para obter a habilitação na categoria 'A', os alunos passam por um treinamento prático e teórico, aprendendo técnicas de condução segura, manobras e regras de trânsito específicas para esses tipos de veículos."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/moto.svg"
            title="Categoria B - Carro"
            description="A autorização na categoria 'B' concede ao indivíduo a permissão de operar automóveis com quatro rodas, com espaço para até oito ocupantes."
            modalDescription="A categoria 'B' na autoescola permite aos futuros condutores a habilidade de dirigir veículos de quatro rodas com capacidade para até oito passageiros. Isso inclui carros de passeio, SUVs e vans, desde que não excedam esse limite de passageiros. Para obter a habilitação na categoria 'B', os alunos passam por um treinamento prático e teórico, onde aprendem técnicas de direção segura, manobras, além de conhecerem as regras de trânsito aplicáveis a esse tipo de veículo."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/aeb.svg"
            title="Categoria A/B - Carro/Moto"
            description="A obtenção da licença na categoria 'A' concede ao indivíduo o direito de
            conduzir automóveis de duas ou três rodas, equipados ou não com sidecar. "
            modalDescription="A categoria 'A' na autoescola permite aos futuros condutores a habilidade de pilotar veículos motorizados de duas ou três rodas, independentemente de terem ou não um carro lateral acoplado. Essa categoria inclui motocicletas, motonetas, ciclomotores e triciclos. Para obter a habilitação na categoria 'A', os alunos passam por um treinamento prático e teórico, aprendendo técnicas de condução segura, manobras e regras de trânsito específicas para esses tipos de veículos. A autorização na categoria 'B' concede ao indivíduo a permissão de operar automóveis com quatro rodas, com espaço para até oito ocupantes."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/d.svg"
            title="Categoria D - Ônibus"
            description="A licença na categoria 'D' autoriza o indivíduo a conduzir veículos empregados no transporte de passageiros, com capacidade para mais de oito assentos"
            modalDescription="A categoria 'D' na autoescola habilita os condutores a operarem veículos utilizados no transporte de passageiros, com capacidade para mais de oito lugares. Isso inclui ônibus, micro-ônibus e vans de grande porte. Para obter a habilitação na categoria 'D', os candidatos devem passar por um treinamento teórico e prático abrangente, focado em técnicas avançadas de direção, segurança viária, manobras específicas e conhecimento aprofundado das leis de trânsito relacionadas ao transporte de passageiros."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/carreta.svg"
            title="Categoria E - Carreta"
            description="A licença na categoria 'D' autoriza o indivíduo a conduzir veículos empregados no transporte de passageiros, com capacidade para mais de oito assentos"
            modalDescription="A categoria 'D' na autoescola habilita os condutores a operarem veículos utilizados no transporte de passageiros, com capacidade para mais de oito lugares. Isso inclui ônibus, micro-ônibus e vans de grande porte. Para obter a habilitação na categoria 'D', os candidatos devem passar por um treinamento teórico e prático abrangente, focado em técnicas avançadas de direção, segurança viária, manobras específicas e conhecimento aprofundado das leis de trânsito relacionadas ao transporte de passageiros."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/cnh.svg"
            title="Renovação da CNH A/B"
            description="A renovação da Carteira Nacional de Habilitação (CNH) pode ser efetuada tanto antes quanto depois do término do prazo de validade. O condutor tem um período de até 30 dias após a expiração da validade para realizar a renovação."
            modalDescription="A renovação da Carteira Nacional de Habilitação (CNH) nas categorias A e B pode ser realizada tanto antes quanto após o término do prazo de validade. Os motoristas têm um prazo adicional de até 30 dias após o vencimento para efetuar a renovação sem incorrer em penalidades. Durante o processo de renovação, os condutores passam por uma avaliação médica e psicológica, além de serem atualizados sobre as normas de trânsito e eventuais mudanças na legislação. Após a conclusão dessas etapas, uma nova CNH é emitida, garantindo que os motoristas estejam aptos a continuar dirigindo com segurança."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/cnh.svg"
            title="Renovação da CNH C/D/E"
            description="A renovação da Carteira Nacional de Habilitação (CNH) pode ser efetuada tanto antes quanto depois do término do prazo de validade. O condutor tem um período de até 30 dias após a expiração da validade para realizar a renovação."
            modalDescription="A renovação da Carteira Nacional de Habilitação (CNH) nas categorias C, D e E é um procedimento fundamental para condutores que operam veículos de grande porte. Assim como nas demais categorias, a renovação pode ser realizada antes ou após o término do prazo de validade, tendo o condutor um período de até 30 dias após o vencimento para efetuar a renovação sem incorrer em penalidades. Durante o processo de renovação, os condutores passam por uma avaliação médica e psicológica, além de serem atualizados sobre as normas de trânsito e eventuais mudanças na legislação aplicável às categorias C, D e E. Após a conclusão dessas etapas, uma nova CNH é emitida, garantindo que os motoristas estejam aptos a continuar conduzindo veículos de grande porte com responsabilidade e segurança."
            onClick={() => {}}
          />
        </div>
        <div className="col-span-1 bg-white shadow-sm">
          <FeatureCard
            imageURl="/cnh.svg"
            title="Curso de Reciclagem"
            description="rata-se de uma medida punitiva imposta pelo Departamento Estadual de Trânsito (Detran) aos motoristas que cometem infrações no tráfego, e é obrigatória para aqueles que têm sua permissão para dirigir suspensa."
            modalDescription="A renovação da Carteira Nacional de Habilitação (CNH) nas categorias C, D e E é um procedimento fundamental para condutores que operam veículos de grande porte. Assim como nas demais categorias, a renovação pode ser realizada antes ou após o término do prazo de validade, tendo o condutor um período de até 30 dias após o vencimento para efetuar a renovação sem incorrer em penalidades. Durante o processo de renovação, os condutores passam por uma avaliação médica e psicológica, além de serem atualizados sobre as normas de trânsito e eventuais mudanças na legislação aplicável às categorias C, D e E. Após a conclusão dessas etapas, uma nova CNH é emitida, garantindo que os motoristas estejam aptos a continuar conduzindo veículos de grande porte com responsabilidade e segurança."
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
