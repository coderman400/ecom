import React from 'react'
import Hero from './Hero.jsx'
import { useState, useEffect } from 'react'
const Home = () => {
    const [products, setProducts] = useState([])
    async function getPosts(){
        const url = 'https://fakestoreapi.com/products'
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(response.status)
            }
            let products = await response.json();
            products = products.filter((product)=>product.category!='electronics')
            setProducts(products)
        }catch(error){
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getPosts()
    },[])
  return (
    <div className='mt-10 p-4 m-4 flex justify-center items-center flex-col '>
        <Hero />
        <div className='w-4/5 mt-8'>
            <h2 className='font-semibold text-4xl my-4'>New Arrivals</h2>
            <div className='grid grid-cols-5 gap-y-3'>
                {products.map((product, index) => (
                    <div key={index} className='w-3/4 h-[480px] hover:scale-110 hover:shadow-2xl duration-500 rounded-xl shadow-lg '>
                        <img className='m-4 h-[340px] w-4/5 object-contain' src={product.image}></img>
                        <div className='h-12 w-full p-2'>
                            <div className='mt-4 mb-1 font-semibold'>{product.title.slice(0,30)}{product.title.length>30 && '..'}</div>
                            <div>${product.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Home