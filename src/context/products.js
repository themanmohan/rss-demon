import React from 'react'
import axios from 'axios'
import url from '../utils/URL'
const ProductContext=React.createContext()
const  ProductProvider=({children})=>{
   
   const [loading,setLoading]=React.useState(false)
    const [products,setPrdouct]=React.useState([])
     const [featuredProduct,setFeaturedProduct]=React.useState([])


     //featured product 
     const featuredProducts=(product)=>{
        
      return  product.filter(data=>{
            return data.featured===true
        })
     }


    React.useEffect(() => {
        setLoading(true)
      axios.get(`${url}/products`).then(product=>{
          
          const featured=featuredProducts(product.data)
          setFeaturedProduct(featured)
          setPrdouct(product.data)
          setLoading(false)
       })
       
       
       return ()=>{}
     }, [])
    return(
        <ProductContext.Provider value={{loading,products,featuredProduct}}>
         {children}
        </ProductContext.Provider>
    )

    
}
export {ProductContext,ProductProvider}