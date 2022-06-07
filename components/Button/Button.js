import styles from './Button.module.css'
import PropTypes from "prop-types";

export function Button({ label, borderRadius, size = "medium", fontWeight = "bold", color = "white", backgroundColor = "blue", onClick}) {
    let scale = 1
    let radius = 0
    let weight
    if (size === "small") scale = 0.75
    if (size === "large") scale = 1.5
    if (fontWeight === "light") weight = "light"
    if (fontWeight === "normal") weight = "normal"
    if (fontWeight === "bold") weight = "bold"
    if (borderRadius === true) radius = `${20}px`
    const style = {
        backgroundColor,
        color,
        padding: `${scale * 0.5}rem ${scale}rem`,
        border: "none",
        fontWeight: weight,
        borderRadius: radius,
    }
    return (
        <button onClick={onClick} style={style}>
            {label}
        </button>
    )
}

Button.prototype = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    fontWeight: PropTypes.oneOf(["bold", "normal", "light"]),
    onClick: PropTypes.func,
    borderRadius: PropTypes.bool,
}