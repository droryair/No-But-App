import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import '../App.css'
import { Login } from './Login'
import {TWbutton} from '../TailwindVars/TailwindVars.json'

export function Home (){


    const history = useHistory ()

    const moveToComponent =(componentRoute)=>{
        history.push(componentRoute)
    }
    

    return(
        <div>
            <h1>This is the home page</h1>            
            <button className={TWbutton} onClick={()=>moveToComponent('Login')} >Start</button>
        </div>
    )
}


// !!! Saving all of the Locations in Israel to the DB:  !!! //

// const  getData =async ()=>{
    //   const results = await axios.get ('https://data.gov.il/api/3/action/datastore_search?resource_id=ef1c8e7f-9287-4b29-889d-26dbb9c9ad46&limit=1272')
    //   const locationsNames = results.data.result.records
    //   const locationsData = []
    // locationsNames.forEach(l=>{
    //     locationsData.push(l["שם_ישוב"])
    //   })
    // const something = await axios({
    //     method: 'post',
    //     url: 'http://localhost:3001/locationsData',
    //     data: locationsData
    // })
    // console.log(something)
    // console.log(locationsData)
// }

// !!! !!! //