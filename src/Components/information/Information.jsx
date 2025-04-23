import "./Information.css";
import Button from "../button/Button";
import { Settings2, Ticket, Wallet } from 'lucide-react';


function Informtion(){
  return(
    <div id="information">
      <div id="infor-first-part">
        <p>Dúvidas sobre a sua viagem?</p>
        <h4>Estamos aqui para te ajudar</h4>
      </div>
      <div id="infor-second-part">
        <div>
          <Settings2 color="#8693a6" />
          <h5>Precisa remarcar ou cancelar a viagem?</h5>
          <h6>Confira as regras da companhia para o seu voo e faça sua solicitação online.</h6>
          <a className="botao-link" href="https://www.maxmilhas.com.br/login">Conferir regras da tarifa</a>
        </div>
        <div>
          <Ticket color="#8693a6"/>
          <h5>Dúvidas sobre créditos e reembolso?</h5>
          <h6>Consulte a devolução de reembolsos e créditos de passagens canceladas.</h6>
          <a className="botao-link" href="https://www.maxmilhas.com.br/login">Conferir reembolso</a>
        </div>
        <div>
          <Wallet color="#8693a6"/>
          <h5>Quer consultar sua reserva de hotel</h5>
          <h6>Acompanhe todos os detalhes da sua reserva de hotel, pousada ou resort.</h6>
          <a className="botao-link" href="https://www.maxmilhas.com.br/login">Conferir reservas</a>
        </div>
      </div>
      <div className="line"></div>
      <div id="infor-third-part">
        <h4>Ainda com dúvidas?</h4>
        <p>Nossa Central de Ajuda está pronta para atender você!</p>
        <Button texto="Acessar Central de Ajuda" />
      </div>
    </div>
  )
}

export default Informtion;