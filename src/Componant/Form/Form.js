import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { onSubmit } from '../../Redux/Actions/FormAction';
import './Form.css';

const Form = (props) => {
    
    const {onSubmit} = props;
    const { register, errors, handleSubmit } = useForm();    

    return (
        <div className="main mt-5 pt-3">
            <div className="form d-flex justify-content-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="firstName" placeholder="First Name"className="name" ref={register({ required: true })} />
                    {errors.firstName && "First name is required"}
                    <input name="lastName" placeholder="Last Name"className="name" ref={register({ required: true })} />
                    {errors.lastName && "Last name is required"}
                    <input name="email" placeholder="Email" className="name" ref={register({ required: true })} />
                    {errors.email && "Email is required"}
                    <input name="phone" placeholder="Phone Number" className="name" ref={register({ required: true })} />
                    {errors.phone && "Phone number is required"}
                    <input id="btn" class="login" type="submit" />
                </form>
            </div>            
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}
const mapDispatchToProps = {
    
    onSubmit: onSubmit,
    
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);