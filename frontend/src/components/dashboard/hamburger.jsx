import React from 'react'

function Hamburger() {
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
                    <a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" title="TuttiFruitti"><img className="m-0 avatar avatar-speck" height="25" width="25" alt="" src="https://server-assets.hubstaff.com/e007f7ae/hubstaff_auth/profile/default_speck-ab4a84406b7db77dc05ecef182d9a5879abff96e6bdaf7fd12713d5c2a06b36c.png" />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                            <a target="_blank" href="/users/2088057/edit">My account</a>
                        </li>
                        <li>
                            <a href="/users/2088057/billing">User settings &amp; billing</a>
                        </li>
                        <li>
                            <a className="referral-link" >Get Hubstaff
                                free</a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="/users/2088057/payment_accounts">Payment accounts</a>
                        </li>
                        <li><a href="/users/2088057/integrations">Integrations</a></li>
                        <li className="divider"></li>
                        <li>
                            <a target="_blank" href="http://support.hubstaff.com">Support</a>
                        </li>
                        <li><a href="/download">Download</a></li>
                        <li><a href="https://developer.hubstaff.com">Developer API</a></li>
                        <li className="divider"></li>
                        <li><a href="/logout">Sign out</a></li>
                    </ul>
                </div>
                <div className="dropdown organizations-dropdown">
                    <a aria-expanded="true" aria-haspopup="true" className="dropdown-toggle blank-link" data-toggle="dropdown" href="#">
                        <div className="avatar avatar-speck avatar_initial" style={{ backgroundColor: "#a7c3ab" }}>
                            T
                        </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" id="org-picker">
                        <div className="dropdown-menu-links-wrapper">
                            <li className="Active">
                                <a alt="TuttiFruitti" className="avatar" data-oid="479871" data-organization-id="479871" data-status="Active" href="/dashboard/479871/team" id="orgPickerId-479871" title="TuttiFruitti">
                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#a7c3ab" }}>
                                        T
                                    </div>
                                    <span className="org-name">TuttiFruitti</span>
                                </a>
                            </li>
                        </div>
                        <a className="org-picker-org-menu-link is-single" href="/organizations" id="orgPickerOrgMenuLink">Organizations
                            menu<i className="pl-5 hi hi-right"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
