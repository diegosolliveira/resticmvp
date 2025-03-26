"use client";

import { useQuery, gql } from "@apollo/client";
import CardTitle from "../../components/CardTitle";
import Profile from "../../components/Profile";
import HeaderHome from "../../components/HeaderHome";
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

export default function ProfileClient() {
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
            <div className="container-pcontrole profileclient">
                <div className="container-dashboard-config">
                    <div className="dashboard ">
                        <Profile
                            id={loggedUser.id}
                            firstName={`${loggedUser.firstName}`}
                            lastName={`${loggedUser.lastName}`}
                            role={loggedUser.role}
                            email={loggedUser.email}
                            document={loggedUser.document}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
