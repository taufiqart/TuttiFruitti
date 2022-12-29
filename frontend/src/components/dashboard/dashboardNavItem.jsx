import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardNavItem() {
    const url = window.location.pathname
    return (
        <ul className="nav nav-tabs item">
            <li className={url.includes('me') && 'active'}>
                <Link to="/dashboard/me" >Me</Link>
            </li>
            <li className={url.includes('team') && 'active'}>
                <Link to="/dashboard/team">All</Link>
            </li>
        </ul>
    )
}
