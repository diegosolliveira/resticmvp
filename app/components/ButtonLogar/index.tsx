import "./styles.css";
import { ReactNode } from "react";

interface buttonCadastr {
    name: string;
    classCadastrar: string;
    children?: ReactNode;
}

export function ButtonLogin( {name, classCadastrar, children}:buttonCadastr) {

    return (
        <div>
            <button className={classCadastrar}>{children}{name}</button>
        </div>
    );
}