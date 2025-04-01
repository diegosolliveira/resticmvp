"use client"

import { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from "@/app/service/queries";
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
  const [firstName, setNome] = useState("");
  const [lastName, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [document, setCpf] = useState("");
  const [role, setTipo] = useState("");

  // Mutação para atualizar o usuário
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (user) {
      setNome(user.firstName);
      setSobrenome(user.lastName);
      setEmail(user.email);
      setCpf(user.document);
      setTipo(user.role);
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await updateUser({
        variables: {
          id: user?.id,
          document,
          email,
          firstName,
          lastName,
          role,
        },
      });
      
      onClose();
    } catch (err) {
      console.error("Erro ao salvar usuário:", err);
    }
  };

  if (!user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Editar Usuário</h2>

        <div className="box-input-modal">
          <InputModal
            label="Nome"
            value={firstName}
            onChange={(e) => setNome(e.target.value)}
          />
          <InputModal
            label="Sobrenome"
            value={lastName}
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
            value={document}
            onChange={(e) => setCpf(e.target.value)}
          />

          <SelectModal
            label="Tipo de conta"
            value={role}
            onChange={(e) => setTipo(e.target.value)}
            options={[
              { value: "agency", label: "Agência" },
              { value: "client", label: "Cliente" },
            ]}
          />
        </div>

        <div className="box-button-modal">
          <ButtonModal label="Fechar" className="close-button" onClick={onClose} />
          <ButtonModal
            label={loading ? "Salvando..." : "Salvar"}
            className="save-button"
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
