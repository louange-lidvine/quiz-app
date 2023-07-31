// import PropTypes from 'prop-types'
import Button from './button'


export default function Header({title}){
    return(
        <Header className="container">
            {/* <h1 style={{color:'red', backgroundColor:'black' }}>{props.title}'s task tracker</h1> */}
            {/* <h1 style={headingStyle}> {props.title}'s task tracker</h1> */}
            <h1>{title}'s task tracker</h1>
            <Button
            color="red"
            text="hello"
            />  
             <Button
            color="blue"  
            text="holla"
            />
             <Button
            color="purple"
            text="yolla"
            />


            
           
            </Header>

    )
}
// const headingStyle={
//     color:'red' ,
//     backgroundColor:'black',
// }
// Header.defaultProps={
//     title:09,
//   }
//   Header.propTypes={
//     title:PropTypes.string.isRequired
//   }