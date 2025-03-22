"use client";

import { useState } from "react";
import { ButtonLogin } from "../../components/ButtonLogar";
import { InputCadastro } from "../../components/InputCadastro";
import "./styles.css";

export function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    const validateForm = () => {
        let isValid = true;
        setErrorEmail("");
        setErrorPassword("");

        if (!email.includes("@")) {
            setErrorEmail("Digite um email válido.");
            isValid = false;
        }
        if (password.length < 6) {
            setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
            isValid = false;
        }

        return isValid;
    };

    const handleLogin = () => {
        validateForm();
        console.log("Botão clicado!");{
            console.log("Enviando dados...");
        }
    };

    return (
        <div className="container-login">
            <div className="container-left">

            </div>

            <div className="container-right">
                <div className="form-container">
                    <h1>Seu próximo destino começa aqui.</h1>
                    <span className="span-description">Preencha seus dados para começar.</span>

                    <InputCadastro
                        name="Email"
                        type="email"
                        classInput="input-password"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {errorEmail && <span className="error">{errorEmail}</span>}

                    <InputCadastro
                        name="Senha"
                        type="password"
                        classInput="input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {errorPassword && <span className="error">{errorPassword}</span>}

                    <div className="form-container2">
                        <InputCadastro name="Mantenha-me conectado" type="checkbox" classInput="input-checkbox"></InputCadastro>
                        <a href="">Esqueceu a senha?</a>
                    </div>

                    <ButtonLogin
                        name="Entrar"
                        classCadastrar="btn-login"
                        onClick={handleLogin}
                    />

                    <span className="link-cadastrar">
                        Não tem uma conta? <a href="">Cadastre-se</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
