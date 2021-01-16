import { useHistory } from 'react-router-dom'
import '../App.css'
export function Feed (){
    const history = useHistory ()

    const moveToComponent =(componentRoute)=>{
        history.push(componentRoute)
    }

    const moveBack = ()=>{
        history.goBack()
    }
    
    return(
        <div>
            <h1>This is the Feed page</h1>
            <button onClick={moveBack}>  back </button>

        </div>
    )
}