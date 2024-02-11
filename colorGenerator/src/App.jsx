import React, { useState } from "react";
import StarRating from "./star-rating/StarRating";
import ImageSlider from "./image-slider";

export default function App() {
  const [typeOfColor, setTypeOfColor] = useState(null);
  const [color, setColor] = useState("#000000");
  function handleCreateRandonHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
    let hexColor = '#';
    for(let i=0;i<6;i++){
      hexColor += hex[~~(Math.random()*14)];
    }
    setColor(hexColor);
    setTypeOfColor("hex color is : ");
    console.log(hexColor);
  }
  function handlCreateRandomRGBColor(){
    let r = ~~(Math.random()*255);
    let g = ~~(Math.random()*255);
    let b = ~~(Math.random()*255);
    let hexRGB = `rgb(${r}, ${g}, ${b})`
    console.log(hexRGB);
    setColor(hexRGB);
    setTypeOfColor("RGB color is : ");
  }
  function handlCreateRandom(){

  }
  return (
    <div style={{background: color, width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}} className="flex-col">
      <div>
        <button onClick={handleCreateRandonHexColor} className="my-2 w-64 bg-slate-400 rounded-md py-2 px-5 text-white hover:bg-slate-500">
          Generate HEX color
        </button>
      </div>
      <div>
        <button onClick={handlCreateRandomRGBColor} className="my-2 w-64 bg-slate-400 rounded-md py-2 px-5 text-white hover:bg-slate-500">
          Create RGB color
        </button>
      </div>

      <button onClick={handlCreateRandom} className="my-2 w-64 bg-slate-400 rounded-md py-2 px-5 text-white hover:bg-slate-500">
        Generate random color
      </button>
      <h2 className="m-4 border-white text-white">{typeOfColor} {color}</h2>

      <StarRating noOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
    </div>
  );
}
