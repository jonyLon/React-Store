import TextInput from "../../common/textInput";
import * as Yup from 'yup';
import {useFormik} from "formik";
import MultiFileInput from "../../common/multiFileInput";


const CreatePizzaPage = () => {

    const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
    const FILE_SIZE = 250 * 1024; // 250KB

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Вкажіть назву'),
        description: Yup.string()
            .required('Вкажіть опис'),
        images: Yup.array()
            .of(Yup.mixed().test(
                'fileType',
                'Неправильний формат файлу',
                value => value && ['image/jpeg', 'image/png', 'image/webp'].includes(value?.type)
            ))
            .required('Фото є обов\'язковими'),
    });


    const initValue = {
        name: '',
        description: '',
        images: []
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

    //console.log("touched",touched)
    const handleImageChange = (files) => {
        console.log('Change files: ', files);
        setFieldValue("images", files);
        // const file = e.target.files[0];
        // if (file) {
        //     setFieldValue(e.target.name, file);
        //     // setFormData({ ...formData, [e.target.name]: file });
        //     // setImageFile(URL.createObjectURL(file));
        // }
        // else {
        //     setFieldValue(e.target.name, null);
        //     // setFormData({ ...formData, [e.target.name]: null });
        // }
    };
    return (
        <>
            <h1 className={"text-center"}>Додати піцу</h1>
            <form onSubmit={handleSubmit} className={"col-md-6 offset-md-3"}>
                <TextInput
                    label="Назва"
                    field="name"
                    type="text"
                    touched={touched.name}
                    error={errors.name}
                    onChange={handleChange}
                    value={values.name}
                />

                <TextInput
                    label="Опис"
                    field="description"
                    type="text"
                    touched={touched.description}
                    error={errors.description}
                    onChange={handleChange}
                    value={values.description}
                />

                <MultiFileInput
                    label="Фото"
                    field="image"
                    onChange={handleImageChange}
                    error={errors.images}
                    value={values.images}
                />

                <button type="submit" className="btn btn-primary">Створити піцу</button>
            </form>
        </>
    )
}

export default CreatePizzaPage;