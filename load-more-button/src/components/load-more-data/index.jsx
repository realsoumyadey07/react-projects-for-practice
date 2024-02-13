import React, { useEffect, useState } from 'react'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  async function fetchProducts(){
     try{
          const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
          const result = await response.json();
          console.log(result);
          if (result && result.products && result.products.length){
               setProducts(result.products);
               setLoading(false)
          }
     }catch(e){
          console.log(e);
     }
  }



  useEffect(()=>{
     fetchProducts();
  },[])

  if (loading){
     return <div>Loadibg data ! Please wait.</div>
  }

  return (
    <div className='text-center'>
      <div className='flex flex-wrap justify-center items-center gap-5 p-4'>
          {
               products && products.length ?
               products.map((item)=>(
                    <div className='w-[250px] bor'>
                         <img src={item.thumbnail} alt={item.title} />
                         <p>{item.title}</p>
                    </div>
               )):null
          }
      </div>
      <div className='my-6'>
          <button className='bg-slate-400 text-white py-2 px-4 rounded-lg'>Load more products</button>
      </div>
    </div>
  )
}
