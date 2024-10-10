import Card1 from '../../../public/Card_1.png';
import Card2 from "../../../public/Card_2.png";

import About from "./Style_Sobre.module.css";

import Image from "next/image";

export default function Sobre()
{
return(
<div className={About.Container_About}>

<div className={About.About_Soon} id="About">
<h2 className={About.Heading_Unic}>Faça parte da nossa História</h2>

<div className={About.About_Cards}>

<div>
<Image src={Card1} alt="Img_Óticas_Diniz"/>
</div>

<div className={About.Cards_Text}>

<h2>Quem Somos?</h2>
<p>Criada no dia 26 de Janeiro de 1992 em São Luís Maranhão, Foi Realizado por um Homem de Coração muito bom chamado Arione Diniz, as Óticas Diniz foi se expandindo muito ao longo dos anos essa empresa não foca somente em vender óculos mas também, em salvar vidas e dar ao cliente o prazer e o conforto de enxergar novamente, recebemos histórias emocionantes de nossos clientes, são mais 100.000 vendas por ano, Venha fazer parte da nossa história também!!</p>
</div> 

<div className={About.Cards_Text}>
<h2>Conhecida em todo o Brasil</h2>
<p>Nós somos a maior e melhor empresa de Óticas do Brasil, você pode encontrar lojas em todas as cidades possíveis recebendo o auxílio necessário, fazemos o  seu óculos de acordo com o laudo do oftalmologista, também fazemos recomendações dos melhores oftalmos para fazer seu exame e se não resolver seu problema nós fazemos a devolução do seu dinheiro.</p>
</div> 

<div>
<Image src={Card2} alt="Img_Óticas_Diniz"/>
</div> 
</div>

</div>

</div> 
);

}