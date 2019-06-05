import React,{Component} from 'react';

import { Container, Col } from 'reactstrap';

import './Home.css';

//import About from './views/About'; // before lazy

//const About = React.lazy(() => import('./views/About'));

 
const initialState = {
                    name:"",
                    email:'',
                    password:'',
                    nameError:'',
                    emailError:'',
                    passwordError:''
                }

               

class Home extends Component{
   constructor(props){

    super(props);

    this.state = initialState;

    this.handelNameEvent = this.handelEvent.bind(this,'name');
    this.handelEmailEvent = this.handelEvent.bind(this,'email');
    this.handelPasswordEvent = this.handelEvent.bind(this,'password');
    this.handelClick = this.handelClick.bind(this);

    }

    handelEvent(key,event){
                //console.log(key,event)
                this.setState({[key]:event.target.value},() =>{
                    localStorage.setItem("token", this.state.email);
                })
                //console.log(event.target.value)
                //console.log(this,e)
    }
    validate = () => {
    let emailError = "";
    let nameError = "";
        if(!this.state.email.includes('@')){
        emailError = "invalid Email";
        }

        if(!this.state.nameError){
        nameError = "please enter name"
        }

        if(emailError || nameError){
            this.setState({emailError,nameError});
            return false;
        }                

        /* if(passwordError){
                        this.setState({passwordError});
                        return false;
        }
        if(this.state.passowrd !== "undefined"){
             if(!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                 passwordError = "enter a strong password";
                this.setState({passwordError})
                return false;
            }
        } */

        return true;
    }

    handelClick(event){
      console.log("submit called")
        //alert('name:' + this.state.name);
        event.preventDefault();
        const isValid = this.validate()
          if(isValid){
            console.log(this.state);
             //clear form if no error
            this.setState(initialState)
          }
        if(localStorage.token){
            console.log(localStorage.token,"+++")
            this.props.history.push('/dashboard');

        }            
    }

    render(){
      console.log("home render called")
        return(

           <div>
                <form onSubmit={(e) => this.handelClick(e)} className="formBorder" noValidate>
                     <div><b>Sign up</b></div>
                          <Container className="containerClass">

                            <Col md="12">
                            Name: <input type="text" name="nameField" placeholder="name" value ={this.state.name} onChange ={this.handelNameEvent} required/>
                            </Col>

                            <div style={{color:'red'}}>{this.state.nameError}</div>
                            
                            <Col md="12">
                             Email: <input type="email" name="email" placeholder="email" value={this.state.email} onChange ={this.handelEmailEvent} required/>
                            </Col>
                           
                            <div style={{color:'red'}}>{this.state.emailError}</div>
                            
                            <Col md="12">
                            Password: <input type="password" name="password" placeholder="password" value = {this.state.password} onChange = {this.handelPasswordEvent} required/>
                            </Col>
                            
                            <div style={{color:'red'}}>{this.state.passwordError}</div>

                          <button type="submit" value="submit">submit</button>

                       </Container>

        
                </form>
            </div>

        )

    }
}

export default Home