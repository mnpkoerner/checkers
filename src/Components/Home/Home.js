import {useHistory} from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    return (
        <div>
            <h1>Home</h1>
            <button onClick={()=>history.push('/spike')}>Go to Spike</button>
        </div>
    )
}
