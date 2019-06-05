import React from 'react';

class LifeCycleB extends React.Component{

    constructor(){
        super()
       this.state = {
          name:'bindu'
       }
        console.log('LifeCycleB constructor') 
    }

    static getDerivedStateFromProps(props,state){ 
        console.log('LifeCycleB getDerivedStateFromProps',props,state);
        // return null;
        return {name: props.name};
    }

    componentDidMount(){
         // this.setState({name:this.props.name},() => {
        //     console.log(this.state.name)
        // })
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(pevProps,prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null
    }
    componentDidUpdate(prevState,prevProps,snapshot){
        console.log('LifeCycleB componentDidUpdate');
    }


    render(){
      console.log('LifeCycleB render')
       return(
           <div>
               {this.state.name}
            </div>
       )
    }
}

export default LifeCycleB;