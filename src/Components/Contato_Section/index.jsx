import BlackFriday from "../../../public/BlackFriday.jpg"
import Image from "next/image";
import Contact_Style from "./style_Contact.module.css";

export default function Contact()
{
return(

<div className={Contact_Style.Container_Contact}>

<div className={Contact_Style.SubContainer_Contact} id="Contact">

<div className={Contact_Style.Container_Img}>
<Image src={BlackFriday} alt="BlackFriday"/>
</div> 

<form action="https://www.oticasdiniz.com.br/" method="post">

<section>
<h2>Fale Conosco</h2>
<div>
<label htmlFor="Name" className={Contact_Style.Style_Label}>Nome</label>
<input type="text" id="Name" placeholder="Digite o seu nome" required/>
</div>

<div>
<label htmlFor="Phone" className={Contact_Style.Style_Label}>Telefone</label>
<input type="phone" id="Phone" placeholder="(00)0000-0000" required/>

</div>

<div>
<label htmlFor="E-mail" className={Contact_Style.Style_Label}>Email</label>
<input type="mailto" id="E-mail" placeholder="Digite o seu e-mail" required/>
</div>

<div className={Contact_Style.Unic_Container}>
<label >Orientação Sexual</label>

<div>
<label htmlFor="SexoM">Masculino</label>
<input type="radio" id="SexoM" name="sexo[]" value="Masculino" required/>
</div>

<div>
<label htmlFor="SexoF">Feminino</label>
<input type="radio" id="SexoF" name="sexo[]" value="Feminino" required/>
</div> 

</div>

<input type="submit"  value="Enviar" className={Contact_Style.Button_Contact}/>
</section>


</form>
</div>

</div>
);
}