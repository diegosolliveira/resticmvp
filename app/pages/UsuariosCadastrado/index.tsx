"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "../UsuariosCadastrado/style.css";
import { Users } from "@/app/models/user";
import UserTable from "@/app/components/UserTable";

export default function UsuariosCadastrados() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [sortOrder, setSortOrder] = useState(""); // Adicionamos um estado para ordenação
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/usuarios")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários:", error);
      });
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`http://localhost:5000/usuarios/${id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => console.error("Erro ao deletar:", error));
  };

  // Filtragem e ordenação
  const filteredUsers = users
    .filter((user) =>
      `${user.nome} ${user.sobrenome} ${user.email} ${user.tipo}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((user) =>
      filter === "Todos" || filter === "A-Z" || filter === "Z-A"
        ? true
        : user.tipo === filter
    )
    .sort((a, b) => {
      if (sortOrder === "A-Z") return a.nome.localeCompare(b.nome);
      if (sortOrder === "Z-A") return b.nome.localeCompare(a.nome);
      return 0;
    });

  return (
    <div className="container">
      <h1>Usuários Cadastrados</h1>
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
            <option value="Agência">Agência</option>
            <option value="Cliente">Cliente</option>
            <option value="A-Z">Ordenar A-Z</option>
            <option value="Z-A">Ordenar Z-A</option>
          </select>
        </div>
      </div>

      <div className="pagination-container">
        <p>Exibindo {filteredUsers.length} usuários</p>
      </div>

      <div className="table-container">
        <UserTable users={filteredUsers} onDelete={handleDelete} />
      </div>
    </div>
  );
}
