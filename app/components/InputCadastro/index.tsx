import "./styles.css"

interface InputCadastroProps {
    label: string;
    name: string;
    type: string;
    classInput: string;
    options?: { value: string; label: string }[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function InputCadastro({ label, name, type, classInput, options = [], value, onChange }: InputCadastroProps) {
    return (
        <div className={classInput}>
            <label htmlFor={name}>{label}</label>
            {type === "select" ? (
                <select id={name} name={name} value={value} onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input id={name} name={name} type={type} value={value} onChange={onChange} />
            )}
        </div>
    );
}


