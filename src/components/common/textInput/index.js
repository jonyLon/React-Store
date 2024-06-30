const TextInput = ({label, field, type, value ,onChange, setClass }) => {
    return(
        <>
            <div className="mt-3">
                <label htmlFor={field} className="form-label">{label}</label>
                <input type={type} className={`form-control ${setClass}`} id={field} name={field} aria-describedby="emailHelp" value={value} onChange={onChange}/>
            </div>
        </>
    );
}
export default TextInput;