import TextInput from "../../common/input";
import ImageInput from "../../common/imageInput";
import TextArea from "../../common/textArea";
import {useState} from "react";
import noFoto from "../../../assets/images/no-foto.png";


const RegisterPage = () => {

    const [imageFile, setImageFile] = useState(noFoto)
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        image: null,
        textArea: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, [e.target.name]: file });
            setImageFile(URL.createObjectURL(file));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>

                <TextInput label={"ПIБ"} field={"name"} type={"text"} onChange={handleChange}/>
                <TextInput label={"Телефон"} field={"phone"} type={"text"} onChange={handleChange}/>
                <TextInput label={"Електронна пошта"} field={"email"} type={"email"} onChange={handleChange}/>
                <ImageInput field={"image"} onChange={handleImageChange} imageFile={imageFile}/>
                <TextArea field={"textArea"} label={"Введіть свої хобі.."} placeholder={"Введіть свої хобі..."} onChange={handleChange}/>
                <button type="submit" className="btn btn-primary my-3">Peєструватися</button>
            </form>
        </>
    )
}

export default RegisterPage;