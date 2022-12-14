import { Link } from "react-router-dom"

const Landing = ()=>{
    return(<div>
        <h1 className="">Landing</h1>
        <Link to='/main'>
        <button>Home</button>
        </Link>
    </div>)
}
export default Landing