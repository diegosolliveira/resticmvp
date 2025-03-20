import { FiLogOut, FiHome, FiUsers, FiBox, FiBarChart, FiSettings } from "react-icons/fi";
import { ButtonLogin } from "../../components/ButtonLogar";
import "./styles.css"

const menuItems = [
    { name: "Início", icon: <FiHome /> },
    { name: "Usuários", icon: <FiUsers /> },
    { name: "Produtos", icon: <FiBox /> },
    { name: "Relatórios", icon: <FiBarChart /> },
    { name: "Configurações", icon: <FiSettings /> }
];


export function Sidebar() {
    return (
        <aside className="container-sidebar">
            <nav className="nav-sidebar">
                {menuItems.map((item) => (
                    <a key={item.name} href="#" className="nav-links">
                        {item.icon}<span>{item.name}</span>
                    </a>

                ))}
            </nav>

            <ButtonLogin name="Sair" classCadastrar="btn-login"><FiLogOut style={{ marginRight: "10px" }} /></ButtonLogin>
        </aside>
    );
}
