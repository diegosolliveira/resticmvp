import { CardTitle } from "../../components/CardTitle";
import { Profile } from "../../components/Profile"
import { Sidebar } from "../../components/Menu"
import "./styles.css";

export function Configuracao() {
    return (
        <div className="container-pcontrole">
            <Sidebar></Sidebar>

            <div className="container-dashboard">

                <CardTitle name="Configuração"></CardTitle>

                <div className="dashboard">
                    <Profile name="Guilherme Silva" email="gui@hotmail.com" cpf="000.000.000-93"></Profile>
                </div>
            </div>
        </div>
    );
}