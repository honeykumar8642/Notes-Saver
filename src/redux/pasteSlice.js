import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const paste = action.payload;
      const isDuplicate = state.pastes.some((p) => p.title === paste.title);
      if (isDuplicate) {
        toast.error("title is already exists.");
        return;
      } else {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("Note created successfully");
      }
    },
    upadteToNotes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) =>{
        item._id === paste._id
      })
      if(index >= 0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("updated sucessfully!")
      }

    },
    resetAllNotes: (state, action) => {
      state.pastes= [];
      localStorage.removeItem("pastes");

      toast.error("reset successfully!")


    },
    removeFromNotes: (state, action) => {
        const pasteId = action.payload;
        console.log(pasteId)
        const index = state.pastes.findIndex((item)=>item._id===pasteId);
        if(index>= 0){
          state.pastes.splice(index,1);
          localStorage.setItem("pastes",JSON.stringify(state.pastes));
          toast.success("Note deleted")
        }
    },
  },
});

export const { addToNotes, upadteToNotes, resetAllNotes, removeFromNotes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
