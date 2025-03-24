import "../InformationCard/style.css";
import { ReactNode } from "react";

interface InformationCardProps {
  iconHeader: ReactNode;
  title: string;
  icon: ReactNode;
  mainText: string;
  subText: string;
  linkText: string;
}

const InformationCard: React.FC<InformationCardProps> = ({
  iconHeader,
  title,
  icon,
  mainText,
  subText,
  linkText,
}) => {
  return (
    <div className="card-info">
      <div className="card-header">
        {iconHeader}
        <h3>{title}</h3>
      </div>

      <div className="card-content">
        <div className="card-main-content">
          <div className="card-main-icon">{icon}</div>

          <div className="card-main-text">
            <p className="card-text-destaq">{mainText}</p>
            <p className="card-text-sub">{subText}</p>
          </div>
        </div>

        <a href="#" className="view-button">
          Ver
        </a>
      </div>

      <hr />

      <a href="#" className="view-all">
        {linkText}
      </a>
    </div>
  );
};

export default InformationCard;
