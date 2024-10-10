

import Styles_Principal from "./style.module.css";
import OticaBackground from "../../../public/Oticas_Background.png";
import Image from "next/image";
import Link from "next/link";



const Apresentation = () => {
return(
<div className={Styles_Principal.Container_Image_And_Div}>
<div id="Home">
<h2>Aproveite nossos produtos</h2>
<h1>20% de desconto e ainda Damos auxílio para pessoas mais carentes</h1>
<h3>Siga nossas redes sociais</h3>
<nav>
<Link href="#" target="_blank"><i className="bx bxl-instagram"></i></Link>
<Link href="#" target="_blank"><i className="bx bxl-youtube"></i></Link>
<Link href="#" target="_blank"><i className="bx bxl-facebook"></i></Link>

<section className={Styles_Principal.unic_anchor}>
<i className="bx bx-basket"></i>
</section> 

</nav>

</div>
<Image src={OticaBackground} alt="Background_Da_Ótica"/>

</div>
);   
}

export default Apresentation;