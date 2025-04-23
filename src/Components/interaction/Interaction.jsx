import './Interaction.css';
import Button from "../button/Button";

function Interaction(){
  return(
    <div id="interaction">
      <div id="download">
        <h3>Já baixou o nosso app?</h3>
        <p>Receba ofertas do seu jeito e descontos exclusivos para você viver viajando.</p>
        <div><p>Google Play</p></div>
        <div><p>App Store</p></div>
      </div>
      <div id="leave-email">
        <h3>Quem deixa o e-mail viaja ao máximo</h3>
        <p>Aproveite nossas promoções e dicas para curtir mais experiências de viagem!</p>
        <div>
          <input type="text" value="Digite seu e-mail" id="" />
          <Button texto="Quero me cadastrar"/>
        </div>
      </div>
    </div>
  )
}

export default Interaction;