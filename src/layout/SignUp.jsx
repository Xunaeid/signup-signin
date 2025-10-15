import React, { useContext, useState } from 'react';
import { authContext } from './Root';

const SignUp = () => {
   
  const {signUpContext} = useContext(authContext)

  const [feedback, setFeedback] = useState([]);
  const [strength, setStrength] = useState("");
  const [run, setRun] = useState("go run");

console.log(feedback)
    const handleSignUp = e => {
      
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        
        const validatePassword = (pass) => {
          const errors = [];
          let score = 0;

          if (pass.length === 0){
            return
          }
          if (pass.length >= 8) score++; else errors.push("At least 8 characters");
          if (/[A-Z]/.test(pass)) score++; else errors.push(" 1 uppercase letter");
          if (/[a-z]/.test(pass)) score++; else errors.push(" 1 lowercase letter");
          if (/[0-9]/.test(pass)) score++; else errors.push(" 1 number");
          if (/[@$!%*?&]/.test(pass)) score++; else errors.push("1 special character (@$!%*?&)");
          
          const levels = ["Weak 🚫", "Moderate 😐", "Good 👍", "Strong 💪"];
          setStrength(score >= 5 ? levels[3] : score >= 4 ? levels[2] : score >= 3 ? levels[1] : levels[0]);
          setFeedback(errors);
          
          if(!errors.length === 0){
            return
          }
        };

        console.log(strength, feedback)


        validatePassword(password);
      
        
      signUpContext(email,password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      });
    }

    return (
        <div>
            <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign-up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
        <label className="label">Name</label>
        <input type="text" name='name' className="input" placeholder="Name" />
        <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div className='flex '><p className="link link-hover">Forgot password? </p> <p className='flex justify-end'> {[strength, ` ${strength && "strength"}  `]} </p> </div>
          <p className='mt-2 text-sm'> { feedback[0] }  </p>
          <button className="btn btn-neutral mt-4">Sign up</button>
        </form>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default SignUp;