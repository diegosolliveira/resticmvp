"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { gql, useLazyQuery } from "@apollo/client";
import ButtonLogin from "../../components/ButtonLogar";
import InputCadastro from "../../components/InputCadastro";
import client from "../../lib/apolloClient";
import "./styles.css";

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
      password
    }
  }
`;

export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    // Configurando a query
    const [loginUser, { loading }] = useLazyQuery(LOGIN_QUERY, {
        client,
        fetchPolicy: "network-only",
    });

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Preencha todos os campos!");
            return;
        }

        try {
            const { data } = await loginUser({
                variables: { email, password },
            });

            if (data?.login) {
                router.push("/pages/painelcontrole");
            } else {
                setError("Credenciais inválidas!");
            }
        } catch (err) {
            console.error("Erro no login:", err);
            setError("Erro ao conectar ao servidor!");
        }
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

                    {error && <p className="error-message">{error}</p>}

                    <InputCadastro
                        label="Senha"
                        name="senha"
                        type="password"
                        classInput="input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

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
                        name={loading ? "Verificando..." : "Entrar"}
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
}
