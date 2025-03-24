import { useState, useEffect } from "react";
import { Users } from "@/app/models/user";
import InputModal from "../InputModal";
import SelectModal from "../SelectModal";
import "../EditUserModal/style.css";
import ButtonModal from "../ButtonModal";

interface UserModalProps {
  user: Users | null;
  onClose: () => void;
}

export default function UserModal({ user, onClose }: UserModalProps) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [tipo, setTipo] = useState("");

  // Atualiza os valores sempre que o usuário muda
  useEffect(() => {
    if (user) {
      setNome(user.nome);
      setSobrenome(user.sobrenome);
      setEmail(user.email);
      setCpf(user.cpf);
      setTipo(user.tipo);
    }
  }, [user]);

  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Editar Usuário</h2>
        {/* <p>
          <strong>ID:</strong> {user.id}
        </p> */}

        <div className="box-input-modal">
          <InputModal
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <InputModal
            label="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>

        <InputModal
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="box-input-modal">
          <InputModal
            label="CPF/CNPJ"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <SelectModal
            label="Tipo de conta"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            options={[
              { value: "", label: "Selecione" },
              { value: "agencia", label: "Agência" },
              { value: "cliente", label: "Cliente" },
            ]}
          />
        </div>

        <div className="box-button-modal">
          <ButtonModal label="Fechar" className="close-button"  onClick={onClose}/>

          <ButtonModal label="Salvar" className="save-button"  onClick={onClose}/>
        </div>
      </div>
    </div>
  );
}
