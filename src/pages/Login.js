import React from "react";

import loginUser from '../strapi/loginUser'
import RegisterUser from '../strapi/registerUser'
//handle user

import {UserContext} from '../context/user'

import {useHistory} from 'react-router-dom'
export default function Login() {

  const {userLogin,alert,showAlert}=React.useContext(UserContext)
  
  const history=useHistory()
  
  //state value
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
  const [username,setUsername]=React.useState("");
  const [isMember,setIsMember]=React.useState(false);
  

  let  isEmpty=!email || !password || !username || alert.show;


  const toggleMemeber=()=>{
       setIsMember(prevMember=>{
         let isMember=!prevMember;
         isMember?setUsername("default"):setUsername("")
         return isMember

         
       })
  }


  const handleSubmit=async(e)=>{
     

    //alert
    showAlert({
      msg:"PLease wait Accessing"
    })
    e.preventDefault();
    let  response;
    if(isMember){
         response=await  loginUser({email,password})
    }else{
       response=await  RegisterUser({username,email,password})
    }

    if(response){
        const {jwt:token,user:{username}}=response.data
        const newUser={username,token}
        userLogin(newUser)
        
        showAlert({msg:`You are ${isMember?"login":"Register"} ${username}`})
        history.push('/products')
    }else{
        showAlert({
          msg:"there was an error please try again",
          type:"danger"
        })
    }

  }


  return (
    <section className="form section">
        <h2 className="section-title">{isMember?"Sign in ":"Register"}</h2>
        <form className="login-form">
          {/* single input */}
            <div className="form-control">
                <label htmlFor="email">email</label>
                <input type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
           {/*end single input */}
           {/* single input */}
            <div className="form-control">
                <label htmlFor="password">password</label>
                <input type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
           {/*end single input */}

           {/* single input */}

           {!isMember && <div className="form-control">
                <label htmlFor="username">username</label>
                <input type="text" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
             }
            
           {/*end single input */}
           {isEmpty && (<p className="form-empty">please inter text</p>)}
            
            {/* submit button */}
            {!isEmpty && (
              <button type="button"
              className="btn btn-block btn-primary"
              onClick={handleSubmit}
              >
                submit
              </button>
            )}
            {/*end  submit button */}
            {/* register  link */}
            <p className="register-link">
               {
                 isMember?"need to register":"already member"
               }
               <button type="button" onClick={toggleMemeber}>
                   click here
               </button>
            </p>
            {/*end register  link */}
        </form>
        
    </section>   
  );
}
