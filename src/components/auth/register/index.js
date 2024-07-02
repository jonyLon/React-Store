import TextInput from "../../common/textInput";
import ImageInput from "../../common/imageInput";
import TextArea from "../../common/textArea";
import {useState} from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";

const RegisterPage = () => {

    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
    const FILE_SIZE = 250 * 1024; // 250KB

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Занадто коротко!')
            .max(50, 'Занадто довге!')
            .required('Вкажіть ім\'я'),
        phone: Yup.string()
            .min(10, 'Занадто коротко!')
            .max(12, 'Занадто довгий!')
            .matches(/^[0-9]+$/, 'Номер телефону не дійсний')
            .required('Вкажіть телефон'),
        email: Yup.string()
            .email('Невірний формат електронної пошти')
            .required('Вкажіть електрону пошту'),
        image: Yup.mixed()
            .required('Фото є обов\'язковим')
            .test('fileSize', 'Файл занадто великий', value => value && value.size <= FILE_SIZE)
            .test('fileFormat', 'Непідтримуваний формат', value => value && SUPPORTED_FORMATS.includes(value.type)),
        textArea: Yup.string()
            .min(5, 'Занадто коротко!')
            .max(200, 'Занадто довге!')
            .required('Вкажіть хобі'),
        password: Yup.string()
            .min(8, 'Пароль має бути не менше 8 символів')
            .required('Вкажіть пароль'),
        date: Yup.date()
            .required('Вкажіть дату')
    });


    const initValue = {
        name: '',
        phone: '',
        email: '',
        image: null,
        textArea: '',
        password: '',
        date: '',
    };

    const handleFormikSubmit = (values) => {
        console.log('Form data:', values);
    };
    const formik = useFormik({
        initialValues: initValue,
        onSubmit: handleFormikSubmit,
        validationSchema: validationSchema
    });
    const {values, touched, errors,
        handleSubmit, handleChange, setFieldValue} = formik;
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFieldValue(e.target.name, file);
            // setFormData({ ...formData, [e.target.name]: file });
            // setImageFile(URL.createObjectURL(file));
        }
        else {
            setFieldValue(e.target.name, null);
            // setFormData({ ...formData, [e.target.name]: null });
        }
    };
    return (
        <>
            <h1 className={"text-center"}>Реєстрація</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>
                <TextInput
                    label="ПIБ"
                    field="name"
                    type="text"
                    error={errors.name}
                    onChange={handleChange}
                    value={values.name}
                />

                <TextInput
                    label="Телефон"
                    field="phone"
                    type="text"
                    error={errors.phone}
                    onChange={handleChange}
                    value={values.phone}
                />

                <TextInput
                    label="Електронна пошта"
                    field="email"
                    type="email"
                    error={errors.email}
                    onChange={handleChange}
                    value={values.email}
                />


                <ImageInput
                    label="Фото"
                    field="image"
                    onChange={handleImageChange}
                    error={errors.image}
                    value={values.image}
                />


                <TextArea
                    field="textArea"
                    label="Введіть свої хобі.."
                    placeholder="Введіть свої хобі..."
                    onChange={handleChange}
                    error={errors.textArea}
                    value={values.textArea}

                />


                <TextInput
                    label="Пароль"
                    field="password"
                    type="password"
                    error={errors.password}
                    onChange={handleChange}
                    value={values.password}
                />

                <TextInput
                    label="Дата"
                    field="date"
                    type="date"
                    error={errors.date}
                    onChange={handleChange}
                    value={values.date}
                />
                <button type="submit" className="btn btn-primary">Peєструватися</button>
            </form>
        </>
    )
}

export default RegisterPage;