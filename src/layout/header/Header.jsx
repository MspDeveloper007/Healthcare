import React from 'react'
import Button from '../../components/Button/Button'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const path = useLocation().pathname
    const cookies = new Cookies()
    const navigate = useNavigate()

    const logOutHandler = () => {
        cookies.remove('x-auth-token')
        navigate('/login')
    }

    return (
        <header>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* <FontAwesomeIcon fontSize={60} icon={faHeart} color='red' /> */}
                    <h1 style={{ color: 'ActiveBorder', marginLeft: 20 }}>HEARTATOSCOPE</h1>
                    <li style={{listStyle:'none',cursor:'pointer'}} onClick={logOutHandler}>Logout</li>
                    {path === '/client' ? <Button
                        value={'Add Client'}
                        style={{
                            border: 'none',
                            backgroundColor: '#0079ff',
                            color: 'white',
                            padding: 10,
                            borderRadius: '5px',
                            marginRight: 20,
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    /> : <></>}
                </div>
            </div>
        </header>
    )
}

export default Header