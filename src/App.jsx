
import Welcome from "./Components/Welcome" ;
// createing components and passing props

const App = ()=>{
const age =25
    return(
        <div>
            <h3>Greetings</h3>
            <Welcome name = 'Dinesh' age ={25+5}/>
            <Welcome name = 'Kumaran' age={age} />
        </div>
    )
}

export default App;