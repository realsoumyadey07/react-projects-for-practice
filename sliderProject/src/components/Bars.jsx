import React, { useState } from "react";
import data from "./data";

export default function Bars() {
  const [itemToShow, setItemToShow] = useState(null);
  const [selectMultiButton, setSelectMultiButton] = useState(false);
  const [multipleId, setMultipleId] = useState([]);

  const handleOpen = (itemId) => {
    setItemToShow(itemToShow !== itemId ? itemId : null);
  };
  const handleMultipleOpen = (itemId) => {
    let copyMultiple = [...multipleId];
    let findInedxOfCurrentId = copyMultiple.indexOf(itemId);
    if(findInedxOfCurrentId === -1) copyMultiple.push(itemId)
    else copyMultiple.splice(findInedxOfCurrentId, 1);
    setMultipleId(copyMultiple);
  };
  return (
    <div>
      <button
        onClick={() => setSelectMultiButton(!selectMultiButton)}
        className="bg-slate-500 rounded-sm text-white py-2 px-3 my-3 hover:bg-slate-400"
      >
        Select multiple
      </button>
      {data &&
        data.map((item) => (
          <div className=" cursor-pointer my-2 py-4 px-3 rounded-md bg-slate-600 hover:bg-slate-500 text-white">
            <div
              className="flex justify-between"
              onClick={() =>
                selectMultiButton
                  ? handleMultipleOpen(item.id)
                  : handleOpen(item.id)
              }
            >
              <h2 className="text-2xl font-bold">{item.question}</h2>
              <span>+</span>
            </div>
            {
               selectMultiButton? multipleId.indexOf(item.id) !== -1 && (<p className="text-left  text-2xl">{item.answer}</p>): itemToShow === item.id &&  (<p className="text-left text-2xl">{item.answer}</p>)
            }
          </div>
        ))}
    </div>
  );
}
