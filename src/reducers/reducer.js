import ADD_NOTE from "../constants/index";


const initialState = {
    notes: []
  };
  function rootReducer(state = initialState, action) {
    switch(action.type){
       case ADD_NOTE :
           return (Object.assign({},state,{notes:[action.payload,...state.notes]}));
         
        default: return state

    }
  };


  export default rootReducer;