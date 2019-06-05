import  React  from "react";

class Regular extends React.Component{
   constructor(props){
       super(props)
   }

    render(){
        console.log('render regular class component')
        return(
            <div> regular component {this.props.name} </div>
        )
    }
}

export default Regular