const TextInput = ({label, field, type, onChange }) => {
    return(
        <>
            <div className="mb-3">
                <label htmlFor={field} className="form-label">{label}</label>
                <input type={type} className="form-control" id={field} name={field} aria-describedby="emailHelp" onChange={onChange}/>
            </div>
        </>
    );
}
export default TextInput;