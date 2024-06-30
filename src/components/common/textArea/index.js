const TextArea = ({label,field, placeholder, value, onChange, setClass}) => {
    return(
        <>
            <div className="form-floating mt-3">
                <textarea className={`form-control ${setClass}`} placeholder={placeholder} id={field} name={field} value={value} onChange={onChange}></textarea>
                <label htmlFor={field} className="form-label">{label}</label>
            </div>
        </>
    );
}
export default TextArea;