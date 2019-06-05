import React,{Component} from 'react';
import UpdatedComponent from '../HOC/withCounter';

class HoverCounter extends React.Component{
    render(){
        const {count,incrementCount} = this.props;
        return(
            <div>
               <h2 onMouseOver = {incrementCount}>
               hovered {count} times</h2>

            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);