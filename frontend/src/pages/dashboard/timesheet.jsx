import React, { Children } from 'react'

export default function Timesheet({ Children }) {
    return (
        <>
            <h2 className="text-left page-heading gs-open">
                Dashboard
                <div className="sub-heading">
                    <time dateTime="2022-12-19">Mon, Dec 19, 2022</time> -
                    <time dateTime="2022-12-25">Sun, Dec 25, 2022</time>
                </div>
            </h2>
            {Children}
        </>

    )
}
