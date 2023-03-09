import React, { useState, useEffect } from "react";

function Form() {

    const [userData, setUserData] = useState({
        name: "",
        age: "",
    });
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        const oldData = JSON.parse(localStorage.getItem("userData")) || []
        oldData.push(userData)
        localStorage.setItem("userData", JSON.stringify(oldData));
    }

    const getData = () => {
        const newData = JSON.parse(localStorage.getItem("userData"))
        setData(newData)
    }

    return (
        <div>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        name="age"
                        value={userData.age}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">click</button>
            </form>
            <br/>
            <br/> 
            <br/>
            <table border={2}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {data.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })
                }
            </table>
        </div>
    );
} export default Form;