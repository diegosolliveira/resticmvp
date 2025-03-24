import "./styles.css";
import { FiAlignJustify } from "react-icons/fi";
import { ReactNode } from "react";

interface buttonCadastr {
    name: string;
    children?: ReactNode;
}

export default function CardTitle( {name, children}:buttonCadastr) {

    return (
        <div className="container-card">
            <h1 className="card-title"><FiAlignJustify style={{ marginRight: "25px", marginLeft: "10px" }}/>
            {name}</h1>
        </div>
    );
}