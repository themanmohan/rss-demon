import React from 'react'

const CartContext=React.createContext()


const localStorageData=()=>{
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

function CartProvider({children}) {

      const [cart, setCart]=React.useState(localStorageData())
      const [total, setTotal]=React.useState(0)
      const [cartItem, setCartItem]=React.useState(0)
         
      React.useEffect(()=>{

        localStorage.setItem('cart',JSON.stringify(cart))
          //item total
         let  newCartItem=cart.reduce((total,cartItem)=>{
            return (total +=cartItem.amount)
         },0)
         setCartItem(newCartItem)

         //amount total

         let newAmount=cart.reduce((total,cartItem)=>{
             return (total +=cartItem.amount * cartItem.price)
         },0)
         newAmount=parseFloat(newAmount.toFixed(2))
         setTotal(newAmount)
       
      },[cart])


      //increae amount
      const Increase=(id)=>{
          let increaamount=[...cart].map(data=>{
              return data.id===id?{...data,amount:data.amount+1}:{...data}
          })
          setCart(increaamount)
      }
      //add to cart
      const addCart=({id,title,price,image:{url}})=>{
       
       const item=[...cart].find(item=>item.id===id)

        if(item){
            Increase(id)
        }else{
            const newItem={id,title,price,image:url,amount:1}
            const newCart=[...cart,newItem]

            setCart(newCart)
        }


      }
      
       //increae amount
      const Decrease=(id,amount)=>{
            let decareseamount=[...cart].map(data=>{
              return data.id===id?{...data,amount:data.amount-1}:{...data}
          })
         
          setCart(decareseamount)
          if(amount===1){
              Remove(id)
              return
          }
      } //increae amount
      const Remove=(id)=>{
        const ff=cart.filter(data=>data.id!==id)
        setCart(ff)
      } 
      
      //increae amount
      const ClearCart=()=>{
         setCart([])
      }


    return (
       <CartContext.Provider value={{cart,total,cartItem,Increase,Decrease,ClearCart,Remove,addCart}}>
           {children}
       </CartContext.Provider>
    )
}

export {CartContext,CartProvider}