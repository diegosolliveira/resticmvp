import ButtonLogin from "../ButtonLogar"
import "./styles.css"

interface dadosProfile {
    name: string;
    email: string;
    cpf: string;
}

export default function Profile( {name, email, cpf}: dadosProfile) {
    return (
        <div className="container-profile">
            <div className="profile-title">
                <img className="img-user" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                <h1 className="profile-name">{name}</h1>
            </div>

            <hr className="hr-horizontal" />

            <div className="profile-infos">
                <h1 className="profile-dados">DADOS DO USUÁRIO</h1>

                <div className="profile-dados-infos">
                    <div>
                        <span className="textfield-email">Email</span>
                        <span className="profile-email">{email}</span>
                    </div>

                    <div>
                        <span className="textfield-cnpj">CPF/CNPJ</span>
                        <span className="profile-cnpj">{cpf}</span>
                    </div>
                </div>
            </div>

            <ButtonLogin name="Editar Perfil" classCadastrar="btn-login-profile"></ButtonLogin>
        </div>
    )
}