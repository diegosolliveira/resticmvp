import ButtonHome from "../../ButtonHome/index";
import "../SearchDestiny/style.css";

export default function SearchDestiny() {
  return (
    <div className="search-destiny-container">
      <div className="search-destiny-options">
        <button className="btn-search-destiny btn-search-active">Hospedagem</button>
        <button className="btn-search-destiny">Voos</button>
        <button className="btn-search-destiny">Pacotes</button>
        
        <button className="btn-search-destiny">Experiências</button>
    
      </div>

      <div className="search-destiny-box">
        <div className="input-search-icon">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Para onde você vai?" disabled/>
        </div>
        <div className="input-search-icon">
          <i className="bi bi-people-fill"></i>
          <input type="text" placeholder="Check-in / Check-out" disabled/>
        </div>
        <div className="input-search-icon">
          <i className="bi bi-calendar-date-fill"></i>
          <input type="text" placeholder="dd / mm / aaaa" disabled/>
        </div>
      </div>

      <div className="button-box">
        <ButtonHome classBtn="btn-primary" title="Buscar" />
      </div>
    </div>
  );
}
