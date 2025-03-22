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
                    <Profile></Profile>
                </div>
            </div>
        </div>
    );
}