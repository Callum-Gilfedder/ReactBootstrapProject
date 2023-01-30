export default function Contact () {
    return (
        <div className="login-container">
           <form>
                <div className="display-3" style={{"margin-top" : "0"}}>Log-in / Register</div>
                <div className="mb-3" style={{"margin-top": "1rem"}}>
                    <label for="exampleInputEmail1" className="form-label">Email address:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
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