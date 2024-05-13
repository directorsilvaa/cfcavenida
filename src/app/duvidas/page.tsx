"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Duvidas() {
  return (
    <main>
      <div className="container h-[80px] lg:h-[50px]">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold w-full max-w-[700px] lg:mt-8 mt-16 mx-auto">
            Perguntas Frequentes
          </h1>
        </div>
      </div>
      <div className="container mt-16 bg-white p-6 rounded-xl shadow">
        <Accordion type="single" collapsible>
          <AccordionItem className="py-4 text-left" value="item-1">
            <AccordionTrigger>
              POSSO TIRAR MINHA HABILITAÇÃO COM MENOS DE 18 ANOS?
            </AccordionTrigger>
            <AccordionContent>
              Não, conforme o Código de Trânsito Brasileiro, para tirar a
              carteira de habilitação, o candidato tem que ser maior de 18 anos,
              saber ler e escrever e possuir documento de identificação ( RG ) e
              CPF.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-2">
            <AccordionTrigger>
              QUANTO TEMPO DEMORA PARA TIRAR A PRIMEIRA HABILITAÇÃO?
            </AccordionTrigger>
            <AccordionContent>
              O prazo estimado é de 60 dias, caso o candidato seja aprovado em
              todos os exames logo nas primeiras tentativas. Mas isto pode
              variar de acordo com a disponobilidade do aluno, agenda de aula
              prática do CFC e agenda de exames do Detran.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-3">
            <AccordionTrigger>
              INICIEI MEU PROCESSO DE 1º HABILITAÇÃO, TENHO QUANTO TEMPO PRA
              TIRAR MINHA CNH?
            </AccordionTrigger>
            <AccordionContent>
              Após a data da abertura, o candidato terá um (1) ano para concluir
              seu processo de habilitação. Se não concluir nesse prazo, o
              candidato poderá abrir um novo serviço e reiniciar o processo de
              habilitação, com possibilidade de aproveitamento de algumas
              etapas, como aulas teóricas e práticas já concluídas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-4">
            <AccordionTrigger>
              EU JÁ SEI DIRIGIR/ PILOTAR, PRECISO FAZER TODAS AS AULAS?
            </AccordionTrigger>
            <AccordionContent>
              Sim, precisará fazer todas as aulas práticas. O Conselho Nacional
              de Trânsito (Contran) exige que todos os candidatos, mesmo aqueles
              já sabem pilotar e dirigir, cumpram a carga horária mínima de
              aulas práticas. No caso, 20 horas/aulas de cada categoria para o
              processo de 1ª habilitação ou 15 horas/ aulas para o processo de
              adição.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-5">
            <AccordionTrigger>
              QUANDO TERMINAR O PRAZO DA CARTEIRA PROVISÓRIA, AGUARDO EM CASA A
              NOVA CARTEIRA?
            </AccordionTrigger>
            <AccordionContent>
              Quando finalizar o prazo de 01 (um) ano de carteira provisória, o
              candidato deverá solicitar a CNH definitiva pelo site
              sacdigital.ba.gov.br ou procurar, presencialmente, a  do
              SAC ou o Detran de sua cidade e apresentar os seguintes
              documentos: CNH provisória, documento de identificação com foto e
              comprovante de residência atualizado, assim como, deverá pagar uma
              taxa para a emissão do documento. Após esses processos, deverá
              aguardar o prazo, em média, de 30 dias para a nova CNH chegar no
              local onde houve o requerimento.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-6">
            <AccordionTrigger>
              QUANTO TEMPO ESPERO PARA DAR INÍCIO AS AULAS PRÁTICAS APÓS O EXAME
              TEÓRICO?
            </AccordionTrigger>
            <AccordionContent>
              Não existe um tempo determinado para dar início as aulas práticas.
              Após liberação do resultado pela DETRAN, o candidato deverá
              comparecer pessoalmente na autoescola para fazer a programação das
              aulas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-7">
            <AccordionTrigger>
              O QUE ACONTECE SE EU REPROVAR EM ALGUM EXAME?
            </AccordionTrigger>
            <AccordionContent>
              Em caso de reprovação no exame teórico ou prático, o candidato
              poderá solicitar a remarcação na autoescola, mediante o pagamento
              da taxa de remarcação. Vale salientar que o candidato terá direito
              as remarcações até finalizar o prazo de validade do laudo. Em
              relação a remarcação do exame médico e psicoteste, as solicitações
              deverão ser feitas na clínica de origem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-8">
            <AccordionTrigger>
              O QUE ACONTECE COM QUEM NÃO FAZ O CURSO DE RECICLAGEM?
            </AccordionTrigger>
            <AccordionContent>
              Segundo o parágrafo 2° do artigo nº 261 do CTB: “§ 2º Quando
              ocorrer a suspensão do direito de dirigir, a Carteira Nacional de
              Habilitação será devolvida a seu titular imediatamente após
              cumprida a penalidade e o curso de reciclagem.” Dessa forma, o
              motorista que não fizer ou não passar no curso não estará apto a
              recuperar a sua CNH. Ou seja, o seu direito de dirigir continuará
              suspenso. Caso a pessoa não faça o curso de reciclagem e continue
              dirigindo, poderá perder a sua carteira de motorista de modo
              definitivo.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-9">
            <AccordionTrigger>
              TIREI A CNH EM UM ESTADO E AGORA ESTOU MORANDO EM OUTRO. COMO FAÇO
              PARA RENOVAR A HABILITAÇÃO?
            </AccordionTrigger>
            <AccordionContent>
              O primeiro passo é procurar o Detran de seu novo endereço, levar
              os documentos originais e as cópias da CNH, do RG, do CPF, junto
              com o comprovante da nova residência. Lá você irá solicitar o
              serviço de transferência. É importante lembrar que será cobrada
              uma taxa por essa alteração
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-10">
            <AccordionTrigger>
              EXISTE IDADE MÁXIMA PARA PODER DIRIGIR?
            </AccordionTrigger>
            <AccordionContent>
              Para tirar a CNH, as pessoas precisam ter a idade mínima de 18
              anos, mas não existe idade máxima. Independente de quantos anos
              você tem, mesmo já idoso, poderá continuar dirigindo, porém, a
              condição para renovação muda.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-11">
            <AccordionTrigger>
              POSSO ESCOLHER A CLÍNICA PARA FAZER OS EXAMES DE SAÚDE?
            </AccordionTrigger>
            <AccordionContent>
              Não, o sistema do DETRAN usa o método de sorteio para evitar
              “fraudes” na realização dos exames, então quando abrimos seu
              processo ele é automaticamente vinculado a uma clínica, e não tem
              a opção de alterá-la.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-12">
            <AccordionTrigger>
              EU USO ÓCULOS, MAS MEU GRAU NÃO É MUITO ALTO, POSSO FAZER O EXAME
              DE SAÚDE SEM ELE?
            </AccordionTrigger>
            <AccordionContent>
              Pode. Você tem o direito de tentar fazer o exame de vista sem os
              óculos, mas caso você não consiga enxergar, precisa estar com os
              óculos para tentar fazer com o mesmo. Se não levar os óculos e não
              conseguir ler o que o médico pede, você terá que pagar uma nova
              taxa para refazer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-13">
            <AccordionTrigger>
              PARA RENOVAR A CNH PRECISA FAZER EXAME PSICOTESTE?
            </AccordionTrigger>
            <AccordionContent>
              Cidadãos que exerçam atividades remuneradas que envolvam
              transporte, ou seja, motoristas de ônibus, taxistas, motoristas de
              Uber, motoristas de caminhão etc. precisam, sim, realizar o exame
              psicotécnico e também o toxicológico.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="py-4 text-left" value="item-14">
            <AccordionTrigger>
              O EXAME TOXICOLÓGICO É OBRIGATÓRIO FAZER EM TODOS OS PROCESSOS DA
              RENOVAÇÃO DA CNH?
            </AccordionTrigger>
            <AccordionContent>
              Nos serviços de renovação de exames C, D e E, independentemente do
              exercício de atividade remunerada ao veículo, passa a ser exigida
              a realização de exame toxicológico de larga janela de detecção.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
