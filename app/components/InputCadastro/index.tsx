import "./styles.css";

interface InputCadastroProps {
    name: string;
    type: string;
    classInput: string;
    options?: { value: string; label: string }[]; 
}

export function InputCadastro({ name, type, classInput, options = [] }: InputCadastroProps) {
    return (
        <div className={classInput}>
            <span>{name}</span>
            {type === "select" ? (
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input type={type} />
            )}
        </div>
    );
}
