import React, { ReactNode } from "react";

interface IButton{
    children: ReactNode,
}

function Button({children} : IButton) {
    return(
        <div className="component-button">
            <button>
                {children}
            </button>
        </div>
    );
}

export default Button;