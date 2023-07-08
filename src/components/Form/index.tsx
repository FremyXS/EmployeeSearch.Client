import React, { ReactNode } from "react";
import './style.css';

interface IForm {
    children: ReactNode,
}

function Form({children} : IForm) {
    return (
        <div className="form">
            {children}            
        </div>
    );
}

export default Form;