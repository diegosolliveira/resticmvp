import React from "react";
import "../InputModal/style.css"

interface InputModalProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputModal({ label, value, onChange }:InputModalProps){
    return(
        <div className="input-modal">
        <label>{label}:</label>
        <input type="text" value={value} onChange={onChange} />
      </div>
    )
};


