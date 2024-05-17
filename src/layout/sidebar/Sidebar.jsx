import React from 'react'
import stethoscope from '../../assets/images/comhiclipartduhqg.jpg'
import { Link } from 'react-router-dom';

function Sidebar() {

    var h = document.documentElement.clientHeight;

    return (
        <aside style={{ position: '' }}>
            <div style={{ position: '', textAlign: 'center', bottom: 0, top: 80, left: 0 }}>
                <nav style={{ backgroundColor: '#b5cacb', width: 200, height: h }}>
                    <img width={100} style={{ borderRadius: 200, marginTop: 10 }} height={80} src={stethoscope} alt='' />
                    <ul style={{ marginBlockStart: 0, listStyle: 'none', lineHeight: 2, paddingTop: 30, paddingInlineStart: 0 }}>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/'}>Dashboard</Link></li>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/client'}>Client</Link></li>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/meeting'}>Meeting Schedule</Link></li>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/chat'}>Chat</Link></li>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/account'}>Account</Link></li>
                        <li style={{ fontSize: '20px', cursor: 'pointer' }}><Link style={{ textDecoration: 'none' }} to={'/bill'}>Bill</Link></li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar