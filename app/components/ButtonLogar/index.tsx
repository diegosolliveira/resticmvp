import "./styles.css";
import { ReactNode } from "react";

interface buttonCadastr {
    name: string;
    classCadastrar: string;
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export default function ButtonLogin({ name, classCadastrar, children, onClick, disabled }: buttonCadastr) {
    return (
        <div>
            <button className={classCadastrar} onClick={onClick} disabled={disabled}>
                {children}{name}
            </button>
        </div>
    );
}