import {useHistory} from 'react-router-dom'

//spike goal: build a 3x3 grid
//place two checkers on the grid
//console.log when one checker jumps another
//use Framer Motion

export default function Spike() {
    const history = useHistory()
    return (
        <div>
            <h1>Spike</h1>
            <button onClick={()=>history.push('/')}>Go To Home</button>
        </div>
    )
}
