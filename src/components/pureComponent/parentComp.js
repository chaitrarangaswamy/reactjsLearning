import  React  from "react";
import Pure from './pure';
import Regular from './regular';

class ParentComp extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           name : 'chaitra'
       }
   }

   componentDidMount(){
    setInterval(() => {
        this.setState({name:'chaitra'})
    },2000)

   }

    render(){
        console.log('render parentComp')
        return(
            <div> 
                <Pure name={this.state.name}/> 
                <Regular name={this.state.name}/> 
            </div>
        )
    }
}

export default ParentComp