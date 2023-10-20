const Welcome =(props)=>{
    // console.log(props);
    return(
        <div>
            <p>Welcome to my website! {props.name},your age is{props.age}</p>
        </div>
    )
}

export default Welcome;