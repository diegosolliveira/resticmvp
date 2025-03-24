import { useState } from "react";
import { Users } from "@/app/models/user";
import "../UserTable/style.css";
import UserModal from "@/app/components/EditUserModal/index";

interface UserTableProps {
  users: Users[];
  onDelete: (id: string) => void;
}

export default function UserTable({ users, onDelete }: UserTableProps) {
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);

  return (
    <>
      {/* Modal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
            <th>CPF/CNPJ</th>
            <th>Tipo de conta</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.sobrenome}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>
                  <span className={`badge ${user.tipo.toLowerCase()}`}>
                    {user.tipo}
                  </span>
                </td>
                <td className="line-button">
                  <button
                    className="delete-button"
                    onClick={() => onDelete(user.id)}
                  >
                    <i className="bi bi-trash3"></i>
                  </button>
                  <button
                    className="edit-button"
                    onClick={() => setSelectedUser(user)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center", padding: "10px" }}>
                Nenhum usuário encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
