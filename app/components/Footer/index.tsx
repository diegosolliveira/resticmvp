import "../Footer/style.css";

export default function FooterHome() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="title-footer">JustTravel</h4>
          <p>
            Sua plataforma completa para viagens incríveis com os melhores
            preços.
          </p>
          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="title-footer">Destino</h4>
          <ul>
            <li>
              <a href="#">Praias</a>
            </li>
            <li>
              <a href="#">Montanhas</a>
            </li>
            <li>
              <a href="#">Cidades Históricas</a>
            </li>
            <li>
              <a href="#">Internacionais</a>
            </li>
            <li>
              <a href="#">Resorts</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="title-footer">Serviços</h4>
          <ul>
            <li>
              <a href="#">Hospedagens</a>
            </li>
            <li>
              <a href="#">Passagens Aéreas</a>
            </li>
            <li>
              <a href="#">Pacotes</a>
            </li>
            <li>
              <a href="#">Seguro Viagem</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="title-footer">Suporte</h4>
          <ul>
            <li>
              <a href="#">Central de Ajuda</a>
            </li>
            <li>
              <a href="#">Política de Cancelamento</a>
            </li>
            <li>
              <a href="#">Reembolsos</a>
            </li>
            <li>
              <a href="#">Termos e Condições</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 JustTravel. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
