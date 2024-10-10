
import Logo  from "../../../public/Logo.png";
import Image from "next/image";
import Link  from "next/link";
import StyleTopo from "./topo.module.css";

export default function TopoNavigation (){
return(
<div className={StyleTopo.Container_Navigation}>
<Image src={Logo} alt="Logo óticas diniz"/>

<nav className={StyleTopo.Navigation}>
<i className="bx bx-menu" onClick={() => {
document.querySelector("i").classList.toggle(StyleTopo.NewIcon);

let Ul = document.querySelector("ul");
Ul.classList.toggle(StyleTopo.Mudar)
}}></i>
<ul >
<li><Link href="#Home">Home</Link></li>
<li><Link href="#Product">Produtos</Link></li>
<li><Link href="#About">Sobre</Link></li>
<li><Link href="#Contact">Contatos</Link></li>
</ul>
</nav>

</div>
);
}