import React,{Component} from 'react';
import ClickCounter from '../../containers/ClickCounter';
import HoverCounter from '../../containers/HoverCounter';

class Content extends React.Component{
    render(){
        return(
            <div>
                <ClickCounter/>
                <HoverCounter/>

            </div>
        )
    }
}

export default Content;