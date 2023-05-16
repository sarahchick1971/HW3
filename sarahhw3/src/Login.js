import react,{ useState } from "react";
import Dashboard from './Dashboard';


export const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

    const users = [{ username: "Sarah", password: "CFGcourse1" }];
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setauthenticated(true)
            localStorage.setItem("authenticated", true); 
        }

        console.log(username);
           
};
   
    return (
    <div className='auth-form-container'>
        <h2>Login</h2>
        <form className='login-form'onSubmit={handleSubmit}>
            <label for='username'>username</label>
            <input value={username} onChange= {(e) =>setUsername(e.target.value)} type='username' placeholder='yourusername' id='username' name='username'/>
            <label for='password'>password</label>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='*******' id='password' name='password'/>
            <button type='submit'>Log In</button>
        </form>
        <button className='link-btn' onClick ={() => props.onFormSwitch('register')}> Don't have an account?Register here</button>
    </div>
   
        
    )
}

export default Login;