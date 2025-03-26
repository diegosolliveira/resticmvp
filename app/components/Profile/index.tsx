import { useState } from "react";
import ButtonLogin from "../ButtonLogar";
import "./styles.css";
import UserModal from "@/app/components/EditUserModal/index";
import { Users } from "@/app/models/user";
import { log } from "console";

interface DadosProfile {
    id: string
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    document: string;
}

export default function Profile({ id, firstName, lastName, role, email, document }: DadosProfile) {
    const [selectedUser, setSelectedUser] = useState<Users | null>(null);
    
    const userData: Users = { id, firstName, lastName, role, email, document };
    console.log(userData);

    return (
        <div className="container-profile">
            {selectedUser && (
                <UserModal user={userData} onClose={() => setSelectedUser(null)} />
            )}

            <div className="profile-title">
                <img className="img-user" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="User" />
                <h1 className="profile-name">{`${firstName} ${lastName}`}</h1>
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
                        <span className="profile-cnpj">{document}</span>
                    </div>
                </div>
            </div>

            <ButtonLogin
                name="Editar Perfil"
                classCadastrar="btn-login-profile"
                onClick={() => setSelectedUser(userData)}
            />
        </div>
    );
}
