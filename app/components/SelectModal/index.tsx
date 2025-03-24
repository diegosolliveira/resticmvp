import React from "react";
import "../SelectModal/style.css"

interface SelectModalProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectModal: React.FC<SelectModalProps> = ({ label, value, onChange, options }) => {
  return (
    <div className="select-modal">
      <label className="select-modal-label">{label}:</label>
      <select value={value} onChange={onChange} className="select-conta">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectModal;
