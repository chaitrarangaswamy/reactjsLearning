import  React ,{PureComponent} from "react";

class Pure extends PureComponent{
   constructor(props){
       super(props)
   }

    render(){
        console.log('render pure component')
        return(
            <div> pure component {this.props.name} </div>
        )
    }
}

export default Pure