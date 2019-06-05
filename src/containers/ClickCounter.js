import React,{Component} from 'react';
import UpdatedComponent from '../HOC/withCounter';
import { Button } from 'reactstrap';

class ClickCounter extends React.Component{
    render(){
        const {count,incrementCount} = this.props;
        return(
            <div>
               <Button type="button" onClick={incrementCount}>
                clicked {count}times
                </Button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter);