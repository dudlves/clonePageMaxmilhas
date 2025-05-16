import Card from "../card/Card";

import './TravelCards.css'

function TravelCards(){
  return(
    <div id="Travel-cards-section">
      <p>Viaje mais, viva as férias ao máximo</p>
      <h2>Ofertas para você viajar mais</h2>
      <div id="cards">
        <Card
          image="card1.webp"
          title="Bora embarcar nesse desafio?"
          subtitle="Faça parte da lista VIP e ganhe até 50% OFF"
        />
        <Card
          image="card2.webp"
          title="Receba ofertas personalizadas"
          subtitle="Sua viagem fica mais fácil com o MaxRadar"
        />
        <Card
          image="card3.webp"
          title="Dê asas aos sonhos"
          subtitle="Proporcione viagens inesquecíveis para quem você ama com MaxPresente"
        />
        <Card
          image="card4.webp"
          title="Partiu Férias?"
          subtitle="Diárias a partir de R$ 190,00"
        />
        <Card
          image="card5.webp"
          title="São Paulo"
          subtitle="A partir de R$ 144,01"
        />
        <Card
          image="card6.webp"
          title="Miami"
          subtitle="A partir de R$ 1390,65"
        />
        <Card
          image="card7.webp"
          title="Rio de Janeiro"
          subtitle="A partir de R$ 194,29"
        />
        <Card
          image="card8.webp"
          title="Punta Cana"
          subtitle="A partir de R$ 1426,74"
        />
      </div>
    </div>
  )
}


export default TravelCards;