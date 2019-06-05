import React from 'react';

class ConditionalRendering extends React.Component{

    constructor(){
        super()
        this.state={
            isLoggedIn : false
        }
    }

    render(){

        return  this.state.isLoggedIn ?     //ternary approach
        (
          <div>welcome chaitra </div>
        ):
           (
           <div>logged out</div>
        )



        // let message 
        // if(this.state.isLoggedIn) {
        //     message = <p>welcome chaitra</p>
        // }
        // else {
        //     message = <p>logged out </p>
        // }
        // return(
        //     <div>
        //     {message}
        //     </div>
        // )


        //  if(this.state.isLoggedIn){               //this approach is bit clumsy
        //     return (<p>welcome chaitra</p>)
        //  }
        //  else {
        //       return (<p>logged out </p>)
        //  }
        
    }
}

export default ConditionalRendering;