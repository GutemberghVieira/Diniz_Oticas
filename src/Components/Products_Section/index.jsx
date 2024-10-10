
import card1 from "../../../public/photo_product_1.png";
import card2 from "../../../public/photo_product_2.png";
import card3 from "../../../public/photo_product_3.png";
import card4 from "../../../public/photo_product_4.png";
import card5 from "../../../public/photo_product_5.png";
import card6 from "../../../public/photo_product_6.png";

import styleCards from "./Style_Cards.module.css"

import Image from "next/image";

function returnValorFormated()
{
const Preco = ["710","150","350","250","220","168"]
let newValor = [];
Preco.map((valor) => {
const valorFormated = `${"R$".padStart(0,2)} ${valor.replace(valor[2],`${valor[2]},00`)}`;
newValor.push(valorFormated);
});
return newValor;
}

const Produtos = () => {

return(
<div className={styleCards.Container_Cards}>

<div className={styleCards.SubContainer} id="Product">
<h2 className={styleCards.Heading_Solo}>Veja nossos produtos</h2>

<div className={styleCards.Container_Soon_Cards}>

<div className={styleCards.Container_True_Cards}>
<h2>Óculos escuro</h2>
<p>Exótico excelente para ir a praia</p>
<Image src={card1} alt="Óculos_Escuro"/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[0]}</span>

<select name="Quantidade_Produto">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section> 
</div>

<div className={styleCards.Container_True_Cards}>
<h2>Óculos Preto</h2>
<p>Ninguém consegue enxergar suas reações oculares Com esse óculos</p>
<Image src={card2} alt="Óculos escuro discreto"/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[1]}</span>

<select name="Quantidade_Produto" >
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section>
</div>

<div className={styleCards.Container_True_Cards}>
<h2>Óculos com estilo Oncinha</h2>
<p>Com esse óculos você vai chamar atenção por onde passa</p>
<Image src={card3} alt="Óculos com a estética de oncinha"/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[2]}</span>

<select name="Quantidade_Produto">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section>
</div>

<div className={styleCards.Container_True_Cards}>
<h2>Óculos de Grau</h2>
<p>Bom para enxergar qualquer coisa que esteja longe</p>
<Image src={card4} alt="Óculos de Sol"/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[3]}</span>

<select name="Quantidade_Produto">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section>

</div> 

<div className={styleCards.Container_True_Cards}>
<h2>Óculos de Escritório</h2>
<p>Este óculos é muito bom para ir trabalhar</p> 
<Image src={card5} alt="Óculos_De_Escritório"/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[4]}</span>

<select name="Quantidade_Produto">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section>

</div>

<div className={styleCards.Container_True_Cards}>
<h2>Óculos Exótico</h2>
<p>Bom para ir em festas e para usar no dia dia</p>
<Image src={card6} alt="Óculos exóticos "/>

<section>
<span>Preço</span>
<span>{returnValorFormated()[5]}</span>

<select name="Quantidade_Produto">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
<button type="button">Comprar</button>
</section> 
</div>

</div>

</div> 

<div className={styleCards.Container_Register}>

<div className={styleCards.SubContainer_Register}>
<h2>Solicite um Orçamento</h2>
<h3>Nós entraremos em contato</h3>
<span>O e-mail será enviado para Óticas_Diniz.Oculos@gmail.com</span>
<form method="post">

<div>
<label htmlFor="Nome">Nome</label>
<input name="text" placeholder="Digite o seu nome" id="Nome" required/>
</div>

<div>
<label htmlFor="e-mail">E-mail</label>
<input type="text" id="e-mail" placeholder="Digite seu e-mail" required/>
</div>

<div>
<label htmlFor="Password">Senha</label>
<input type="Password" id="Password" placeholder="Digite sua senha" required/>
</div>
<button type="submit">Enviar</button>
<div>

</div>

</form>

</div>

</div>

</div>
);

}

export default Produtos;