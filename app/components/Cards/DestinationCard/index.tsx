import "../DestinationCard/style.css";

interface props {
  img: string;
  rate: string;
  title: string;
  text: string;
  price: string;
}

export default function DestinationCard({
  img,
  rate,
  title,
  text,
  price,
}: props) {
  return (
    <div className="card-destination">
      <div className="card-destination-image">
        <div className="card-destinatio-img">
          <img src={img} alt="destino da oferta" className="img-destination" />
        </div>
        <div className="card-destination-rate">
          <p className="card-rate-text">
            <i className="bi bi-star-fill"></i> {rate}
          </p>
        </div>
      </div>
      <div className="card-destination-content">
        <p className="card-destination-title">{title}</p>
        <p className="card-destination-text">{text}</p>
        <p className="card-destination-price">{price}</p>
      </div>
    </div>
  );
}
