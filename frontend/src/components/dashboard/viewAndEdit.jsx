import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './modal'

export default function ViewAndEdit() {
    return (
        <>
            <div class="vue-time-entries timesheet daily">

                {/* heading */}
                <div class="vue-time-entries-header page-header-wrapper row">
                    <div class="col-lg-4 col-sm-3">
                        <h2 class="page-heading">View & edit timesheets</h2>
                    </div>
                    <div class="col-lg-4 col-sm-6 text-center">
                        <div data-toggle="buttons" class="toggle-multiple-options">
                            <label class="btn btn-toggle-option view-toggle active">Daily</label>
                            <label class="btn btn-toggle-option view-toggle">Weekly</label>
                            <label class="btn btn-toggle-option view-toggle">Calendar</label>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-3 pl-30 ml-30">
                        <div class="settings-link-wrapper pull-right">
                            <Link to="/organizations/479871/settings/timesheets" class="settings-link pull-left">
                                <i class="hi hi-settings"></i> Settings </Link>
                        </div>
                    </div>
                </div>

                {/* content */}
                <div class="custom-app-tabs-wrapper app-tabs-switch">
                    <div class="header-content">
                        <div class="row full-width-selects-sm basic-filters">
                            <div class="col-sm-8">
                                <div class="weekly-range-input without-label inline-block mr-10">
                                    <div class="datepicker-wrapper d-flex flex-column align-items-end" exclude-biweekly-range="" exclude-monthly-ranges="">
                                        <a id="daterangepicker" href="#" class="datepicker custom-date-picker">
                                            <input data-auto-update-input="false" data-date="2022-12-27" data-start-week-on="0" readonly="readonly" class="form-control" />
                                        </a>
                                        <a href="#" class="clear-range" style={{ display: "none" }}>
                                            <i class="hi hi-close hi-12"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="without-label inline-block valign-top">
                                    <div class="hidden-xs">
                                        <div class="dropdown vue-app-time-zone-dropdown">
                                            <div data-toggle="dropdown" data-original-title="Asia - Jakarta (+07:00)" class="d-flex align-items-center dropdown-toggle btn">
                                                <span>WIB</span>
                                                <i class="hi hi-caret hi-10 ml-5"></i>
                                            </div>
                                            <ul class="dropdown-menu dropdown-menu-left">
                                                <li class="app-column-toggle">
                                                    <a>
                                                        <div class="row">
                                                            <div class="col-xs-12 text-lighter">Member's time zone</div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xs-12">
                                                                <p class="m-0">WIB: Asia - Jakarta</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="app-column-toggle">
                                                    <a>
                                                        <div class="row">
                                                            <div class="col-xs-12 text-lighter">My time zone</div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xs-12">
                                                                <p class="m-0">WIB: Asia - Jakarta</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="app-column-toggle">
                                                    <a>
                                                        <div class="row">
                                                            <div class="col-xs-12 text-lighter">TuttiFruitti</div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-xs-12">
                                                                <p class="m-0">WIB: Asia - Jakarta</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 selections">
                                <div class="row filter-select mt-20 mr-5 members">
                                    <div class="member-filter mobile-member-filter filter-select margin-bottom-sm col-xs-12">
                                        <label>Member</label>
                                        <div class="app-select-wrapper">
                                            <div data-original-title="" class="app-select">
                                                <select class="select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                    <option value="2088057">TuttiFruitti</option>
                                                </select>
                                                <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                    <span class="selection">
                                                        <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-1sta-container">
                                                            <span class="select2-selection__rendered" id="select2-1sta-container" title="TuttiFruitti">
                                                                <span>TuttiFruitti</span>
                                                            </span>
                                                            <span class="select2-selection__arrow" role="presentation">
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="dropdown vue-app-time-zone-dropdown">
                                        <div data-toggle="dropdown" data-original-title="Asia - Jakarta (+07:00)" class="d-flex align-items-center dropdown-toggle btn">
                                            <span>WIB</span>
                                            <i class="hi hi-caret hi-10 ml-5"></i>
                                        </div>
                                        <ul class="dropdown-menu dropdown-menu-left">
                                            <li class="app-column-toggle">
                                                <a>
                                                    <div class="row">
                                                        <div class="col-xs-12 text-lighter">Member's time zone</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <p class="m-0">WIB: Asia - Jakarta</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="app-column-toggle">
                                                <a>
                                                    <div class="row">
                                                        <div class="col-xs-12 text-lighter">My time zone</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <p class="m-0">WIB: Asia - Jakarta</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="app-column-toggle">
                                                <a>
                                                    <div class="row">
                                                        <div class="col-xs-12 text-lighter">TuttiFruitti</div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-xs-12">
                                                            <p class="m-0">WIB: Asia - Jakarta</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a class="btn time-entries-filter-button pull-right btn-btn btn-outline-primary">Filters</a>
                                </div>
                                <aside role="complementary" aria-label="Sidebar" aria-hidden="true" class="vue-sidebar-wrapper">
                                    <div class="vue-sidebar" style={{ display: "none" }}>
                                        <div class="vue-sidebar-content">
                                            <button type="button" aria-hidden="true" role="button" title="Close sidebar" class="btn btn-icon close ml-auto">
                                                <i class="hi hi-close hi-9"></i>
                                            </button>
                                            <div class="custom-app-tabs-wrapper">
                                                <ul class="nav nav-tabs">
                                                    <li class="nav-item active">
                                                        <a id="tab-filters" class="nav-link">Filters</a>
                                                    </li>
                                                </ul>
                                                <div class="header-content"></div>
                                                <div class="tab-content">
                                                    <div id="tabcontent-filters" aria-labelledby="filters" class="tab-pane active">
                                                        <div class="row">
                                                            <div class="member-filter col-sm-12 basic-filters">
                                                                <label>Member</label>
                                                                <div class="app-select-wrapper">
                                                                    <div data-original-title="" class="app-select">
                                                                        <select class="select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                                            <option value="2088057">TuttiFruitti</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                                            <span class="selection">
                                                                                <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-qzb3-container">
                                                                                    <span class="select2-selection__rendered" id="select2-qzb3-container" title="TuttiFruitti">
                                                                                        <span>TuttiFruitti</span>
                                                                                    </span>
                                                                                    <span class="select2-selection__arrow" role="presentation">
                                                                                        <b role="presentation"></b>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                            <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="project-filter col-sm-12 basic-filters">
                                                                <label>Project / Work order</label>
                                                                <div class="app-select-wrapper">
                                                                    <div data-original-title="" class="app-select">
                                                                        <select class="select2-hidden-accessible" multiple="" tabIndex="-1" aria-hidden="true">
                                                                            <option value="2308929">TU100</option>
                                                                            <option value="2308745">asu</option>
                                                                            <option value="2309218">halo</option>
                                                                            <option value="2308516">tester</option>
                                                                            <option value="2309201">Admin</option>
                                                                            <option value="2309200">Bookkeeping</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                                            <span class="selection">
                                                                                <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1">
                                                                                    <ul class="select2-selection__rendered">
                                                                                        <li class="select2-search select2-search--inline">
                                                                                            <input class="select2-search__field" type="search" tabIndex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="All projects / work orders" style={{ width: "100px" }} />
                                                                                        </li>
                                                                                    </ul>
                                                                                </span>
                                                                            </span>
                                                                            <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="time-type-filter col-sm-12 basic-filters">
                                                                <label>Time Type</label>
                                                                <div class="app-select-wrapper">
                                                                    <div data-original-title="" class="app-select">
                                                                        <select class="select2-hidden-accessible" multiple="" tabIndex="-1" aria-hidden="true">
                                                                            <option value="0">Normal</option>
                                                                            <option value="268435456">Idle</option>
                                                                            <option value="536870912">Resumed</option>
                                                                            <option value="805306368">Manual</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                                            <span class="selection">
                                                                                <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1">
                                                                                    <ul class="select2-selection__rendered">
                                                                                        <li class="select2-search select2-search--inline">
                                                                                            <input class="select2-search__field" type="search" tabIndex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="All types" style={{ width: "100px" }} />
                                                                                        </li>
                                                                                    </ul>
                                                                                </span>
                                                                            </span>
                                                                            <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="client-type-filter col-sm-12 basic-filters">
                                                                <label>Source</label>
                                                                <div class="app-select-wrapper">
                                                                    <div data-original-title="" class="app-select">
                                                                        <select class="select2-hidden-accessible" multiple="" tabIndex="-1" aria-hidden="true">
                                                                            <option value="desktop">Desktop</option>
                                                                            <option value="mobile">Mobile</option>
                                                                            <option value="browser">Browser</option>
                                                                            <option value="web_timer">Web timer</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                                            <span class="selection">
                                                                                <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1">
                                                                                    <ul class="select2-selection__rendered">
                                                                                        <li class="select2-search select2-search--inline">
                                                                                            <input class="select2-search__field" type="search" tabIndex="0" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" placeholder="All sources" style={{ width: "100px" }} />
                                                                                        </li>
                                                                                    </ul>
                                                                                </span>
                                                                            </span>
                                                                            <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="activity-level-filter col-sm-12 basic-filters">
                                                                <label>Activity Level</label>
                                                                <div class="app-select-wrapper">
                                                                    <div data-original-title="" class="app-select">
                                                                        <select class="select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                                            <option value="above_95">&gt; 95%</option>
                                                                            <option value="above_90">&gt; 90%</option>
                                                                            <option value="above_80">&gt; 80%</option>
                                                                            <option value="above_70">&gt; 70%</option>
                                                                            <option value="above_60">&gt; 60%</option>
                                                                            <option value="above_50">&gt; 50%</option>
                                                                            <option value="below_50">&lt; 50%</option>
                                                                            <option value="below_40">&lt; 40%</option>
                                                                            <option value="below_30">&lt; 30%</option>
                                                                            <option value="below_20">&lt; 20%</option>
                                                                            <option value="below_10">&lt; 10%</option>
                                                                        </select>
                                                                        <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                                            <span class="selection">
                                                                                <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-z0iv-container">
                                                                                    <span class="select2-selection__rendered" id="select2-z0iv-container" title="> 95%">
                                                                                        <span class="select2-selection__placeholder">
                                                                                            <span>All levels</span>
                                                                                        </span>
                                                                                    </span>
                                                                                    <span class="select2-selection__arrow" role="presentation">
                                                                                        <b role="presentation"></b>
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                            <span class="dropdown-wrapper" aria-hidden="true"></span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-auto">
                                                            <a class="btn btn-default btn-block">Clear filters</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                                <div class="member-filter filter-select desktop-member-filter">
                                    <label>Member</label>
                                    <div class="app-select-wrapper">
                                        <div data-original-title="" class="app-select">
                                            <select class="select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
                                                <option value="2088057">TuttiFruitti</option>
                                            </select>
                                            <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}>
                                                <span class="selection">
                                                    <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-8jhl-container">
                                                        <span class="select2-selection__rendered" id="select2-8jhl-container" title="TuttiFruitti">
                                                            <span>TuttiFruitti</span>
                                                        </span>
                                                        <span class="select2-selection__arrow" role="presentation">
                                                            <b role="presentation"></b>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span class="dropdown-wrapper" aria-hidden="true"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6 total-container hidden-xs"></div>
                            <div class="pl-0 col-sm-6 col-xs-12">
                                <div class="page-header-actions pull-right">
                                    <div title="" class="dropdown" data-original-title="Table Columns">
                                        <a data-toggle="dropdown" class="dropdown-toggle btn btn-icon btn-naked">
                                            <i class="hi hi-columns hi-16"></i>
                                        </a>
                                        <ul class="dropdown-menu toggling-dropdown dropdown-menu-right">
                                            <li class="dropdown-header">Table columns</li>
                                            <li class="app-column-toggle disabled is-on">
                                                <a class="d-flex icon-link">Project / Work order</a>
                                            </li>
                                            <li class="app-column-toggle is-on">
                                                <a class="d-flex icon-link">Activity</a>
                                            </li>
                                            <li class="app-column-toggle is-on">
                                                <a class="d-flex icon-link">Idle</a>
                                            </li>
                                            <li class="app-column-toggle disabled is-on">
                                                <a class="d-flex icon-link">Manual</a>
                                            </li>
                                            <li class="app-column-toggle disabled is-on">
                                                <a class="d-flex icon-link">Duration</a>
                                            </li>
                                            <li class="app-column-toggle">
                                                <a class="d-flex icon-link">Source</a>
                                            </li>
                                            <li class="app-column-toggle disabled is-on">
                                                <a class="d-flex icon-link">Time span</a>
                                            </li>
                                            <li class="app-column-toggle disabled is-on">
                                                <a class="d-flex icon-link">Actions</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="dropdown">
                                        <a data-original-title="" data-placement="bottom" data-toggle="dropdown" role="button" class="dropdown-toggle btn btn-icon btn-naked has-icon">
                                            <i class="hi hi-export hi-16"></i>
                                            <span></span>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">
                                            <li>
                                                <a href="/organizations/479871/time_entries/daily_export.pdf?date=2022-12-27&amp;date_end=2022-12-27&amp;filters%5Buser%5D=2088057&amp;filters%5Bshow_activity%5D=true&amp;filters%5Bshow_idle%5D=true">To PDF</a>
                                            </li>
                                            <li>
                                                <a href="/organizations/479871/time_entries/daily_export.csv?date=2022-12-27&amp;date_end=2022-12-27&amp;filters%5Buser%5D=2088057&amp;filters%5Bshow_activity%5D=true&amp;filters%5Bshow_idle%5D=true">To CSV</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <a class="btn add-time-btn ml-10 btn-primary">Add time</a>
                                    <div>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="tabcontent-daily" aria-labelledby="daily" class="tab-pane active" selected="selected">
                            <div class="time-entries">
                                <div id="timesheet" class="vue-time-entries-daily time-entries-wrapper">
                                    <div class="time-entries-for-date">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <h4>
                                                    <span class="date">Today:</span>
                                                    <div class="d-inline-flex align-items-center">
                                                        <span class="total_time">
                                                            <data class="duration">0:30:39</data>
                                                        </span>
                                                        <span class="overtime d-flex ml-5"></span>
                                                    </div>
                                                </h4>
                                            </div>
                                            <div class="col-xs-4"></div>
                                        </div>
                                        <div class="time-entries-timeline">
                                            <svg focusable="false" tabIndex="-1" class="time-entries-timeline--chart" width="968.7999877929688" height="42">
                                                <g class="chart">
                                                    <g class="bg">
                                                        <rect y="6" x="0" height="16" width="968.7999877929688" rx="8" ry="100" fill="#dfe6f1" tabIndex="-1"></rect>
                                                    </g>
                                                    <g class="now">
                                                        <rect y="6" x="692.7256718169843" height="16" width="8" fill="#afbbca" tabIndex="-1"></rect>
                                                        <line class="now-line" stroke="#afbbca" stroke-width="2" x1="692.7256718169843" x2="692.7256718169843" y1="0" y2="28"></line>
                                                        <rect y="6" x="692.7256718169843" height="16" width="276.0743159759844" rx="8" ry="100" fill="#afbbca" tabIndex="-1"></rect>
                                                    </g>
                                                    <g class="time-entries">
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="5.245620363961876" x="233.20720346441396" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="5.223194438058954" x="322.9333330019772" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="6.905138880777599" x="329.15652744003614" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="1" x="691.9743696603479" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="1" x="692.075286326911" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="1" x="692.2322678082313" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="1" x="692.4565270672606" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                        <rect y="6.5" height="15" rx="8" ry="100" width="1" x="692.5238048449693" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabIndex="-1"></rect>
                                                    </g>
                                                    <g class="new-pill" display="none">
                                                        <rect class="new-pill-bg" y="6" x="0" height="15" width="15" rx="8" ry="100" fill="#fff" stroke="#1f95ff" paint-order="stroke" stroke-width="1" tabIndex="-1"></rect>
                                                        <line x1="7.5" x2="7.5" y1="9" y2="18" stroke="#1f95ff" stroke-width="1"></line>
                                                        <line x1="7.5" x2="7.5" y1="9" y2="18" stroke="#1f95ff" stroke-width="1" transform="rotate(90, 7.5, 13.5)"></line>
                                                    </g>
                                                </g>
                                                <g class="x axis" transform="translate(0, 22)" fill="none" font-size="10" font-family="sans-serif" textAnchor="middle">
                                                    <g class="tick" opacity="1" transform="translate(242.69999975148292,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">6am</text>
                                                    </g>
                                                    <g class="tick" opacity="1" transform="translate(484.89999950296584,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">12pm</text>
                                                    </g>
                                                    <g class="tick" opacity="1" transform="translate(727.0999992544487,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">6pm</text>
                                                    </g>
                                                </g>
                                                <g class="x axis" transform="translate(0, 22)" fill="none" font-size="10" font-family="sans-serif" textAnchor="middle">
                                                    <g class="tick" opacity="1" transform="translate(242.69999975148292,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">6am</text>
                                                    </g>
                                                    <g class="tick" opacity="1" transform="translate(484.89999950296584,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">12pm</text>
                                                    </g>
                                                    <g class="tick" opacity="1" transform="translate(727.0999992544487,0)">
                                                        <line stroke="#dfe6f1" y2="6"></line>
                                                        <text fill="#8e9eb3" y="9" dy="0.71em">6pm</text>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div class="table-wrapper is-scrollable">
                                            <div class="scrollable">
                                                <table class="has-actions table has-batch-actions time-entries-table has-actions">
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <label class="custom-checkbox-wrapper">
                                                                    <input type="checkbox" value="" />
                                                                    <span class="custom-checkbox-box"></span>
                                                                    <span></span>
                                                                </label>
                                                            </th>
                                                            <th>Project / Work order</th>
                                                            <th></th>
                                                            <th>Activity</th>
                                                            <th>Idle</th>
                                                            <th>Manual</th>
                                                            <th>Duration</th>
                                                            <th>Time</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="vue-time-entries-row time-entry-row" time-entries="">
                                                            <td>
                                                                <label class="custom-checkbox-wrapper">
                                                                    <input type="checkbox" value="" />
                                                                    <span class="custom-checkbox-box"></span>
                                                                    <span></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div class="project-cell-wrapper">
                                                                    <div class="avatar avatar_initial avatar-medium" style={{ backgroundColor: "rgb(13, 34, 88) " }}>A</div>
                                                                    <div class="time-entry-data inline-block cell-max-width">
                                                                        <div class="name strong ellipsis switcher">
                                                                            <div class="popover-container ellipsis is-block">
                                                                                <span>
                                                                                    <span>
                                                                                        <span>asu</span>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="strong hi-10 org-name is-uppercase text-lighter ellipsis">TuttiFruitti</div>
                                                                        <div class="name strong ellipsis switcher">
                                                                            <div class="popover-container ellipsis is-block">
                                                                                <span>
                                                                                    <span>
                                                                                        <span>menek</span>
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <table class="reasons-table"></table>
                                                            </td>
                                                            <td class="activitiy-status">
                                                                <div title="" class="inline-block" data-original-title="0:07:25">80%</div>
                                                            </td>
                                                            <td class="idle-status">
                                                                <div title="" class="inline-block" data-original-title="0:00:00">0%</div>
                                                            </td>
                                                            <td class="manual-status">
                                                                <div title="" class="inline-block" data-original-title="0:00:00">0%</div>
                                                            </td>
                                                            <td class="duration-status">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="popover-container">
                                                                        <span>
                                                                            <a class="a-popover">0:09:17</a>
                                                                        </span>
                                                                    </div>
                                                                    <i title="" class="fa fa-dollar a-tooltip ml-5" data-original-title="Billable time"></i>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="popover-container">
                                                                    <span>
                                                                        <a class="a-popover">5:46 am - 5:55 am</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td class="actions">
                                                                <div class="dropdown table-actions-dropdown">
                                                                    <a data-toggle="dropdown" role="button" class="btn btn-sm btn-default dropdown-toggle">Actions <i class="hi hi-caret hi-10"></i>
                                                                    </a>
                                                                    <ul class="dropdown-menu dropdown-menu-right">
                                                                        <li>
                                                                            <a data-container="body" data-original-title="" title="" data-modal-id='#modal-edit' onClick={(e) => document.querySelector(`${e.target.dataset.modalId}`).checked = true} > Edit time entry</a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-container="body" class="action" data-original-title="" title="">Split time entry</a>
                                                                        </li>
                                                                        <li>
                                                                            <a data-container="body" class="action" data-original-title="" title="">Delete time entry</a>
                                                                        </li>
                                                                    </ul>
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
                        </div>
                        <div id="tabcontent-weekly" aria-labelledby="weekly" class="tab-pane"></div>
                        <div id="tabcontent-calendar" aria-labelledby="calendar" class="tab-pane"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
