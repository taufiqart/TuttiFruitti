import React from 'react'
import Sidebar from '../../components/dashboard/sidebar'
import Hamburger from '../../components/dashboard/hamburger'
import WidgetTeam from '../../components/dashboard/widgetTeam'
import WidgetMe from '../../components/dashboard/widgetMe'

export default function Dashboard({ children }) {

    return (

        <>
            <h2 className="text-left page-heading gs-open">
                Dashboard
                <div className="sub-heading">
                    <time dateTime="2022-12-19">Mon, Dec 19, 2022</time> -
                    <time dateTime="2022-12-25">Sun, Dec 25, 2022</time>
                </div>
            </h2>
            {children}
        </>
    )
}
