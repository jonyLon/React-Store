import {useState} from "react";
import noFoto from "../../../assets/images/no-foto.png";

const ImageInput = ({field}) => {

    const [imageFile, setImageFile] = useState(noFoto)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(URL.createObjectURL(file));
        }
    }

    return(
        <>
            <div className="row d-flex align-items-center">
                <div className="col-md-3">
                    <label htmlFor={field} className="form-label">
                        <img src={imageFile} id="imagePreview" alt="фото" width="100%"/>
                    </label>
                </div>
                <div className="mb-3 col-md-9">
                    <input onChange={handleImageChange} type="file" className="form-control" id={field} name={field} accept="image/*" aria-describedby="emailHelp"
                           required/>
                </div>
            </div>
        </>
    );
}
export default ImageInput;