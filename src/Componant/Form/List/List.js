import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { onSubmit, removeFromData } from '../../../Redux/Actions/FormAction';
import Navbar from '../../Navbar/Navbar';


const List = (props) => {
    
    const {cart, removeFromData} = props;
    console.log(cart);
    
    const [userInformations, setUserInformations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allUser')
        .then(res => res.json())
        .then(data => setUserInformations(data))
    },[]) 
     
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="container mt-5 pt-5">
                <div className="d-flex justify-content-center">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            { userInformations.map((user,index) =>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <th>{user._id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td><button type="button" onClick={() => removeFromData(user._id)} class="btn btn-outline-danger">Delete</button></td>
                                </tr>
                            )}
                        </tbody>    
                    </table>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        cart: state.cart        
    }
}
const mapDispatchToProps = {
    removeFromData: removeFromData,
    onSubmit: onSubmit
}

export default connect(mapStateToProps, mapDispatchToProps)(List);