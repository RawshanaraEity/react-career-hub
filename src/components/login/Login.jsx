import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";


const Login = () => {

    const {googleSignIn, signIn} = useContext(AuthContext)

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
     const [error, setError] = useState('')


     const location = useLocation()
     const navigate = useNavigate()
     console.log(location)
    // const from = location.state?.from?.pathname || '/'

    const handleGoogle = (e) =>{
        e.preventDefault()
        googleSignIn()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        // console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(email,password)
       
            signIn(email,password)

            .then(result => {
                console.log(result.user)
                navigate(location?.state? location.state : '/')
            })
            .catch(error => setError(error.message))


        
    }


    return (
        <div className="w-1/3 mx-auto">
           
                <form onSubmit={handleLogin} className="space-y-4 p-10">
                    <p>{error}</p>
                    <input className="w-full p-3 rounded-lg" placeholder="Your email" type="email" name="email" required/>
                    <br />
                    <input className="w-full p-3 rounded-lg" placeholder="Your Passsword" type="password" name="password" required />
                    <br />
                    <button className="btn btn-secondary w-full">Login</button>
                    <br />
                    <div className="flex justify-center">
                    <button onClick={handleGoogle} className="btn btn-primary">Google login</button>
                    </div>
                   
                </form>

           
        </div>
    );
};

export default Login;