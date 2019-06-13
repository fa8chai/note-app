import ADD_NOTE from "../constants/index";


function addNote (payload){
return {
    type:ADD_NOTE,
    payload
}
}

export default addNote;