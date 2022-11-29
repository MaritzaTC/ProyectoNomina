import {Navigate} from 'react-router-dom'

function PrivateRoute({user,children}) {
    if(!user){
        return <Navigate to='/myapp/src/App.js'/>
    }
    return (
        children
    );
}
export default PrivateRoute