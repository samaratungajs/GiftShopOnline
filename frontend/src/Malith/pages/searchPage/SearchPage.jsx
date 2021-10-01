import CatSidebar from '../../component/SearchPageComponent/ctegorySidebar/CatSidebar'
import Topbar from '../../component/LandingPageComponent/topbar/Topbar'
import ProductCardGrp from '../../component/SearchPageComponent/productList/productListGrp/ProductCardGrp'
import Footer from '../../component/LandingPageComponent/footer/Footer'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios' 
export default function SearchPage() {
    const [products, setProducts] = useState([]);
    const [status, setStaus] = useState(false);
    const [pUpper, setPupper] = useState("");
    const [pLower, setPlower] = useState("");
    const {search} = useLocation();

    useEffect(() => {
        document.body.style.backgroundColor = "#e8e8e8"
        const fetchProducts = async () =>{


            const res = await axios.post("/abuyer/getallitems" + search);
            setProducts(res.data)
        }

        if(pUpper && pLower){
          handleChange();
        }
        else{
          fetchProducts();
        }
        
        

    }, [search, pUpper,pLower])




    const productsProp=(data)=>{
      
      setProducts(data);
      setStaus(true);
    }
    

    const clearAll=async () =>{
      setPlower("");
      setPupper("");
      window.location.reload();
    }



    const handleChange=async ()=>{
       if(pUpper && pLower && search){
        const price = `${search}&pLower=${pLower}&pUpper=${pUpper}`
        const res = await axios.post("/abuyer/getallitems" + price);
        setProducts(res.data)
       }
      else{
        const price = `?pLower=${pLower}&pUpper=${pUpper}`
        const res = await axios.post("/abuyer/getallitems" + price);
        setProducts(res.data)
       }   
        
    }

        return (
            <>
            <Topbar prodProp={productsProp}/>
            <div class="container-fluid p-4 mt-50 mb-50" style={{fontFamily:"'Poppins', sans-serif"}}>
       
            

    <div class="row">

    <div class="col-sm-3 col-lg-2">
        
        <CatSidebar/>

    </div>






  <div class="col-sm-9 col-lg-10 p-4" >

     
     



  <div className="row px-2">
      <div className="card">
        <div className="card-body">
          {products.length && status &&<h5 className="mt-2 text-warning">Showing {products.length} resualts found...</h5>}
          <div className="d-flex justify-content-between align-items-center">
          <div className="d-inline-flex">
                    <p className="h-5 pt-2 mx-2">Price Range </p>
                    <input type="number" placeholder="min" min="0" max="120000" name="pUpper" onChange={e=> setPlower(e.target.value)} value={pLower} className="ApriceRangeBox"/><b className="mt-2">-</b>
                   <input type="number" placeholder="max" min="0" max="120000" name= "pLower" onChange={e=> setPupper(e.target.value)} value={pUpper} className="ApriceRangeBox" style={{marginLeft:"8px"}}/>
                   
                </div>
            

                <div className="d-inline-flex">
                <button  type="button" onClick={()=>clearAll()} class="btn btn-success">Clear All</button>
                </div>
</div>

                </div>
  </div>
  </div>










       <ProductCardGrp products={products}/>
      
        
        </div>
  
        
       
</div>
</div>

<Footer/>
</>
        )
    }
