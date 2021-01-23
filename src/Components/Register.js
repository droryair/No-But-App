import { useHistory } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import {TWbutton} from '../TailwindVars/TailwindVars.json'

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
            <button className={TWbutton} onClick={moveBack}>  back </button>
            <button className={TWbutton}  onClick={()=>moveToComponent('')}>Home</button>
        </div>
    )
}



// * functionality for hard-coded new user * // 

// const addUser = async () => {
//     console.log("adding user...")
//     const user = {
//         name: "Name",
//         location: "Tel-Aviv",
//         // img: Image,  //??
//         email: "user@gmail.com",
//         challengesType:
//             [
//                 {
//                     interest: "sports",
//                     types: ["running", "weights"],
//                     difficulty: "low"
//                 }
//             ]
//     }
//     try {
//         console.log("trying...")
//         const results = await axios({
//             method: 'post',
//             url: 'http://localhost:3001/user',
//             data: user
//         })
//         console.log(results)
//     } catch (error) {
//         console.log("catching errors....")
//         console.log("Error while sending data")
//         console.log(error)
//     }
// }
    // addUser()