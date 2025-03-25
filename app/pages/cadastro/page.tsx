"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLogin from "../../components/ButtonLogar";
import InputCadastro from "../../components/InputCadastro";
import "./styles.css";
import { CREATE_USER } from "@/app/service/queries";
import { useMutation } from "@apollo/client";

export default function CadastroView() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        document: "",
        role: "",
        email: "",
        password: "",
    });

    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "confirmPassword") {
            setConfirmPassword(value);
        } else if (name === "document") {
            setFormData(prevState => ({
                ...prevState,
                [name]: formatDocument(value)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const formatDocument = (value: string) => {
        const cleaned = value.replace(/\D/g, "");

        if (cleaned.length <= 11) {
            return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
        } else if (cleaned.length <= 14) {
            return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        } else {
            return cleaned.slice(0, 14).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }
    };

    const [createUser, { loading }] = useMutation(CREATE_USER);

    const handleSubmit = async () => {
        if (formData.password !== confirmPassword) {
            setPasswordError("As senhas não coincidem. Verifique e tente novamente.");
            return;
        }

        setPasswordError("");

        try {
            await createUser({
                variables: {
                    document: formData.document,
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    role: formData.role,
                    password: formData.password
                }
            });

            alert("Cadastro realizado com sucesso!");
            router.push("/");
        } catch (err) {
            console.error("Erro ao cadastrar usuário:", err);
            alert("Erro ao cadastrar. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="container-login">
            <div className="container-left"></div>

            <div className="container-right">
                <div className="form-container">
                    <h1>Cadastre-se</h1>
                    <span className="span-description">Preencha seus dados para começar.</span>

                    <div className="form-container-cadastro">
                        <InputCadastro
                            label="Nome"
                            name="firstName"
                            type="text"
                            classInput="input-password"
                            value={formData.firstName}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="Sobrenome"
                            name="lastName"
                            type="text"
                            classInput="input-password"
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="CPF/CNPJ"
                            name="document"
                            type="text"
                            classInput="input-password"
                            value={formData.document}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="Tipo de Conta"
                            name="role"
                            type="select"
                            classInput="input-select"
                            options={[
                                { value: "", label: "Selecione" },
                                { value: "agency", label: "Agência" },
                                { value: "client", label: "Cliente" }
                            ]}
                            value={formData.role}
                            onChange={handleChange}
                        />
                    </div>

                    <InputCadastro
                        label="Email"
                        name="email"
                        type="email"
                        classInput="input-password"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <InputCadastro
                        label="Senha"
                        name="password"
                        type="password"
                        classInput="input-password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <InputCadastro
                        label="Confirmar Senha"
                        name="confirmPassword"
                        type="password"
                        classInput="input-password"
                        value={confirmPassword}
                        onChange={handleChange}
                    />

                    {passwordError && <span className="error-message">{passwordError}</span>}

                    <div className="form-btn">
                        <a href="/" className="btn-cancelar">Cancelar</a>

                        <ButtonLogin
                            name={loading ? "Cadastrando..." : "Cadastrar"}
                            classCadastrar="btn-login"
                            onClick={handleSubmit}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
