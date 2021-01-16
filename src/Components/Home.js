import { Link, useHistory } from 'react-router-dom'
import '../App.css'
import { Login } from './Login'

export function Home (){


    const history = useHistory ()

    const moveToComponent =(componentRoute)=>{
        history.push(componentRoute)
    }
    

    return(
        <div>
            <h1>This is the home page</h1>            
            <button onClick={()=>moveToComponent('Register')}>register</button>
            <button onClick={()=>moveToComponent('Login')}>login</button>
        </div>
    )
}