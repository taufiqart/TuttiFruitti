import React from 'react'
import DashboardNavItem from './dashboardNavItem'

function WidgetMe() {
    return (
        <div className="dashboard widgets" data-batch-widget-url="/widget_batch/me"
            data-type="me" data-update-url="/update"
            data-widget-url="/widget/me/__WIDGET_ID__.json">
            <div className="dashboard-nav">
                <DashboardNavItem />
                <div className="dropdown item"><a aria-expanded="false" aria-haspopup="true" className="dropdown-toggle btn btn-default"
                    data-toggle="dropdown" href="#">Manage widgets</a>
                    <ul className="dropdown-menu dropdown-menu-right widget-dropdown toggling-dropdown">
                        <li className="dropdown-header">Small widgets</li>
                        <li data-widget="earned_week" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Earned this week</a></li>
                        <li data-widget="earned_today" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Earned today</a></li>
                        <li data-widget="projects_worked" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Projects worked</a></li>
                        <li data-widget="today_activity" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Today's Activity</a></li>
                        <li data-widget="activity" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Weekly Activity</a></li>
                        <li data-widget="this_week_total" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Worked this week</a></li>
                        <li data-widget="worked_today" data-widget-style="small" className="is-on"><a className="d-flex icon-link"
                            href="#">Worked today</a></li>
                        <hr />
                        <li className="dropdown-header">Large widgets</li>
                        <li data-widget="apps_urls" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Apps &amp; URLs</a></li>
                        <li data-widget="missed_shifts" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Late &amp; Missed Shifts</a></li>
                        <li data-widget="manual_time_log" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Manual Time</a></li>
                        <li data-widget="past_payments" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Payments</a></li>
                        <li data-widget="projects" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Projects</a></li>
                        <li data-widget="my_recent_activity" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Recent activity</a></li>
                        <li data-widget="this_week" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">This week</a></li>
                        <li data-widget="time_off_balances" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Time off balances</a></li>
                        <li data-widget="time_off_requests" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Time off requested</a></li>
                        <li data-widget="timesheet" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">Timesheet</a></li>
                        <li data-widget="tasks" data-widget-style="large" className="is-on"><a className="d-flex icon-link"
                            href="#">To-dos</a></li>
                    </ul>
                </div>
            </div>
            <div className="top dashboard-small-widget">
                <div className="widgets-small-column ui-sortable" data-location="top">
                    <div className="widget-common widget-sortable widget-small widget-id-activity " data-widget-id="activity"
                        data-widget-style="small" id="widget_activity">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Weekly Activity<i className="hi hi-info widget-tooltip a-tooltip"
                                data-placement="top" title=""
                                data-original-title="Calculated by dividing the total mouse and keyboard activity by the total time"></i>
                            </div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/settings/activity/monitor_user_activity">Activity setting</a></li>
                                    <li><a href="/organizations/479871/settings/activity/client_screenshot_frequency">Screenshot
                                        frequency</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder">69%</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder">—</div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:1672012800,&quot;y&quot;:69},{&quot;x&quot;:1672099200,&quot;y&quot;:0},{&quot;x&quot;:1672185600,&quot;y&quot;:0},{&quot;x&quot;:1672272000,&quot;y&quot;:0},{&quot;x&quot;:1672358400,&quot;y&quot;:0},{&quot;x&quot;:1672444800,&quot;y&quot;:0},{&quot;x&quot;:1672531200,&quot;y&quot;:0}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,0.1980198019801982L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20L80,20L66.66666666666667,20L53.33333333333333,20L40,20L26.666666666666664,20L13.333333333333332,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,0.1980198019801982L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-this_week_total "
                        data-widget-id="this_week_total" data-widget-style="small" id="widget_this_week_total">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Worked this week</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/time_entries/weekly">Add time</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder"><data value="4:27:19" className="duration">4:27:19</data></div>
                            <div className="widget-footer">
                                <div className="text-difference positive"><i className="hi caret hi-10"></i><data value="4:27:19"
                                    className="duration">4:27:19</data></div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:1672012800,&quot;y&quot;:16039},{&quot;x&quot;:1672099200,&quot;y&quot;:0},{&quot;x&quot;:1672185600,&quot;y&quot;:0},{&quot;x&quot;:1672272000,&quot;y&quot;:0},{&quot;x&quot;:1672358400,&quot;y&quot;:0},{&quot;x&quot;:1672444800,&quot;y&quot;:0},{&quot;x&quot;:1672531200,&quot;y&quot;:0}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,0.19801980198019464L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20L80,20L66.66666666666667,20L53.33333333333333,20L40,20L26.666666666666664,20L13.333333333333332,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,0.19801980198019464L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-earned_week widget-initial"
                        data-widget-id="earned_week" data-widget-style="small" id="widget_earned_week">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Earned this week<div className="initial-description"><span
                                className="translation_missing" title="translation missing: en.initial.earned_week">Earned Week</span>
                            </div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta"
                                href="/organizations/479871/members#dashboard_popup=edit_pay_rates">Add pay rates</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder">$0.00</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder">--</div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:0,&quot;y&quot;:1},{&quot;x&quot;:3,&quot;y&quot;:2},{&quot;x&quot;:6,&quot;y&quot;:11},{&quot;x&quot;:9,&quot;y&quot;:2},{&quot;x&quot;:12,&quot;y&quot;:8},{&quot;x&quot;:15,&quot;y&quot;:16},{&quot;x&quot;:18,&quot;y&quot;:13},{&quot;x&quot;:21,&quot;y&quot;:11}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,18.762376237623762L11.428571428571427,17.524752475247524L22.857142857142854,6.386138613861387L34.285714285714285,17.524752475247524L45.71428571428571,10.099009900990099L57.14285714285714,0.1980198019801982L68.57142857142857,3.910891089108908L80,6.386138613861387L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,18.762376237623762L11.428571428571427,17.524752475247524L22.857142857142854,6.386138613861387L34.285714285714285,17.524752475247524L45.71428571428571,10.099009900990099L57.14285714285714,0.1980198019801982L68.57142857142857,3.910891089108908L80,6.386138613861387"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-projects_worked "
                        data-widget-id="projects_worked" data-widget-style="small" id="widget_projects_worked">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Projects worked</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/projects">Manage projects</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder">1</div>
                            <div className="widget-footer">
                                <div className="text-difference positive"><i className="hi caret hi-10"></i>1</div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:1672012800,&quot;y&quot;:1},{&quot;x&quot;:1672099200,&quot;y&quot;:0},{&quot;x&quot;:1672185600,&quot;y&quot;:0},{&quot;x&quot;:1672272000,&quot;y&quot;:0},{&quot;x&quot;:1672358400,&quot;y&quot;:0},{&quot;x&quot;:1672444800,&quot;y&quot;:0},{&quot;x&quot;:1672531200,&quot;y&quot;:0}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,0.1980198019801982L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20L80,20L66.66666666666667,20L53.33333333333333,20L40,20L26.666666666666664,20L13.333333333333332,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,0.1980198019801982L13.333333333333332,20L26.666666666666664,20L40,20L53.33333333333333,20L66.66666666666667,20L80,20"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-earned_today widget-initial"
                        data-widget-id="earned_today" data-widget-style="small" id="widget_earned_today">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Earned today<div className="initial-description"><span className="translation_missing"
                                title="translation missing: en.initial.earned_today">Earned Today</span></div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta"
                                href="/organizations/479871/members#dashboard_popup=edit_pay_rates">Add pay rates</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder">$0.00</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder">--</div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:0,&quot;y&quot;:14},{&quot;x&quot;:3,&quot;y&quot;:16},{&quot;x&quot;:6,&quot;y&quot;:10},{&quot;x&quot;:9,&quot;y&quot;:10},{&quot;x&quot;:12,&quot;y&quot;:16},{&quot;x&quot;:15,&quot;y&quot;:7},{&quot;x&quot;:18,&quot;y&quot;:12},{&quot;x&quot;:21,&quot;y&quot;:13}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,2.673267326732674L11.428571428571427,0.1980198019801982L22.857142857142854,7.623762376237623L34.285714285714285,7.623762376237623L45.71428571428571,0.1980198019801982L57.14285714285714,11.336633663366337L68.57142857142857,5.1485148514851495L80,3.910891089108908L80,20L68.57142857142857,20L57.14285714285714,20L45.71428571428571,20L34.285714285714285,20L22.857142857142854,20L11.428571428571427,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,2.673267326732674L11.428571428571427,0.1980198019801982L22.857142857142854,7.623762376237623L34.285714285714285,7.623762376237623L45.71428571428571,0.1980198019801982L57.14285714285714,11.336633663366337L68.57142857142857,5.1485148514851495L80,3.910891089108908"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-today_activity "
                        data-widget-id="today_activity" data-widget-style="small" id="widget_today_activity">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Today's Activity<i className="hi hi-info widget-tooltip a-tooltip"
                                data-placement="top" title="" data-original-title="Total mouse and keyboard activity today"></i></div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/settings/activity/monitor_user_activity">Activity setting</a></li>
                                    <li><a href="/organizations/479871/settings/activity/client_screenshot_frequency">Screenshot
                                        frequency</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder">69%</div>
                            <div className="widget-footer">
                                <div className="text-difference shimmer-placeholder">—</div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:0,&quot;y&quot;:0},{&quot;x&quot;:1,&quot;y&quot;:0},{&quot;x&quot;:2,&quot;y&quot;:0},{&quot;x&quot;:3,&quot;y&quot;:0},{&quot;x&quot;:4,&quot;y&quot;:0},{&quot;x&quot;:5,&quot;y&quot;:0},{&quot;x&quot;:6,&quot;y&quot;:0},{&quot;x&quot;:7,&quot;y&quot;:0},{&quot;x&quot;:8,&quot;y&quot;:0},{&quot;x&quot;:9,&quot;y&quot;:92},{&quot;x&quot;:10,&quot;y&quot;:29},{&quot;x&quot;:11,&quot;y&quot;:0},{&quot;x&quot;:12,&quot;y&quot;:0},{&quot;x&quot;:13,&quot;y&quot;:0},{&quot;x&quot;:14,&quot;y&quot;:0},{&quot;x&quot;:15,&quot;y&quot;:0},{&quot;x&quot;:16,&quot;y&quot;:0},{&quot;x&quot;:17,&quot;y&quot;:0},{&quot;x&quot;:18,&quot;y&quot;:0},{&quot;x&quot;:19,&quot;y&quot;:0},{&quot;x&quot;:20,&quot;y&quot;:0},{&quot;x&quot;:21,&quot;y&quot;:0},{&quot;x&quot;:22,&quot;y&quot;:0},{&quot;x&quot;:23,&quot;y&quot;:0}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,20L3.4782608695652173,20L6.956521739130435,20L10.434782608695652,20L13.91304347826087,20L17.391304347826086,20L20.869565217391305,20L24.347826086956523,20L27.82608695652174,20L31.304347826086953,0.1980198019801982L34.78260869565217,13.758071459319845L38.26086956521739,20L41.73913043478261,20L45.21739130434782,20L48.69565217391305,20L52.173913043478265,20L55.65217391304348,20L59.13043478260869,20L62.60869565217391,20L66.08695652173913,20L69.56521739130434,20L73.04347826086956,20L76.52173913043478,20L80,20L80,20L76.52173913043478,20L73.04347826086956,20L69.56521739130434,20L66.08695652173913,20L62.60869565217391,20L59.13043478260869,20L55.65217391304348,20L52.173913043478265,20L48.69565217391305,20L45.21739130434782,20L41.73913043478261,20L38.26086956521739,20L34.78260869565217,20L31.304347826086953,20L27.82608695652174,20L24.347826086956523,20L20.869565217391305,20L17.391304347826086,20L13.91304347826087,20L10.434782608695652,20L6.956521739130435,20L3.4782608695652173,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,20L3.4782608695652173,20L6.956521739130435,20L10.434782608695652,20L13.91304347826087,20L17.391304347826086,20L20.869565217391305,20L24.347826086956523,20L27.82608695652174,20L31.304347826086953,0.1980198019801982L34.78260869565217,13.758071459319845L38.26086956521739,20L41.73913043478261,20L45.21739130434782,20L48.69565217391305,20L52.173913043478265,20L55.65217391304348,20L59.13043478260869,20L62.60869565217391,20L66.08695652173913,20L69.56521739130434,20L73.04347826086956,20L76.52173913043478,20L80,20"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-small widget-id-worked_today " data-widget-id="worked_today"
                        data-widget-style="small" id="widget_worked_today">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Worked today</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/time_entries">Add time</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="text-value shimmer-placeholder"><data value="4:27:19" className="duration">4:27:19</data></div>
                            <div className="widget-footer">
                                <div className="text-difference positive"><i className="hi caret hi-10"></i><data value="4:27:19"
                                    className="duration">4:27:19</data></div>
                                <div className="widget-graph rickshaw_graph"
                                    data-graph="[{&quot;x&quot;:0,&quot;y&quot;:0},{&quot;x&quot;:1,&quot;y&quot;:0},{&quot;x&quot;:2,&quot;y&quot;:0},{&quot;x&quot;:3,&quot;y&quot;:0},{&quot;x&quot;:4,&quot;y&quot;:0},{&quot;x&quot;:5,&quot;y&quot;:0},{&quot;x&quot;:6,&quot;y&quot;:0},{&quot;x&quot;:7,&quot;y&quot;:0},{&quot;x&quot;:8,&quot;y&quot;:0},{&quot;x&quot;:9,&quot;y&quot;:741},{&quot;x&quot;:10,&quot;y&quot;:778},{&quot;x&quot;:11,&quot;y&quot;:0},{&quot;x&quot;:12,&quot;y&quot;:0},{&quot;x&quot;:13,&quot;y&quot;:120},{&quot;x&quot;:14,&quot;y&quot;:0},{&quot;x&quot;:15,&quot;y&quot;:0},{&quot;x&quot;:16,&quot;y&quot;:0},{&quot;x&quot;:17,&quot;y&quot;:0},{&quot;x&quot;:18,&quot;y&quot;:0},{&quot;x&quot;:19,&quot;y&quot;:3000},{&quot;x&quot;:20,&quot;y&quot;:3600},{&quot;x&quot;:21,&quot;y&quot;:3600},{&quot;x&quot;:22,&quot;y&quot;:3600},{&quot;x&quot;:23,&quot;y&quot;:600}]">
                                    <svg width="80" height="20">
                                        <g>
                                            <path
                                                d="M0,20L3.4782608695652173,20L6.956521739130435,20L10.434782608695652,20L13.91304347826087,20L17.391304347826086,20L20.869565217391305,20L24.347826086956523,20L27.82608695652174,20L31.304347826086953,15.924092409240924L34.78260869565217,15.720572057205722L38.26086956521739,20L41.73913043478261,20L45.21739130434782,19.33993399339934L48.69565217391305,20L52.173913043478265,20L55.65217391304348,20L59.13043478260869,20L62.60869565217391,20L66.08695652173913,3.4983498349835003L69.56521739130434,0.1980198019801982L73.04347826086956,0.1980198019801982L76.52173913043478,0.1980198019801982L80,16.6996699669967L80,20L76.52173913043478,20L73.04347826086956,20L69.56521739130434,20L66.08695652173913,20L62.60869565217391,20L59.13043478260869,20L55.65217391304348,20L52.173913043478265,20L48.69565217391305,20L45.21739130434782,20L41.73913043478261,20L38.26086956521739,20L34.78260869565217,20L31.304347826086953,20L27.82608695652174,20L24.347826086956523,20L20.869565217391305,20L17.391304347826086,20L13.91304347826087,20L10.434782608695652,20L6.956521739130435,20L3.4782608695652173,20L0,20Z"
                                                className="area"></path>
                                            <path
                                                d="M0,20L3.4782608695652173,20L6.956521739130435,20L10.434782608695652,20L13.91304347826087,20L17.391304347826086,20L20.869565217391305,20L24.347826086956523,20L27.82608695652174,20L31.304347826086953,15.924092409240924L34.78260869565217,15.720572057205722L38.26086956521739,20L41.73913043478261,20L45.21739130434782,19.33993399339934L48.69565217391305,20L52.173913043478265,20L55.65217391304348,20L59.13043478260869,20L62.60869565217391,20L66.08695652173913,3.4983498349835003L69.56521739130434,0.1980198019801982L73.04347826086956,0.1980198019801982L76.52173913043478,0.1980198019801982L80,16.6996699669967"
                                                className="line" fill="none" stroke="true" strokeWidth="2"></path>
                                        </g>
                                        <defs>
                                            <linearGradient id="areaGradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#1dcbff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <defs>
                                            <linearGradient id="areaGradient-purple" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#7365ff" stopOpacity="1"></stop>
                                                <stop offset="100%" stopColor="white" stopOpacity="1"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-columns dashboard-large-widget">
                <div className="widgets-large-column ui-sortable" data-column-id="left" data-location="columns">
                    <div className="widget-common widget-sortable widget-large widget-id-my_recent_activity "
                        data-widget-id="my_recent_activity" data-widget-style="large" id="widget_my_recent_activity">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Recent activity</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="row dashboard-activity-view">
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-none"></div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay"><span className="slot-label overlay-content">Mon, Dec 26, 2022
                                            11:50 am</span></div>
                                        <div className="state_shot manual_time">
                                            <div className="state-shot-wrapper"><i className="hi hi-manual-time"></i>
                                                <div>Manual time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-none"></div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay"><span className="slot-label overlay-content">Mon, Dec 26, 2022
                                            5:40 pm</span></div>
                                        <div className="state_shot no_screenshot">
                                            <div className="state-shot-wrapper"><i className="hi hi-screenshot"></i>
                                                <div>No screenshot</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-none"></div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay"><span className="slot-label overlay-content">Mon, Dec 26, 2022
                                            8:50 pm</span></div>
                                        <div className="state_shot no_screenshot">
                                            <div className="state-shot-wrapper"><i className="hi hi-screenshot"></i>
                                                <div>No screenshot</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-medium">29%</div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay" data-slide="0"><span
                                            className="slot-view overlay-content btn btn-sm btn-outline-default">View screen</span><span
                                                className="slot-label overlay-content">Mon, Dec 26, 2022 9:00 pm</span></div>
                                        <div className="state_shot"><img alt="" className="activity-img"
                                            src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/0df5c3419bc75cd388655305ca6112b0c4e729a4/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6ecf9099da41266b56414e68e03e75393e33f3fc3f3341897010e8f21585bd38" />
                                        </div><a
                                            data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/0df5c3419bc75cd388655305ca6112b0c4e729a4/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=cad5f8231de3f5ea45de9f215616de5a32f51b0cd1589e7ddd06a271f6ed73a2"
                                            data-sub-html="asu at Mon, Dec 26, 2022 9:08 pm WIB (29% active) - Screenshot 1 of 1"
                                            className="hidden gallery-item"
                                            href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/0df5c3419bc75cd388655305ca6112b0c4e729a4/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=cad5f8231de3f5ea45de9f215616de5a32f51b0cd1589e7ddd06a271f6ed73a2"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/0df5c3419bc75cd388655305ca6112b0c4e729a4/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=6ecf9099da41266b56414e68e03e75393e33f3fc3f3341897010e8f21585bd38" /></a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-high">90%</div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay" data-slide="1"><span
                                            className="slot-view overlay-content btn btn-sm btn-outline-default">View screen</span><span
                                                className="slot-label overlay-content">Mon, Dec 26, 2022 9:10 pm</span></div>
                                        <div className="state_shot"><img alt="" className="activity-img"
                                            src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d23680141300026438115f36c200743a93336ef894cc3dcf9fa2143e7d55a96b" />
                                        </div><a
                                            data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=73e38921f150b9b1824a754079aec14f56591cf46cedfcb649b7f15f5adbada3"
                                            data-sub-html="asu at Mon, Dec 26, 2022 9:10 pm WIB (90% active) - Screenshot 1 of 3"
                                            className="hidden gallery-item"
                                            href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=73e38921f150b9b1824a754079aec14f56591cf46cedfcb649b7f15f5adbada3"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d23680141300026438115f36c200743a93336ef894cc3dcf9fa2143e7d55a96b" /></a><a
                                                    data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/541c9818838876b62f38eeb582cb30f7e501b056/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ee19efb63a503b3a8632b15c4f953a73ea257a7a33023e29bdb143413d14cd91"
                                                    data-sub-html="asu at Mon, Dec 26, 2022 9:15 pm WIB (90% active) - Screenshot 2 of 3"
                                                    className="hidden gallery-item"
                                                    href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/541c9818838876b62f38eeb582cb30f7e501b056/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ee19efb63a503b3a8632b15c4f953a73ea257a7a33023e29bdb143413d14cd91"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d23680141300026438115f36c200743a93336ef894cc3dcf9fa2143e7d55a96b" /></a><a
                                                    data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/9956be3a18f90247b1e43c16cf0127f9e67d7940/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=95ca157ae43d8fdcde8566488cab68b5ebea694c647ca191f23bc5126c00eb30"
                                                    data-sub-html="asu at Mon, Dec 26, 2022 9:18 pm WIB (90% active) - Screenshot 3 of 3"
                                                    className="hidden gallery-item"
                                                    href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/9956be3a18f90247b1e43c16cf0127f9e67d7940/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=95ca157ae43d8fdcde8566488cab68b5ebea694c647ca191f23bc5126c00eb30"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/377828b72863ff600e38b1810317da876dda0d73/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=d23680141300026438115f36c200743a93336ef894cc3dcf9fa2143e7d55a96b" /></a>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="label label-rounded label-bold has-shadow activity-percent activity-high">95%</div>
                                    <div className="shot-body shimmer-placeholder">
                                        <div className="screenshot-activity-overlay" data-slide="4"><span
                                            className="slot-view overlay-content btn btn-sm btn-outline-default">View screen</span><span
                                                className="slot-label overlay-content">Mon, Dec 26, 2022 9:20 pm</span></div>
                                        <div className="state_shot"><img alt="" className="activity-img"
                                            src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/702672152400a7d26ae062431d8d70efd871ed85/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db27920e20e560b91ff654846da337ab64464d7a122c21587a31fac2410e610b" />
                                        </div><a
                                            data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/702672152400a7d26ae062431d8d70efd871ed85/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=255e4769e46ea31639df4b6575122839c19a41b578db0161351449fd94e4b8bb"
                                            data-sub-html="asu at Mon, Dec 26, 2022 9:20 pm WIB (95% active) - Screenshot 1 of 2"
                                            className="hidden gallery-item"
                                            href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/702672152400a7d26ae062431d8d70efd871ed85/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=255e4769e46ea31639df4b6575122839c19a41b578db0161351449fd94e4b8bb"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/702672152400a7d26ae062431d8d70efd871ed85/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db27920e20e560b91ff654846da337ab64464d7a122c21587a31fac2410e610b" /></a><a
                                                    data-src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/6c3cb29400d56a822a91d29516cf4083c334ab94/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db35746036bc1dfddca22b2d30d68aed5fb754910c73c6acc297fb8d17a85f71"
                                                    data-sub-html="asu at Mon, Dec 26, 2022 9:24 pm WIB (95% active) - Screenshot 2 of 2"
                                                    className="hidden gallery-item"
                                                    href="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/6c3cb29400d56a822a91d29516cf4083c334ab94/0.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db35746036bc1dfddca22b2d30d68aed5fb754910c73c6acc297fb8d17a85f71"><img
                                                alt=""
                                                src="https://hubstaff-production.s3.amazonaws.com/screenshots/2088057/2022/52/2308745/702672152400a7d26ae062431d8d70efd871ed85/0_thumb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAXXZQ5SWWCBLCBQ7G%2F20221226%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20221226T161357Z&amp;X-Amz-Expires=300&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=db27920e20e560b91ff654846da337ab64464d7a122c21587a31fac2410e610b" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget-footer"><a href="/activities?date=2022-12-26">View activity<i
                                className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-this_week " data-widget-id="this_week"
                        data-widget-style="large" id="widget_this_week">
                        <div className="widget-sortable-header">
                            <div className="widget-title">This week</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <table className="bar-graph text-grey">
                                <tbody>
                                    <tr>
                                        <td className="text-center" data-date="date-2022-12-26" id="q1">
                                            <div className="has-worked"><data value="4:27:19" className="duration">4:27</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "25%" }}></div>
                                            </div>
                                            <div><span className="week-day">Mon</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-27" id="q2">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Tue</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-28" id="q3">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Wed</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-29" id="q4">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Thu</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-30" id="q5">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Fri</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2022-12-31" id="q6">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Sat</span></div>
                                        </td>
                                        <td className="text-center" data-date="date-2023-01-01" id="q7">
                                            <div className="has-worked"><data value="0:00:00" className="duration">0:00</data></div>
                                            <div className="this-week-bar-wrapper">
                                                <div className="sent bar shimmer-placeholder" style={{ height: "0%" }}></div>
                                            </div>
                                            <div><span className="week-day">Sun</span></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/time_and_activities?date=2022-12-26&amp;date_end=2023-01-01&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1">View
                                report<i className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-tasks " data-widget-id="tasks"
                        data-widget-style="large" id="widget_tasks">
                        <div className="widget-sortable-header">
                            <div className="widget-title">To-dos</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/integrations">Manage integrations</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
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
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <div className="inline-block user-activity-overflow shimmer-placeholder" title="kontollll">
                                                        kontollll</div>
                                                </td>
                                                <td>
                                                    <div className="inline-block shimmer-placeholder"><data value="4:13:29"
                                                        className="duration">4:13:29</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "96%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <div className="inline-block user-activity-overflow shimmer-placeholder" title="menek">menek</div>
                                                </td>
                                                <td>
                                                    <div className="inline-block shimmer-placeholder"><data value="0:11:45"
                                                        className="duration">0:11:45</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "4%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/time_and_activities?date=2022-12-26&amp;date_end=2023-01-01&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1&amp;filters%5Bshow_tasks%5D=1">View
                                report<i className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-missed_shifts widget-initial"
                        data-widget-id="missed_shifts" data-widget-style="large" id="widget_missed_shifts">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Late &amp; Missed Shifts<div className="initial-description">Team members who are
                                late or have missed shifts.</div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta" href="/organizations/479871/schedules">Schedule shifts</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/schedules">Manage shifts</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th className="wcell-late-shift">Shift</th>
                                                <th>Required</th>
                                                <th>Actual</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder">Missed Shift</span></td>
                                                <td className="wcell-late-shift"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2019-04-22T15:00:00+07:00">Mon, Apr 22, 2019 3:00 pm</time> - <time
                                                            dateTime="2019-04-22T23:00:00+07:00">11:00 pm</time> </span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder">Missed Shift</span></td>
                                                <td className="wcell-late-shift"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2019-04-22T15:00:00+07:00">Mon, Apr 22, 2019 3:00 pm</time> - <time
                                                            dateTime="2019-04-22T23:00:00+07:00">11:00 pm</time> </span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder">Missed Shift</span></td>
                                                <td className="wcell-late-shift"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2019-04-22T15:00:00+07:00">Mon, Apr 22, 2019 3:00 pm</time> - <time
                                                            dateTime="2019-04-22T23:00:00+07:00">11:00 pm</time> </span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><data className="duration">0:00</data></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/attendance?date=2022-12-26&amp;date_end=2023-01-01&amp;filters%5Bstatuses%5D%5B%5D=4&amp;filters%5Bstatuses%5D%5B%5D=3&amp;filters%5Bstatuses%5D%5B%5D=5">View
                                report<i className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-past_payments widget-initial"
                        data-widget-id="past_payments" data-widget-style="large" id="widget_past_payments">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Payments<div className="initial-description">Payments made to you this week. </div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta" href="/organizations/479871/member_payment_accounts">Add a payment
                                account</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Hours</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder" style={{ textAlign: "left" }}><time
                                                    dateTime="2022-12-26T23:14:34+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><data value="0:01:40"
                                                    className="duration">0:01:40</data></span></td>
                                                <td><span className="initial-state-green shimmer-placeholder">$1,000.00</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder" style={{ textAlign: "left" }}><time
                                                    dateTime="2022-12-26T23:14:34+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><data value="0:01:40"
                                                    className="duration">0:01:40</data></span></td>
                                                <td><span className="initial-state-green shimmer-placeholder">$1,000.00</span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder" style={{ textAlign: "left" }}><time
                                                    dateTime="2022-12-26T23:14:34+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><data value="0:01:40"
                                                    className="duration">0:01:40</data></span></td>
                                                <td><span className="initial-state-green shimmer-placeholder">$1,000.00</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/payments?date=2022-12-26&amp;date_end=2023-01-01">View payments<i
                                    className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-time_off_requests widget-initial"
                        data-widget-id="time_off_requests" data-widget-style="large" id="widget_time_off_requests">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Time off requested<div className="initial-description">Time off requests that are
                                waiting to be approved.</div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta"
                                href="/organizations/479871/time_off_policies#openDialog=/organizations/479871/time_off_policies/new.dialog">Create
                                a policy</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/time_off_policies">Time off settings</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Policy</th>
                                                <th>Booked on</th>
                                                <th>Duration</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">_________</span></td>
                                                <td className="initial-display-none"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2022-12-26T23:14:37+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="shimmer-placeholder"><data value="8:00:00"
                                                    className="duration">8:00:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><span
                                                    className="time_off_request_status time_off-approved">______</span></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">_________</span></td>
                                                <td className="initial-display-none"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2022-12-26T23:14:37+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="shimmer-placeholder"><data value="8:00:00"
                                                    className="duration">8:00:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><span
                                                    className="time_off_request_status time_off-approved">______</span></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">_________</span></td>
                                                <td className="initial-display-none"><span
                                                    className="initial-state-default-text-dark shimmer-placeholder"><time
                                                        dateTime="2022-12-26T23:14:37+07:00">Mon, Dec 26, 2022</time></span></td>
                                                <td><span className="shimmer-placeholder"><data value="8:00:00"
                                                    className="duration">8:00:00</data></span></td>
                                                <td><span className="shimmer-placeholder"><span
                                                    className="time_off_request_status time_off-submitted">______</span></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a href="/organizations/479871/time_off_requests">View requests <i
                                className="hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="widgets-large-column ui-sortable" data-column-id="right" data-location="columns">
                    <div className="widget-common widget-sortable widget-large widget-id-timesheet " data-widget-id="timesheet"
                        data-widget-style="large" id="widget_timesheet">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Timesheet</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/time_entries">Add time</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Project / Work order</th>
                                                <th>Date</th>
                                                <th>Start time</th>
                                                <th>Stop time</th>
                                                <th>Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-name initial-state-default-text shimmer-placeholder">asu</span>
                                                </td>
                                                <td className="initial-display-none"><span><time dateTime="2022-12-26T17:42:52+07:00">Mon, Dec 26,
                                                    2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T17:42:52+07:00">5:42 pm</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T17:42:56+07:00">5:42 pm</time></span></td>
                                                <td><span className="initial-state-dark-blue shimmer-placeholder"><data value="0:00:04"
                                                    className="duration">0:00:04</data></span><i className="ml-5 fa fa-dollar a-tooltip"
                                                        data-placement="right" title="" data-original-title="Billable time"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-name initial-state-default-text shimmer-placeholder">asu</span>
                                                </td>
                                                <td className="initial-display-none"><span><time dateTime="2022-12-26T17:42:56+07:00">Mon, Dec 26,
                                                    2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T17:42:56+07:00">5:42 pm</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T17:44:52+07:00">5:44 pm</time></span></td>
                                                <td><span className="initial-state-dark-blue shimmer-placeholder"><data value="0:01:56"
                                                    className="duration">0:01:56</data></span><i className="ml-5 fa fa-dollar a-tooltip"
                                                        data-placement="right" title="" data-original-title="Billable time"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-name initial-state-default-text shimmer-placeholder">asu</span>
                                                </td>
                                                <td className="initial-display-none"><span><time dateTime="2022-12-26T20:51:50+07:00">Mon, Dec 26,
                                                    2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:51:50+07:00">8:51 pm</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:51:51+07:00">8:51 pm</time></span></td>
                                                <td><span className="initial-state-dark-blue shimmer-placeholder"><data value="0:00:01"
                                                    className="duration">0:00:01</data></span><i className="ml-5 fa fa-dollar a-tooltip"
                                                        data-placement="right" title="" data-original-title="Billable time"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-name initial-state-default-text shimmer-placeholder">asu</span>
                                                </td>
                                                <td className="initial-display-none"><span><time dateTime="2022-12-26T20:52:15+07:00">Mon, Dec 26,
                                                    2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:52:15+07:00">8:52 pm</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:54:15+07:00">8:54 pm</time></span></td>
                                                <td><span className="initial-state-dark-blue shimmer-placeholder"><data value="0:02:00"
                                                    className="duration">0:02:00</data></span><i className="ml-5 fa fa-dollar a-tooltip"
                                                        data-placement="right" title="" data-original-title="Billable time"></i></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-name initial-state-default-text shimmer-placeholder">asu</span>
                                                </td>
                                                <td className="initial-display-none"><span><time dateTime="2022-12-26T20:54:17+07:00">Mon, Dec 26,
                                                    2022</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:54:17+07:00">8:54 pm</time></span></td>
                                                <td><span className="initial-state-default-text-dark shimmer-placeholder"><time
                                                    dateTime="2022-12-26T20:56:45+07:00">8:56 pm</time></span></td>
                                                <td><span className="initial-state-dark-blue shimmer-placeholder"><data value="0:02:28"
                                                    className="duration">0:02:28</data></span><i className="ml-5 fa fa-dollar a-tooltip"
                                                        data-placement="right" title="" data-original-title="Billable time"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a href="/time_entries?date=2022-12-26&amp;date_end=2023-01-01">View daily
                                timesheet<i className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-projects " data-widget-id="projects"
                        data-widget-style="large" id="widget_projects">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Projects</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/projects">Manage projects</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
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
                                                <td><a href="/projects/2308745">
                                                    <div className="avatar avatar-medium avatar_initial" style={{ backgroundColor: "#0d2258" }}>A</div>
                                                    <span className="user-activity-overflow shimmer-placeholder">asu</span><span
                                                        className="ml-10 a-tooltip label label-rounded label-bold activity-percent shimmer-placeholder activity-high"
                                                        data-placement="top" data-original-title="" title="">69%</span>
                                                </a></td>
                                                <td><span className="shimmer-placeholder"><data value="4:27:19"
                                                    className="duration">4:27:19</data></span>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "100%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/time_and_activities?date=2022-12-26&amp;date_end=2023-01-01&amp;filters%5Binclude_archived%5D=1&amp;filters%5Bshow_activity%5D=1&amp;group_by=project">View
                                report<i className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-apps_urls " data-widget-id="apps_urls"
                        data-widget-style="large" id="widget_apps_urls">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Apps &amp; URLs</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/settings/activity/client_app_and_url_tracking">App &amp; URLs
                                        settings</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>App or site</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="col-sm-8"><span
                                                    className="initial-state-default-text shimmer-placeholder">app.hubstaff.com</span></td>
                                                <td className="col-sm-4">
                                                    <div className="inline-block shimmer-placeholder"><data value="0:13:41"
                                                        className="duration">0:13:41</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "96%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-sm-8"><span
                                                    className="initial-state-default-text shimmer-placeholder">Hubstaff</span></td>
                                                <td className="col-sm-4">
                                                    <div className="inline-block shimmer-placeholder"><data value="0:00:19"
                                                        className="duration">0:00:19</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "2%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-sm-8"><span className="initial-state-default-text shimmer-placeholder">Microsoft®
                                                    Windows® Operating System</span></td>
                                                <td className="col-sm-4">
                                                    <div className="inline-block shimmer-placeholder"><data value="0:00:07"
                                                        className="duration">0:00:07</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "1%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-sm-8"><span
                                                    className="initial-state-default-text shimmer-placeholder">google.com</span></td>
                                                <td className="col-sm-4">
                                                    <div className="inline-block shimmer-placeholder"><data value="0:00:05"
                                                        className="duration">0:00:05</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "1%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="col-sm-8"><span
                                                    className="initial-state-default-text shimmer-placeholder">support.hubstaff.com</span></td>
                                                <td className="col-sm-4">
                                                    <div className="inline-block shimmer-placeholder"><data value="0:00:02"
                                                        className="duration">0:00:02</data></div>
                                                    <div className="progress-time-text">
                                                        <div className="progress widget-progress shimmer-placeholder">
                                                            <div className="progress-bar progress-bar-info" role="progressbar" style={{ width: "0%" }}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/apps_and_urls?date=2022-12-26&amp;date_end=2023-01-01">View report<i
                                    className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-manual_time_log "
                        data-widget-id="manual_time_log" data-widget-style="large" id="widget_manual_time_log">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Manual Time</div>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a href="/organizations/479871/settings/timesheets/modify_time_allowed">Modify time setting</a>
                                    </li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="table-wrapper">
                                <div className="scrollable">
                                    <table className="table table-fixed widget-table">
                                        <thead>
                                            <tr>
                                                <th>Project / Work order</th>
                                                <th>Action</th>
                                                <th>Time change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder" title="asu">
                                                        asu</div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder"><span className="action action-edit">Edit</span></div>
                                                </td>
                                                <td><span className="shimmer-placeholder"><data value="0:00:00"
                                                    className="duration">0:00:00</data></span> <i className="fa fa-question-circle a-tooltip"
                                                        data-html="true" title="" data-original-title=""></i></td>
                                            </tr>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder" title="asu">
                                                        asu</div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder"><span className="action action-add">Add</span></div>
                                                </td>
                                                <td><span className="shimmer-placeholder"><data value="3:00:00"
                                                    className="duration">3:00:00</data></span> <i className="fa fa-question-circle a-tooltip"
                                                        data-html="true" title="" data-original-title="Added: 3:00:00<br/>"></i></td>
                                            </tr>
                                            <tr>
                                                <td className="cell-container">
                                                    <div className="reason text-overflow initial-state-default-text shimmer-placeholder" title="asu">
                                                        asu</div>
                                                </td>
                                                <td>
                                                    <div className="span shimmer-placeholder"><span className="action action-add">Add</span></div>
                                                </td>
                                                <td><span className="shimmer-placeholder"><data value="1:00:00"
                                                    className="duration">1:00:00</data></span> <i className="fa fa-question-circle a-tooltip"
                                                        data-html="true" title="" data-original-title="Added: 1:00:00<br/>"></i></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a
                                href="/reports/479871/my/manual_time_log?date=2022-12-26&amp;date_end=2023-01-01">View report<i
                                    className="ml-5 hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                    <div className="widget-common widget-sortable widget-large widget-id-time_off_balances widget-initial"
                        data-widget-id="time_off_balances" data-widget-style="large" id="widget_time_off_balances">
                        <div className="widget-sortable-header">
                            <div className="widget-title">Time off balances<div className="initial-description">Time totals for your time off
                                policies.</div>
                            </div>
                            <div className="btn btn-default initial-plus"><i className="hi hi-plus"></i></div><a
                                className="btn btn-primary initial-cta"
                                href="/organizations/479871/time_off_policies#openDialog=/organizations/479871/time_off_policies/new.dialog">Create
                                a policy</a>
                            <div className="dropdown widget-menu"><a aria-expanded="true" aria-haspopup="true" className="btn btn-icon btn-xs"
                                data-toggle="dropdown" href="#"><i className="hi hi-more"></i></a>
                                <ul className="dropdown-menu dropdown-menu-right">
                                    <li><a className="action-dialog" href="/organizations/479871/time_off_requests/new.dialog">Request time
                                        off</a></li>
                                    <li><a className="remove" href="#">Remove</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget-sortable-body">
                            <div className="m-0 table-wrapper">
                                <div className="scrollable">
                                    <table className="table widget-table">
                                        <thead>
                                            <tr>
                                                <th>Policy</th>
                                                <th>Used</th>
                                                <th>Pending</th>
                                                <th>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">____________</span></td>
                                                <td><span className="initial-state-default-text shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-blue shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-orange shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">_____________________</span>
                                                </td>
                                                <td><span className="initial-state-default-text shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-blue shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-orange shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                            </tr>
                                            <tr>
                                                <td><span className="initial-state-default-text shimmer-placeholder">_________________</span></td>
                                                <td><span className="initial-state-default-text shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-blue shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                                <td><span className="initial-state-orange shimmer-placeholder"><data value="0:16:40"
                                                    className="duration">0:16:40</data></span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="widget-footer"><a href="/reports/479871/my/time_off_balances?year=2022">View report <i
                                className="hi hi-right hi-10"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WidgetMe
