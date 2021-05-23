import s from "./FormField.module.css"

const FormField = ({ className = "", ...props }) => {
    return <input {...props} className={`${s.input} ${className}`} />
}

export default FormField;