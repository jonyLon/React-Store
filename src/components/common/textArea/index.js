const TextArea = ({label,field, placeholder, onChange}) => {
    return(
        <>
            <div className="form-floating">
                <textarea className="form-control" placeholder={placeholder} id={field} name={field} onChange={onChange}></textarea>
                <label htmlFor={field}>{label}</label>
            </div>
        </>
    );
}
export default TextArea;