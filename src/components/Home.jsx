import React, { useEffect } from "react";
import { useState} from "react";
import {useSearchParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToNotes, upadteToNotes } from "../redux/pasteSlice";




const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state)=>state.paste.pastes);

  useEffect(() => {
    if(pasteId){

      const paste = allPastes.find((p)=> p._id === pasteId)
      setTitle(paste.title);
      setValue(paste.content);

    }
    
    
  }, [pasteId])
  

  function createNotes(){
    const paste = {
      title : title,
      content : value,
      _id : pasteId || Date.now().toString(36),
      createdAt : new Date().toISOString(),
    }

    if (pasteId) {
      // Update the notes
      dispatch(upadteToNotes(paste)); 
      
    } else {
      // Create a new note
      dispatch(addToNotes(paste)); 
      
    }

    setTitle(""),
    setValue(""),
    setSearchParams({})

  }
  return (
    <div className="flex justify-center  flex-col">
      <div className="flex place-content-evenly ">
        <input
          className="w-[60%] mt-5 h-10 rounded-lg p-4 border-pink-600 border-2 hover:border-green-600 hover:border-2"
          type="text"
          placeholder="enter your title here.... "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="bg-pink-700 rounded-2xl mt-5 h-10 font-semibold p-2"
          onClick={createNotes}
        >
          {
            pasteId ? "Update My Notes" : "Create My Notes"
          }
        </button>
      </div>

      <textarea
        className="mt-5 m-10 border-2 border-green-600 rounded-xl p-4 "
        placeholder="write your notes"
        rows={24}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Home;
