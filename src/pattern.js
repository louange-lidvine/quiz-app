import React from "react";
import Calendar from "./calendar";
import Color from "./colors";
import PropTypes from 'prop-types'
import Items from "./items";
import Welcome from "./welcome";
 export default function Patterns(){
    // const CurrentData=(props) => <p>the date is,{props.date}</p>

    return(
        <div className="div"> 
        <Calendar
             date={Date()}
        />
        <Color
        colors={['red','green','white']}
        />
        <Items
        quantity="hello"
        />
        <Welcome
        name='loulou'
        />
        </div>
       
    )
 }
 Patterns.defaultProps={
    colors:['pink','purple','violet'],
   
}
Patterns.propTypes={
    quantity:PropTypes.number.isRequired
}
    
/* <Patterns>

// 
<Color colors={[Blue,yellow,green]}/>
</Patterns>
      
    const Color=(props)=><p>the colors are {props.colors}</p>
    export default Color; */
    // class Mycomponent extends React.Component{
    //     constructor(props){
    //     super(props);
    //     }
    //     render(){
    //         return(
    //             <h1>Hi am using react</h1>
    //         )
    //     }
    // }
   