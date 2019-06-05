import React from 'react';
import LifeCycleB from './lifeCycleB';

class LifeCycleA extends React.Component{

    constructor(){
        super()
        this.state = {
            name:'chaitra'
        }
        console.log('LifeCycleA constructor') 
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(pevProps,prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(prevState,prevProps,snapshot){
        console.log('LifeCycleA componentDidUpdate');
    }

    handelClick = () =>{
        this.setState({name:'pooja'})
      }
   
    render(){
      console.log('LifeCycleA render')
       return(
           <div>
               <button type="button" onClick={this.handelClick}>click</button>
               <LifeCycleB name={this.state.name}/>
            </div>
       )
    }
}

export default LifeCycleA;