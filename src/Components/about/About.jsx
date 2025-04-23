import './About.css';
import { UserSearch, Earth, TrendingUp } from 'lucide-react';

function About(){
  return(
    <div id="about">
      <div id='imgFamilia'>      
        <img src="familia2.webp" alt="" />
      </div>
      <div>
        <div id="about-first-part">
          <p>Vantagens</p>
          <h4>Sabe por que a Maxmilhas é o máximo?</h4>
        </div>
        <div id="about-second-part">
          <div>
            <UserSearch color="#64748b"/>
            <h5>Pesquisa fácil</h5>
            <h6>Você diz para onde quer ir, informa a data da viagem e ainda pode filtrar suas preferências de voos e hotéis.</h6>
          </div>
          <div>
            <Earth color="#64748b"/>
            <h5>Mais inteligência</h5>
            <h6>Com soluções inteligentes e personalizadas, combinamos voos com os melhores preços e possibilitamos descontos extras em hotéis.</h6>
          </div>
          <div>
            <TrendingUp color="#64748b"/>
            <h5>Comparação e compra</h5>
            <h6>Compare tarifas de voos e quartos de hotéis de maneira prática, escolha a melhor opção e compre sem precisar ter milhas.</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;