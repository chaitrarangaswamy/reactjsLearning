import React,{Component} from 'react';
import Child1 from './Child1';

class Parent1 extends Component{
    constructor(){
        super()
        this.state= {
            name:'chaitra'
        }
        this.handelEvent = this.handelEvent.bind(this);
    }

    handelEvent(event){
        this.setState({name:event.target.value})

    }


    render(){
        return(
            <div>
                 Name: <input type="text" name="nameField" 
                 placeholder="name" 
                 value ={this.state.name} 
                 onChange ={this.handelNameEvent} 
                 required/>
                 <Child1 name={this.state.name}/>
            </div>
        )
    }
}

export default Parent1;