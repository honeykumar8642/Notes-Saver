
import React, { useEffect } from "react";

import {useParams} from "react-router-dom";
import { useSelector } from "react-redux";




const ViewonePaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.filter((p) => p._id === id)[0]

  return (
    <div className="flex justify-center  flex-col">
      <div className="flex place-content-evenly ">
        <input
          className="w-[60%] mt-5 h-10 rounded-lg p-4 border-pink-600 border-2 hover:border-green-600 hover:border-2"
          type="text"
          disabled
          placeholder="Enter Your Note Name :"
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />

        
      </div>

      <textarea
        className="mt-5 m-10 border-2 border-green-600 rounded-xl p-4 "
        placeholder="enter your text"
        rows={20}
        disabled
        value={paste.content}
        onChange={(e)=>setValue(e.target.value)}
      ></textarea>
    </div>
  )
}

export default ViewonePaste