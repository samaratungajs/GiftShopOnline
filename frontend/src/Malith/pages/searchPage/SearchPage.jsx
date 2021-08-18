import CatSidebar from '../../component/SearchPageComponent/ctegorySidebar/CatSidebar'
import Topbar from '../../component/LandingPageComponent/topbar/Topbar'
import ProductCardGrp from '../../component/SearchPageComponent/productList/productListGrp/ProductCardGrp'
import Footer from '../../component/LandingPageComponent/footer/Footer'
import Topcard from '../../component/SearchPageComponent/pricAndSortCard/Topcard'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios' 
export default function SearchPage() {
    const [products, setProducts] = useState([]);
    const [status, setStaus] = useState(false);
    const {search} = useLocation();

    useEffect(() => {
        document.body.style.backgroundColor = "#e8e8e8"
        const fetchProducts = async () =>{
            const res = await axios.get("/abuyer/getallitems" + search);
            console.log(res.data);
            setProducts(res.data)
        }
        fetchProducts();


    }, [search])

    const productsProp=(data)=>{
      setProducts(data);
      setStaus(true);
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

      <Topcard results={products.length} status={status}/>
       <ProductCardGrp products={products}/>
      
        
        </div>
  
        
       
</div>
</div>

<Footer/>
</>
        )
    }
