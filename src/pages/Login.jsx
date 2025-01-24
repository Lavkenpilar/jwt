import { useState } from "react";

const Login = () => {
const [email, setEmail]=useState ("")
const [password, setPassword] = useState ("")

const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch ("http://localhost:5000/api/auth/login", {
method: "POST",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
email,
password,
}),
  })
  const data = await response.json ()
  alert (data?.error || "Authentication successful!")
  localStorage.setItem("token",data.token)
}
return (

  <form onSubmit={handleSubmit}>
    <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=> setEmail (e.target.value)}
    />
  <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e)=>setPassword (e.target.value)}
  />
  <button type="submit">Login</button>

  </form>
  
)

};
export default Login;
