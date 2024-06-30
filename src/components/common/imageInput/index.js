
const ImageInput = ({label, field, onChange, imageFile, setClass}) => {

    return(
        <>
            <div className="row d-flex align-items-center mt-3">
                <div className="col-md-3">
                        <img src={imageFile} id="imagePreview" alt="фото" width="100%"/>
                </div>
                <div className="mb-3 col-md-9">
                    <label htmlFor={field} className="form-label">{label}</label>
                        <input onChange={onChange} type="file" className={`form-control ${setClass}`} id={field} name={field}
                           accept="image/*" aria-describedby="emailHelp"/>
                </div>
            </div>
        </>
)
    ;
}
export default ImageInput;