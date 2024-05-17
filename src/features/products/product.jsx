import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "./productSlice"
import loader from"../../asets/image/b6e0b072897469.5bf6e79950d23.gif"
import "./product.css"
import ProductList from "./ProductList"
import Header from "../../components/Header"

const Product = ()=>{
    const loading=useSelector((state)=>state.product.loading)
    const data=useSelector((state)=>state.product.data)
        console.log({loading,data});
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts())
    },[])

    return(
        <>
        <h1>All product</h1>
        <div className='App'> 
              <Header /> 
          </div>
        <div class="listing-section">
           {loading ? 
                <img src={loader} height={600} width={600} />
           :
           data?.products?.length > 0 ?
           <ProductList
              data={data?.products}
           />
           :
           <div>
            <h1>No porduct found</h1>
           </div>
           }
        </div>
        </>
    )
}

export default Product