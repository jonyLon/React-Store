import TextInput from "../../common/textInput";
import ImageInput from "../../common/imageInput";
import TextArea from "../../common/textArea";
import {useState} from "react";
import noFoto from "../../../assets/images/no-foto.png";
import * as Yup from 'yup';

const RegisterPage = () => {

    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
    const FILE_SIZE = 250 * 1024; // 250KB

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Занадто коротко!')
            .max(50, 'Занадто довге!')
            .required('Обов\'язково'),
        phone: Yup.string()
            .min(10, 'Занадто коротко!')
            .max(12, 'Занадто довгий!')
            .matches(/^[0-9]+$/, 'Номер телефону не дійсний')
            .required('Обов\'язково'),
        email: Yup.string()
            .email('Невірний формат електронної пошти')
            .required('Обов\'язково'),
        image: Yup.mixed()
            .required('Обов\'язково')
            .test('fileSize', 'Файл занадто великий', value => value && value.size <= FILE_SIZE)
            .test('fileFormat', 'Непідтримуваний формат', value => value && SUPPORTED_FORMATS.includes(value.type)),
        textArea: Yup.string()
            .min(5, 'Занадто коротко!')
            .max(200, 'Занадто довге!')
            .required('Обов\'язково'),
        password: Yup.string()
            .min(8, 'Пароль має бути не менше 8 символів')
            .required('Обов\'язково'),
        date: Yup.date()
            .required('Обов\'язково')
    });



    const [errors, setErrors] = useState({});

    const [imageFile, setImageFile] = useState(noFoto);
    const initValue = {
        name: '',
        phone: '',
        email: '',
        image: null,
        textArea: '',
        password: '',
        date: '',
    };
    const [formData, setFormData] = useState(initValue);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, [e.target.name]: file });
            setImageFile(URL.createObjectURL(file));
        }
        else {
            setFormData({ ...formData, [e.target.name]: null });
            alert("Оберіть фото");
        }
    }

    const validateForm = async () => {
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (err) {
            const newErrors = {};
            err.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (isValid) {
            console.log('Form data:', formData);
        }
    };

    const getInputClassName = (fieldName) => {
        return errors[fieldName] ? 'input-error' : 'input-success';
    };

    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>
                <TextInput
                    label="ПIБ"
                    field="name"
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                    setClass={getInputClassName('name')}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}

                <TextInput
                    label="Телефон"
                    field="phone"
                    type="text"
                    onChange={handleChange}
                    value={formData.phone}
                    setClass={getInputClassName('phone')}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}

                <TextInput
                    label="Електронна пошта"
                    field="email"
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
                    setClass={getInputClassName('email')}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}

                <ImageInput
                    label="Фото"
                    field="image"
                    onChange={handleImageChange}
                    imageFile={imageFile}
                    setClass={getInputClassName('image')}
                />
                {errors.image && <div className="error-message">{errors.image}</div>}

                <TextArea
                    field="textArea"
                    label="Введіть свої хобі.."
                    placeholder="Введіть свої хобі..."
                    onChange={handleChange}
                    value={formData.textArea}
                    setClass={getInputClassName('textArea')}
                />
                {errors.textArea && <div className="error-message">{errors.textArea}</div>}

                <TextInput
                    label="Пароль"
                    field="password"
                    type="password"
                    onChange={handleChange}
                    value={formData.password}
                    setClass={getInputClassName('password')}
                />
                {errors.password && <div className="error-message">{errors.password}</div>}

                <TextInput
                    label="Дата"
                    field="date"
                    type="date"
                    onChange={handleChange}
                    value={formData.date}
                    setClass={getInputClassName('date')}
                />
                {errors.date && <div className="error-message">{errors.date}</div>}

                <button type="submit" className="btn btn-primary">Peєструватися</button>
            </form>
        </>
    )
}

export default RegisterPage;