import './Footer.css';
import Interaction from "../interaction/Interaction";


 
 
 function Footer(){
  return(
    <footer>
              <Interaction></Interaction>

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
  )
 }


 export default Footer;