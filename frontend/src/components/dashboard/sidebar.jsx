import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Sidebar(props) {
    const [PathLink, setPathLink] = useState(window.location.pathname)

    const location = useLocation()
    useEffect(() => {
        setPathLink(location.pathname)
    })
    const sidebarLinks = [
        {
            title: "Dashboard",
            dataOriginalTitle: "Dashboard",
            href: "/dashboard",
            icon: "hi hi-16 hi-dashboard",
        },
        {
            title: "Timesheets",
            dataOriginalTitle: "View & edit",
            href: "/organizations/time_entries",
            icon: "hi hi-16 hi-time",
            dataTarget: "time_entries-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "View & edit",
                    href: "/organizations/time_entries",
                },
                {
                    title: "Approvals",
                    href: "/organizations/timesheets"
                }
            ]
        },
        {
            title: "Activity",
            dataOriginalTitle: "View & edit",
            href: "/organizations/activities",
            icon: "hi hi-16 hi-activity",
            dataTarget: "activities-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Screenshots",
                    href: "/organizations/activities",
                },
                {
                    title: "Apps",
                    href: "/organizations/activities/apps_detailed"
                },
                {
                    title: "URLs",
                    href: "/organizations/activities/urls_detailed"
                }
            ]
        },
        {
            title: "Insights",
            dataOriginalTitle: "Insights",
            href: "/organizations/insights",
            icon: "hi hi-16 hi-insights",
        },
        {
            title: "Locations",
            dataOriginalTitle: "Locations",
            href: "/organizations/activities/locations",
            icon: "hi hi-16 hi-map",
            dataTarget: "locations-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Map",
                    href: "/organizations/activities/locations",
                },
                {
                    title: "Job sites",
                    href: "/organizations/job_sites"
                }
            ]

        },
        {
            title: "Project management",
            dataOriginalTitle: "Project management",
            href: "/organizations/projects",
            icon: "hi hi-16 hi-task",
            dataTarget: "project_management-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Projects",
                    href: "/organizations/projects",
                },
                {
                    title: "To-dos",
                    href: "/organizations/tasks"
                },
                {
                    title: "Clients",
                    href: "/organizations/clients"
                },
                {
                    title: "Work orders",
                    href: "/organizations/work_orders"
                }

            ]

        },
        {
            title: "Reports",
            dataOriginalTitle: "Reports",
            href: "/reports",
            icon: "hi hi-16 hi-document",
            dataTarget: "reports-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Time &amp; activity",
                    href: "/reports/time_and_activities",
                },
                {
                    title: "Weekly",
                    href: "/reports/weekly"
                },
                {
                    title: "Amounts owed",
                    href: "/reports/amounts_owed"
                },
                {
                    title: "Payments",
                    href: "/reports/payments"
                },
                {
                    title: "All reports",
                    href: "/reports"
                }

            ]

        },
        {
            title: "People",
            dataOriginalTitle: "People",
            href: "/organizations/members",
            icon: "hi hi-16 hi-user",
            dataTarget: "people-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Members",
                    href: "/organizations/members",
                },
                {
                    title: "Teams",
                    href: "/organizations/teams"
                },
            ]

        },
        {
            title: "Financials",
            dataOriginalTitle: "Financials",
            href: "/organizations/team_payments",
            icon: "hi hi-16 hi-plans",
            dataTarget: "financials-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "Send payments",
                    href: "/organizations/team_payments",
                },
                {
                    title: "Past payments",
                    href: "/organizations/team_payments/past"
                },
            ]

        },
        {
            title: "Settings & Policies",
            dataOriginalTitle: "Settings & Policies",
            href: "/organizations/settings",
            icon: "hi hi-16 hi-toggles",
            dataTarget: "settings-menu",
            buttonIcon: "hi hi-left",
            subNav: [
                {
                    title: "General",
                    href: "/organizations/settings/organization",
                },
                {
                    title: "Features",
                    href: "/organizations/settings/activity"
                },
                {
                    title: "Integrations",
                    href: "/organizations/integrations"
                },
                {
                    title: "Billing",
                    href: "/organizations/settings/billing"
                },
            ]

        },
    ]
    return (
        <div className="sidebar-wrapper hidden-xs hidden-print">
            <Link className="sidebar-logo-link w-fit" to="/dashboard"><img height="28" className="h-12 sidebar-brand brand-main sidebar-brand-big" src="https://server-assets.hubstaff.com/e007f7ae/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg" /><img height="28" width="28" className="hidden h-12 sidebar-brand-small" src="https://server-assets.hubstaff.com/e007f7ae/hubstaff/logos/HS_logo-49e67a2d9a60398701e078cca9913dafb7a08a05bc83ad6204d4dee365aa2d33.svg" /></Link>
            <div className="nav-sidebar">
                <div className="nav-sidebar-content">
                    <div className="sidebar-content-wrapper" id="standard-sidebar">
                        <ul className="sidebar-nav">
                            {/* <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <Link to="/dashboard" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Dashboard">
                                        <span className='flex items-center justify-center'>
                                            <i className="hi hi-16 hi-dashboard"></i>
                                            <span className=" sidebar-link-text">Dashboard</span>
                                        </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/time_entries" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="View &amp; edit"><span className='flex items-center justify-center'><i className="hi hi-16 hi-time"></i><span className="sidebar-link-text">Timesheets</span></span></Link>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/insights" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Insights"><span className='flex items-center justify-center'><i className="hi hi-16 hi-insights"></i><span className="sidebar-link-text">Insights</span></span></Link>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Locations"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/activities/locations" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Locations"><span className='flex items-center justify-center'><i className="hi hi-16 hi-map"></i><span className="sidebar-link-text">Locations</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#locations-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="locations-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/organizations/activities/locations">Map</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link href="/organizations/job_sites">Job sites</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Project management"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/projects" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Project management"><span className='flex items-center justify-center'><i className="hi hi-16 hi-task"></i><span className="sidebar-link-text">Project management</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#project_management-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="project_management-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/organizations/projects">Projects</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/tasks">To-dos</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/clients">Clients</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/work_orders">Work orders</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Reports"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/reports" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Reports"><span className='flex items-center justify-center'><i className="hi hi-16 hi-document"></i><span className="sidebar-link-text">Reports</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#reports-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="reports-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/reports/time_and_activities">Time &amp; activity</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/reports/weekly">Weekly</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/reports/amounts_owed">Amounts owed</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/reports/payments">Payments</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/reports">All reports</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="People"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/members" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="People"><span className='flex items-center justify-center'><i className="hi hi-16 hi-user"></i><span className="sidebar-link-text">People</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#people-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="people-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/organizations/members">Members</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/teams">Teams</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Financials"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/team_payments" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Financials"><span className='flex items-center justify-center'><i className="hi hi-16 hi-plans"></i><span className="sidebar-link-text">Financials</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#financials-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="financials-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/organizations/team_payments">Send payments</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/team_payments/past">Past payments</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Settings &amp; Policies"></span>
                                <div className="sidebar-main-link-inner">
                                    <Link to="/organizations/settings" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Settings &amp; Policies"><span className='flex items-center justify-center'><i className="hi hi-16 hi-toggles"></i><span className="sidebar-link-text">Settings &amp; Policies</span></span></Link>
                                    <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#settings-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="settings-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <Link to="/organizations/settings/organization">General</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/settings/activity">Features</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/integrations">Integrations</Link>
                                        </li>
                                        <li className="sidebar-link">
                                            <Link to="/organizations/settings/billing">Billing</Link>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}

                            {
                                sidebarLinks.map((item, index) => {
                                    // setPathLink(this.context.router.route.location.pathname)
                                    let isActive = PathLink.includes(item.href)
                                    let active = isActive ? 'active' : ''
                                    item.subNav && item.subNav.map((subItem) => {
                                        isActive = PathLink.includes(subItem.href)
                                        if (isActive) {
                                            active = isActive ? 'active' : ''
                                        }
                                    })
                                    return (
                                        <li className={`sidebar-main-link ${active}`} data-nested-level="0" key={index}>
                                            <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title={item.dataOriginalTitle}></span>
                                            <div className={`sidebar-main-link-inner ${active}`}>
                                                <Link to={item.href} title="" className={`sidebar-link pull-left a-tooltip ${active}`} data-placement="right" data-tipclass="sidebar-tooltip" data-original-title={item.dataOriginalTitle}>
                                                    <span className='flex items-center justify-start text-left'>
                                                        <i className={item.icon}></i>
                                                        <span className="sidebar-link-text">{item.title}</span>
                                                    </span>
                                                </Link>
                                                {
                                                    (
                                                        item.dataTarget &&
                                                        <button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target={"#" + item.dataTarget}>
                                                            <i className={item.buttonIcon}></i>
                                                        </button>
                                                    )}
                                            </div>
                                            {
                                                item.subNav &&
                                                <div id={item.dataTarget} className="collapse sidebar-subnav-wrapper">
                                                    <ul className="sidebar-subnav">
                                                        {
                                                            item.subNav.map((subItem, index) => {
                                                                let isSubActive = PathLink == subItem.href
                                                                let subActive = isSubActive ? 'active' : ''
                                                                active = subActive
                                                                return (
                                                                    <li className={`sidebar-link ${subActive}`} key={index}>
                                                                        <Link to={subItem.href}>{subItem.title}</Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar 
