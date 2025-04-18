import './Card.css'
// import "../../media-query.css";


// eslint-disable-next-line react/prop-types
function Card({ image, title, subtitle }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <h4>{subtitle}</h4>
    </div>
  );
}

export default Card;