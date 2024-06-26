import TextInput from "../../common/inputs";
import ImageInput from "../../common/imageInput";
import TextArea from "../../common/textArea";


const RegisterPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("RegisterPage");
    }

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>

                <TextInput label={"ПIБ"} field={"name"} type={"text"}/>
                <TextInput label={"Телефон"} field={"phone"} type={"text"}/>
                <TextInput label={"Електронна пошта"} field={"email"} type={"email"}/>
                <ImageInput field={"image"}/>
                <TextArea field={"textArea"} label={"Введіть свої хобі.."} placeholder={"Введіть свої хобі..."}/>
                <button type="submit" className="btn btn-primary my-3">Peєструватися</button>
            </form>
        </>
    )
}

export default RegisterPage;