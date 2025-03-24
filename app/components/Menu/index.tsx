"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiLogOut, FiHome, FiUsers, FiBox, FiBarChart, FiSettings } from "react-icons/fi";
import ButtonLogin from "../../components/ButtonLogar";
import "./styles.css";

const menuItems = [
    { name: "Início", icon: <FiHome />, path: "/pages/painelcontrole" },
    { name: "Usuários", icon: <FiUsers />, path: "/pages/usuariocadastrado" },
    { name: "Produtos", icon: <FiBox />, path: "#" },
    { name: "Relatórios", icon: <FiBarChart />, path: "#" },
    { name: "Configurações", icon: <FiSettings />, path: "/pages/configuracao" }
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        console.log("fui clicado")
        router.push("/");
    };

    return (
        <aside className="container-sidebar">
            <nav className="nav-sidebar">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.path}
                        className={`nav-links ${pathname === item.path ? "active" : ""}`}
                    >
                        {item.icon}<span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <ButtonLogin name="Sair" classCadastrar="btn-login" onClick={handleLogout}>
                <FiLogOut style={{ marginRight: "10px" }} />
            </ButtonLogin>
        </aside>
    );
}
