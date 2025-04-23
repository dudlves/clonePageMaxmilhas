import "./index.css";
import Button from "./Components/button/Button";
import Menu from "./Components/menu/Menu";
import TravelCards from "./Components/travel-cards/TravelCards";
import Informtion from "./Components/information/Information";
import About from "./Components/about/About";

import "./media-query.css";


function App() {
  return (
    <>
      <div id="body">
        <Menu></Menu>
        <div id="Banner-principal">
          <h2>Viva sua viagem ao máximo</h2>
          <div>
            <img src="location.png" alt="" width="25" height="25" />
            <p>Qual sua origem?</p>
          </div>
          <div>
            <img src="mala.png" alt="" width="25" height="25" />
            <p>Vai viajar para onde?</p>
          </div>
          <img src="main_banner_home_dezembro.webp" alt="" />
        </div>
        <TravelCards></TravelCards>
        <div id="advertisement">
          <div id="advertisement1">
            <img src="advertisement.jpg" alt="" />
            <div>
              <h5>Que tal transformar milhas em dinheiro na conta?</h5>
              <h6>Simule uma venda com a gente e veja todos os ganhos.</h6>
            </div>
          </div>
          <div id="alert">
            <img src="alerta.png" alt="" width="30" height="30" />
            <p>Regulamento Desafio Dia Mundial das Milhas 2025</p>
          </div>
        </div>
        <Informtion></Informtion>
        <div id="experience">
          <h4>Mais experiência para você</h4>
          <div id="first-experience">
            <div className="card-experience">
              <img src="cama.png" alt="" width="20" height="20" />
              <h5>Hotel</h5>
            </div>
            <div className="card-experience">
              <img src="radar.png" alt="" width="20" height="20" />
              <h5>MaxRadar</h5>
            </div>
            <div className="card-experience">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6667 6.66699H3.33333C2.87333 6.66699 2.5 7.04033 2.5 7.50033V9.16699C2.5 9.62699 2.87333 10.0003 3.33333 10.0003H16.6667C17.1267 10.0003 17.5 9.62699 17.5 9.16699V7.50033C17.5 7.04033 17.1267 6.66699 16.6667 6.66699Z"
                  stroke="currentColor"
                ></path>
                <path d="M9.99998 17.5003V6.66699" stroke="currentColor"></path>
                <path
                  d="M13.08 5.50977C12.1817 6.44477 10.7675 6.66643 10.0825 6.66643"
                  stroke="currentColor"
                ></path>
                <path
                  d="M10.0825 6.6666C10.0825 6.6666 9.67085 4.06993 10.6833 3.0166"
                  stroke="currentColor"
                ></path>
                <path
                  d="M13.08 5.50958C13.7417 4.82125 13.7417 3.70458 13.08 3.01625C12.4184 2.32792 11.3459 2.32792 10.6842 3.01625"
                  stroke="currentColor"
                ></path>
                <path
                  d="M6.92004 5.50977C7.81838 6.44477 9.23254 6.66643 9.91754 6.66643"
                  stroke="currentColor"
                ></path>
                <path
                  d="M9.9175 6.6666C9.9175 6.6666 10.3292 4.06993 9.31667 3.0166"
                  stroke="currentColor"
                ></path>
                <path
                  d="M6.92002 5.50958C6.25835 4.82125 6.25835 3.70458 6.92002 3.01625C7.58168 2.32792 8.65418 2.32792 9.31585 3.01625"
                  stroke="currentColor"
                ></path>
                <path
                  d="M15.8334 10V16.6667C15.8334 17.1267 15.46 17.5 15 17.5H5.00002C4.54002 17.5 4.16669 17.1267 4.16669 16.6667V10"
                  stroke="currentColor"
                ></path>
              </svg>
              <h5>MaxPresente</h5>
            </div>
          </div>
        </div>
        <About></About>
        <div id="interaction">
          <div id="download">
            <h3>Já baixou o nosso app?</h3>
            <p>
              Receba ofertas do seu jeito e descontos exclusivos para você viver
              viajando.
            </p>
            <div><p>Google Play</p></div>
            <div><p>App Store</p></div>
          </div>

          <div id="leave-email">
            <h3>Quem deixa o e-mail viaja ao máximo</h3>
            <p>
              Aproveite nossas promoções e dicas para curtir mais experiências
              de viagem!
            </p>
            <div>
            <input type="text" value="Digite seu e-mail" id="" />
            <Button texto="Quero me cadastrar"/>
            </div>
          </div>
          <footer>
            <div>
              <div>
              <img src="icons8-facebook-52.png" alt="" width="25" height="25"/>
              <img src="icons8-instagram-64.png" alt="" width="25" height="25"/>
              <img src="icons8-linkedin-52.png" alt="" width="25" height="25"/>
              <img src="icons8-twitter-bird-52.png" alt="" width="25" height="25"/>
              <img src="icons8-youtube-logo-64.png" alt="" width="25" height="25"/>
            </div>
            <p>Rua Matias Cardoso, 169, 11º andar - Santo Agostinho, Belo Horizonte - MG, 30170-050</p>
          
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
