import React from 'react';
import { connect } from "react-redux";




const mapStateToProps = state => {
  return { notes: state.notes };
};


const lista = ({ notes }) => (
  
  <ul style={{width:"80%",margin:"auto",opacity:"0.9",marginTop:"6.6rem",textAlign:"center"}} className="list-group list-group-flush">
    <h4 style={{color:"rgb(255,255,0)"}}>NOTES</h4>{
      notes.map(el => (
       
      <li className="list-group-item" key={el.id}>
        
        {el.title}
    
       
      </li>
    ))}
  </ul>
);

 
  
 
     


const List = connect(mapStateToProps)(lista);
export default List;