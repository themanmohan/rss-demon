import React from  'react'

const UserContext = React.createContext()


function getUserLocalStorage(){
    return localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{username:null,token:null}
}


const UserProvider=({children})=>{
     
    //state
    const [user,setUser]=React.useState(getUserLocalStorage())
 

    //login function
    const userLogin=(user)=>{
        setUser(user)
        localStorage.setItem('user',JSON.stringify(user))
    }


    //user logout

    const userLogout=()=>{

        setUser({username:null,token:null})
        localStorage.removeItem('user')
    }


    //alert 
    const [alert,setAlert]=React.useState({
        show:false,
        msg:'',
        type:"success"
    })

    const showAlert=({msg,type="success"})=>{
         setAlert({show:true,msg,type})
    }

    //hide

    const hideAlert=()=>{
        setAlert({...alert,show:false})
    }
   return <UserContext.Provider value={{user,userLogin,userLogout,showAlert,alert,hideAlert}}>
        {children}
    </UserContext.Provider>

}

export {UserContext,UserProvider}
