import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialvalue = {
     MenuSectionStyle:"col-lg-2",
    ActionSectionStyle :"col-lg-10" ,
    menuStyle:""

}

const MenuStyleSlice =  createSlice({
    name:"menuStyle",
    initialState:initialvalue,
    reducers:{
        slideMenu:(state, action)=>{
            if(state.ActionSectionStyle=="col-lg-10"){
                state.MenuSectionStyle ="left-section"
                state.ActionSectionStyle="col-lg-11"
                state.menuStyle="close-menu"
                    }
                    else{
                        state.MenuSectionStyle="col-lg-2"
                      state.ActionSectionStyle="col-lg-10"
                      state.menuStyle=""
                  
                    }
        }
    }
  
})
export const {slideMenu} = MenuStyleSlice.actions;
export default MenuStyleSlice.reducer;