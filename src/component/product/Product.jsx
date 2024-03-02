import React from 'react'
import { useParams } from 'react-router-dom'
import img1 from "./../../assites/blog-img-1.jpeg"
import img2 from "./../../assites/download.jpeg"
import img3 from "./../../assites/images (1).jpeg"
import img4 from "./../../assites/images.jpeg"



export default function Product() {



    const cloces = [
        {
            id:"0",
            titel:"this is buteful brand",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            price:500,
            image:img1,
            },
            {
            id:"1",
            titel:"this is buteful brand",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            price:200,
            image:img2,
            },
            {
            id:"2",
            titel:"this is buteful brand",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            price:300,
            image:img3,
            },
            {
            id:"3",
            titel:"this is buteful brand",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            price:100,
            image:img4,
            },
            {
            id:"4",
            titel:"this is buteful brand",
            desc:"loremloremloremloremloremloremloremloremloremloremlorem",
            price:1000,
            image:img2,
            }
        ]








    let {id} =useParams()
console.log(id);
return <>



    <img src={cloces[id].image} alt="" />


</>
}
