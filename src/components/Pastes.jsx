import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaShareAlt, FaCopy, FaEye, FaEdit } from "react-icons/fa";
import { removeFromNotes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

export const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // Filter pastes based on the search term
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromNotes(pasteId))
  }


  const handleShareLink = () =>{
    const shareableLink = `${window.location.origin}/pastes/${pastes.paste_Id}`;
    navigator.clipboard
    .writeText(shareableLink)
    .then(() => toast.success("share your link"))
    .catch(() => toast.error("error copying link"))
  }



  return (
    <div className="flex flex-col items-center">
      {/* Search Input */}
      <input
        type="search"
        className="mt-5 w-[90%] h-10 rounded-2xl p-5 border-pink-600 border-2 hover:border-green-600"
        placeholder="Search your notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display Filtered Notes */}
      <div className="mt-5 w-[90%]">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste._id}
              className="p-4 mb-4 border border-gray-300 rounded-lg bg-gray-100"
            >
              <div className="mt-2 flex justify-end gap-2">
                <button title="Edit" className="px-5 py-2 bg-black text-white rounded-lg"
                
                >
                  <a href={`/?pasteId=${paste?._id}`}>
                  <FaEdit />

                  </a>
                 
                </button>
                <button title="View" className="px-5 py-2 bg-green-500 text-white rounded-lg"
                
                >
                  <a href={`/pastes/${paste?._id}`}>
                  <FaEye/>
                  </a>

                 
                </button>
                <button title="Copy" className="px-5 py-2 bg-gray-500 text-white rounded-lg"
                onClick={()=>{
                  navigator.clipboard.writeText(paste.content)
                  toast.success("copied to clipboard !")
                }}
                >
                  <FaCopy/>
                </button>
                <button title="Delete" className="px-5 py-2 bg-red-500 text-white rounded-lg"
                onClick={()=>handleDelete(paste?._id)}
                >
                  <FaTrash/>
                </button>
                <button title="Share" className="px-5 py-2 bg-purple-500 text-white rounded-lg"
                onClick={() => handleShareLink(paste)}
                >
                  <FaShareAlt/>
                </button>
              </div>

              <h2 className="text-xl text-green-600 font-semibold">
                {paste.title.toUpperCase()}
              </h2>
              <p className="text-sm text-gray-700">{paste.content}</p>

              {/* Buttons */}
              
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-5">No matching notes found.</p>
        )}
      </div>
    </div>
  );
};
