import React, {useState,useEffect} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import axios from 'axios';
const Edituser = () => {
    const {id} = useParams();
    
    let history = useHistory();
    const [user,setUser] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    }) ;
    const {name, username, email,phone, website} = user;

    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit = async(e) => {
        e.preventDefault();
        
        await axios.put(`http://localhost:3002/users/${id}`,user);
        history.push("/");
    }
    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser = async() => {
        const result =await axios.get(`http://localhost:3002/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add  A user</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="your name" name="name"  value={name} onChange={e => onInputChange(e)}/>

                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="your username" name="username" value={username} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-lg" placeholder="your email" name="email" value={email} onChange={e => onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="your number" name="phone" value={phone} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="your website" name="website" value={website} onChange={e => onInputChange(e)}/>
                        </div>
                        <button className="btn btn-warning btn-block">Update user</button>
                    </form>

            </div>
        </div>
    )
};

export default Edituser;