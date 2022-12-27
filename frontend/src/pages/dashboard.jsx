import React from 'react'
import Sidebar from '../components/dashboard/sidebar'
import Hamburger from '../components/dashboard/hamburger'
import WidgetTeam from '../components/dashboard/widgetTeam'
import WidgetMe from '../components/dashboard/widgetMe'

export default function Dashboard() {

    return (
        <>

            <div className=""></div>
            <div className="main-wrapper">
                <Sidebar />
                <Hamburger />

                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="w-full h-12 "></div>
                        <h2 className="text-left page-heading gs-open">
                            Dashboard
                            <div className="sub-heading">
                                <time dateTime="2022-12-19">Mon, Dec 19, 2022</time> -
                                <time dateTime="2022-12-25">Sun, Dec 25, 2022</time>
                            </div>
                        </h2>
                        {/* <WidgetTeam /> */}
                        <WidgetMe />
                    </div>
                </div>
                <div aria-hidden="true" aria-labelledby="myModalLabel" className="modal fade" id="hubspot-demo-form-dialog" role="dialog" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button aria-hidden="true" className="close" data-dismiss="modal" type="button">
                                    <i className="hi hi-close hi-12"></i>
                                </button>
                                <h4 className="modal-title">Request a live demo of Hubstaff</h4>
                            </div>
                            <div className="modal-body">
                                <div id="hbspt-form-bda6532b-1b16-4b94-99d2-6e354941aa57" className="hbspt-form" data-hs-forms-root="true"><iframe id="hs-form-iframe-0" className="hs-form-iframe" title="Form 0" scrolling="no" width="100%" style={{ position: "static", border: "none", display: "block", overflow: "hidden", width: "100%" }}></iframe></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
