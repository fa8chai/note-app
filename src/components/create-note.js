import React, { Component } from 'react';
import addNote from "../actions/add-action";
import {connect} from "react-redux";
import uuidv1 from "uuid";

function mapDispatchToProps(dispatch){
    return{
             addNote:note => dispatch(addNote(note))
    }
}



 class Create extends Component {
    constructor(props){
        super(props);
        this.state={
            title:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
      this.setState({[e.target.id] : [e.target.value]})
    }
    
    onSubmit(e){
        e.preventDefault();
        console.log("Form Submitted");
        var title = this.state.title;
        var id = uuidv1();
        this.props.addNote({title,id})
        console.log("hi");
        this.setState({
            title:''
        })
    }

    render(){
        return (
            <div  style={{width:"80%",margin:"auto"}}>
                
                <form onSubmit={this.onSubmit}>
                    <h4 style={{marginTop:"6rem",color:"white"}}>Today's Note</h4>
                   <div className="form-group">
                      
                      <textarea style={{opacity:"0.9"}} rows="6"  type="text" className="form-control" value={this.state.title}
                      onChange={this.onChange} id="title" required="required" placeholder="write something..."></textarea>
                   </div>

                   
                   
                   <div className="form-group">
                      <input className="btn btn-primary" style={{width:"100%",opacity:"0.9"}} type="submit" value="Add"/>
                   
                   </div>   
                </form>
            </div>
        )
    }
}
const CreateNote = connect(null,mapDispatchToProps)(Create);
export default CreateNote;
