import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../util/context/UserContext'
import { Profile } from '../profile/Profile'

export const NavigationBar = () => {
    const history = useHistory()
    /*const [loggedInUser, setLoggedinUser] = useContext(UserContext)

    const displayUserEmailIfAuthenticated = () => {
        return loggedInUser
            ? <div className="signin"> <Profile /> </div>
            : <span className="signin" onClick={() => history.push("/signin")}> Sign In</span>
    }
    */

    return (
        <div className="navigationBarContainer">
            <span className="navigationBarLogotype" onClick={() => history.push("/")}>Search</span> <br />
            <input></input>
        </div >
    )
}