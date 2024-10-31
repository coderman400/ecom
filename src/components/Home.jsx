import React, { useState, useEffect } from 'react'
import Hero from './Hero.jsx'
import img2 from '../assets/hero-img-2.jpg'
import img3 from '../assets/hero-img-3.jpg'
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
            products = products.filter((product) => product.category !== 'electronics')
            setProducts(products)
        }catch(error){
            console.log(error.message)
        }
    }

    useEffect(()=>{
        getPosts()
    },[])

    return (
        <div className='mt-10 p-4 m-4 flex justify-center items-center flex-col'>
            <Hero />
            <div className='w-4/5 mt-8'>
                <div className='flex flex-row justify-between'>
                    <h2 className='font-semibold text-4xl my-4'>New Arrivals</h2>
                    <button className='text-lg text-blue-700 hover:text-blue-400 duration-100'>See all..</button>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{delay:3000, disableOnInteraction:false}}
                    speed={1000}
                    oneWayMovement={true}
                >
                    {products.map((product, index) => (
                        <SwiperSlide className='mb-8' key={index}>
                            <div className='p-4 my-6 w-full hover:scale-105 duration-500 rounded-xl shadow-md'>
                                <img className='m-4 h-[250px] w-full object-contain' src={product.image} alt={product.title} />
                                <div className='h-12 w-full'>
                                    <div className='mt-4 mb-1 font-semibold'>{product.title.slice(0,30)}{product.title.length > 30 && '...'}</div>
                                    <div>${product.price}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='w-4/5 h-[400px] mt-16 flex flex-row'>
                <div className='w-1/2 h-full mr-4 rounded-lg relative bg-yellow-300 hover:scale-105 duration-1000'> 
                    <img className='w-full h-full rounded-lg object-cover opacity-70 hover:opacity-95 duration-700' src={img2} alt="Featured Deals" />
                    <div className='absolute bottom-[8%] left-[5%] rounded-lg font-bold md:text-6xl sm:text-4xl p-2 text-white'>Featured Deals</div>
                </div>
                <div className='w-1/2 ml-4 h-full rounded-lg relative bg-gray-500 hover:scale-105 duration-1000'> 
                    <img className='w-full h-full rounded-lg object-cover -scale-x-100 opacity-70 hover:opacity-95 duration-700' src={img3} alt="Biggest Trends" />
                    <div className='absolute top-[14%] right-[5%] rounded-lg font-bold md:text-5xl sm:text-4xl p-2 text-white'>Biggest Trends</div>
                </div>
            </div>
        </div>
    )
}

export default Home
