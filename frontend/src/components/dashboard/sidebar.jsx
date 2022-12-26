import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar-wrapper hidden-xs hidden-print">
            <a className="sidebar-logo-link w-fit" href="/dashboard"><img height="28" className="h-12 sidebar-brand brand-main sidebar-brand-big" src="https://server-assets.hubstaff.com/e007f7ae/hubstaff/logos/HS_text_logo_black-18504e00c286dca13b2c503b94d1eabdf6e1c45257ca558b78095c4e184a020c.svg" /><img height="28" width="28" className="hidden h-12 sidebar-brand-small" src="https://server-assets.hubstaff.com/e007f7ae/hubstaff/logos/HS_logo-49e67a2d9a60398701e078cca9913dafb7a08a05bc83ad6204d4dee365aa2d33.svg" /></a>
            <div className="nav-sidebar">
                <div className="nav-sidebar-content">
                    <div className="sidebar-content-wrapper" id="standard-sidebar">
                        <ul className="sidebar-nav">
                            <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <a href="/dashboard/479871" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Dashboard"><span className='flex items-center justify-center'><i className="hi hi-16 hi-dashboard"></i><span className=" sidebar-link-text">Dashboard</span></span></a>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/time_entries" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="View &amp; edit"><span className='flex items-center justify-center'><i className="hi hi-16 hi-time"></i><span className="sidebar-link-text">Timesheets</span></span></a>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/insights" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Insights"><span className='flex items-center justify-center'><i className="hi hi-16 hi-insights"></i><span className="sidebar-link-text">Insights</span></span></a>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Locations"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/activities/locations" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Locations"><span className='flex items-center justify-center'><i className="hi hi-16 hi-map"></i><span className="sidebar-link-text">Locations</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#locations-menu">

                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="locations-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/activities/locations">Map</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/job_sites">Job sites</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Project management"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/projects" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Project management"><span className='flex items-center justify-center'><i className="hi hi-16 hi-task"></i><span className="sidebar-link-text">Project management</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#project_management-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="project_management-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/projects">Projects</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/tasks">To-dos</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/clients">Clients</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/work_orders">Work orders</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Reports"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/reports/479871" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Reports"><span className='flex items-center justify-center'><i className="hi hi-16 hi-document"></i><span className="sidebar-link-text">Reports</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#reports-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="reports-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/reports/479871/time_and_activities">Time &amp; activity</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/reports/479871/weekly">Weekly</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/reports/479871/amounts_owed">Amounts owed</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/reports/479871/payments">Payments</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/reports/479871">All reports</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="People"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/members" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="People"><span className='flex items-center justify-center'><i className="hi hi-16 hi-user"></i><span className="sidebar-link-text">People</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#people-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="people-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/members">Members</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/teams">Teams</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Financials"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/team_payments" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Financials"><span className='flex items-center justify-center'><i className="hi hi-16 hi-plans"></i><span className="sidebar-link-text">Financials</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#financials-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="financials-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/team_payments">Send payments</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/team_payments/past">Past payments</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sidebar-main-link" data-nested-level="0">
                                <span className="js-tablet-menu-trigger a-tooltip" title="" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Settings &amp; Policies"></span>
                                <div className="sidebar-main-link-inner">
                                    <a href="/organizations/479871/settings" title="" className="sidebar-link pull-left a-tooltip" data-placement="right" data-tipclass="sidebar-tooltip" data-original-title="Settings &amp; Policies"><span className='flex items-center justify-center'><i className="hi hi-16 hi-toggles"></i><span className="sidebar-link-text">Settings &amp; Policies</span></span></a><button type="button" className="btn-reset pull-right sidebar-nav-toggle collapsed" data-target="#settings-menu">
                                        <i className="hi hi-left"></i>
                                    </button>
                                </div>
                                <div id="settings-menu" className="collapse sidebar-subnav-wrapper">
                                    <ul className="sidebar-subnav">
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/settings/organization">General</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/settings/activity">Features</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/integrations">Integrations</a>
                                        </li>
                                        <li className="sidebar-link">
                                            <a href="/organizations/479871/settings/billing">Billing</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
