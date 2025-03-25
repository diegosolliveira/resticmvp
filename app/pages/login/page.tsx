"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonLogin from "../../components/ButtonLogar";
import InputCadastro from "../../components/InputCadastro";
import "./styles.css";
import { LOGIN } from "@/app/service/queries";
import { useMutation } from "@apollo/client";

type ResponseLogin = {
    login: {
        accessToken: string,
        refreshToken: string,
        user: {
            role: string,
        }
    }
}

export default function LoginView() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const router = useRouter();

    // Usando useMutation para o login
    const [loginMutation, { loading }] = useMutation(LOGIN, {
        onCompleted: (data: ResponseLogin) => {
            // Salvar tokens no localStorage
            localStorage.setItem("accessToken", data.login.accessToken);
            localStorage.setItem("refreshToken", data.login.refreshToken);

            // Verificar a role e redirecionar
            const role = data.login.user.role;

            console.log(role)

            if (role === 'client') {
                router.push("/pages/home");
            } else if (role === 'agency' || role === 'admin') {
                router.push("/pages/painelcontrole");
            } else {
                setFormError("Não foi possível identificar o tipo de usuário.");
            }
        },
        onError: (error) => {
            console.error("Erro no login:", error);
            setFormError(error.message || "Erro ao fazer login. Verifique suas credenciais.");
        }
    });

    const handleLogin = async () => {
        // Validação básica
        if (!email.trim() || !password.trim()) {
            setFormError("Por favor, preencha todos os campos.");
            return;
        }

        try {
            // Executar a mutation de login
            await loginMutation({
                variables: {
                    email,
                    password
                }
            });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    // Função vazia para inputs que não precisam de mudança
    const emptyChange = () => { };

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

                    {formError && <p className="error-message">{formError}</p>}

                    <div className="form-container2">
                        <InputCadastro
                            label="Mantenha-me conectado"
                            name="Mantenha-me conectado"
                            type="checkbox"
                            classInput="input-checkbox"
                            value=""
                            onChange={emptyChange}
                        />
                        <a href="">Esqueceu a senha?</a>
                    </div>

                    <ButtonLogin
                        name={loading ? "Entrando..." : "Entrar"}
                        classCadastrar="btn-login"
                        onClick={handleLogin}
                        disabled={loading}
                    />

                    <span className="link-cadastrar">
                        Não tem uma conta? <a href="/pages/cadastro">Cadastre-se</a>
                    </span>
                </div>
            </div>
        </div>
    );
}
