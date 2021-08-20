import { createSlice } from "@reduxjs/toolkit";
import * as operations from '../operations';

const initialState = {
    entities: [],
    status: null,
    error: null,
};

const contactsSlice = createSlice({
      name: 'contacts',
      initialState,
    extraReducers: {
        [operations.fetcContacts.fulfilled](state, action) {
            state.entities = action.payload;
                // status: null,
                // error: null,
        },
       [operations.fetcContacts.pending](state, action) { 
            return {
                ...state,
                status: 'Loading',
                error: null,
            }
        },
        [operations.fetcContacts.rejected](state, action) { 
            return {
                ...state,
                status: null,
                error: 'Error',
            }
        },
        [operations.postContacts.fulfilled](state, action) {
            // state.entities = state.entities.push(action.payload);
            //    entities: [...state.entities, ...action.payload],
            console.log(state.entities)
            return { 
                ...state,
                entities: state.entities.push(action.payload),
                status: null,
                error: null,
            }
        },
        [operations.postContacts.pending](state, action) { 
            return {
                ...state,
                status: 'Loading',
            }
        },
        [operations.postContacts.rejected](state, action) { 
            return {
                ...state,
                status: null,
                error: 'Error',
            }
        },
        [operations.deleteContacts.fulfilled](state, action) {
            return {
                ...state,
                entities: state.entities.filter((item) => item.id !== action.payload),
                status: null,
                error: null,
            }
        },
       [operations.deleteContacts.pending](state, action) { 
            return {
                ...state,
                status: 'Loading',
                error: null,
            }
        },
        [operations.deleteContacts.rejected](state, action) { 
            return {
                ...state,
                status: null,
                error: 'Error',
            }
        },
    }
});

export default contactsSlice.reducer;