import classNames from "classnames";

const TextArea = ({label,field, placeholder, value, onChange, error}) => {
    return(
        <>
            <div className="form-floating mt-3">
                <textarea
                    className={classNames("form-control", {
                    "is-invalid": error
                })}
                    placeholder={placeholder}
                    id={field}
                    name={field}
                    value={value}
                    onChange={onChange}/>
                <label htmlFor={field} className="form-label">{label}</label>
                {
                    error &&
                    <div className="invalid-feedback">
                        {error}
                    </div>
                }
            </div>
        </>
    );
}
export default TextArea;