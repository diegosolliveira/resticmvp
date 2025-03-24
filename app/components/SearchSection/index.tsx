import "../SearchSection/style.css";
import SearchDestiny from '../SearchSection/SearchDestiny/index';

export default function SearchSection() {
  return (
    <div className="search-section">
      <div className="search-image">
        <img
          src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/o-que-fazer-no-rj.jpg"
          alt="logo"
          className="search-background-img"
        />
      </div>
      <div className="search-action">
        <div className="search-text">
          <h2>Encontre sua próxima aventura</h2>
          <h4>
            Os melhores preços em hospedagens, voos e pacotes para suas férias
            perfeitas!
          </h4>
        </div>
        <div className="search-search">
          <SearchDestiny/>
        </div>
      </div>
    </div>
  );
}
