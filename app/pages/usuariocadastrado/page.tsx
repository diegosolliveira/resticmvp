"use client";

import { useState } from "react";
import "./style.css";
import Sidebar from "../../components/Menu"
import CardTitle from "../../components/CardTitle"
import UserTable from "@/app/components/UserTable";
import { GET_USER_LIST, DELETE_USER } from "@/app/service/queries";
import { useQuery, useMutation } from "@apollo/client";

type ResponseUser = {
  users: {
    document: string,
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    role: string
  }[]
}

type DeleteUserResponse = {
  deleteUser: {
    message: string;
  }
}

export default function UsuariosCadastrados() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("");
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // Query para listar usuários
  const { data, loading: loadingUsers, refetch } = useQuery<ResponseUser>(GET_USER_LIST);

  // Mutation para deletar usuário
  const [deleteUser, { loading: loadingDelete }] = useMutation<DeleteUserResponse>(DELETE_USER, {
    onCompleted: (data) => {
      if (data.deleteUser.message) {
        // Atualiza a lista após deletar com sucesso
        refetch();
      } else {
        setDeleteError(data.deleteUser.message || "Erro ao deletar usuário");
      }
    },
    onError: (error) => {
      console.error("Erro ao deletar usuário:", error);
      setDeleteError(error.message || "Erro ao deletar usuário");
    }
  });

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        setDeleteError(null);
        await deleteUser({
          variables: { id }
        });
      } catch (error) {
        console.error("Erro ao executar deleção:", error);
      }
    }
  };

  // Filtragem e ordenação
  const filteredUsers = data?.users
    .filter((user) =>
      `${user.firstName} ${user.lastName} ${user.email} ${user.role} ${user.document}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((user) =>
      filter === "Todos" || filter === "A-Z" || filter === "Z-A"
        ? true
        : user.role === filter
    )
    .sort((a, b) => {
      if (sortOrder === "A-Z") return a.firstName.localeCompare(b.firstName);
      if (sortOrder === "Z-A") return b.firstName.localeCompare(a.firstName);
      return 0;
    });

  return (
    <div className="container-pcontrole">
      <Sidebar></Sidebar>

      <div className="container-dashboard-puser">

        <CardTitle name="Usuários Cadastrados"></CardTitle>

        <div className="filter-section">
          <div className="search-box">
            <input
              type="text"
              placeholder="Buscar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="bi bi-search"></i>
          </div>

          <div className="search-filter">
            <select
              className="filter-select"
              value={filter}
              onChange={(e) => {
                const value = e.target.value;
                setFilter(value);
                if (value === "A-Z" || value === "Z-A") {
                  setSortOrder(value);
                } else {
                  setSortOrder("");
                }
              }}
            >
              <option value="Todos">Todos</option>
              <option value="agency">Agência</option>
              <option value="client">Cliente</option>
              <option value="A-Z">Ordenar A-Z</option>
              <option value="Z-A">Ordenar Z-A</option>
            </select>
          </div>
        </div>

        {deleteError && (
          <div className="error-message" style={{ color: 'red', margin: '10px 0' }}>
            {deleteError}
          </div>
        )}

        <div className="pagination-container">
          <p>
            {loadingUsers
              ? "Carregando usuários..."
              : `Exibindo ${filteredUsers?.length || 0} usuários`
            }
          </p>
        </div>

        <div className="table-container">
          <UserTable
            users={filteredUsers || []}
            onDelete={loadingDelete ? () => { } : handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
