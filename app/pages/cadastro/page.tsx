"use client";

import { useState } from "react";
import ButtonLogin from "../../components/ButtonLogar";
import InputCadastro from "../../components/InputCadastro";
import "./styles.css";

export default function CadastroView() {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        cpfCnpj: "",
        tipoConta: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log("Dados do Formulário:", formData);
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
                            name="nome"
                            type="text"
                            classInput="input-password"
                            value={formData.nome}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="Sobrenome"
                            name="sobrenome"
                            type="text"
                            classInput="input-password"
                            value={formData.sobrenome}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="CPF/CNPJ"
                            name="cpfCnpj"
                            type="text"
                            classInput="input-password"
                            value={formData.cpfCnpj}
                            onChange={handleChange}
                        />

                        <InputCadastro
                            label="Tipo de Conta"
                            name="tipoConta"
                            type="select"
                            classInput="input-select"
                            options={[
                                { value: "", label: "Selecione" },
                                { value: "agencia", label: "Agência" },
                                { value: "cliente", label: "Cliente" }
                            ]}
                            value={formData.tipoConta}
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
                        name="senha"
                        type="password"
                        classInput="input-password"
                        value={formData.senha}
                        onChange={handleChange}
                    />

                    <InputCadastro
                        label="Confirmar Senha"
                        name="confirmarSenha"
                        type="password"
                        classInput="input-password"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                    />

                    <div className="form-btn">
                        <a href="/" className="btn-cancelar">Cancelar</a>

                        <ButtonLogin
                            name="Cadastrar"
                            classCadastrar="btn-login"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

