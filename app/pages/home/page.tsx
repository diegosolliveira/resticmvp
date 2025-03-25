"use client"

import ButtonHome from "../../components/ButtonHome";
import DestinationCard from "../../components/Cards/DestinationCard";
import InformationCard from "../../components/Cards/InformationCard";
import PromotionCard from "../../components/Cards/PromotionCard";
import FooterHome from "../../components/Footer";
import HeaderHome from "../../components/HeaderHome";
import "./style.css";
import { useQuery, gql } from "@apollo/client";

const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      firstName
      lastName
      email
      document
      role
    }
  }
`;

const informationCards = [
  {
    iconHeader: <i className="bi bi-calendar"></i>,
    title: "Suas próximas viagens",
    icon: <i className="bi bi-geo-alt-fill"></i>,
    mainText: "Rio de Janeiro",
    subText: "15-20 Maio, 2025",
    linkText: "Ver todas suas viagens",
  },
  {
    iconHeader: <i className="bi bi-star-fill"></i>,
    title: "Seus Favoritos",
    icon: <i className="bi bi-building-fill-check"></i>,
    mainText: "Hotel Beira Mar",
    subText: "Fortaleza",
    linkText: "Ver Favoritos",
  },
  {
    iconHeader: <i className="bi bi-search"></i>,
    title: "Buscas recentes",
    icon: <i className="bi bi-search"></i>,
    mainText: "Gramado",
    subText: "2 adultos, 3 noites",
    linkText: "Ver últimas buscas",
  },
];

const promotions = [
  {
    img: "https://jpimg.com.br/uploads/2024/01/aniversario-de-sao-paulo-10-curiosidades-sobre-a-cidade.jpg",
    title: "São Paulo",
    text: "Até 25% OFF em hospedagens",
  },
  {
    img: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/o-que-fazer-no-rj.jpg",
    title: "Rio de Janeiro",
    text: "Até 30% OFF em hospedagens",
  },
  {
    img: "https://f1ciaimobiliaria.com.br/wp-content/uploads/2023/10/qual-melhor-lugar-para-morar-em-florianopolis.jpg",
    title: "Florianópolis",
    text: "Até 35% OFF em hospedagens",
  },
  {
    img: "https://www.maladeaventuras.com/wp-content/uploads/2020/05/vista-aerea-salvador-2.jpg",
    title: "Salvador",
    text: "Até 40% OFF em hospedagens",
  },
];

const destinations = [
  {
    img: "https://www.maladeaventuras.com/wp-content/uploads/2020/05/vista-aerea-salvador-2.jpg",
    rate: "4,8",
    title: "Salvador",
    text: "Diárias a partir de",
    price: "R$ 250,00",
  },
  {
    img: "https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/06/o-que-fazer-no-rj.jpg",
    rate: "4,7",
    title: "Rio de Janeiro",
    text: "Diárias a partir de",
    price: "R$ 220,00",
  },
  {
    img: "https://f1ciaimobiliaria.com.br/wp-content/uploads/2023/10/qual-melhor-lugar-para-morar-em-florianopolis.jpg",
    rate: "4,6",
    title: "Florianópolis",
    text: "Diárias a partir de",
    price: "R$ 280,00",
  },
  {
    img: "https://xtay.com.br/wp-content/uploads/2025/01/curitiba_521657045-1200x720-1-1024x614.jpg",
    rate: "4,9",
    title: "Curitiba",
    text: "Diárias a partir de",
    price: "R$ 180,00",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/0a/98/8b/foto-area.jpg",
    rate: "4,7",
    title: "Maceió",
    text: "Diárias a partir de",
    price: "R$ 230,00",
  },
  {
    img: "https://www.passagenspromo.com.br/blog/wp-content/uploads/2019/02/o-que-fazer-em-bh-1.jpg",
    rate: "4,5",
    title: "Belo Horizonte",
    text: "Diárias a partir de",
    price: "R$ 200,00",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg/800px-Fortaleza%2C_Brazil_%284%29_%28cropped%29.jpg",
    rate: "4,8",
    title: "Fortaleza",
    text: "Diárias a partir de",
    price: "R$ 260,00",
  },
  {
    img: "https://blog.staycharlie.com.br/wp-content/uploads/2022/11/porto-alegre-scaled.jpg",
    rate: "4,6",
    title: "Porto Alegre",
    text: "Diárias a partir de",
    price: "R$ 190,00",
  },
];

export default function Home() {
  const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  if (!token) {
    window.location.href = "/";
    return null;
  }

  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    context: {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  if (loading) return <p>Carregando...</p>;
  if (error) {
    console.error("Erro ao carregar usuário:", error);
    return <p>Erro ao carregar os dados</p>;
  }

  if (!data?.me) {
    return <p>Usuário não encontrado</p>;
  }

  const loggedUser = data.me;

  return (
    <div className="home-container">
      <HeaderHome />
      <main className="home">
        <section className="section-card">
          <h2 className="card-section-title">
            Olá, {loggedUser.firstName}! Continue explorando
          </h2>
          <section className="card-box">
            {informationCards.map((card, index) => (
              <InformationCard
                key={index}
                iconHeader={card.iconHeader}
                title={card.title}
                icon={card.icon}
                mainText={card.mainText}
                subText={card.subText}
                linkText={card.linkText}
              />
            ))}
          </section>
        </section>
        <section className="section-card">
          <h2 className="card-section-title">Ofertas Imperdíveis</h2>
          <section className="card-box">
            {promotions.map((promo, index) => (
              <PromotionCard
                key={index}
                img={promo.img}
                title={promo.title}
                text={promo.text}
              />
            ))}
          </section>
        </section>
        <section className="section-card">
          <h2 className="card-section-title">Destino Populares</h2>
          <section className="card-box">
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                img={dest.img}
                rate={dest.rate}
                title={dest.title}
                text={dest.text}
                price={dest.price}
              />
            ))}
          </section>
          <div className="section-card-button">
            <ButtonHome title="Ver mais" classBtn="btn-secondary" />
          </div>
        </section>
      </main>
      <FooterHome />
    </div>
  );
}
