import React from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import { isAuthenticated } from '../utils'

function DefaultLayout({ children }) {
    return (
        <div style={{ display: 'flex' }}>
            {isAuthenticated() && <Sidebar />}
            <div style={{ width: "100%" }}>
                {isAuthenticated() && <><Header /><hr /></>}
                <div style={{ marginLeft: 30, marginTop: 30 }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout