import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import { Feed } from './Feed'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { clientId } from '../keys/GoogleLogin.json';
import {TWbutton} from '../TailwindVars/TailwindVars.json'

export function Login(params) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userName, setUserName] = useState('')

    if (params.logout) {
        setIsLoggedIn(false)
    }



    const history = useHistory()
    const moveToComponent = (componentRoute) => {
        history.push(componentRoute)
    }

    const successResponseGoogle = (response) => {
        console.log("line 23- response", response);
        if (response.profileObj.givenName) {
            setUserName(response.profileObj.givenName)
        }
        setIsLoggedIn(true)
    }

    const failResponseGoogle = (response) => {
        console.log("login failed")
        console.log(response)
    }




    const logOut = () => {
        setIsLoggedIn(false)
    }

    // console.log(isLoggedIn)
    return (
        <div>
            <h1>login page</h1>
            {/* <form> */}
            {isLoggedIn ?
                <>
                    <button  className={TWbutton} onClick={() => { moveToComponent('Feed') }}>Feed</button>
                    <button className={TWbutton} onClick={logOut}>logout</button>
                </>
                :
                <>

                    <>
                        <GoogleLogin
                            render={renderProps => (
                                <div className='g-sign-in-button' onClick={renderProps.onClick} >
                                    <div className='content-wrapper'>
                                        <div className='logo-wrapper'>
                                            <img className="w-10 h-10" src='https://developers.google.com/identity/images/g-logo.png' alt="..." />
                                        </div>
                                        <span className='text-container'>
                                            <span>Sing in with Google</span>
                                        </span>
                                    </div>
                                </div>

                            )}
                            clientId={clientId}
                            buttonText='Log In'
                            onSuccess={successResponseGoogle}
                            onFailure={failResponseGoogle}
                            isSignedIn={true}
                            cookiePolicy={'single_host_origin'}
                        />
                        <br />
                        <span className="text-black">Have troubles logging in? your Coockies permissions might be disabled. </span>
                        <br />
                        <span className="text-black">
                            <a className="href text-blue-700" href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=iw">Enable Coockies </a>
                       and try again.</span>
                    </>

                    <p> don't have an account yet? </p>
                    <button onClick={() => moveToComponent('Register')} className={TWbutton} >register</button>
                    <button onClick={() => moveToComponent('')} className={TWbutton} >Home</button>

                    {/* </form> */}

                </>
            }
        </div>
    )
}


// !!! old login functionality !!! //
    // const [nameInputValue, setNameInputValue] = useState('') 

        // const handleChange = async (value) => {
    //     await setNameInputValue(value)
    // }

        // const searchUser = async () => {
    //     console.log("isLoggedIn:",isLoggedIn)
    //     try {
    //         const results = await (await axios.get(`http://localhost:3001/user/${nameInputValue}`, { params: { name: nameInputValue } }))
    //         if(results){
    //             setIsLoggedIn(true)
    //         }
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

// {/* <input onChange={e => setNameInputValue(e.target.value)} name="name" type="string" placeholder="your name?" />
//                     <button onClick={() => searchUser()}>login</button>
//                     <p>name:Name</p> */}