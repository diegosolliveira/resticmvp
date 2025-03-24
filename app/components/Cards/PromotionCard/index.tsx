
import "../PromotionCard/style.css"

interface props {
    img: string;
    title: string;
    text: string;
  }

export default function PromotionCard({ img, title, text }: props) {
  return (
    <div className="card-promo">
      <div className="card-promo-img">
        <img src={img} alt="destino da oferta" className="img-promo" />
      </div>
      <div className="card-promo-content">
        <p className="card-promo-title">{title}</p>
        <p className="card-promo-text">{text}</p>
      </div>
    </div>
  );
}
