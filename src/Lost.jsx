import { Link } from "react-router-dom"
export default function Lost(){

    return(
        <div>
            <h1 style={{textAlign:`center`}}>
                Sorry!, Wrong page <br />
                click <Link style={{color:"blue"}} to={"/"}>Home</Link> to return to HomePage
            </h1>
        </div>
    )
}


