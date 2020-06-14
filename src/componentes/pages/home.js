import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () =>{
    const [user,setUser] = useState([]);

    useEffect(()=> {
        loadUsers();
    },[]);

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3002/users/");
        
        setUser(result.data.reverse());
       
    }
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:3002/users/${id}`);
      loadUsers();
    }
    
    return (
        <div className="container">
        <div className="py-4">
        <h1>home page</h1>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((emp, index)=> (
        <tr>
          <th scope="row">{index +1 }</th>
          <td>{emp.name}</td>
          <td>{emp.username}</td>
          <td>{emp.email}</td>
          <td>
          <Link className="btn btn-primary mr-2" to={`/users/${emp.id}`}>View</Link>
          <Link className="btn btn-outline-primary mr-2"  to={`/users/edit/${emp.id}`}>Edit</Link>
          <Link className="btn btn-danger" onClick={e => deleteUser(emp.id)}>Delete</Link>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
        </div>
        </div>
    );
}

export default Home;