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
      <div className='linha'></div>
      <div id='about-footer'>
        <div>
          <h5>A Maxmilhas</h5>
          <p>Quem somos</p>
          <p>Blog</p>
          <p>Imprensa</p>
          <p>Trabalhe conosco</p>
          <p>Termos e condições</p>
          <p>Política de privacidade</p>
          <p>Lei de Igualdade Salarial - publicado em 23/09/2024</p>
        </div>
        <div>
          <h5>Atendimento 24h</h5>
          <p>Dúvidas frequentes</p>
          <p>Remarcações/Cancelamentos</p>
          <p>Fale conosco</p>
        </div>
        <div>
          <h5>Forma de pagamento</h5>
          <p>Cartões de crédito</p>
          <p>Transferência via PIX</p>
        </div>
        <div>
          <h5>Redes sociais</h5>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>YouTube</p>
        </div>
      </div>
      <div className='linha'></div>


    </footer>
  )
}


export default Footer;