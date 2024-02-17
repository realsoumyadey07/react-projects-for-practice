import React, { useEffect, useState } from 'react'

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  async function fetchProducts(){
     try{
          setLoading(true);
          const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
          const result = await response.json();
          console.log(result);
          if (result && result.products && result.products.length){
               setProducts((prevData)=> [...prevData, ...result.products]);
               setLoading(false);
          }
     }catch(e){
          console.log(e);
          setLoading(false);
     }
  }



  useEffect(()=>{
     fetchProducts();
  },[count])
  useEffect(()=>{
     if( products && products.length === 100 ) setDisableButton(true);
  },[ products ])


  if (loading){
     return <div className='text-center'>Loadibg data ! Please wait.</div>
  }

  return (
    <div className='text-center'>
      <div className='flex flex-wrap justify-center items-center gap-5 p-4'>
          {
               products && products.length ?
               products.map((item)=>(
                    <div key={item.id} className=' w-[350px] h-[350px] border-solid border-2 border-gray-200 py-5'>
                         <img className='w-[300px] h-[250px] m-auto' src={item.thumbnail} alt={item.title} />
                         <p>{item.title}</p>
                    </div>
               )):null
          }
      </div>
      <div className='my-6'>
          <button disabled={disableButton} onClick={()=> setCount(count+1)} className={`bg-slate-400 text-white py-2 px-4 rounded-lg  ${disableButton?'bg-slate-300':'hover:bg-slate-500'}`}>Load more products</button>
          {
               disableButton ? <p>You have reached to 100 products</p>: null
          }
      </div>
    </div>
  )
}
