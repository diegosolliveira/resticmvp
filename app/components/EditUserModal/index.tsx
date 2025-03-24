import { Users } from "@/app/models/user";

interface UserModalProps {
  user: Users | null;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Editar Usuário</h2>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nome:</strong> {user.nome}</p>
        <p><strong>Sobrenome:</strong> {user.sobrenome}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>CPF/CNPJ:</strong> {user.cpf}</p>
        <p><strong>Tipo de conta:</strong> {user.tipo}</p>

        <button className="close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
