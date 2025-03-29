import "../ExperienceCard/style.css"

interface ExperienceProps {
    imageUrl: string;
    title: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
  }
  
  export default function ExperienceCard({
    imageUrl,
    title,
    description,
    price,
    rating,
    reviews,
  }: ExperienceProps) {
    return (
      <div className="experience-card">
        <div className="experience-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="experience-content">
          <div className="experience-details">
            <h2 className="experience-title">{title}</h2>
            <p className="experience-description">{description}</p>
          </div>
          <div className="experience-info">
            <p className="experience-price">R$ {price}</p>
            <p className="experience-rating">
            <i className="bi bi-star-fill"></i> {rating} ({reviews})
            </p>
          </div>
        </div>
        <div className="experience-action">
          <button className="experience-button">RESERVAR AGORA</button>
        </div>
      </div>
    );
  }
  