import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
    const [user,setUser]=useState({
        "name":"",
        "username":"",
        "email":""
    })

    const {id}=useParams()

    useEffect(()=>{
        loadUser()
    })

    const loadUser = async () => {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)

    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className={"col-md-6 offset-md-3 border-primary rounded p-4 mt-2 shadow"}>
                        <h2 className={"text-center m-4"}>UserDetails</h2>
                        <div className="card">
                            <div className="card-header">
                                Details of User Id : {user.id}
                            </div>
                            <ul className={"list-group list-group-flush"}>
                                <li className={"list-group-item"}><b>Name:{user.name}</b></li>
                                <li className={"list-group-item"}><b>UserName:{user.username}</b></li>
                                <li className={"list-group-item"}><b>Email:{user.email}</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ViewUser;