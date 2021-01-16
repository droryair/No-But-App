import { useHistory } from 'react-router-dom'
import '../App.css'
export function Register (){
    const history = useHistory ()

    const moveToComponent =(componentRoute)=>{
        history.push(componentRoute)
    }

    const moveBack = ()=>{
        history.goBack()
    }
    
    return(
        <div>
            <h1>This is the Registeration page</h1>
            <button onClick={moveBack}>  back </button>
        </div>
    )
}