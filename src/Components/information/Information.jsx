import "./Information.css";
import Button from "../button/Button";



function Informtion(){
  return(
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
  )
}

export default Informtion;