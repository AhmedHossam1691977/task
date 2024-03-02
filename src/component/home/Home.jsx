
import img1 from "./../../assites/img/0590be27179342fdf898f784a0e9e9d7.jpg"
import img2 from "./../../assites/img/2d7066f12edaefcbe0c98f8f53d69cd3.jpg"
import img3 from "./../../assites/img/5053375e9ec064ed695abc5a6feaa4d4.jpg"
import img4 from "./../../assites/img/5934d38e7aee5dd9dcd7c444fc4cb6db.jpg"
import img5 from "./../../assites/img/bc93699607dde622eaedd49d81e95eff.jpg"


import g1 from "./../../assites/img/g-1.jpg"
import g2 from "./../../assites/img/g-2.jpg"
import g3 from "./../../assites/img/g4.jpg"
import g4 from "./../../assites/img/g-5.jpg"


import 'animate.css';


import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from "jquery"
import { Link, useParams } from "react-router-dom"






export default function Home() {


  const cloces = [
    {
        id:"0",
        name:"TUXEDO SUIT-BLACK-PEAK LAPEL",
        titel:"this is buteful brand",
        desc:"loremloremloremloremloremloremloremloremloremloremlorem",
        price:500,
        image:img1,
        info1:"BLACK TUXEDO SUIT"
      },
      {
        id:"1",
        name:"TUXEDO SUIT-BLACK-PEAK LAPEL",
        titel:"this is buteful brand",
        desc:"loremloremloremloremloremloremloremloremloremloremlorem",
        price:200,
        image:img2,
      },
      {
        id:"2",
        name:"TUXEDO SUIT-BLACK-PEAK LAPEL",
        titel:"this is buteful brand",
        desc:"loremloremloremloremloremloremloremloremloremloremlorem",
        price:300,
        image:img3,
      },
      {
        id:"3",
        name:"TUXEDO SUIT-BLACK-PEAK LAPEL",
        titel:"this is buteful brand",
        desc:"loremloremloremloremloremloremloremloremloremloremlorem",
        price:100,
        image:img4,
      },
      {
        id:"4",
        name:"TUXEDO SUIT-BLACK-PEAK LAPEL",
        titel:"this is buteful brand",
        desc:"loremloremloremloremloremloremloremloremloremloremlorem",
        price:1000,
        image:img5,
      }
  ]


  const acicoris = [
    {
      id:"1",
      titel:"this is buteful brand",
      desc:"loremloremloremloremloremloremloremloremloremloremlorem",
      price:500,
      image:g1,
    },
    {
      id:"2",
      titel:"this is buteful brand",
      desc:"loremloremloremloremloremloremloremloremloremloremlorem",
      price:200,
      image:g2,
    },
    {
      id:"3",
      titel:"this is buteful brand",
      desc:"loremloremloremloremloremloremloremloremloremloremlorem",
      price:300,
      image:g3,
    },
    {
      id:"4",
      titel:"this is buteful brand",
      desc:"loremloremloremloremloremloremloremloremloremloremlorem",
      price:100,
      image:g4,
    },

  ]

  function handleClick(){
    $(".ditelse").fadeIn(1000,()=>{
      $('.imgg').css("left","100px")
    })

}

function close(){
  $(".ditelse").fadeOut(1000,()=>{
    $('.imgg').css("left","550px")
  })

}


let {id} =useParams()

  return <>
  
  <div className="container-fluid home-bg ">
  <div className="container text">
    <div className="row px-5">
      <div className="col-md-12 d-flex align-item-center text-center ">
        <div className='m-auto'>
        <h1 className='fw-bolder text-white toxe-font' data-aos="fade-down"data-aos-easing="linear"data-aos-duration="1000">Tuxedo</h1>
        <p className='fw-bolder text-white  fs-2' data-aos="fade-up"data-aos-easing="linear"data-aos-duration="1000">When Elegance Seek Perfection</p>
        <img src="" alt="" />
        </div>
      </div>

      <div className="col-md-12 py-5 ">
          <div className=''>
              






 <OwlCarousel data-aos="fade-left"data-aos-easing="linear"data-aos-duration="1000" className='owl-theme py-3' autoplay autoplayTimeout={5000} dots={false} items={4} loop >
    {cloces.map((item)=>{
      return<>
      
      <div class='item  '>
      <div className='w-100  d-flex align-item-center justify-content-center w-100'>
      <div className='card text-black'>
          <img className='image' src={item.image} alt="" />
          <button onClick={ handleClick  }   className='btn text-danger text-white w-100'><Link className="text-white" to={"/home/" +item.id}>quick visit</Link></button>
          <p>{item.titel}</p>
          <p className='fw-bolder'>PE : {item.price} $</p>
          </div>
      </div>
    </div>
      

      </>
    })}
    

</OwlCarousel> 

                  








<OwlCarousel data-aos="fade-right"data-aos-easing="linear"data-aos-duration="1000" className='owl-theme border bor py-5' autoplay autoplayTimeout={3000} dots={false} items={4} loop >
          {acicoris.map((val)=>{
              return<>
              <div className='item px-5'>
              <img  className='w-100 ScSlider' src={val.image} alt="" />
              </div>
            </>
          })}
        </OwlCarousel>


              
          </div>
        </div>
    </div>
  </div>
  </div>





  <div className="container-fluid ditelse">
        <div className="container ">
          <div className="row d-flex position-relative align-content-center justify-content-center" >
            
            <div className="col-md-6 imgg d-flex align-content-center justify-content-center" >

              <img className="w-75 " src={cloces[id].image} alt="" />

            </div>
            <div className="col-md-6   bg-white hh position-relative" >
              <button onClick={close}  className="close fw-bolder">x</button>
              <div className="detelsee ">
                <p className="w-100 fw-bolder fs-1 im" >{cloces[id].name } </p>
                <p className="fw-bolder fs-2">LE : {cloces[id].price}</p>
                <ul>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                  <li>{cloces[id].info1}</li>
                </ul>
                <div className=" d-flex align-content-center justify-content-center">
                  <p className="p-3 text-center">CHOOSE SIZE</p>
<div>
<select className="p-3">
  <option value="">Choose an option</option>
  <option value="46">46</option>
  <option value="48">48</option>
  <option value="50">50</option>
  <option value="52">52</option>
  <option value="54">54</option>
  <option value="56">56</option>
  <option value="58">58</option>
  <option value="60">60</option>
  <option value="62">62</option>
</select>
</div>
                </div>

                <button  className="cart-btn"><Link to={"/cart/"+id}>add cart</Link></button>
              </div>
            </div>
          </div>
        </div>
  </div>


  </>
}
