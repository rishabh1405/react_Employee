import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';

const Viewuser = () => {
    const [user,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    });
    const {id} = useParams();
    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser = async() => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <h1 className="display-4">User Id:{user.id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name:{user.name}</li>
                <li className="list-group-item">user name:{user.username}</li>
                <li className="list-group-item">email:{user.email}</li>
                <li className="list-group-item">phone:{user.phone}</li>
                <li className="list-group-item">website:{user.website}</li>
            </ul>
        </div>
    );
}

export default Viewuser;