
"use client";

import "../HeaderHome/style.css";
import Logo from "@/public/logo-header.svg";
import SearchSection from "../SearchSection/index";
import Image from "next/image";
import { useState } from "react";
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

export default function HeaderHome() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const loggedUser = data.me;

  return (
    <header className="header-container">
      <div className="header">
        <div className="container-header">
          <div className="header-logo">
            {/* <Image src={Logo} height={32} width={120} alt="logo" /> */}
          </div>

          <div className="header-actions">
            <div className="header-options">
              <span className="currency">Moeda: BRL</span>
              <span className="language">Português</span>
            </div>

            <div className="profile" onClick={toggleMenu}>
              <span className="profile-name">{loggedUser.firstName}</span>
              <div className="profile-avatar">J</div>
            </div>
          </div>
        </div>

        {/* Menu lateral */}
        <div className={`sideBar ${menuOpen ? "open" : "closed"}`}>
          <nav className="header-nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/pages/home" className="nav-link">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Hospedagem
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Voos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pacotes
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Experiências
                </a>
              </li>
              <li className="nav-item">
                <a href="/pages/profileclient" className="nav-link">
                  Minha Conta
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={handleLogout}>
                  Sair
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <SearchSection />
    </header>
  );
}
