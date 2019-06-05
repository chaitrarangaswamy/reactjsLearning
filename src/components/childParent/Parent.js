import React from 'react';
import Child from './Child';

class Parent extends React.Component{
    constructor(props){
        super(props)
        
         this.state = {
             name :'chaitra',
            isLoggedIn:true
         }
         this.parentNameMethod = this.parentNameMethod.bind(this)
    }

    parentNameMethod(child){
        console.log(child)
         alert (`hello ${this.state.name}`)
    }

    render(){
        return(
            <div>
               <Child parentHandler={this.parentNameMethod}/>
            </div>
        )
    }
}

export default Parent 