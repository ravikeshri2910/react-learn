import './Card.css'

const Card=(props) =>{

    const classes = 'card ' + props.className //this is to get the new class in the dom

    return (<div className= {classes}> {props.children} </div>)

    // props.children is use to get new element in cosdimised div
}

export default Card