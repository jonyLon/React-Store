
const ImageInput = ({field, onChange, imageFile}) => {

    return(
        <>
            <div className="row d-flex align-items-center">
                <div className="col-md-3">
                    <label htmlFor={field} className="form-label">
                        <img src={imageFile} id="imagePreview" alt="фото" width="100%"/>
                    </label>
                </div>
                <div className="mb-3 col-md-9">
                    <input onChange={onChange} type="file" className="form-control" id={field} name={field} accept="image/*" aria-describedby="emailHelp"
                           required/>
                </div>
            </div>
        </>
    );
}
export default ImageInput;