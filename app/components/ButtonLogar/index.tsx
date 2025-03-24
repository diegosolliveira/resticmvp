import "./styles.css";
import { ReactNode } from "react";

interface buttonCadastr {
    name: string;
    classCadastrar: string;
    children?: ReactNode;
    onClick?: () => void;
}

export default function ButtonLogin({ name, classCadastrar, children, onClick }: buttonCadastr) {

    return (
        <div>
            <button className={classCadastrar} onClick={onClick}>{children}{name}</button>
        </div>
    );
}