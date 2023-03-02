import {useState } from "react"; 

export default function Contact () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

   async function registerUser (event) {
        event.preventDefault()
        const response = await fetch("http://localhost:3000/api/register", {
            headers: {
                "Content-type": "application/json",

            },
            body: JSON.stringify({
                email, 
                password,
                confirmPassword
            })
        })
        const data = await response.json()
        console.log(data)
    }
    return (
        <div className="login-container">
           <form onSubmit={registerUser}>
                <div className="display-3" style={{"margin-top" : "0"}}>Register</div>                
                <div className="mb-3" style={{"margin-top": "1rem"}}>
                    <label for="exampleInputEmail1" className="form-label">Email address:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password:</label>
                    <input value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="form-control" id="confirmPassword"></input>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="checkSavePassword"></input>
                    <label className="form-check-label" for="exampleCheck1">Save Password</label>
                
                </div>

                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div> 
    ) 
}