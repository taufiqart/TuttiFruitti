import React from 'react'

function ModaEdit() {
    return (
        <>
            <div class="modal-header">
                <label type="button" data-dismiss="modal" aria-hidden="true" class="close" htmlFor='modal-edit'><i class="hi hi-close hi-12"></i></label><a target="_blank" title="Read the help article about this feature" href="https://support.hubstaff.com/how-to-add-delete-and-edit-manual-time-entries/" class="dialog-faq-link">?</a>
                <h4 class="modal-title">Add time</h4>
            </div>
            <div class="modal-body text-left">
                <div class="form-group">
                    <div class="controls input-group">
                        <img height="32" width="32" class="avatar avatar-medium" />
                        <div class="review">TuttiFruitti</div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-col ">
                            <label class="control-label"></label>
                            <div class="form-group boolean optional time_entry_work_break">
                                <label class="boolean optional my-8">
                                    <label class="toggle-switch-wrapper form-group boolean optional time_entry_work_break">
                                        <input type="checkbox" autocomplete="off" />
                                        <div class="toggle-switch"></div>
                                        <span class="toggle-switch-label"><span>Work break</span></span>
                                    </label>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-20 ">
                    <span>
                        <div class="form-group ">
                            <div class="row margin-bottom-sm">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-xs-6"><label class="control-label grouped_select">Project / Work order*</label></div>
                                        <div class="col-xs-6">
                                            <div class="control-label-btn pull-right organizations">
                                                <a>Show all organizations</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="app-select-wrapper">

                                        <div data-original-title="" class="app-select">
                                            <select class="select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                <option value="2308929">TU100</option>
                                                <option value="2308745">asu</option>
                                                <option value="2309218">halo</option>
                                                <option value="2308516">tester</option>
                                            </select>
                                            <span class="select2 select2-container select2-container--bootstrap select2-container--below" dir="ltr" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-x74v-container"><span class="select2-selection__rendered" id="select2-x74v-container" title="asu"><span>asu</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="help-block"></span>
                        </div>
                    </span>
                    <span>
                        <div class="form-group">
                            <div class="row margin-bottom-sm">
                                <div class="col-sm-12">
                                    <label class="control-label grouped_select">To-do / Job</label>
                                    <div class="app-select-wrapper">
                                        <div data-original-title="" class="app-select">
                                            <select class="select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                                <option value="115060027">kontollll</option>
                                                <option value="115065193">menek</option>
                                                <option value="115104709">dadv</option>
                                                <option value="115082990">a</option>
                                            </select>
                                            <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-hcom-container"><span class="select2-selection__rendered" id="select2-hcom-container" title="kontollll"><span class="select2-selection__placeholder"><span>Select a to-do / job</span></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="help-block"></span>
                        </div>
                    </span>
                </div>
                <div class="row">
                    <div class="col-sm-12"><label class="control-label">Time Span (WIB)*</label></div>
                    <div class="row">
                        <div class="vue-app-datetime-range-picker col-sm-12">
                            <div class="datepicker-container col-sm-5">
                                <div class="vue-app-date-picker reports-app-datepicker pr-0 pull-left">
                                    <a href="#" data-container="body" class="prev btn btn-default btn-icon margin-bottom-sm" style={{ display: "none" }} title=""><i class="hi hi-left-arrow text-lighter"></i></a><a href="#" data-container="body" class="next btn btn-default btn-icon margin-bottom-sm" style={{ display: "none" }} title=""><i class="hi hi-right-arrow text-lighter"></i></a>
                                    <a href="#" class="datepicker form-group string required">
                                        <input data-auto-update-input="false" data-max-date="2022-12-29" data-min-date="2022-11-01" data-start-week-on="0" data-no-clear="true" class="form-control" data-date="2022-12-28T17:00:00Z" />
                                        <div class="daterangepicker dropdown-menu ltr single opensleft">
                                            <div class="calendar left single" style={{ display: "block" }}>
                                                <div class="daterangepicker_input">
                                                    <input class="input-mini form-control" type="text" name="daterangepicker_start" value="" style={{ display: "none" }} /><i class="fa fa-calendar glyphicon glyphicon-calendar" style={{ display: "none" }}></i>
                                                    <div class="calendar-time" style={{ display: "none" }}>
                                                        <div></div>
                                                        <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
                                                    </div>
                                                </div>
                                                <div class="calendar-table"></div>
                                            </div>
                                            <div class="calendar right" style={{ display: "none" }}>
                                                <div class="daterangepicker_input">
                                                    <input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style={{ display: "none" }} /><i class="fa fa-calendar glyphicon glyphicon-calendar" style={{ display: "none" }}></i>
                                                    <div class="calendar-time" style={{ display: "none" }}>
                                                        <div></div>
                                                        <i class="fa fa-clock-o glyphicon glyphicon-time"></i>
                                                    </div>
                                                </div>
                                                <div class="calendar-table"></div>
                                            </div>
                                            <div class="ranges" style={{ display: "none" }}>
                                                <div class="range_inputs"><button class="applyBtn btn btn-sm btn-success" disabled="disabled" type="button">Apply</button> <button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button></div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="today btn btn-default xs-half-col margin-bottom-sm js-filter-date-actions" style={{ display: "none" }}>Today</a>
                                </div>
                            </div>
                            <div class="from-hour-select block-form-group no-padding-left-sm col-sm-3">
                                <span class="">
                                    <div class="vue-app-time-input time_entry form-group">
                                        <div class="popover-container is-block">

                                            <span>
                                                <span class="" style={{ display: "none" }}>
                                                    <div id="times-136" class="popover vue-popover fade in vue-app-time-picker primary popover-dropdown">

                                                        <div class="popover-content">

                                                            <div class="dropdown">
                                                                <div id="time-0136" data-container="body" class="dropdown-item time selected" data-original-title="" title=""><a>12:00 am</a></div>
                                                                <div id="time-1136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>12:30 am</a></div>
                                                                <div id="time-2136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>1:00 am</a></div>
                                                                <div id="time-3136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>1:30 am</a></div>
                                                                <div id="time-4136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>2:00 am</a></div>
                                                                <div id="time-5136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>2:30 am</a></div>
                                                                <div id="time-6136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>3:00 am</a></div>
                                                                <div id="time-7136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>3:30 am</a></div>
                                                                <div id="time-8136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>4:00 am</a></div>
                                                                <div id="time-9136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>4:30 am</a></div>
                                                                <div id="time-10136" data-container="body" class="dropdown-item time" data-original-title="" title=""><a>5:00 am</a></div>
                                                                <div id="time-11136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">5:30 am</a></div>
                                                                <div id="time-12136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">6:00 am</a></div>
                                                                <div id="time-13136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">6:30 am</a></div>
                                                                <div id="time-14136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">7:00 am</a></div>
                                                                <div id="time-15136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">7:30 am</a></div>
                                                                <div id="time-16136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">8:00 am</a></div>
                                                                <div id="time-17136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">8:30 am</a></div>
                                                                <div id="time-18136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">9:00 am</a></div>
                                                                <div id="time-19136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">9:30 am</a></div>
                                                                <div id="time-20136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">10:00 am</a></div>
                                                                <div id="time-21136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">10:30 am</a></div>
                                                                <div id="time-22136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">11:00 am</a></div>
                                                                <div id="time-23136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">11:30 am</a></div>
                                                                <div id="time-24136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">12:00 pm</a></div>
                                                                <div id="time-25136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">12:30 pm</a></div>
                                                                <div id="time-26136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">1:00 pm</a></div>
                                                                <div id="time-27136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">1:30 pm</a></div>
                                                                <div id="time-28136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">2:00 pm</a></div>
                                                                <div id="time-29136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">2:30 pm</a></div>
                                                                <div id="time-30136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">3:00 pm</a></div>
                                                                <div id="time-31136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">3:30 pm</a></div>
                                                                <div id="time-32136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">4:00 pm</a></div>
                                                                <div id="time-33136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">4:30 pm</a></div>
                                                                <div id="time-34136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">5:00 pm</a></div>
                                                                <div id="time-35136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">5:30 pm</a></div>
                                                                <div id="time-36136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">6:00 pm</a></div>
                                                                <div id="time-37136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">6:30 pm</a></div>
                                                                <div id="time-38136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">7:00 pm</a></div>
                                                                <div id="time-39136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">7:30 pm</a></div>
                                                                <div id="time-40136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">8:00 pm</a></div>
                                                                <div id="time-41136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">8:30 pm</a></div>
                                                                <div id="time-42136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">9:00 pm</a></div>
                                                                <div id="time-43136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">9:30 pm</a></div>
                                                                <div id="time-44136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">10:00 pm</a></div>
                                                                <div id="time-45136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">10:30 pm</a></div>
                                                                <div id="time-46136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">11:00 pm</a></div>
                                                                <div id="time-47136" data-container="body" data-original-title="You cannot add time in the future" class="dropdown-item time"><a disabled="disabled">11:30 pm</a></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                                <i class="hi hi-time hi-16 app-time-picker-trigger"></i>
                                            </span>
                                        </div>
                                        <input class="form-control default-input" /><span class="meridiem-toggle"><span>am</span></span><span class="help-block"></span><span class="help-block"></span>
                                    </div>
                                </span>
                            </div>
                            <div class="to-hour-select block-form-group no-padding-right-sm col-sm-3">

                                <span class="">
                                    <div class="vue-app-time-input time_entry form-group">
                                        <div class="popover-container is-block">
                                            <span> <i class="hi hi-time hi-16 app-time-picker-trigger"></i></span>
                                        </div>
                                        <input class="form-control default-input" /><span class="meridiem-toggle"><span>am</span></span><span class="help-block"></span><span class="help-block"></span>
                                    </div>
                                </span>
                            </div>

                            <div class="col-sm-12"></div>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div class="time-entries-timeline">
                        <div class="popover vue-popover duration-popover" x-placement="bottom" style={{ position: "absolute", willCchange: "transform", top: "0px", left: "0px", transform: "translate3d(0px, 0px, 0px)" }} x-out-of-boundaries="">
                            <div class="popover-content">
                                <span class="vue-app-duration-input">
                                    <div class="form-group">
                                        <input type="default" class="form-control input-default" />
                                    </div>
                                </span>
                            </div>
                            <div x-arrow="" class="popper__arrow"></div>
                        </div>
                        <svg focusable="false" tabindex="-1" class="time-entries-timeline--chart" width="540" height="42">
                            <g class="chart">
                                <g class="bg">
                                    <rect y="6" x="0" height="16" width="540" rx="8" ry="100" fill="#dfe6f1" tabindex="-1"></rect>
                                </g>
                                <g class="now">
                                    <rect y="6" x="141.13055163345547" height="16" width="8" fill="#afbbca" tabindex="-1"></rect>
                                    <line class="now-line" stroke="#afbbca" stroke-width="2" x1="141.13055163345547" x2="141.13055163345547" y1="0" y2="28"></line>
                                    <rect y="6" x="141.13055163345547" height="16" width="398.86944836654453" rx="8" ry="100" fill="#afbbca" tabindex="-1" aria-describedby="tooltip_850yubjuqw"></rect>
                                </g>
                                <g class="time-entries">
                                    <rect y="6.5" height="15" rx="8" ry="100" width="21.50000026041667" x="97.87500113281251" fill="#46c635" stroke="#46c635" stroke-width="1" tabindex="-1"></rect>
                                </g>
                                <g>
                                    <rect class="new-time-entry" y="6.5" height="15" rx="8" ry="100" width="10.250000130208335" x="0" fill="#0d2258" stroke="#0d2258" stroke-width="1" tabindex="-1"></rect>
                                </g>
                            </g>
                            <g class="x axis" transform="translate(0, 22)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                                <g class="tick" opacity="1" transform="translate(135.50000156250002,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">6am</text>
                                </g>
                                <g class="tick" opacity="1" transform="translate(270.50000312500003,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">12pm</text>
                                </g>
                                <g class="tick" opacity="1" transform="translate(405.50000468750005,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">6pm</text>
                                </g>
                            </g>
                            <g class="x axis" transform="translate(0, 22)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                                <g class="tick" opacity="1" transform="translate(135.50000156250002,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">6am</text>
                                </g>
                                <g class="tick" opacity="1" transform="translate(270.50000312500003,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">12pm</text>
                                </g>
                                <g class="tick" opacity="1" transform="translate(405.50000468750005,0)">
                                    <line stroke="#dfe6f1" y2="6"></line>
                                    <text fill="#8e9eb3" y="9" dy="0.71em">6pm</text>
                                </g>
                            </g>
                        </svg>
                        <div class="row mt-40">
                            <div class="col-xs-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 form-col is-centered">
                        <label class="control-label"></label>

                        <label class="boolean optional">
                            <label class="custom-checkbox-wrapper form-group boolean optional time_entry_billable">
                                <input type="checkbox" value="" /><span class="custom-checkbox-box"></span><span><span>Billable</span></span>
                            </label>
                        </label>
                        <i title="" class="hi hi-info a-tooltip ml-5" data-original-title="Time that you bill a client for"></i>


                    </div>
                </div>
                <div class="vue-time-entries-different-time-zone-warning form-group help time-zone" style={{ display: "none" }}>
                    <div class="hi hi-important hi-16"></div>
                    This is 12:00 am - 12:30 am in TuttiFruitti's time zone.
                </div>

                <span>
                    <div class="form-col">
                        <label class="string required control-label">Reason<abbr title="required">*</abbr></label>
                        <div class="app-select-wrapper" name="note">

                            <div data-original-title="" class="app-select">
                                <select class="select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                                    <option value="Forgot to start/stop timer">Forgot to start/stop timer</option>
                                    <option value="Used a wrong task/project">Used a wrong task/project</option>
                                    <option value="Was AFK on a call">Was AFK on a call</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span class="select2 select2-container select2-container--bootstrap" dir="ltr" style={{ width: "100%" }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-4sy5-container"><span class="select2-selection__rendered" id="select2-4sy5-container" title="Forgot to start/stop timer"><span class="select2-selection__placeholder"><span>Why are you adding this time entry?</span></span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                        </div>
                        <span class="help-block"></span>
                    </div>
                </span>
                <span>
                    <div class="form-col"><textarea name="reasonOther" placeholder="Why are you adding this time entry?" rows="4" class="form-control mb-20 mt-10" style={{ display: "none" }}></textarea><span class="help-block"></span></div>
                </span>
                <div class="span mt-20">
                    <span>
                        <div class="form-group text">
                            <div class="row">
                                <div class="col-xs-12"><label class="control-label-btn"><i class="hi hi-16 hi-group-by"></i><a>Add a note</a></label></div>
                            </div>
                            <div class="row">
                                <div class="col-xs-4"><label class="control-label" style={{ display: "none" }}>Note</label></div>
                                <div class="col-xs-8" style={{ display: "none" }}>
                                    <div class="control-label-btn pull-right"><a>Remove note</a></div>
                                </div>
                            </div>
                            <textarea name="work_note" placeholder="What were you working on? (ex: Responding to customers)" rows="4" class="form-control" style={{ display: "none" }}></textarea>
                            <span class="help-block"></span>
                        </div>
                    </span>
                </div>
            </div>
            <div class="modal-footer"><button class="btn btn-default">Cancel</button><button class="btn btn-primary">Save</button></div>

        </>
    )
}

export default ModaEdit
