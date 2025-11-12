
function Login() {
    return (
        <h3>Login Component</h3>
    )
}

// Exporting the Login component as default
export default Login;

// Named export for Profile component
export function Profile() {
    
    const userName = "Bibhu Prasad Samal";
    return (
        <h3>Profile Component. Hello {userName}</h3>
    )
}

function Settings() {
    return (
        <h3>Settings Component</h3>
    )
}

const UserKey = "user123";

//Multiple named exports
export { Settings, UserKey };