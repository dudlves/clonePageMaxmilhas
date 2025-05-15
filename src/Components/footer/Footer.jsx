import './Footer.css';
import Interaction from "../interaction/Interaction";


 
 
function Footer(){
  return(
    <footer>
      <Interaction></Interaction>
      <div id='footer-menu'>
        <p>Destinos, Passagens e Milhas</p>
        <p>Belo Horizonte</p>
        <p>São Paulo</p>
        <p>Rio de Janeiro</p>
        <p>Salvador</p>
        <p>Fortaleza</p>
        <p>Feriados</p>
        <p>Promoção</p>
        <p id='invisible-menu'>Mais Opções</p>
      </div>

    </footer>
  )
}


export default Footer;