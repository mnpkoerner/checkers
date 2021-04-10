import {useHistory} from 'react-router-dom'

export default function Spike() {
    const history = useHistory()
    return (
        <div>
            <h1>Spike</h1>
            <button onClick={()=>history.push('/')}>Go To Home</button>
        </div>
    )
}
