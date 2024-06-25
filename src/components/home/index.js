import {useState} from "react";

const HomePage = () => {

    const [list, setList] = useState([
        {
            id: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tNB5rc_qoyctOaIfedxwg0_psN3pSHJQwQ&s",
            pib: "Марко Іван Васильович",
            telephone: "096 21 25 145",
            email: "ivan@gmail.com"
        },
        {
            id: 2,
            image: "https://people.com/thmb/Nm5TRrGO050Au3O7PSiHdt424vk=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(576x0:578x2)/Dog-Bitsy-050224-1-0717aedc49ba405aa2a1a8315cb57c51.jpg",
            pib: "Інь Янь==-",
            telephone: "098 21 70 127",
            email: "inya@gmail.com"
        },
    ])

    const handleDelete = (id) => {
        //console.log("Delete item ",id);
        setList(list.filter((item) => item.id !== id))
    }

    const contentList = list.map(item =>
        <tr key={item.id}>
            <th scope="row">
                <div className={"d-flex justify-content-center"}>
                    <img
                        src={item.image}
                        alt={"Користувач"}
                        style={{maxWidth: "75px", maxHeight: "50px"}}/>
                </div>
            </th>
            <td>{item.pib}</td>
            <td>{item.telephone}</td>
            <td>{item.email}</td>
            <td>
                <button className={"btn btn-danger"} onClick={() => handleDelete(item.id)}>Видалить</button>
            </td>
        </tr>
    );


    return (
        <>
            <div className="container">
                <h1 className={"text-center"}>Користувачі</h1>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Фото</th>
                        <th scope="col">ПІБ</th>
                        <th scope="col">Телефон</th>
                        <th scope="col">Пошта</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {contentList}
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default HomePage;