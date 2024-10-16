import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const users = [
    { id: 1, name: 'User One' },
    { id: 2, name: 'User Two' },
    { id: 3, name: 'User Three' },
];
export default function ContactUsById() {
    const { id } = useParams(); 1
    const [stateUser, setUser] = useState(null);
    useEffect(() => {
        // const user = users.find(user => user.id === parseInt(id));
        const user = users.find((user) => user.id == id);
        console.log(user.name);
        setUser(user.name)
    }, [id]);

    return (
        <div>ContactUsById - {stateUser}</div>
    )
}
