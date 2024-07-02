import classNames from "classnames";
import noFoto from "../../../assets/images/no-foto.png";

const ImageInput = ({label, field, onChange, value, error}) => {
    const img = value == null ? noFoto : URL.createObjectURL(value);
    return(
        <>
            <div className="row d-flex align-items-center mt-3">
                <div className="col-md-3">
                        <img src={img} id="imagePreview" alt="фото" width="100%"/>
                </div>
                <div className="mb-3 col-md-9">
                    <label htmlFor={field} className="form-label">{label}</label>
                        <input onChange={onChange}
                               type="file"
                               className={classNames("form-control", {
                                   "is-invalid": error
                               })}
                               id={field}
                               name={field}
                               accept="image/*"
                               aria-describedby="emailHelp"/>
                    {
                        error &&
                        <div className="invalid-feedback">
                            {error}
                        </div>
                    }
                </div>
            </div>
        </>
)
    ;
}
export default ImageInput;


// import classNames from "classnames";
//
// const FileInput = ({label, field, value, error, onChange}) => {
//     const img = value == null ? userImage : URL.createObjectURL(value);
//     console.log("error", error);
//     return (
//         <>
//             <div className="mb-3">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <img src={img} alt="" className={"img-fluid"}/>
//                     </div>
//                     <div className="col-md-9">
//                         <label htmlFor={field} className="form-label">{label}</label>
//                         <input type="file"
//                                className={classNames("form-control", {
//                                    "is-invalid": error
//                                })}
//                                id={field}
//                                name={field}
//                                onChange={onChange}
//                                aria-describedby="emailHelp"/>
//                         {
//                             error &&
//                             <div className="invalid-feedback">
//                                 {error}
//                             </div>
//                         }
//                     </div>
//                 </div>
//
//             </div>
//
//         </>
//     );
// }
//
// export default FileInput;