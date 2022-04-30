import { toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from 'use-http';
import { useNavigate } from 'react-router'
const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const [fcoused, setFcoused] = useState()
    const [errors, setErrors] = useState()

    const { post, response } = useFetch()

    const navigate = useNavigate()

    const fcouseHandler = event => {
        setFcoused({ ...fcoused, [event.target.name]: true })
    }

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    const submiteHandler = async event => {
        event.preventDefault();
        await post("/api/login", form)
        if (response.ok) {
            localStorage.setItem("token", response.data.token)
            console.log("asdasdasdas");
            navigate("/", { replace: true })
        }
    }

    return (
        <div className=" container mt-5 mx-auto">
            <h1 className="text-center">Welcome!</h1>
            <form onSubmit={submiteHandler} className="rounded border shadow-md p-4 mt-5 mx-auto" style={{ maxWidth: '500px' }}>
                <div className='d-flex flex-column'>
                    <div className="d-flex justify-content-between my-2" >
                        <label className="form-label-sm p-2">Email</label>
                        <input className="form-control-sm" type="text" name="email" value={form.email} onChange={changeHandler} onFocus={fcouseHandler} />
                    </div>
                    {errors?.email && fcoused?.email && <span>{errors?.email}</span>}
                </div>
                <div className='d-flex flex-column'>
                    <div className="d-flex justify-content-between my-2" >
                        <label className="form-lable-sm p-2">Password</label>
                        <input className="form-control-sm" type="password" name="password" value={form.password} onChange={changeHandler} onFocus={fcouseHandler} />
                    </div>
                    {errors?.email && fcoused?.email && <span>{errors?.email}</span>}
                </div>
                <div>
                    <Link to="/signup" className="m-5 text-decoration-none" href="#">Sign Up</Link>
                    <button className="btn btn-success w-30 m-auto" type="submit">Log In</button>
                </div>


            </form>

        </div>
    );
}



const Validate = data => {
    const errors = {};

    if (!data.email) {
        errors.email = "Email adress is required"
    } else if (!/\S+@\.\S+/.test(data.email)) {
        errors.email = "Email adress is invalid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password is required"
    } else if (data.password.length < 6) {
        errors.password = "Password need to be 6 character or more"
    } else {
        delete errors.password
    }
    return errors;

}

export default Login;