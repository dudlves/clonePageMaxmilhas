import "./index.css";
import "./media-query.css";
import Button from "./Components/Button";

function App() {
  return (
    <>
      <div id="body">
        <div id="banner">
          <div id="navigation">
            <img src="/Logo.png" alt="" width="150" height="25" />
            <button id="hidden-menu">
              <img src="menu.png" alt="" width="15" height="15" />
              <svg
                width="23"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.763 16.91L15.413 16.031C15.236 15.585 14.961 15.185 14.609 14.859L14.545 14.8C13.991 14.286 13.263 14 12.507 14H7.49302C6.73702 14 6.00902 14.286 5.45402 14.799L5.39002 14.859C5.03802 15.185 4.76402 15.585 4.58602 16.031L4.23602 16.91"
                  stroke="currentColor"
                ></path>
                <path
                  d="M12.4749 5.44701C13.8417 6.81385 13.8417 9.02992 12.4749 10.3968C11.108 11.7636 8.89197 11.7636 7.52513 10.3968C6.15829 9.02992 6.15829 6.81385 7.52513 5.44701C8.89197 4.08017 11.108 4.08017 12.4749 5.44701"
                  stroke="currentColor"
                ></path>
                <path
                  d="M16.364 3.63604C19.8787 7.15076 19.8787 12.8492 16.364 16.3639C12.8493 19.8787 7.1508 19.8787 3.6361 16.3639C0.121381 12.8492 0.121381 7.15074 3.6361 3.63604C7.15082 0.12132 12.8493 0.12132 16.364 3.63604"
                  stroke="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div id="menu" >
            <button>
              <img
                className="img-menu"
                src="radar.png"
                alt=""
                width="20"
                height="20"
              />
              MaxRadar
              <div id="radar">
                <img src="raio1.png" alt="" width="17" height="17" />
                <p>Em alta</p>
              </div>
            </button>
            <button>
              <img
                className="img-menu"
                src="aviao.png"
                alt=""
                width="20"
                height="20"
              />
              Passagens aéreais
            </button>
            <button>
              <img
                className="img-menu"
                src="cama.png"
                alt=""
                width="20"
                height="20"
              />
              Hotéis
            </button>
            <button>
              <img
                className="img-menu"
                src="venda.png"
                alt=""
                width="20"
                height="20"
              />
              Vender milhas
            </button>
            <button>
              <img
                className="img-menu"
                src="fogo.png"
                alt=""
                width="20"
                height="20"
              />
              MaxOfertas
            </button>
            <button>
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
              MaxPresente
            </button>
          </div>
        </div>
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
        <div id="Travel-cards-section">
          <h3>Viaje mais, viva as férias ao máximo</h3>
          <h2>Ofertas para você viajar mais</h2>
          <div id="cards">
            <div className="card">
              <img src="card1.webp" alt="" />
              <h5>Bora embarcar nesse desafio?</h5>
              <h4>Faça parte da lista VIP e ganhe até 50% OFF</h4>
            </div>
            <div className="card">
              <img src="card2.webp" alt="" />
              <h5>Receba ofertas personalizadas</h5>
              <h4>Sua viagem fica mais fácil com o MaxRadar</h4>
            </div>
            <div className="card">
              <img src="card3.webp" alt="" />
              <h5>Dê asas aos sonhos</h5>
              <h4>
                Proporcione viagens inesquecíveis para quem você ama com
                MaxPresente
              </h4>
            </div>
            <div className="card">
              <img src="card4.webp" alt="" />
              <h5>Partiu Férias?</h5>
              <h4>Diárias a partir de R$ 190,00</h4>
            </div>
            <div className="card">
              <img src="card5.webp" alt="" />
              <h5>São Paulo</h5>
              <h4>A partir de R$ 144,01</h4>
            </div>
            <div className="card">
              <img src="card6.webp" alt="" />
              <h5>Miami</h5>
              <h4>A partir de R$ 1390,65</h4>
            </div>
            <div className="card">
              <img src="card7.webp" alt="" />
              <h5>Rio de Janeiro</h5>
              <h4>A partir de R$ 194,29</h4>
            </div>
            <div className="card">
              <img src="card8.webp" alt="" />
              <h5>Punta Cana</h5>
              <h4>A partir de R$ 1426,74</h4>
            </div>
          </div>
        </div>
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
        <div id="information">
          <div id="infor-first-part">
            <p>Dúvidas sobre a sua viagem?</p>
            <h4>Estamos aqui para te ajudar</h4>
          </div>
          <div id="infor-second-part">
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.0017 9.33057V16" stroke="currentColor"></path>
                <rect
                  x="17.6674"
                  y="16"
                  width="4.66861"
                  height="4.66861"
                  rx="1"
                  stroke="currentColor"
                ></rect>
                <rect
                  x="9.66394"
                  y="11.3313"
                  width="4.66861"
                  height="4.66861"
                  rx="1"
                  stroke="currentColor"
                ></rect>
                <path d="M20.0017 20.6686V22.6694" stroke="currentColor"></path>
                <path d="M11.9982 22.6694V16" stroke="currentColor"></path>
                <path d="M11.9982 11.3314V9.33057" stroke="currentColor"></path>
                <rect
                  x="3.995"
                  y="3.995"
                  width="24.01"
                  height="24.01"
                  rx="5"
                  stroke="currentColor"
                ></rect>
              </svg>
              <h5>Precisa remarcar ou cancelar a viagem?</h5>
              <h6>
                Confira as regras da companhia para o seu voo e faça sua
                solicitação online.
              </h6>
              <p>Conferir regras da tarifa</p>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.3334 20.3146V24C29.3334 24.736 28.736 25.3333 28 25.3333H4.00002C3.26402 25.3333 2.66669 24.736 2.66669 24V20.3146C2.66669 20.1213 2.77602 19.9453 2.94802 19.8586V19.8586C4.41069 19.128 5.33335 17.6346 5.33335 16V16C5.33335 14.3653 4.40935 12.872 2.94802 12.1413V12.1413C2.77602 12.0546 2.66669 11.8786 2.66669 11.6853V7.99996C2.66669 7.26396 3.26402 6.66663 4.00002 6.66663H28C28.736 6.66663 29.3334 7.26396 29.3334 7.99996V11.6853C29.3334 11.8786 29.224 12.0546 29.052 12.1413L28.9934 12.172C27.564 12.9133 26.6667 14.3893 26.6667 16V16C26.6667 17.6333 27.5894 19.128 29.0507 19.8586H29.052C29.224 19.9453 29.3334 20.1213 29.3334 20.3146Z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M12.5734 19.4267L19.24 12.76"
                  stroke="currentColor"
                ></path>
                <path
                  d="M19.332 19C19.148 19 18.9987 19.1493 19 19.3333C19 19.5173 19.1494 19.6666 19.3334 19.6666C19.5174 19.6666 19.6667 19.5173 19.6667 19.3333C19.6667 19.1493 19.5174 19 19.332 19"
                  stroke="currentColor"
                ></path>
                <path
                  d="M12.6653 12.3333C12.4813 12.3333 12.332 12.4827 12.3333 12.6667C12.3333 12.8507 12.4827 13 12.6667 13C12.8507 13 13 12.8507 13 12.6667C13 12.4827 12.8507 12.3333 12.6653 12.3333"
                  stroke="currentColor"
                ></path>
              </svg>
              <h5>Dúvidas sobre créditos e reembolso?</h5>
              <h6>
                Consulte a devolução de reembolsos e créditos de passagens
                canceladas.
              </h6>
              <p>Conferir reembolso</p>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6697 9.26818L21.5153 5.06229C20.6658 3.92959 19.0794 3.65785 17.9013 4.44323L10.5703 9.33055"
                  stroke="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.6707 15.333H28.0054C28.7421 15.333 29.3393 15.9302 29.3393 16.6669V20.6686C29.3393 21.4052 28.7421 22.0025 28.0054 22.0025H24.6707C22.8289 22.0025 21.3359 20.5094 21.3359 18.6677V18.6677C21.3359 16.826 22.8289 15.333 24.6707 15.333V15.333Z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M16 28.0049H24.6703C26.512 28.0049 28.005 26.5119 28.005 24.6702V22.0024"
                  stroke="currentColor"
                ></path>
                <ellipse
                  cx="7.99571"
                  cy="24.0033"
                  rx="5.33556"
                  ry="5.33556"
                  stroke="currentColor"
                ></ellipse>
                <path
                  d="M9.79129 22.9469L7.55035 25.1865L6.20312 23.8433"
                  stroke="currentColor"
                ></path>
                <path
                  d="M28.0022 15.3331V12.6653C28.0022 10.8236 26.5092 9.33057 24.6675 9.33057H7.32691C5.48519 9.33057 3.99219 10.8236 3.99219 12.6653V16"
                  stroke="currentColor"
                ></path>
              </svg>
              <h5>Quer consultar sua reserva de hotel</h5>
              <h6>
                Acompanhe todos os detalhes da sua reserva de hotel, pousada ou
                resort.
              </h6>
              <p>Conferir reservas</p>
            </div>
          </div>
          <div className="line"></div>
          <div id="infor-third-part">
            <h4>Ainda com dúvidas?</h4>
            <p>Nossa Central de Ajuda está pronta para atender você!</p>
            <Button texto="Acessar Central de Ajuda" />
          </div>
        </div>
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
        <div id="about">
          <img src="familia.jpg" alt="" />
          <div>
            <div id="about-first-part">
              <p>Vantagens</p>
              <h4>Sabe por que a Maxmilhas é o máximo?</h4>
            </div>
            <div id="about-second-part">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6667 20.1771H9.33333C6.38781 20.1771 4 22.5649 4 25.5105V26.8438"
                    stroke="currentColor"
                  ></path>
                  <circle
                    cx="14.6654"
                    cy="9.51046"
                    r="5.33333"
                    stroke="currentColor"
                  ></circle>
                  <circle
                    cx="23.2603"
                    cy="22.2512"
                    r="4.74075"
                    stroke="currentColor"
                  ></circle>
                  <path
                    d="M19.9057 25.6034L17.332 28.1771"
                    stroke="currentColor"
                  ></path>
                </svg>
                <h5>Pesquisa fácil</h5>
                <h6>
                  Você diz para onde quer ir, informa a data da viagem e ainda
                  pode filtrar suas preferências de voos e hotéis.
                </h6>
              </div>
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.9474 28.7518L19.2861 20.2505C19.0048 19.3531 19.9234 18.5505 20.7754 18.9478L28.7128 22.6518C29.6541 23.0905 29.4954 24.4745 28.4794 24.6891L25.2114 25.3811L23.9981 28.7905C23.6501 29.7691 22.2568 29.7425 21.9474 28.7518Z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M26.6693 14.8438H21.1066C19.0239 14.8438 17.3359 13.1558 17.3359 11.0731C17.3359 10.0731 17.7333 9.11313 18.4399 8.40646L21.7119 5.13446"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M6.27671 23.4278L8.64604 19.8745C9.07538 19.2305 9.79671 18.8438 10.57 18.8438C11.446 18.8438 12.246 18.3491 12.638 17.5651L12.8154 17.2105C13.1407 16.5598 13.1407 15.7931 12.8154 15.1425L11.3047 12.1225C10.914 11.3385 10.1127 10.8438 9.23671 10.8438H3.35938"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M14.668 2.8438C8.0253 2.8438 2.66797 8.20113 2.66797 14.8438C2.66797 21.4865 8.0253 26.8438 14.668 26.8438"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M26.668 14.8438C26.668 8.20113 21.3106 2.8438 14.668 2.8438"
                    stroke="currentColor"
                  ></path>
                </svg>
                <h5>Mais inteligência</h5>
                <h6>
                  Com soluções inteligentes e personalizadas, combinamos voos
                  com os melhores preços e possibilitamos descontos extras em
                  hotéis.
                </h6>
              </div>
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 28.1771H8C5.79067 28.1771 4 26.3865 4 24.1771V8.17712C4 5.96779 5.79067 4.17712 8 4.17712H24C26.2093 4.17712 28 5.96779 28 8.17712V24.1771C28 26.3865 26.2093 28.1771 24 28.1771Z"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M18.25 13.1771H21.9993V16.9265"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M22 13.1771L16.7493 18.4278L13.7493 15.4278L10 19.1771"
                    stroke="currentColor"
                  ></path>
                </svg>
                <h5>Comparação e compra</h5>
                <h6>
                  Compare tarifas de voos e quartos de hotéis de maneira
                  prática, escolha a melhor opção e compre sem precisar ter
                  milhas.
                </h6>
              </div>
            </div>
          </div>
        </div>
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
