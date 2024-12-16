import React, { useState, useEffect } from 'react'
import {SiNike, SiAdidas, SiEthereum, SiZomato, SiVolkswagen, SiPuma, SiAltiumdesigner, SiBigbasket, SiGatsby, SiZara, SiXiaohongshu, SiKodak} from 'react-icons/si'
import Hero from './Hero.jsx'
import img2 from '../assets/hero-img-2.jpg'
import img3 from '../assets/hero-img-3.jpg'
import chillpic from '../assets/chill-pic.jpg'
import shoe from '../assets/shoe.png'
import watch from '../assets/watch.png'
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
        <div className='mt-20 p-6 m-4 flex justify-center items-center flex-col'>
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
                            <div className='p-6 my-6 w-full hover:scale-105 duration-500 rounded-xl shadow-md'>
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

            <div className='w-4/5 h-[400px] mt-16 flex flex-col'>
            <h2 className='font-semibold text-4xl mb-8'>Featuring Brands</h2>
                <div className='grid grid-cols-6 gap-12'>
                    <SiNike className='w-52 h-32 p-6  border border-gray-200' />
                    <SiAdidas className='w-52 h-32 p-6 border border-gray-200' />
                    <SiEthereum className='w-52 h-32 p-6 border border-gray-200' />
                    <SiZomato className='w-52 h-32 p-6 border border-gray-200' />
                    <SiVolkswagen className='w-52 h-32 p-6 border border-gray-200' />
                    <SiPuma className='w-52 h-32 p-6 border border-gray-200' />
                    <SiAltiumdesigner className='w-52 h-32 p-6 border border-gray-200' />
                    <SiBigbasket className='w-52 h-32 p-6 border border-gray-200' />
                    <SiGatsby className='w-52 h-32 p-6 border border-gray-200' />
                    <SiZara className='w-52 h-32 p-6 border border-gray-200' />
                    <SiXiaohongshu className='w-52 h-32 p-6 border border-gray-200' />
                    <SiKodak className='w-52 h-32 p-6 border border-gray-200' />
                </div>
            </div>
            
            <div className='w-4/5 h-[700px] mt-16 p-4 gap-8 flex flex-row'>
                <div className='w-2/5 h-full relative' >
                    <img src={chillpic} className='object-cover rounded-lg h-full w-full'></img>
                    <div className='absolute text-gray-800 bg-white px-2 text-4xl font-bold top-[12%] left-2 ml-8 '>Confidence is in the look.</div>
                </div>
                <div className='w-3/5 h-full flex flex-col gap-4'>
                    <div className='w-full h-1/2 flex flex-row border-gray-300 border rounded-lg'>
                        <img src={watch} className='w-full h-full object-contain'></img>
                        <div className='p-4 m-2 flex flex-col items-center justify-center gap-8 '>
                            <p className='text-4xl text-gray-700 font-bold '>Watches like no other</p>
                            <button className='px-4 py-2 w-36 self-start bg-blue-400 font-bold text-lg  hover:bg-blue-300 hover:scale-105 duration-200 text-white rounded-md'>Shop Now</button>
                        </div>
                    </div>
                    <div className='w-full h-1/2 flex flex-row border-gray-300 border  rounded-lg'>
                         <div className='p-4 m-2 flex flex-col items-center justify-center gap-8 '>
                            <p className='text-4xl text-gray-700 font-bold '>Explore our shoes collection.</p>
                            <button className='px-4 py-2 w-36 self-start bg-blue-400 font-bold text-lg hover:bg-blue-300 hover:scale-105 duration-200 text-white rounded-md'>Shop Now</button>
                        </div>
                        <img src={shoe} className='w-full h-full object-contain'></img>
                        
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Home
