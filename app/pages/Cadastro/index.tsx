import { ButtonLogin } from "../../components/ButtonLogar";
import { InputCadastro } from "../../components/InputCadastro";
import "./styles.css";

export function CadastroView() {

    return (
        <div className="container-login">
            <div className="container-left">

            </div>

            <div className="container-right">
                <div className="form-container">
                    <h1>Cadastre-se</h1>
                    <span className="span-description">Preencha seus dados para começar.</span>

                    <div className="form-container-cadastro">
                        <InputCadastro name="Nome" type="name" classInput="input-password"></InputCadastro>

                        <InputCadastro name="Sobrenome" type="name" classInput="input-password"></InputCadastro>

                        <InputCadastro name="CPF/CNPJ" type="number" classInput="input-password"></InputCadastro>

                        <InputCadastro name="Tipo de Conta" type="select" classInput="input-select" options={[
                            { value: "", label: "Selecione"},
                            { value: "agencia", label: "Agência" },
                            { value: "cliente", label: "Cliente" }
                        ]}></InputCadastro>
                    </div>


                    <InputCadastro name="Email" type="email" classInput="input-password"></InputCadastro>

                    <InputCadastro name="Senha" type="password" classInput="input-password"></InputCadastro>

                    <InputCadastro name="Confirmar Senha" type="password" classInput="input-password"></InputCadastro>

                    <div className="form-btn">
                        <ButtonLogin name="Cancelar" classCadastrar="btn-cancelar" ></ButtonLogin>

                        <ButtonLogin name="Cadastrar" classCadastrar="btn-login"></ButtonLogin>
                    </div>
                </div>
            </div>
        </div>
    );
}

