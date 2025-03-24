"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLogin from "../../components/ButtonLogar";
import InputCadastro from "../../components/InputCadastro";
import "./styles.css";

export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = () => {
        router.push("/pages/cadastro");
    };

    return (
        <div className="container-login">
            <div className="container-left"></div>

            <div className="container-right">
                <div className="form-container">
                    <h1>Seu próximo destino começa aqui!</h1>
                    <span className="span-description">Preencha seus dados para começar.</span>

                    <InputCadastro
                        label="Email"
                        name="email"
                        type="email"
                        classInput="input-password"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputCadastro
                        label="Senha"
                        name="senha"
                        type="password"
                        classInput="input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className="form-container2">
                        <InputCadastro
                            label="Mantenha-me conectado"
                            name="Mantenha-me conectado"
                            type="checkbox"
                            classInput="input-checkbox"
                            value=""
                        />
                        <a href="">Esqueceu a senha?</a>
                    </div>

                    <ButtonLogin
                        name="Entrar"
                        classCadastrar="btn-login"
                        onClick={handleLogin}
                    />

                    <span className="link-cadastrar">
                        Não tem uma conta? <a href="/pages/cadastro">Cadastre-se</a>
                    </span>
                </div>
            </div>
        </div>
    );
};
