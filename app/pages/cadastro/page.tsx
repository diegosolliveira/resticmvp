"use client";

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
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [createUser, { loading }] = useMutation(CREATE_USER);

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

        setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
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

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateCPF_CNPJ = (document: string) => {
        const cleaned = document.replace(/\D/g, "");
        return cleaned.length === 11 || cleaned.length === 14;
    };

    const validateForm = () => {
        let newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "Nome é obrigatório.";
        if (!formData.lastName.trim()) newErrors.lastName = "Sobrenome é obrigatório.";
        if (!formData.document.trim()) {
            newErrors.document = "CPF/CNPJ é obrigatório.";
        } else if (!validateCPF_CNPJ(formData.document)) {
            newErrors.document = "CPF/CNPJ inválido.";
        }
        if (!formData.role) newErrors.role = "Selecione um tipo de conta.";
        if (!formData.email.trim()) {
            newErrors.email = "E-mail é obrigatório.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "E-mail inválido.";
        }
        if (!formData.password) newErrors.password = "Senha é obrigatória.";
        if (!confirmPassword) newErrors.confirmPassword = "Confirme sua senha.";
        if (formData.password !== confirmPassword) {
            newErrors.confirmPassword = "As senhas não coincidem.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            await createUser({
                variables: {
                    document: formData.document,
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    role: formData.role,
                    password: formData.password,
                },
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
                    <div className="div-title">
                        <h1>Cadastre-se</h1>
                        <span className="span-description">Preencha seus dados para começar.</span>
                    </div>

                    <div className="form-container-cadastro">
                        <InputCadastro
                            label="Nome"
                            name="firstName"
                            type="text"
                            classInput="input-password"
                            value={formData.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />

                        <InputCadastro
                            label="Sobrenome"
                            name="lastName"
                            type="text"
                            classInput="input-password"
                            value={formData.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />

                        <InputCadastro
                            label="CPF/CNPJ"
                            name="document"
                            type="text"
                            classInput="input-password"
                            value={formData.document}
                            onChange={handleChange}
                            error={errors.document}
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
                            error={errors.role}
                        />
                    </div>

                    <InputCadastro
                        label="Email"
                        name="email"
                        type="email"
                        classInput="input-password"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                    />

                    <InputCadastro
                        label="Senha"
                        name="password"
                        type="password"
                        classInput="input-password"
                        value={formData.password}
                        onChange={handleChange}
                        error={errors.password}
                    />

                    <InputCadastro
                        label="Confirmar Senha"
                        name="confirmPassword"
                        type="password"
                        classInput="input-password"
                        value={confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />

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
