import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNavItem from './dashboardNavItem'

export default function WidgetTeam() {
    return (
        <div className="dashboard widgets" data-batch-widget-url="/widget_batch/team" data-type="team" data-update-url="/update" data-widget-url="/widget/__WIDGET_ID__.json">
            <div className="dashboard-nav">
                <DashboardNavItem />
                <div className="dropdown item">
                    <a aria-expanded="true" aria-haspopup="true" className="h-auto dropdown-toggle btn btn-default" data-toggle="dropdown" href="#">Manage widgets</a>
                    <ul className="dropdown-menu dropdown-menu-right widget-dropdown toggling-dropdown">
                        <li className="dropdown-header">Extra large widgets</li>
                        <li data-widget="map" data-widget-style="xlarge" className="is-on">
                            <a className="d-flex icon-link" href="#">Map</a>
                        </li>
                        <hr />
                        <li className="dropdown-header">Small widgets</li>
                        <li data-widget="members_worked" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Members worked</a>
                        </li>
                        <li data-widget="projects_worked" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Projects worked</a>
                        </li>
                        <li data-widget="spent_week" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Spent this week</a>
                        </li>
                        <li data-widget="spent_today" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Spent today</a>
                        </li>
                        <li data-widget="this_week_total" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Worked this week</a>
                        </li>
                        <li data-widget="worked_today" data-widget-style="small" className="is-on">
                            <a className="d-flex icon-link" href="#">Worked today</a>
                        </li>
                        <hr />
                        <li className="dropdown-header">Large widgets</li>
                        <li data-widget="amounts_owed" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Amounts owed</a>
                        </li>
                        <li data-widget="client_budgets" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Client Budgets</a>
                        </li>
                        <li data-widget="manual_time_log" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Manual Time</a>
                        </li>
                        <li data-widget="members_detailed" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Members</a>
                        </li>
                        <li data-widget="project_budgets" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Project / Work order Budgets</a>
                        </li>
                        <li data-widget="projects" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Projects</a>
                        </li>
                        <li data-widget="this_week" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">This week</a>
                        </li>
                        <li data-widget="tasks" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">To-dos</a>
                        </li>
                        <li data-widget="weekly_limits" data-widget-style="large" className="is-on">
                            <a className="d-flex icon-link" href="#">Weekly limits</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hero dashboard-xlarge-widget">
                <div className="w-full widgets-xlarge-row ui-sortable" data-location="hero">
                    <div className="widget-common widget-sortable widget-xlarge widget-id-map " data-widget-id="map" data-widget-style="xlarge" id="widget_map">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Map</div>
                            <div className="dropdown widget-menu">
                                <a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs" data-toggle="dropdown" href="#">
                                    <i className="hi hi-more"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="job-sites-widget-wrapper">
                                <div className="job-sites-widget-component">
                                    <div className="full-page-map-wrapper widget-map-placeholder">
                                        <div className="map-border-indicator"></div>
                                        <div className="app-map-stats-box enable-map-box">
                                            <div className="app-map-stats-box--content">
                                                <div className="text-center">
                                                    <h6>No active members or job sites</h6>
                                                    <p className="actions">
                                                        <a className="btn btn-outline-primary btn-sm">Enable map</a>
                                                    </p>
                                                </div>
                                                <div className="hidden curtain">
                                                    <div className="spinner-wrapper">
                                                        <div className="spinner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="app-map-stats-box">
                                        <div className="active-members">
                                            <div className="title">Active members</div>
                                            <div className="stats">0</div>
                                            <a href="/organizations/479871/activities/locations" className="link">View<i className="hi hi-right hi-8"></i></a>
                                        </div>
                                        <div className="active-job-sites">
                                            <div className="title">Active job sites</div>
                                            <div className="stats">0</div>
                                            <a href="/organizations/479871/activities/locations?showVisitedJobSites" className="link">View<i className="hi hi-right hi-8"></i></a>
                                        </div>
                                    </div>
                                    <div className="dropdown app-map-button-dropdown"><a data-toggle="dropdown" className="dropdown-toggle"><i className="hi hi-plus hi-17"></i></a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li className="invite-members"><a href="#"><i className="hi hi-users hi-16"></i>Invite members</a></li>
                                            <li className="add-job-site"><a href="/organizations/479871/job_sites?showNewJobSiteWizard"><i className="hi hi-pin hi-16"></i>Add a job site</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="top dashboard-small-widget">
                <div className="widgets-small-column ui-sortable" data-location="top">
                    <div className="widget-common widget-sortable widget-small widget-id-this_week_total widget-initial widget-lazy" data-widget-id="this_week_total" data-widget-load-lazily="true" data-widget-style="small" id="widget_this_week_total">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Worked this week</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">
                                <data value="0:00:00" className="duration">0:00:00</data>
                            </div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:11},{&quot;x&quot;:3,&quot;y&quot;:3},{&quot;x&quot;:6,&quot;y&quot;:2},{&quot;x&quot;:9,&quot;y&quot;:11},{&quot;x&quot;:12,&quot;y&quot;:10},{&quot;x&quot;:15,&quot;y&quot;:13},{&quot;x&quot;:18,&quot;y&quot;:8},{&quot;x&quot;:21,&quot;y&quot;:5}]">
                                    <svg width="80" height="20"><g><path d="M0,3.2444782939832457L11.428571428571427,15.43031226199543L22.857142857142854,16.953541507996952L34.285714285714285,3.2444782939832457L45.71428571428571,4.7677075399847695L57.14285714285714,0.1980198019801982L68.57142857142857,7.814166031987815L80,12.383853769992385L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,3.2444782939832457L11.428571428571427,15.43031226199543L22.857142857142854,16.953541507996952L34.285714285714285,3.2444782939832457L45.71428571428571,4.7677075399847695L57.14285714285714,0.1980198019801982L68.57142857142857,7.814166031987815L80,12.383853769992385" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-spent_week widget-initial widget-lazy" data-widget-id="spent_week" data-widget-load-lazily="true" data-widget-style="small" id="widget_spent_week">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Spent this week</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">$0.00</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:11},{&quot;x&quot;:3,&quot;y&quot;:8},{&quot;x&quot;:6,&quot;y&quot;:10},{&quot;x&quot;:9,&quot;y&quot;:8},{&quot;x&quot;:12,&quot;y&quot;:1},{&quot;x&quot;:15,&quot;y&quot;:5},{&quot;x&quot;:18,&quot;y&quot;:9},{&quot;x&quot;:21,&quot;y&quot;:18}]">
                                    <svg width="80" height="20"><g><path d="M0,7.898789878987898L11.428571428571427,11.199119911991199L22.857142857142854,8.998899889988998L34.285714285714285,11.199119911991199L45.71428571428571,18.8998899889989L57.14285714285714,14.499449944994499L68.57142857142857,10.099009900990099L80,0.1980198019801982L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,7.898789878987898L11.428571428571427,11.199119911991199L22.857142857142854,8.998899889988998L34.285714285714285,11.199119911991199L45.71428571428571,18.8998899889989L57.14285714285714,14.499449944994499L68.57142857142857,10.099009900990099L80,0.1980198019801982" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-projects_worked widget-initial widget-lazy" data-widget-id="projects_worked" data-widget-load-lazily="true" data-widget-style="small" id="widget_projects_worked">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Projects worked</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">0</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:5},{&quot;x&quot;:3,&quot;y&quot;:15},{&quot;x&quot;:6,&quot;y&quot;:16},{&quot;x&quot;:9,&quot;y&quot;:11},{&quot;x&quot;:12,&quot;y&quot;:3},{&quot;x&quot;:15,&quot;y&quot;:6},{&quot;x&quot;:18,&quot;y&quot;:18},{&quot;x&quot;:21,&quot;y&quot;:2}]">
                                    <svg width="80" height="20"><g><path d="M0,14.499449944994499L11.428571428571427,3.4983498349835003L22.857142857142854,2.398239823982397L34.285714285714285,7.898789878987898L45.71428571428571,16.6996699669967L57.14285714285714,13.3993399339934L68.57142857142857,0.1980198019801982L80,17.7997799779978L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,14.499449944994499L11.428571428571427,3.4983498349835003L22.857142857142854,2.398239823982397L34.285714285714285,7.898789878987898L45.71428571428571,16.6996699669967L57.14285714285714,13.3993399339934L68.57142857142857,0.1980198019801982L80,17.7997799779978" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-worked_today widget-initial widget-lazy" data-widget-id="worked_today" data-widget-load-lazily="true" data-widget-style="small" id="widget_worked_today">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Worked today</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">
                                <data value="0:00:00" className="duration">0:00:00</data>
                            </div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:19},{&quot;x&quot;:3,&quot;y&quot;:13},{&quot;x&quot;:6,&quot;y&quot;:7},{&quot;x&quot;:9,&quot;y&quot;:19},{&quot;x&quot;:12,&quot;y&quot;:18},{&quot;x&quot;:15,&quot;y&quot;:9},{&quot;x&quot;:18,&quot;y&quot;:3},{&quot;x&quot;:21,&quot;y&quot;:3}]">
                                    <svg width="80" height="20"><g><path d="M0,0.19801980198020175L11.428571428571427,6.451276706618032L22.857142857142854,12.704533611255863L34.285714285714285,0.19801980198020175L45.71428571428571,1.2402292860865032L57.14285714285714,10.620114643043252L68.57142857142857,16.873371547681085L80,16.873371547681085L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,0.19801980198020175L11.428571428571427,6.451276706618032L22.857142857142854,12.704533611255863L34.285714285714285,0.19801980198020175L45.71428571428571,1.2402292860865032L57.14285714285714,10.620114643043252L68.57142857142857,16.873371547681085L80,16.873371547681085" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-spent_today widget-initial widget-lazy" data-widget-id="spent_today" data-widget-load-lazily="true" data-widget-style="small" id="widget_spent_today">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Spent today</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">$0.00</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:19},{&quot;x&quot;:3,&quot;y&quot;:1},{&quot;x&quot;:6,&quot;y&quot;:5},{&quot;x&quot;:9,&quot;y&quot;:11},{&quot;x&quot;:12,&quot;y&quot;:6},{&quot;x&quot;:15,&quot;y&quot;:8},{&quot;x&quot;:18,&quot;y&quot;:16},{&quot;x&quot;:21,&quot;y&quot;:9}]">
                                    <svg width="80" height="20"><g><path d="M0,0.19801980198020175L11.428571428571427,18.957790515893695L22.857142857142854,14.788952579468475L34.285714285714285,8.535695674830643L45.71428571428571,13.746743095362168L57.14285714285714,11.662324127149558L68.57142857142857,3.3246482542991167L80,10.620114643043252L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,0.19801980198020175L11.428571428571427,18.957790515893695L22.857142857142854,14.788952579468475L34.285714285714285,8.535695674830643L45.71428571428571,13.746743095362168L57.14285714285714,11.662324127149558L68.57142857142857,3.3246482542991167L80,10.620114643043252" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-members_worked widget-initial widget-lazy" data-widget-id="members_worked" data-widget-load-lazily="true" data-widget-style="small" id="widget_members_worked">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Members worked</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder shimmer-animation">0</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder shimmer-animation">--</div>
                                <div className="widget-graph rickshaw_graph" data-graph="[{&quot;x&quot;:0,&quot;y&quot;:9},{&quot;x&quot;:3,&quot;y&quot;:3},{&quot;x&quot;:6,&quot;y&quot;:8},{&quot;x&quot;:9,&quot;y&quot;:2},{&quot;x&quot;:12,&quot;y&quot;:5},{&quot;x&quot;:15,&quot;y&quot;:2},{&quot;x&quot;:18,&quot;y&quot;:1},{&quot;x&quot;:21,&quot;y&quot;:10}]">
                                    <svg width="80" height="20"><g><path d="M0,2.1782178217821766L11.428571428571427,14.059405940594058L22.857142857142854,4.158415841584159L34.285714285714285,16.03960396039604L45.71428571428571,10.099009900990099L57.14285714285714,16.03960396039604L68.57142857142857,18.019801980198018L80,0.1980198019801982L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z" className="area"></path><path d="M0,2.1782178217821766L11.428571428571427,14.059405940594058L22.857142857142854,4.158415841584159L34.285714285714285,16.03960396039604L45.71428571428571,10.099009900990099L57.14285714285714,16.03960396039604L68.57142857142857,18.019801980198018L80,0.1980198019801982" className="line" fill="none" stroke="true" strokeWidth="2"></path></g><defs><linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs><defs><linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop><stop offset="100%" stopColor="white" stopOpacity="1"></stop></linearGradient></defs></svg></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-columns dashboard-large-widget">
                <div className="widgets-large-column ui-sortable" data-column-id="left" data-location="columns">
                    <div className="widget-common widget-sortable widget-large widget-id-members_detailed widget-initial widget-lazy" data-widget-id="members_detailed" data-widget-load-lazily="true" data-widget-style="large" id="widget_members_detailed">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Members</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="pb-30">
                                <div className="m-0">
                                    <div className="infinite-scrolling-widget">
                                        <table className="table m-0 widget-table">
                                            <colgroup>
                                                <col />
                                                <col width="80" />
                                                <col width="160" />
                                            </colgroup>
                                            <thead>
                                                <tr><th>Member info</th>
                                                    <th>Today</th>
                                                    <th>This week</th>
                                                </tr></thead>
                                            <tbody className="scrollable-content">
                                                <tr className="is-online">
                                                    <td>
                                                        <div className="user-cell">
                                                            <div className="user-status is-online">
                                                                <span className="avatar avatar-thumb shimmer-placeholder shimmer-animation"></span>
                                                            </div>
                                                            <div className="user-cell-text">
                                                                <span className="member-name members-detailed-link shimmer-placeholder strong shimmer-animation">_______
                                                                    ________</span>
                                                                <div>
                                                                    <span className="project-name members-detailed-link">_________</span>
                                                                </div>
                                                                <div className="text-overflow text-lighter small task_name"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="inline-block text-center">
                                                            <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-high shimmer-animation" data-placement="top" data-original-title="" title="">60%</span>
                                                            <div className="mt-5 strong">
                                                                <span className="shimmer-placeholder members-detailed-link shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="this-week-cell-wrapper">
                                                            <div className="this-week-text-data">
                                                                <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-high shimmer-animation" data-placement="top" data-original-title="" title="">60%</span>
                                                                <div className="mt-5 strong members-detailed-duration">
                                                                    <span className="members-detailed-link shimmer-placeholder shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                                </div>
                                                            </div>
                                                            <div className="member-weekly-activity-graph">
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "90%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "80%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "95%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "85%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "40%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="is-online">
                                                    <td>
                                                        <div className="user-cell">
                                                            <div className="user-status is-online">
                                                                <span className="avatar avatar-thumb shimmer-placeholder shimmer-animation"></span>
                                                            </div>
                                                            <div className="user-cell-text">
                                                                <span className="member-name members-detailed-link shimmer-placeholder strong shimmer-animation">_______
                                                                    ________</span>
                                                                <div>
                                                                    <span className="project-name members-detailed-link">_________</span>
                                                                </div>
                                                                <div className="text-overflow text-lighter small task_name"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="inline-block text-center">
                                                            <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-low shimmer-animation" data-placement="top" data-original-title="" title="">15%</span>
                                                            <div className="mt-5 strong">
                                                                <span className="shimmer-placeholder members-detailed-link shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="this-week-cell-wrapper">
                                                            <div className="this-week-text-data">
                                                                <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-medium shimmer-animation" data-placement="top" data-original-title="" title="">40%</span>
                                                                <div className="mt-5 strong members-detailed-duration">
                                                                    <span className="members-detailed-link shimmer-placeholder shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                                </div>
                                                            </div>
                                                            <div className="member-weekly-activity-graph">
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "90%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "80%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "95%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "85%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "40%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="is-online">
                                                    <td>
                                                        <div className="user-cell">
                                                            <div className="user-status is-online">
                                                                <span className="avatar avatar-thumb shimmer-placeholder shimmer-animation"></span>
                                                            </div>
                                                            <div className="user-cell-text">
                                                                <span className="member-name members-detailed-link shimmer-placeholder strong shimmer-animation">_______
                                                                    ________</span>
                                                                <div>
                                                                    <span className="project-name members-detailed-link">_________</span>
                                                                </div>
                                                                <div className="text-overflow text-lighter small task_name"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="inline-block text-center">
                                                            <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-high shimmer-animation" data-placement="top" data-original-title="" title="">60%</span>
                                                            <div className="mt-5 strong">
                                                                <span className="shimmer-placeholder members-detailed-link shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="this-week-cell-wrapper">
                                                            <div className="this-week-text-data">
                                                                <span className="a-tooltip activity-percent label label-rounded label-bold valign-top shimmer-placeholder activity-medium shimmer-animation" data-placement="top" data-original-title="" title="">40%</span>
                                                                <div className="mt-5 strong members-detailed-duration">
                                                                    <span className="members-detailed-link shimmer-placeholder shimmer-animation"><data value="0:00:01" className="duration">0:00</data></span>
                                                                </div>
                                                            </div>
                                                            <div className="member-weekly-activity-graph">
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "90%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "80%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "95%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "85%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "40%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                                <div className="bar-graph-entry shimmer-placeholder shimmer-animation" style={{ height: "0%" }}></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-this_week widget-initial widget-lazy" data-widget-id="this_week" data-widget-load-lazily="true" data-widget-style="large" id="widget_this_week">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">This week</div>
                        </div>
                        <div className="widget-sortable-body">
                            <table className="bar-graph text-grey">
                                <tbody>
                                    <tr>
                                        <td className="text-center" data-date="date-2022-12-19" id="q1">
                                            <div className="has-worked">
                                                <data value="8:00:00" className="duration">8:00</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "45%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-20" id="q2">
                                            <div className="has-worked">
                                                <data value="7:46:40" className="duration">7:47</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "44%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-21" id="q3">
                                            <div className="has-worked">
                                                <data value="9:40:00" className="duration">9:40</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "54%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-22" id="q4">
                                            <div className="has-worked">
                                                <data value="9:06:40" className="duration">9:07</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "51%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-23" id="q5">
                                            <div className="has-worked">
                                                <data value="10:13:20" className="duration">10:13</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "57%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-24" id="q6">
                                            <div className="has-worked">
                                                <data value="6:20:00" className="duration">6:20</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "36%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-25" id="q7">
                                            <div className="has-worked">
                                                <data value="4:40:00" className="duration">4:40</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "26%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/time_and_activities?date=2022-12-19&amp;date_end=2022-12-25&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1">View
                                    report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-this_week widget-initial widget-lazy" data-widget-id="this_week" data-widget-load-lazily="true" data-widget-style="large" id="widget_this_week">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">This week</div>
                        </div>
                        <div className="widget-sortable-body">
                            <table className="bar-graph text-grey">
                                <tbody>
                                    <tr>
                                        <td className="text-center" data-date="date-2022-12-19" id="q1">
                                            <div className="has-worked">
                                                <data value="8:00:00" className="duration">8:00</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "45%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-20" id="q2">
                                            <div className="has-worked">
                                                <data value="7:46:40" className="duration">7:47</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "44%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-21" id="q3">
                                            <div className="has-worked">
                                                <data value="9:40:00" className="duration">9:40</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "54%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-22" id="q4">
                                            <div className="has-worked">
                                                <data value="9:06:40" className="duration">9:07</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "51%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-23" id="q5">
                                            <div className="has-worked">
                                                <data value="10:13:20" className="duration">10:13</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "57%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-24" id="q6">
                                            <div className="has-worked">
                                                <data value="6:20:00" className="duration">6:20</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "36%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-25" id="q7">
                                            <div className="has-worked">
                                                <data value="4:40:00" className="duration">4:40</data>
                                            </div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder shimmer-animation" style={{ height: "26%" }}></div>
                                            </div>
                                            <div>
                                                <span className="week-day shimmer-placeholder shimmer-animation">____</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/time_and_activities?date=2022-12-19&amp;date_end=2022-12-25&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1">View
                                    report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-amounts_owed widget-initial widget-lazy" data-widget-id="amounts_owed" data-widget-load-lazily="true" data-widget-style="large" id="widget_amounts_owed">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Amounts owed</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Member</th>
                                                <th>Unpaid hours</th>
                                                <th>Rate</th>
                                                <th>Unpaid amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="wcell-member">
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">_____________</span>
                                                </td>
                                                <td>
                                                    <div className="shimmer-placeholder shimmer-animation">
                                                        <data value="1:00:00" className="duration">1:00:00</data>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="wcell-member">
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">__________________</span>
                                                </td>
                                                <td>
                                                    <div className="shimmer-placeholder shimmer-animation">
                                                        <data value="1:00:00" className="duration">1:00:00</data>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="wcell-member">
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">_______________</span>
                                                </td>
                                                <td>
                                                    <div className="shimmer-placeholder shimmer-animation">
                                                        <data value="1:00:00" className="duration">1:00:00</data>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-green shimmer-placeholder shimmer-animation">______</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/amounts_owed?date=2022-12-19&amp;date_end=2022-12-25">View report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-manual_time_log widget-initial widget-lazy" data-widget-id="manual_time_log" data-widget-load-lazily="true" data-widget-style="large" id="widget_manual_time_log">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Manual Time</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="table-wrapper">
                                <div className="scrollable">
                                    <table className="table table-fixed widget-table">
                                        <thead>
                                            <tr>
                                                <th>Member</th>
                                                <th>Project / Work order</th>
                                                <th>Action</th>
                                                <th>Time change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text-dark shimmer-placeholder shimmer-animation" title="____________">
                                                        ____________
                                                    </div>
                                                </td>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder shimmer-animation" title="___________">
                                                        ___________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder shimmer-animation">
                                                        <span className="action action-add">add</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data className="duration">0:00:00</data></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text-dark shimmer-placeholder shimmer-animation" title="__________________">
                                                        __________________
                                                    </div>
                                                </td>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder shimmer-animation" title="___________">
                                                        ___________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder shimmer-animation">
                                                        <span className="action action-edit">edit</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data className="duration">0:00:00</data></span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text-dark shimmer-placeholder shimmer-animation" title="____________">
                                                        ____________
                                                    </div>
                                                </td>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder shimmer-animation" title="___________">
                                                        ___________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder shimmer-animation">
                                                        <span className="action action-add">add</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data className="duration">0:00:00</data></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/manual_time_log?date=2022-12-19&amp;date_end=2022-12-25">View report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widgets-large-column ui-sortable" data-column-id="right" data-location="columns">
                    <div className="widget-common widget-sortable widget-large widget-id-project_budgets widget-initial widget-lazy" data-widget-id="project_budgets" data-widget-load-lazily="true" data-widget-style="large" id="widget_project_budgets">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Project / Work order Budgets</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Project / Work order</th>
                                                <th>Date</th>
                                                <th>Spent</th>
                                                <th>Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">___________</span></span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$50.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "50%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">_____________________</span></span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$15.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">_______________</span></span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$90.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "90%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/project_budgets?date=2022-12-19&amp;date_end=2022-12-25">View report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-projects widget-initial widget-lazy" data-widget-id="projects" data-widget-load-lazily="true" data-widget-style="large" id="widget_projects">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Projects</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th className="wcell-project">Project</th>
                                                <th className="wcell-project-time">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-activity-overflow shimmer-placeholder shimmer-animation">__________</span><span className="ml-10 a-tooltip label label-rounded label-bold activity-percent shimmer-placeholder activity-high shimmer-animation" data-placement="top" data-original-title="" title="">90%</span></span>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data value="1:23:20" className="duration">1:23:20</data></span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "25%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-activity-overflow shimmer-placeholder shimmer-animation">____________________</span><span className="ml-10 a-tooltip label label-rounded label-bold activity-percent shimmer-placeholder activity-medium shimmer-animation" data-placement="top" data-original-title="" title="">40%</span></span>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data value="1:23:20" className="duration">1:23:20</data></span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "25%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-activity-overflow shimmer-placeholder shimmer-animation">________________</span><span className="ml-10 a-tooltip label label-rounded label-bold activity-percent shimmer-placeholder activity-high shimmer-animation" data-placement="top" data-original-title="" title="">90%</span></span>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data value="1:23:20" className="duration">1:23:20</data></span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "25%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span><span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-activity-overflow shimmer-placeholder shimmer-animation">_____________</span><span className="ml-10 a-tooltip label label-rounded label-bold activity-percent shimmer-placeholder activity-low shimmer-animation" data-placement="top" data-original-title="" title="">10%</span></span>
                                                </td>
                                                <td>
                                                    <span className="shimmer-placeholder shimmer-animation"><data value="1:23:20" className="duration">1:23:20</data></span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "25%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/time_and_activities?date=2022-12-19&amp;date_end=2022-12-25&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1&amp;group_by=project">View
                                    report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-weekly_limits widget-initial widget-lazy" data-widget-id="weekly_limits" data-widget-load-lazily="true" data-widget-style="large" id="widget_weekly_limits">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Weekly limits</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th className="col-sm-6">Member</th>
                                                <th className="col-sm-3">Weekly limit</th>
                                                <th className="col-sm-3">Time spent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">_______________</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-default-text-dark shimmer-placeholder shimmer-animation"><data value="0:16:40" className="duration">0:16:40</data></span>
                                                </td>
                                                <td>
                                                    <div className="inline-block initial-state-default-text-dark shimmer-placeholder shimmer-animation">
                                                        <data value="0:06:40" className="duration">0:06:40</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "40%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">_______________</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-default-text-dark shimmer-placeholder shimmer-animation"><data value="0:16:40" className="duration">0:16:40</data></span>
                                                </td>
                                                <td>
                                                    <div className="inline-block initial-state-default-text-dark shimmer-placeholder shimmer-animation">
                                                        <data value="0:03:20" className="duration">0:03:20</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "20%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-speck shimmer-placeholder shimmer-animation"></span><span className="user-name initial-state-default-text shimmer-placeholder shimmer-animation">_______________</span>
                                                </td>
                                                <td>
                                                    <span className="initial-state-default-text-dark shimmer-placeholder shimmer-animation"><data value="0:16:40" className="duration">0:16:40</data></span>
                                                </td>
                                                <td>
                                                    <div className="inline-block initial-state-default-text-dark shimmer-placeholder shimmer-animation">
                                                        <data value="0:05:00" className="duration">0:05:00</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "30%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/weekly_limits?date=2022-12-19&amp;date_end=2022-12-25">View report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-tasks widget-initial widget-lazy" data-widget-id="tasks" data-widget-load-lazily="true" data-widget-style="large" id="widget_tasks">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">To-dos</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table table-fixed widget-table">
                                        <thead>
                                            <tr>
                                                <th>To-do</th>
                                                <th className="wcell-task-time">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span>
                                                    <div className="inline-block user-activity-overflow shimmer-placeholder shimmer-animation" title="____________">
                                                        ____________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="inline-block shimmer-placeholder shimmer-animation">
                                                        <data value="0:25:00" className="duration">0:25:00</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "33%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span>
                                                    <div className="inline-block user-activity-overflow shimmer-placeholder shimmer-animation" title="____________________">
                                                        ____________________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="inline-block shimmer-placeholder shimmer-animation">
                                                        <data value="0:25:00" className="duration">0:25:00</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "33%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span>
                                                    <div className="inline-block user-activity-overflow shimmer-placeholder shimmer-animation" title="________________">
                                                        ________________
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="inline-block shimmer-placeholder shimmer-animation">
                                                        <data value="0:25:00" className="duration">0:25:00</data>
                                                    </div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "33%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/time_and_activities?date=2022-12-19&amp;date_end=2022-12-25&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1&amp;filters%5Bshow_tasks%5D=1">View
                                    report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-client_budgets widget-initial widget-lazy" data-widget-id="client_budgets" data-widget-load-lazily="true" data-widget-style="large" id="widget_client_budgets">
                        <div className="widget-sortable-header ui-sortable-handle">
                            <div className="widget-title">Client Budgets</div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Client</th>
                                                <th>Date</th>
                                                <th>Spent</th>
                                                <th>Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">___________</span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$50.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "50%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">_____________________</span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$15.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "15%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-overflow wcell-project">
                                                    <span className="avatar avatar-medium avatar-speck shimmer-placeholder shimmer-animation"></span><span className="project-name shimmer-placeholder shimmer-animation">_______________</span>
                                                </td>
                                                <td>
                                                    <span className="budget-date shimmer-placeholder shimmer-animation">Fixed</span>
                                                </td>
                                                <td>
                                                    <span className="budget-spent shimmer-placeholder shimmer-animation">$90.00</span>
                                                </td>
                                                <td>
                                                    <span className="budget-amount shimmer-placeholder shimmer-animation">$100.00</span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder shimmer-animation">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "90%" }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer">
                                <a href="/reports/479871/team/client_budgets?date=2022-12-19&amp;date_end=2022-12-25">View report<i className="ml-5 hi hi-right hi-10"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
