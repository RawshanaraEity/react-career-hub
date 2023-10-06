import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";

const Register = () => {

    const {signUp} = useContext(AuthContext);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


const handleRegister = (e) =>{
    e.preventDefault()
    if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
        setError('* plz type Minimum eight characters, at least one letter and one number')
    }
    else{
        setError('')
        if(email){
            signUp(email,password)
            .then(result => console.log(result.user))
            .catch(error => console.log(error))
            
        }
        // alert('Successfully registerd')
    }
}


  return (
    <div>
      <div className="w-1/3 mx-auto">
        <form className="space-y-4 p-10">
            <p className="text-red-600">{error}</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg"
            placeholder="Your email"
            type="email"
            name="email"
          />
          <br />
          <input
             onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg"
            placeholder="Your Passsword"
            type="password"
            name="password"
          />
          <br />
          <button onClick={handleRegister} className="btn btn-secondary w-full">Register</button>
          <br />
          <div className="flex justify-center">
            <button className="btn btn-primary">
              Google login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
