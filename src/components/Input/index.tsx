import React, { ChangeEvent } from "react";

interface IInput {
    label?: string,
    value?: string,
    name?: string,
    type: React.HTMLInputTypeAttribute,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({ label, value, name, type, onChange }: IInput) {
    return (
        <div className="component-input">
            <div className="component-input__label">
                {label}
            </div>
            <input type={type} value={value} name={name} onChange={onChange}/>
        </div>
    );
}

export default Input;