import { createSlice } from "@reduxjs/toolkit";
import { EntityKeys } from "src/redux/keys";
import { RootState } from "../store";
import { initialState } from "./types";



const slice = createSlice({
    name: EntityKeys.LANG,
    initialState: initialState,
    reducers: {
        logout: () => initialState,
        chnageLang: (state, action) => { state.lang = action.payload },
    },
    extraReducers(builder) {

    },
})
export const selectLang= (state: RootState) => state.lang.lang

const LangSlice = {
    slice,
    logout: slice.actions.logout,
    chnageLang: slice.actions.chnageLang,
}
export default LangSlice