import { Link } from "react-router-dom"
import { useState } from "react"

export default function Contact () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   async function loginUser (event) {
        event.preventDefault()
        const response = await fetch("http://localhost:1337/api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email, 
                password
            })
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <div className="login-container">
           <form onSubmit={loginUser}>
                <div className="display-3" style={{"margin-top" : "0"}}>Log-in</div>                
                <Link to="/Register"><div id="emailHelp" className="form-text">Don't have an account? Click here to register...</div></Link>


                <div className="mb-3" style={{"margin-top": "1rem"}}>
                    <label for="exampleInputEmail1" className="form-label">Email address:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" for="exampleCheck1">Save Password</label>
                
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div> 
    ) 
}