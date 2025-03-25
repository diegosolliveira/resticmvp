"use client";

import { useQuery, gql } from "@apollo/client";
import CardTitle from "../../components/CardTitle";
import Profile from "../../components/Profile";
import Sidebar from "../../components/Menu";
import "./styles.css";

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

export default function Configuracao() {
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

    if (!token) {
        window.location.href = "/login";
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
        <div className="container-pcontrole">
            <Sidebar />

            <div className="container-dashboard-config">
                <CardTitle name="Configuração" />

                <div className="dashboard">
                    <Profile
                        name={`${loggedUser.firstName} ${loggedUser.lastName}`}
                        email={loggedUser.email}
                        cpf={loggedUser.document}
                    />
                </div>
            </div>
        </div>
    );
}
