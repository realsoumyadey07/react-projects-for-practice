import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  }
  function handlePrev(){
    setCurrentSlide(currentSlide === 0? images.length-1 : currentSlide-1);
    console.log(currentSlide);
  }
  function handleNext(){
    setCurrentSlide(currentSlide===images.length-1?0: currentSlide+1);
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div className="text-white">Loading data ! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div className="text-white">Error occured ! {errorMsg}</div>;
  }
  return (
    <div className="flex-col">
      <div className="my-8">
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                className="w-[350px] cursor-pointer rounded-lg"
                key={imageItem.id}
                src={index=== currentSlide?imageItem.download_url: null}
              />
            ))
          : null}
      </div>
      <div className="text-center flex items-center">
      <FaArrowLeftLong onClick={handlePrev} className="bg-white text-black rounded-full p-1 text-2xl" />
      <div className="flex">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={`${index===currentSlide?`bg-slate-200`:`bg-slate-400`} m-2  w-4 h-4 cursor-pointer rounded-full `}
                onClick={()=>setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
      <FaArrowRight onClick={handleNext} className=" bg-white text-black rounded-full p-1 text-2xl" />
    </div>
    </div>
  );
}
