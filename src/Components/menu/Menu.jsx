import './Menu.css';
function Menu() {
  return (
    <div id="banner">
      <div id="navigation">
        <img src="/Logo.png" alt="" width="150" height="25" />
        <button id="hidden-menu">
          <img src="menu.png" alt="" width="15" height="15" />
          <svg width="23" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.763 16.91L15.413 16.031C15.236 15.585 14.961 15.185 14.609 14.859L14.545 14.8C13.991 14.286 13.263 14 12.507 14H7.49302C6.73702 14 6.00902 14.286 5.45402 14.799L5.39002 14.859C5.03802 15.185 4.76402 15.585 4.58602 16.031L4.23602 16.91" stroke="currentColor"></path>
            <path d="M12.4749 5.44701C13.8417 6.81385 13.8417 9.02992 12.4749 10.3968C11.108 11.7636 8.89197 11.7636 7.52513 10.3968C6.15829 9.02992 6.15829 6.81385 7.52513 5.44701C8.89197 4.08017 11.108 4.08017 12.4749 5.44701" stroke="currentColor"></path>
            <path d="M16.364 3.63604C19.8787 7.15076 19.8787 12.8492 16.364 16.3639C12.8493 19.8787 7.1508 19.8787 3.6361 16.3639C0.121381 12.8492 0.121381 7.15074 3.6361 3.63604C7.15082 0.12132 12.8493 0.12132 16.364 3.63604"stroke="currentColor"></path>
          </svg>
        </button>
      </div>
      <div id="menu">
        <button>
          <img className="img-menu" src="radar.png" alt="" width="20" height="20" />
          MaxRadar
          <div id="radar">
            <img src="raio1.png" alt="" width="17" height="17" />
            <p>Em alta</p>
          </div>
        </button>
        <button>
          <img className="img-menu" src="aviao.png" alt="" width="20" height="20" />
          Passagens aéreais
        </button>
        <button>
          <img className="img-menu" src="cama.png" alt="" width="20" height="20" />
          Hotéis
        </button>
        <button>
          <img className="img-menu" src="venda.png" alt="" width="20" height="20" />
          Vender milhas
        </button>
        <button>
          <img className="img-menu" src="fogo.png" alt="" width="20" height="20" />
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
  )
}

export default Menu;