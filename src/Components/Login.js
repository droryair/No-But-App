import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import { Feed } from './Feed'

export function Login(params) {
    const [nameInputValue, setNameInputValue] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState('false')
    if (params.logout) {
        setIsLoggedIn(false)
    }
    const handleChange = async (value) => {
        await setNameInputValue(value)
    }

    const history = useHistory()
    const moveToComponent = (componentRoute) => {
        history.push(componentRoute)
    }


    const searchUser = async () => {
        try {
            const results = await (await axios.get(`http://localhost:3001/user/${nameInputValue}`, { params: { name: nameInputValue } }))
            setIsLoggedIn(true)
        } catch (err) {
            alert(err)
        }

    }

    const logOut=()=>{
        setIsLoggedIn(false)
        moveToComponent('/')
    }

    return (
        <div>
            <h1>login page</h1>
            {/* <form> */}
            {isLoggedIn ?
                <>
                    <button onClick={() => { moveToComponent('Feed') }}>Feed</button>
                    <button onClick={logOut}>logout</button>
                </>
                :
                <>
                    <input onChange={e => setNameInputValue(e.target.value)} name="name" type="string" placeholder="your name?" />
                    <button onClick={() => searchUser()}>login</button>
                    {/* </form> */}

                    <p>name:Name</p>
                </>
            }
        </div>
    )
}