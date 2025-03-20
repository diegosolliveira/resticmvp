import "./styles.css";

interface buttonCadastr {
    name: string;
    classCadastrar: string;
}

export function ButtonLogin( {name, classCadastrar}:buttonCadastr) {

    return (
        <div>
            <button className={classCadastrar}>{name}</button>
        </div>
    );
}