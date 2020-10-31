import React from "react";
import {CartContext} from '../context/cart'
import {UserContext} from '../context/user'
import EmptyCart from '../components/Cart/EmptyCart'
import {useHistory} from 'react-router-dom'
//stripi element

import {CardElement,StripeProvider,Elements,injectStripe} from 'react-stripe-elements'
import SubmitOrder from '../strapi/submitOrder'
 function Checkout(props) {
  const {cart,total,ClearCart}=React.useContext(CartContext)
  const {show,showAlert,hideAlert,alert,user}=React.useContext(UserContext)
  const history=useHistory();

  //state
   const [name,setName]=React.useState('')
   const [error,setError]=React.useState()
  
  const isEmpty=!name|| alert.show;

  async function handleSubmit(e){

    showAlert({msg:"submitting order ... please wait"})
    e.preventDefault()
    const response =await props.stripe.createToken().catch(error=>console.log(error))
     
    const {token}=response
  
    
    if(token){
        setError('')
        const  {id}=token;
        let order=await SubmitOrder({name,total:total,items:cart,stripeTokenId:id,userToken:user.token})
      if(order){
         showAlert({msg:"your order complete "})
         ClearCart()
         history.push('/')
         return;
      }else{
        showAlert({msg:"there was a error please try again ",type:"danger"})
      }
    }else{
      hideAlert()
      setError(response.error.message)
    }



  }
  if(cart.length<1){
    return <EmptyCart/>
  }
  return (
    <section className="section form">
    
        <h2 className="section-title">checkout</h2>
        <form className="checkout-form">
           <h3>order total :<span>${total}</span></h3>
           {/* single input */}
           <div className="form-control">
           
            <label htmlFor="name">name</label>
           <input type="text" id="name" name={name} onChange={(e)=>setName(e.target.value)} />
           </div>
           {/*end single input */}
           {/* card element */}
           <div className="stripe-input">
              <label htmlFor="card-element">
              Credit  or Debit Card
              </label>
              <p className="stripe-info">
                 Testting using this card:<span>4242 4242 4242 4242</span>
                 <br/>
                 enter any 5 digit for zip
                 <br/>
                 enter 3 digit for CVV
              </p>

           </div>
           {/*  stipe elemet */}
           {/* stripe element */}
           <CardElement className="card-element"></CardElement>
           {error && <p className="form-empty">{error}</p>}
             {
               isEmpty  ?<p className="form-empty">please fill the out name field</p>:<button
               type="submit"
                className="btn btn-primary btn-block"
               onClick={handleSubmit}

               >
               Submit
               </button>
             }
           {/*end card element */}
        </form>
       
    </section>
  );
}

const  CardForm=injectStripe(Checkout)
const StrapiWrapper=()=>{
  return (
    <StripeProvider apiKey="pk_test_51HXjrwFbWJKEF8LicAOLF7d27mqLNumn785qBKQvAkxfoLUh8EEFURfhfFAlwTvUtcyKikIdmkR6jEABK1YJObLe00dTu296D9">
      <Elements>
        <CardForm>

        </CardForm>
      </Elements>
    </StripeProvider>
  )
}

 export default StrapiWrapper