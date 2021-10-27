import React from "react"
import "./Button.css"

interface Props {
    text: String,
    action: () => void
}

const Button: React.FC<Props> = ({ text, action }) => {
    return (
        <button
            className="btn"
            onClick={action}
        >
            {text}
        </button>
    )
}

export default Button
