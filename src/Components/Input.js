

const Input = ({ type, placeholder, value, onChange, label, name }) => {
    return (
        <div className="input">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default Input;