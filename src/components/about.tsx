"use client";
import Image from "next/image";

export function About() {
  return (
    <div className="mt-28 container grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="col-span-1 order-1 md:order-2">
        <Image src={"/unidade.png"} width={800} height={400} alt="Fundo" />
      </div>
      <div className="col-span-1 order-2 md:order-1">
        <h2 className="text-4xl text-black font-bold">Sobre nós</h2>
        <p className="text-md mt-4 bg-white p-6 shadow rounded-xl">
          Auto Escola Avenida: O Caminho para uma Condução Segura e Confiante
          <br />
          <br />
          Desde 2010, a Auto Escola Avenida tem sido o principal ponto de partida para aspirantes a motoristas que buscam dominar as estradas com segurança e confiança. Localizada estrategicamente na movimentada Avenida Principal, nossa escola de direção tem sido a escolha confiável para inúmeros alunos que buscam não apenas obter suas carteiras de motorista, mas também adquirir as habilidades essenciais para se tornarem condutores responsáveis.
          <br /> <br />
          Nossa equipe altamente capacitada e experiente está comprometida em oferecer uma educação de qualidade, tanto teórica quanto prática. Desde aulas detalhadas sobre regras de trânsito até instruções precisas no volante, nossos instrutores estão aqui para orientar nossos alunos em cada passo do caminho, garantindo que estejam preparados para enfrentar os desafios das estradas com confiança.
          <br /> <br />
          Na Auto Escola Avenida, não apenas preparamos nossos alunos para passar nos exames de direção, mas também os capacitamos para se tornarem motoristas seguros e conscientes. Nossa abordagem centrada no aluno garante que cada indivíduo receba a atenção personalizada de que precisa para prosperar. Com uma taxa de aprovação acima da média, nossa reputação fala por si mesma - estamos aqui para ajudá-lo a alcançar o sucesso na estrada.
          <br /> <br />
          Junte-se a nós na Auto Escola Avenida e dê o primeiro passo rumo a uma jornada de direção segura e confiante.
        </p>
      </div>
    </div>
  );
}
