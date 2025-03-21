import { ButtonLogin } from "../../components/ButtonLogar";
import { InputCadastro } from "../../components/InputCadastro";
import "./styles.css";

export function LoginView() {
    return (
        <div className="container-login">
            <div className="container-left">

            </div>

            <div className="container-right">
                <div className="form-container">
                    <h1>Seu próximo destino começa aqui.</h1>
                    <span className="span-description">Preencha seus dados para começar.</span>

                    <InputCadastro name="Email" type="email" classInput="input-password"></InputCadastro>

                    <InputCadastro name="Senha" type="password" classInput="input-password"></InputCadastro>

                    <div className="form-container2">
                        <InputCadastro name="Mantenha-me conectado" type="checkbox" classInput="input-checkbox"></InputCadastro>
                        <a href="">Esqueceu a senha?</a>
                    </div>

                    <ButtonLogin name="Entrar" classCadastrar="btn-login" ></ButtonLogin>

                    <span className="link-cadastrar">Não tem uma conta? <a href="">Cadastre-se</a></span>
                </div>
            </div>
        </div>
    );
}

