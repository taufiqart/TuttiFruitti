import React from 'react'
import { Link } from 'react-router-dom'

function Hamburger() {
    const user = {
        id: 3,
        name: "TuttiFruitti",
        organization_id: 23,
        organization: {
            id: 23,
            organization: "TuttiFruitti",
        },

        profilPic: '/assets/images/default_speck.png'
    }
    return (
        <div className="hamburger-wrapper top-bar hidden-print">
            <div className="hamburger-menu-wrapper">
                <button className="navbar-toggle js-mobile-sidebar-toggle" type="button" >
                    <span className="sr-only">Toggle mobile sidebar</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <button className="navbar-toggle js-size-sidebar-toggle" type="button" >
                    <span className="sr-only">Toggle sidebar size</span>
                    <div className="arrow-wrapper">
                        <i className="hi-left-arrow-heavy"></i>
                    </div>
                </button><button className="navbar-toggle js-tablet-size-sidebar-toggle" type="button" >
                    <span className="sr-only">Toggle tablet sidebar size</span>
                    <div className="arrow-wrapper"><i className="hi-left-arrow-heavy"></i></div>
                </button>
            </div>
            <div className="flex justify-end w-full">
                <div className="dropdown user-dropdown">
                    <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" title={user.name}>
                        <img className="m-0 avatar avatar-speck" height="25" width="25" alt="" src={user.profilPic} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li><a target="_blank" href={`/users/${user.id}/edit`}>My account</a></li>
                        <li><a href={`/users/${user.id}/integrations`}>Integrations</a></li>
                        <li className="divider"></li>
                        <li><a href="/logout">Sign out</a></li>
                    </ul>
                </div>
                <div className="dropdown organizations-dropdown">
                    <a aria-expanded="true" aria-haspopup="true" className="dropdown-toggle blank-link" data-toggle="dropdown" href="#">
                        <div className="avatar avatar-speck avatar_initial" style={{ backgroundColor: "#a7c3ab" }}>
                            {user.name[0].toUpperCase()}
                        </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" id="org-picker">
                        <div className="dropdown-menu-links-wrapper">
                            <li className="Active">
                                <Link alt={user.organization.organization} className="avatar" data-oid={user.organization.id} data-organization-id={user.organization.id} data-status="Active" to={`/dashboard/${user.organization.id}/team`} id={`orgPickerId-${user.organization.id}`} title={user.organization.organization}>
                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#a7c3ab" }}>
                                        {user.organization.organization[0].toUpperCase()}
                                    </div>
                                    <span className="org-name">{user.name}</span>
                                </Link>
                            </li>
                        </div>
                        <Link className="org-picker-org-menu-link is-single" to="/organizations" id="orgPickerOrgMenuLink">Organizations menu<i className="pl-5 hi hi-right"></i></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
