const TextArea = ({label,field, placeholder}) => {
    return(
        <>
            <div className="form-floating">
                <textarea className="form-control" placeholder={placeholder} id={field} name={field}></textarea>
                <label htmlFor={field}>{label}</label>
            </div>
        </>
    );
}
export default TextArea;