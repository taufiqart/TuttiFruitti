import React from 'react'
import FormSignIn from '../components/formSignIn'

export default function Home() {
    return (
        <main className="hsds-layout__main">
            <section className="hsds-hero hsds-hero--with-fixed-height-mask">
                <div className="hsds-hero__background-graphic-wrapper hsds-graphic--desktop-only">
                    <span
                        className="wistia_embed popover=true popoverContent=html wistia_async_4hvb27uq5i playerColor=294DFF"></span><button
                            name="button" type="button"
                            className="js-hsds-wistia-popover-trigger hsds-round-button hsds-round-button--primary hsds-round-button--responsive hsds-hero__round-button"
                            aria-label="launch Hubstaff video" data-video-id="4hvb27uq5i">

                        <svg className="svg-inline--fa fa-play hsds-icon hsds-round-button__icon-triangle" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>

                    </button>
                    <svg className="hsds-hero__svg-mask">
                        <defs>
                            <clipPath clipPathUnits="userSpaceOnUse" id="hero-mask" transform="scale(0.47)" transformorigin="top left">
                                <path
                                    d="M0,0l319.305,1135.219l-0.017-0.005c15.276,54.3,64.501,91.777,120.54,91.777h917.343c56.748,0,120.537-41.796,120.537-118.284V0H0z"
                                    fill="#FFFFFF"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="hsds-hero__background-graphic-mask">
                        <picture className="hsds-hero__background-graphic-mask__cover hsds-hero__background-graphic-mask__cover--overlay">
                            <source media="(min-width: 992px)"
                                srcSet="https://marketing-assets.hubstaff.com/assets/refresh/heros/homepage-hero-keyframe-desktop-compressed@2x-2b02f809ffa5efbbc5e1c9651b4244e2b6af3d0b5f546710bd612290a11b2b71.webp"
                                type="image/webp" />
                            <source media="(min-width: 992px)"
                                srcSet="https://marketing-assets.hubstaff.com/assets/refresh/heros/homepage-hero-keyframe-desktop-compressed@2x-ead8dc207bd3585f8d25a261480d95571fd909fb8fb54d398bd076d42dda84e6.jpg"
                                type="image/jpeg" /><img alt="Hubstaff video preview" height="624" width="1121" decoding="async"
                                    src="index.html" />
                        </picture>
                        <div className="hsds-hero__background-graphic hsds-hero__background-graphic--video"
                            data-video-background-src-mp4="https://marketing-assets.hubstaff.com/assets/homepage-hero-video-background-desktop-c67c04d3493f3fed2296d4b72d90da3561680aad50fe2c9e4eb9f95e4d7c78ef.mp4"
                            data-video-background-src-webm="https://marketing-assets.hubstaff.com/assets/homepage-hero-video-background-desktop-d4125b178c0b86034aab50520e43a352943a00f81aa3e7c459b379756d5d3087.webm">
                        </div>
                    </div>
                </div>
                <div className="hsds-hero__container">
                    <div className="hsds-hero__row">
                        <div className="hsds-hero__col hsds-hero__col--content">
                            <div className="hsds-hero__message">
                                <h1 className="hsds-hero__heading">Spend less time tracking and more time <span
                                    className="hsds_hero__heading-brand">growing.</span></h1>
                                <p className="hsds-hero__deck">The all-in-one work time tracker for managing field or remote teams.</p>
                                <FormSignIn />
                            </div>
                        </div>
                        <div className="hsds-hero__col hsds-hero__col--logos hsds-hero__col--align-end">
                            <div className="hsds-hero__footnote">Trusted by <strong>40,000+</strong> businesses.</div>
                            <div className="hsds-hero__logo-row">
                                <div className="hsds-hero__logo-col"><img className="hsds-hero__logo" alt="Groupon logo" loading="lazy"
                                    width="108" height="17" decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/groupon-3390c0b918435d1ec9a58a1bdeb1e719b4913e1fe977349fb1b57101204c0d9d.svg" />
                                </div>
                                <div className="hsds-hero__logo-col"><img className="hsds-hero__logo" alt="Keller Williams logo" loading="lazy"
                                    width="145" height="17" decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/keller-williams-f06b48cdfe6149445df3739f89eca4aee21400bea877ed0386b9389fd3d5face.svg" />
                                </div>
                                <div className="hsds-hero__logo-col"><img className="hsds-hero__logo" alt="Clippers logo" loading="lazy"
                                    width="59" height="44" decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/clippers-dbc95012b41a4f71291072868a9b4b459d3f443ebddc90f6f93c3a23232019c4.svg" />
                                </div>
                                <div className="hsds-hero__logo-col"><img className="hsds-hero__logo" alt="Instacart logo" loading="lazy"
                                    width="110" height="22" decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/instacart-5b9f207c44cd0a516e4813ceda9728ba7eb31dd9ce0693d3f9a6f788d6ef8698.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--background-oval">
                <div className="hsds-row__container">
                    <div className="hsds-tabs">
                        <div aria-label="Hubstaff features" className="hsds-tabs__tab-row">
                            <ul className="hsds-tabs__tab-list">
                                <li className="hsds-tabs__tab-visual"></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab hsds-tabs__tab--is-active" id="tab-time-tracking"
                                    aria-controls="tabpanel-time-tracking" aria-selected="true" tabIndex="-1">
                                    <i className="fas fa-stopwatch hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">Time tracking</span></button></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab" id="tab-productivity-monitoring"
                                    aria-controls="tabpanel-productivity-monitoring">
                                    <i className="far fa-clock hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">Productivity monitoring</span></button></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab" id="tab-reporting" aria-controls="tabpanel-reporting">
                                    <i className="fas fa-chart-line hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">Reporting</span></button></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab" id="tab-gps-tracking" aria-controls="tabpanel-gps-tracking">
                                    <i className="fas fa-map-marked-alt hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">GPS tracking</span></button></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab" id="tab-online-timesheets" aria-controls="tabpanel-online-timesheets">
                                    <i className="far fa-file hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">Online timesheets</span></button></li>
                                <li className="hsds-tabs__tab-item" role="tablist"><button name="button" type="submit" role="tab"
                                    className="hsds-tabs__tab" id="tab-automated-payroll" aria-controls="tabpanel-automated-payroll">
                                    <i className="fas fa-scroll hsds-tab__tab-icon hsds-icon"></i>
                                    <span className="hsds-tab__tab-label">Automated payroll</span></button></li>
                            </ul>
                        </div>
                        <ul className="hsds-tabs__panel-list">
                            <li className="hsds-tabs__panel-item"><button name="button" type="button"
                                className="hsds-tabs__tab-accordion hsds-tabs__tab-accordion--is-open"
                                aria-controls="tabpanel-time-tracking" aria-expanded="true"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#time-tracking"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">Time tracking</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-hidden="false" aria-labelledby="tab-time-tracking"
                                    className="hsds-tabs__panel hsds-tabs__panel--is-active hsds-tabs__panel--is-open"
                                    id="tabpanel-time-tracking" role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Easy and accurate time tracking</h2>
                                    <div className="hsds-tabs__deck">Clean, lightweight apps for desktop, web, mobile, and Chrome. <a
                                        href="time_tracking_software.html">Learn more about time tracking.</a></div>
                                    <div className="hsds-screenshot"><img className="hsds-screenshot__timer" alt="time tracking software"
                                        aria-hidden="true" loading="lazy" width="207" height="32"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/gifs/time-tracking-timer-mobile@2x-3acec9f51657a98d22ddc5033f6ccb4e30a5477175327214bd6610eaeddb4059.gif 142w, https://marketing-assets.hubstaff.com/assets/refresh/gifs/time-tracking-timer-desktop@2x-10c903bfd1d38bf799aeb34f4e7b06196d09bab4341ff89f00d51cd5445823c0.gif 433w"
                                        sizes="(max-width: 576px) 50px,
992px" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/gifs/time-tracking-timer-desktop@2x-10c903bfd1d38bf799aeb34f4e7b06196d09bab4341ff89f00d51cd5445823c0.gif" />
                                        <picture>
                                            <source media="(max-width: 992px)"
                                                srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/time-tracking-no-timer-mobile@2x-d119ed183647c3cd4d0f34f0cec726d427d36fa6d86a8079086a157b44497f55.webp"
                                                type="image/webp" />
                                            <source
                                                srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/time-tracking-no-timer-desktop@2x-4a3cbf1950d6eeff229cfb610a5c753c15d57fc14516604f92a016468e227aa5.webp"
                                                type="image/webp" />
                                            <source media="(min-width: 992px)"
                                                srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/time-tracking-no-timer-desktop@2x-79d7dfe51917b72f9f10918a0aa95f47949c81d49cf19f5b445a7dd89d789bd8.png"
                                                type="image/jpeg" /><img className="hsds-tabs__image"
                                                    alt="Clean, lightweight apps for desktop, web, mobile, and Chrome" loading="lazy" width="940"
                                                    height="566" decoding="async"
                                                    src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/time-tracking-no-timer-desktop@2x-79d7dfe51917b72f9f10918a0aa95f47949c81d49cf19f5b445a7dd89d789bd8.png" />
                                        </picture>
                                    </div>
                                </div>
                            </li>
                            <li className="hsds-tabs__panel-item"><button name="button" type="button" className="hsds-tabs__tab-accordion"
                                aria-controls="tabpanel-productivity-monitoring" aria-expanded="false"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#productivity-monitoring"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">Productivity monitoring</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-labelledby="tab-productivity-monitoring" className="hsds-tabs__panel"
                                    id="tabpanel-productivity-monitoring" role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Track and improve employee productivity</h2>
                                    <div className="hsds-tabs__deck">Keep your team productive without constant check-ins. <a
                                        href="features/employee_productivity.html">Learn more about productivity monitoring.</a></div>
                                    <picture>
                                        <source media="(max-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/productivity-monitoring-mobile@2x-67bdcbec6bed6db66cb0e70dc96a97e426e8d2ac04cfb29d6ad044b64c64b468.webp"
                                            type="image/webp" />
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/productivity-monitoring-desktop@2x-c340245effb54a1b720d77420ec6a823870571d66ccce0b1259e19f6697eab7b.webp"
                                            type="image/webp" />
                                        <source media="(min-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/productivity-monitoring-desktop@2x-a4c52386ead411067d1e45dd0c45fb49dafb1c75e6439c96ebb10f597d66c0ac.png"
                                            type="image/jpeg" /><img className="hsds-tabs__image"
                                                alt="Keep your team productive without constant check-ins" loading="lazy" width="940" height="520"
                                                decoding="async"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/productivity-monitoring-mobile@2x-d344a0f09499c44b09d6e4ebac30a617519fed2e9448bc17e9d9889a8424edd1.png" />
                                    </picture>
                                </div>
                            </li>
                            <li className="hsds-tabs__panel-item"><button name="button" type="button" className="hsds-tabs__tab-accordion"
                                aria-controls="tabpanel-reporting" aria-expanded="false"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#development"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">Reporting</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-labelledby="tab-reporting" className="hsds-tabs__panel" id="tabpanel-reporting" role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Detailed reporting for your business</h2>
                                    <div className="hsds-tabs__deck">Uncover where time (and money) is being wasted. <a
                                        href="time-report.html">Learn more about reporting.</a></div>
                                    <picture>
                                        <source media="(max-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/reporting-mobile@2x-f79a0f4b028e10281c4dd99dd80abc259f5d0ab1414cc16d1e53b59346097da8.webp"
                                            type="image/webp" />
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/reporting-desktop@2x-efcc6e85ce9b40c1487bed2a9f07ca6306ca8499d4e111621488cfc92b20d673.webp"
                                            type="image/webp" />
                                        <source media="(min-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/reporting-desktop@2x-f43dd52b399470a2db2e5de49453eea1ab547ca1b56ab5c28c72be4c889c95c0.png"
                                            type="image/jpeg" /><img className="hsds-tabs__image"
                                                alt="Uncover where time (and money) is being wasted" loading="lazy" width="940" height="508"
                                                decoding="async"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/reporting-mobile@2x-46716334ed1d61a5d49da98a0eb4e2ae2ed9bc63f7df62e6b4e1f212f3f4a91e.png" />
                                    </picture>
                                </div>
                            </li>
                            <li className="hsds-tabs__panel-item"><button name="button" type="button" className="hsds-tabs__tab-accordion"
                                aria-controls="tabpanel-gps-tracking" aria-expanded="false"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#gps"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">GPS tracking</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-labelledby="tab-gps-tracking" className="hsds-tabs__panel" id="tabpanel-gps-tracking"
                                    role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Smarter GPS tracking</h2>
                                    <div className="hsds-tabs__deck">Manage your fleet with a simple GPS app. <a
                                        href="features/gps_time_tracking.html">Learn more about GPS tracking.</a></div>
                                    <picture>
                                        <source media="(max-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/gps-tracking-mobile@2x-8d117cc44b9fdc86e64f4bc28fc40eac698ec6fef54ef785071e2d1c2d517909.webp"
                                            type="image/webp" />
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/gps-tracking-desktop@2x-be98bd226c7b02801869240ca60634343062fc0c547e34a2e1b359390a24edb3.webp"
                                            type="image/webp" />
                                        <source media="(min-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/gps-tracking-desktop@2x-d4b78bee199f6c455beea57e43d4042f18699e0c8e16aab6a1a706370b3810de.png"
                                            type="image/jpeg" /><img className="hsds-tabs__image" alt="Manage your fleet with a simple GPS app"
                                                loading="lazy" width="940" height="588" decoding="async"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/gps-tracking-mobile@2x-2c4f1074e14fc1a2c2e8ea08c4900e6b409ce2950200ce5ea4aaf5b52fb8a879.png" />
                                    </picture>
                                </div>
                            </li>
                            <li className="hsds-tabs__panel-item"><button name="button" type="button" className="hsds-tabs__tab-accordion"
                                aria-controls="tabpanel-online-timesheets" aria-expanded="false"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#online-timesheets"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">Online timesheets</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-labelledby="tab-online-timesheets" className="hsds-tabs__panel" id="tabpanel-online-timesheets"
                                    role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Never chase down timesheets again</h2>
                                    <div className="hsds-tabs__deck">Simple timesheets that give you more control. <a
                                        href="features/employee_timesheets.html">Learn more about online timesheets.</a></div>
                                    <picture>
                                        <source media="(max-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/online-timesheets-mobile@2x-ae5f1ac76cb77a5dca17f987020646a854129789b852ed365f9688d10bef2c95.webp"
                                            type="image/webp" />
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/online-timesheets-desktop@2x-dc72294ec03a4e811e5a073569332fa1d6091d73a22a60141f6198ce4cbac381.webp"
                                            type="image/webp" />
                                        <source media="(min-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/online-timesheets-desktop@2x-1fd9a6d8e2b2822ac0c6cfab23f8c746f4313e5d4a8d20a3b8b9aac4d7c24ea1.png"
                                            type="image/jpeg" /><img className="hsds-tabs__image" alt="Simple timesheets that give you more control"
                                                loading="lazy" width="940" height="541" decoding="async"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/online-timesheets-mobile@2x-06e6bda0245c0272a87ac86c4164247505f77f27e244b6e9a2a668b4ee5d315a.png" />
                                    </picture>
                                </div>
                            </li>
                            <li className="hsds-tabs__panel-item"><button name="button" type="button" className="hsds-tabs__tab-accordion"
                                aria-controls="tabpanel-automated-payroll" aria-expanded="false"><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-icon">
                                    <use xlinkHref="#automated-payroll"></use>
                                </svg><span className="hsds-tabs__tab-accordion-label">Automated payroll</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-tabs__tab-accordion-menu-icon">
                                    <use xlinkHref="#caret-down-l"></use>
                                </svg></button>
                                <div aria-labelledby="tab-automated-payroll" className="hsds-tabs__panel" id="tabpanel-automated-payroll"
                                    role="tabpanel">
                                    <h2 className="hsds-tabs__heading">Automate payroll and invoicing</h2>
                                    <div className="hsds-tabs__deck">Save yourself hours each week. <a href="features/online_payroll.html">Learn
                                        more about automated payroll.</a></div>
                                    <picture>
                                        <source media="(max-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/automated-payroll-mobile@2x-6de22c9c8f2023584a810ac015667b6109a1f700254cae093df4a61f31b5d34c.webp"
                                            type="image/webp" />
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/automated-payroll-desktop@2x-20d4c649fe52ad32e4cef36ee11e9945d18cc010e8e4279d63cafe7e8e56be34.webp"
                                            type="image/webp" />
                                        <source media="(min-width: 992px)"
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/automated-payroll-desktop@2x-c484c450da1868035bb70ebd0b8228570ebd224a0c2989e694a9581079af95d5.png"
                                            type="image/jpeg" /><img className="hsds-tabs__image" alt="Save yourself hours each week" loading="lazy"
                                                width="940" height="470" decoding="async"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/automated-payroll-mobile@2x-101b50f05fa74ac4dedcbf81d61a4b4edf7417d10f5d06898971bfe4eaa6c632.png" />
                                    </picture>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--border-bottom hsds-row--collapse-padding-top">
                <div className="hsds-row__container">
                    <div className="hsds-stats">
                        <h3 className="hsds-stats__heading">Each month</h3>
                        <div className="hsds-stats__row">
                            <dl className="hsds-stats__stat">
                                <dt className="hsds-stats__label">Active users</dt>
                                <dd className="hsds-stats__value">588K+</dd>
                            </dl>
                            <dl className="hsds-stats__stat">
                                <dt className="hsds-stats__label">Total hours tracked</dt>
                                <dd className="hsds-stats__value">21M+</dd>
                            </dl>
                            <dl className="hsds-stats__stat">
                                <dt className="hsds-stats__label">Tasks completed</dt>
                                <dd className="hsds-stats__value">4M+</dd>
                            </dl>
                            <dl className="hsds-stats__stat">
                                <dt className="hsds-stats__label">Payments</dt>
                                <dd className="hsds-stats__value">348K+</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row hsds-row--background-brand-primary-dark hsds-row--oval-bottom">
                <div className="hsds-row__background-brand-circle hsds-row__background-brand-circle--blue"></div>
                <div className="hsds-row__background-brand-circle hsds-row__background-brand-circle--green"></div>
                <div className="hsds-row__background-brand-circle hsds-row__background-brand-circle--orange"></div>
                <div className="hsds-row__container hsds-row__container--spaced">
                    <div className="hsds-row__header hsds-row__header--width-medium">
                        <h2 className="hsds-row__heading">The productivity platform</h2>
                        <div className="hsds-row__p hsds-row__p--large">The complete platform for time tracking, workforce and project
                            management.</div>
                    </div>
                    <div className="hsds-card-menu hsds-card-menu--float-bottom">
                        <div className="hsds-card-menu__row" role="menu"><a className="hsds-card-menu__item" role="menuitem"
                            href="product/time.html">
                            <div className="hsds-card-menu__preview">
                                <picture>
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-time-preview@2x-9ca60c5ec00a053c4d5e7802672a49d5e1ee743a09ebd19b1bbeb99556aa2548.webp"
                                        type="image/webp" /><img loading="lazy" width="335" height="313" decoding="async"
                                            alt="Hubstaff Time"
                                            src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-time-preview@2x-0eca1bcbd2772058e59d4185a07261c62dfcce661ac97185485a37cf8e6f513e.jpg" />
                                </picture>
                            </div>
                            <div className="hsds-card-menu__content"><svg aria-hidden="true" className="hsds-card-menu__svg-title">
                                <use xlinkHref="#logo-hubstaff-time"></use>
                            </svg>
                                <div className="hsds-card-menu__description">Simple time tracking and reporting</div>
                            </div>
                        </a><a className="hsds-card-menu__item" role="menuitem" href="product/desk.html">
                                <div className="hsds-card-menu__preview">
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-desk-preview@2x-66395c1d29d70e469199444aae7e27fa943cd45f51cac6d02a6e8925c71ebe54.webp"
                                            type="image/webp" /><img loading="lazy" width="335" height="313" decoding="async"
                                                alt="Hubstaff Desk"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-desk-preview@2x-1bab1fed2099f6e89c0af11c9f86d161b0b9a44a9934a818072f1ea410707655.jpg" />
                                    </picture>
                                </div>
                                <div className="hsds-card-menu__content"><svg aria-hidden="true" className="hsds-card-menu__svg-title">
                                    <use xlinkHref="#logo-hubstaff-desk"></use>
                                </svg>
                                    <div className="hsds-card-menu__description">Proof of work, time tracking, and team management</div>
                                </div>
                            </a><a className="hsds-card-menu__item" role="menuitem" href="product/field.html">
                                <div className="hsds-card-menu__preview">
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-field-preview@2x-9f92568bb227eb485d612fef8afd596365fb8d362987747640bee7d6db549693.webp"
                                            type="image/webp" /><img loading="lazy" width="335" height="313" decoding="async"
                                                alt="Hubstaff Field"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-field-preview@2x-c6242520bcb1584769a8a4fecf190085ec54f9316581819c15b75cf1ca583a70.jpg" />
                                    </picture>
                                </div>
                                <div className="hsds-card-menu__content"><svg aria-hidden="true" className="hsds-card-menu__svg-title">
                                    <use xlinkHref="#logo-hubstaff-field"></use>
                                </svg>
                                    <div className="hsds-card-menu__description">GPS location tracking and team management</div>
                                </div>
                            </a></div>
                        <div className="hsds-card-menu__row" role="menu"><a
                            className="hsds-card-menu__item hsds-card-menu__item--horizontal-on-desktop" role="menuitem"
                            href="tasks.html">
                            <div className="hsds-card-menu__preview">
                                <picture>
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-tasks-preview@2x-3fb59de926dab88560b009602540409f7367a4a5b3def88a4763b6f35da2e7bc.webp"
                                        type="image/webp" /><img loading="lazy" width="161" height="196" decoding="async"
                                            alt="Hubstaff Tasks"
                                            src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-tasks-preview@2x-57d7bb6203459bfc861f9c43501cda4286517a4b5a67e324562cc8ca9dc30d23.jpg" />
                                </picture>
                            </div>
                            <div className="hsds-card-menu__content"><svg aria-hidden="true" className="hsds-card-menu__svg-title">
                                <use xlinkHref="#logo-hubstaff-tasks"></use>
                            </svg>
                                <div className="hsds-card-menu__description">Simple, Agile project management for productive teams of all
                                    sizes</div>
                            </div>
                        </a><a className="hsds-card-menu__item hsds-card-menu__item--horizontal-on-desktop" role="menuitem"
                            rel="nofollow" href="https://talent.hubstaff.com">
                                <div className="hsds-card-menu__preview">
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-talent-preview@2x-6eaf597033fa43832a3da12e1c204de1765414d6abc0d339d07bae947b925567.webp"
                                            type="image/webp" /><img loading="lazy" width="161" height="196" decoding="async"
                                                alt="Hubstaff Talent"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/stock/menu-hubstaff-talent-preview@2x-fa230a8c88e02bdc5f4af41f6c031296674bd75212840b7c35c7fbf6bcc7de92.jpg" />
                                    </picture>
                                </div>
                                <div className="hsds-card-menu__content"><svg aria-hidden="true" className="hsds-card-menu__svg-title">
                                    <use xlinkHref="#logo-hubstaff-talent"></use>
                                </svg>
                                    <div className="hsds-card-menu__description">The free and easy way to find remote talent across the world
                                    </div>
                                </div>
                            </a></div>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--collapse-padding-bottom">
                <div className="hsds-row__container">
                    <div className="hsds-row__header hsds-row__header--width-small">
                        <h2 className="hsds-row__eyebrow">3 ways hubstaff helps you</h2>
                        <h3 className="hsds-row__heading">Run a more profitable business</h3>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--col-flop-on-desktop">
                <div className="hsds-row__container">
                    <div className="hsds-row__grid">
                        <div className="hsds-row__col hsds-row__col--graphic hsds-row__col--pull-right">
                            <div className="hsds-row__image-wrapper hsds-row__image-wrapper--margin-left-tablet"><svg aria-hidden="true"
                                className="hsds-row__graph-paper-graphic">
                                <use xlinkHref="#graph-paper"></use>
                            </svg>
                                <div
                                    className="hsds-row__card-above hsds-row__card-above--bottom-left hsds-row__card-above--waiting-to-animate">
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hours-worked-today-frame-1@2x-4979fe01d1f6dba5b8da66352b57f70755385c8364d07d82f1e97d48ca8b7614.webp"
                                            type="image/webp" /><img className="hsds-row__image hsds-row__image--frame-1" aria-hidden="true"
                                                loading="lazy" width="468" height="148" decoding="async" alt="Worked today stat"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hours-worked-today-frame-1@2x-520c72d8340f382ddb883a8fac062d62889700a3fc1b3964982d1ce5c700e31a.jpg" />
                                    </picture>
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hours-worked-today-frame-2@2x-1e43d6492aca7a15db8e55ced1665b8b36c36b6ccccef2e2cbfbaaa1e7daf880.jpg"
                                            type="image/webp" /><img className="hsds-row__image hsds-row__image--frame-2" aria-hidden="true"
                                                loading="lazy" width="468" height="148" decoding="async" alt="Happy productive employee"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hours-worked-today-frame-2@2x-1e43d6492aca7a15db8e55ced1665b8b36c36b6ccccef2e2cbfbaaa1e7daf880.jpg" />
                                    </picture>
                                </div>
                                <picture>
                                    <source media="(max-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-couch-mobile@2x-9f6c1635dce39f0c560b817004d57f65c3d647550debdfd29ebd99ddd87673da.webp"
                                        type="image/webp" />
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-couch-desktop@2x-140bcad9178c62f4b9a80cede5b1b19e77c140d3f1fc60ad8637f4fba3efb30c.webp"
                                        type="image/webp" />
                                    <source media="(min-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-couch-desktop@2x-e12bf6beef8328a5217b33009631e7d1bb82c5449e15f60e1323242dc423d16d.jpg"
                                        type="image/jpeg" /><img
                                        className="hsds-row__image hsds-row__image--mask-radial hsds-row__image--mask-radial-inline-start"
                                        alt="improve productivity with Hubstaff" loading="lazy" width="585" height="713" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-couch-mobile@2x-4fc04f2bcbb22e9e26ac97536150ba0035f34b92868375e017afe9ca75e59953.jpg" />
                                </picture>
                            </div>
                        </div>
                        <div className="hsds-row__col hsds-row__col--content">
                            <div className="hsds-medallion"><svg aria-hidden="true" className="hsds-icon hsds-medallion__icon">
                                <use xlinkHref="#employee-monitoring"></use>
                            </svg></div>
                            <h3 className="hsds-row__heading">Instantly improve productivity</h3>
                            <p className="hsds-row__p">It’s simple psychology. When your team tracks time with Hubstaff, everyone is more
                                aware of how they're spending each minute of their day. This improves focus and keeps your team on task.
                            </p>
                            <hr className="hsds-row__hr" />
                            <h4 className="hsds-row__subhead">One-minute setup</h4>
                            <p className="hsds-row__p">There’s zero learning curve, so your team can start tracking right away.</p>
                            <h4 className="hsds-row__subhead">Over 40 integrations</h4>
                            <p className="hsds-row__p">Connect Hubstaff to your favorite business apps.</p><a
                                className="hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                href="productivity-stats.html"><span className="hsds-button__label">More about productivity <span
                                    className="hsds-button__label-icon-nowrap">benchmarks<svg aria-hidden="true"
                                        className="hsds-icon hsds-button__icon hsds-button__icon--inline">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg></span></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row">
                <div className="hsds-row__container">
                    <div className="hsds-row__grid">
                        <div className="hsds-row__col hsds-row__col--graphic">
                            <div className="hsds-screenshot hsds-screenshot__collapse-bottom">
                                <picture>
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-message-1@2x-474f84a1c9cbdc3c0606c63800a66505f3d8d891f2dd01f6bdbb73fbadb50f62.webp"
                                        type="image/webp" /><img
                                        className="hsds-screenshot__notification hsds-screenshot__notification--1 hsds-screenshot__notification--waiting-to-animate"
                                        alt="Hubstaff: James is 30 minutes late for his shift" loading="lazy" width="360" height="116"
                                        decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-message-1@2x-3d05209f726f6fb5627fba07c460b3aefbf75638c046e4788f4514abfa083236.png" />
                                </picture>
                                <picture>
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-message-2@2x-c3210588581a035fe55855f9aac17ea62f0043cd5a775a60015ffc2b5d0c5bc6.webp"
                                        type="image/webp" /><img
                                        className="hsds-screenshot__notification hsds-screenshot__notification--2 hsds-screenshot__notification--waiting-to-animate"
                                        alt="Hubstaff: Mike has arrived at the &quot;Safeway&quot; job site" loading="lazy" width="360"
                                        height="116" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-message-2@2x-fd06c24a719e693843be605eb0da3e55ea9312a9afa76699f921866f89ba53d0.png" />
                                </picture>
                                <picture>
                                    <source media="(max-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-mobile@2x-05cd3f6220fe9bf5fcba4880236f80c61d40b0c61460bd7dd1123d1c2c73034a.webp"
                                        type="image/webp" />
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-desktop@2x-64776ebfe105a7307d385d4a6a4663b88c85dae6399f99d09f950d0b28948fa3.webp"
                                        type="image/webp" />
                                    <source media="(min-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-desktop@2x-f027b138c9b5984a9a4bc3243628a2f5fac2160bc8b2a8accdcef3c6322703bf.png"
                                        type="image/jpeg" /><img className="hsds-screenshot__app-notifications" alt="automate team management"
                                            loading="lazy" width="562" height="855" decoding="async"
                                            src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/hubstaff-app-notifications-mobile@2x-af6d070e724a5cc3ad0822f322c649d2cdeeeda953fc4768ada8ffa2d7b00cf7.png" />
                                </picture>
                            </div>
                        </div>
                        <div className="hsds-row__col hsds-row__col--content">
                            <div className="hsds-medallion hsds-medallion--brand-accent"><svg aria-hidden="true"
                                className="hsds-icon hsds-medallion__icon">
                                <use xlinkHref="#automate-management"></use>
                            </svg></div>
                            <h3 className="hsds-row__heading">Automate team management</h3>
                            <p className="hsds-row__p">Hubstaff tackles time-draining admin work for you. Like chasing down project updates.
                                Or messing with timesheets. Or ensuring deadlines are met and work stays within budget.</p>
                            <hr className="hsds-row__hr" />
                            <h4 className="hsds-row__subhead">Goodbye check-ins (hello alerts)</h4>
                            <p className="hsds-row__p">See what sites and apps they’ve used and get productivity stats.</p>
                            <h4 className="hsds-row__subhead">Spot workers who need help</h4>
                            <p className="hsds-row__p">Activity reports tell you who is struggling. Optional screenshots show how they’re
                                struggling.</p><a
                                    className="hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                    href="features/employee_monitoring.html"><span className="hsds-button__label">More about employee <span
                                        className="hsds-button__label-icon-nowrap">monitoring<svg aria-hidden="true"
                                            className="hsds-icon hsds-button__icon hsds-button__icon--inline">
                                            <use xlinkHref="#arrow-right"></use>
                                        </svg></span></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--col-flop-on-desktop">
                <div className="hsds-row__container">
                    <div className="hsds-row__grid">
                        <div className="hsds-row__col hsds-row__col--graphic hsds-row__col--pull-right">
                            <div
                                className="hsds-row__image-wrapper hsds-row__image--pull-right-desktop-override hsds-row__image-wrapper--margin-left-tablet">
                                <div
                                    className="hsds-row__card-above hsds-row__card-above--left-center hsds-row__card-above--bottom-right-desktop hsds-row__card-above--padded">
                                    <picture>
                                        <source
                                            srcSet="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/report-time-limits@2x-cd6e6de0b030b445094b41b40b824481dd3ca33f4677694442fda41ecee059d9.webp"
                                            type="image/webp" /><img className="hsds-row__image" aria-hidden="true" loading="lazy" width="249"
                                                height="217" decoding="async" alt="Time tracking with weekly limits"
                                                src="https://marketing-assets.hubstaff.com/assets/refresh/screenshots/report-time-limits@2x-f36ffeb01774c7ae74338d471c4dba607b708fa2c1f237c97dcb2a7550dcd575.jpg" />
                                    </picture>
                                    <div className="hsds-progress-wrapper hsds-progress-wrapper--desktop-only">
                                        <div className="hsds-progress">
                                            <div className="hsds-progress__heading">Weekly Limit</div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">20 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar hsds-progress__bar--waiting-to-animate" style={{ width: '50%' }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hsds-row__card-above hsds-row__card-above--bottom-right hsds-row__card-above--left-center-desktop hsds-row__card-above--padded">
                                    <div className="hsds-progress-wrapper hsds-progress-wrapper--mobile-only">
                                        <div className="hsds-progress hsds-progress--table">
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">5:00 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div
                                                            className="hsds-progress__bar hsds-progress__bar--waiting-to-animate hsds-progress__bar--is-error"
                                                            style={{ width: "100%" }}>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">3396%</div>
                                            </div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">30:00 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar hsds-progress__bar--waiting-to-animate" style={{ width: "90%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">90%</div>
                                            </div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">3:00 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar hsds-progress__bar--waiting-to-animate" style={{ width: "12%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">12%</div>
                                            </div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">8:00 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar"></div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">0%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hsds-progress-wrapper hsds-progress-wrapper--desktop-only">
                                        <div className="hsds-progress">
                                            <div className="hsds-progress__heading">Development</div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">18 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar hsds-progress__bar--waiting-to-animate" style={{ width: "40%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">40%</div>
                                            </div>
                                        </div>
                                        <div className="hsds-progress">
                                            <div className="hsds-progress__heading">Webinars</div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">$1,200</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div className="hsds-progress__bar hsds-progress__bar--waiting-to-animate" style={{ width: "50%" }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">50%</div>
                                            </div>
                                        </div>
                                        <div className="hsds-progress">
                                            <div className="hsds-progress__heading">Admin</div>
                                            <div className="hsds-progress__row">
                                                <div className="hsds-progress__label">18 hrs</div>
                                                <div className="hsds-progress__bar-cell">
                                                    <div className="hsds-progress__track">
                                                        <div
                                                            className="hsds-progress__bar hsds-progress__bar--is-error hsds-progress__bar--waiting-to-animate"
                                                            style={{ width: "100%" }}></div>
                                                    </div>
                                                </div>
                                                <div className="hsds-progress__value">133%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <picture>
                                    <source media="(max-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-step-mobile@2x-710dccbd535afc0e55485ad9d4bf4387af2da1f0123dc8040e2d5b02d5cffc63.webp"
                                        type="image/webp" />
                                    <source
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-step-desktop@2x-51f1edda7e4ef1b77d257d0be7e7b582af1821bf728fa48283e154cea0f9892b.webp"
                                        type="image/webp" />
                                    <source media="(min-width: 992px)"
                                        srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-step-desktop@2x-61c7e3bb146fc55d75ec5805f5be4290df037222cf1eebc1eb9c139d75264818.jpg"
                                        type="image/jpeg" /><img
                                        className="hsds-row__image hsds-row__image--mask-radial hsds-row__image--mask-radial-inline-start"
                                        alt="Hubstaff project cost management" loading="lazy" width="540" height="740" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/stock/happy-customer-on-step-mobile@2x-c3bbc849ed68322d4ea298b8896aed5ce5768cfe8b2aff3ec2354357ec21181e.jpg" />
                                </picture>
                            </div>
                        </div>
                        <div className="hsds-row__col hsds-row__col--content">
                            <div className="hsds-medallion"><svg aria-hidden="true" className="hsds-icon hsds-medallion__icon">
                                <use xlinkHref="#wrench"></use>
                            </svg></div>
                            <h3 className="hsds-row__heading">Find and fix money leaks</h3>
                            <p className="hsds-row__p">Is a project or client draining your profit margin? Hubstaff will let you know. It
                                gives you reports on where your company's billable hours are going and how that impacts revenue.</p>
                            <hr className="hsds-row__hr" />
                            <h4 className="hsds-row__subhead">Know what to prioritize</h4>
                            <p className="hsds-row__p">Reports show you which projects are most profitable and which ones drain your team’s
                                time.</p>
                            <h4 className="hsds-row__subhead">Control expenses</h4>
                            <p className="hsds-row__p">Track expenses and set weekly budgets or time limits for teams. Get alerts when
                                projects go over.</p><a
                                    className="hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                    href="features/project_cost_management.html"><span className="hsds-button__label">More about cost <span
                                        className="hsds-button__label-icon-nowrap">management<svg aria-hidden="true"
                                            className="hsds-icon hsds-button__icon hsds-button__icon--inline">
                                            <use xlinkHref="#arrow-right"></use>
                                        </svg></span></span></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row">
                <div className="hsds-row__container">
                    <div className="hsds-row__grid">
                        <div className="hsds-row__col hsds-row__col--graphic hsds-row__col--pull-left">
                            <picture>
                                <source media="(max-width: 992px)"
                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/industries-gang-mobile@2x-40f4b11c0946fb817832438fb3f600e5c11099e1dfcc54d72520c586df0ffb9f.webp"
                                    type="image/webp" />
                                <source
                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/industries-gang-desktop@2x-de54c12f92bc87f5238523899b3b3a2a9055cda7dd9925a2750b50419f477df8.webp"
                                    type="image/webp" />
                                <source media="(min-width: 992px)"
                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/stock/industries-gang-desktop@2x-4bdb92ed5d9c9059a33d543a0b5d243386aee705dacd784dff676ca36609d055.jpg"
                                    type="image/jpeg" /><img className="hsds-row__image" alt="Hubstaff is a good solution for any team"
                                        loading="lazy" width="725" height="932" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/stock/industries-gang-mobile@2x-5efb015edf6ca277463d2add32ccbd12cf7ce34623fae440a7ed12047dbd6ace.jpg" />
                            </picture>
                        </div>
                        <div className="hsds-row__col hsds-row__col--content">
                            <h2 className="hsds-row__eyebrow">Industries</h2>
                            <h3 className="hsds-row__heading">Desk work or field work, we’ve got you covered</h3>
                            <p className="hsds-row__p">Businesses in more than 100 different industries track time with Hubstaff.</p>
                            <ul className="hsds-link-list">
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link"
                                    href="solutions/software-development.html"><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__icon">
                                        <use xlinkHref="#development"></use>
                                    </svg><span className="hsds-link-list__label">Software development</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/agencies.html"><svg
                                    aria-hidden="true" className="hsds-icon hsds-link-list__icon">
                                    <use xlinkHref="#agency"></use>
                                </svg><span className="hsds-link-list__label">Agency</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/accounting.html"><svg
                                    aria-hidden="true" className="hsds-icon hsds-link-list__icon">
                                    <use xlinkHref="#accountants"></use>
                                </svg><span className="hsds-link-list__label">Accountants</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/construction.html"><svg
                                    aria-hidden="true" className="hsds-icon hsds-link-list__icon">
                                    <use xlinkHref="#construction"></use>
                                </svg><span className="hsds-link-list__label">Construction</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link"
                                    href="solutions/home-health-care.html"><svg aria-hidden="true" className="hsds-icon hsds-link-list__icon">
                                        <use xlinkHref="#health-care"></use>
                                    </svg><span className="hsds-link-list__label">Health care</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/ecommerce.html"><svg
                                    aria-hidden="true" className="hsds-icon hsds-link-list__icon">
                                    <use xlinkHref="#e-commerce"></use>
                                </svg><span className="hsds-link-list__label">E-commerce</span><svg aria-hidden="true"
                                    className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item hsds-link-list__item--no-border hsds-link-list__item--more"><button
                                    name="button" type="button"
                                    className="js-hsds-modal-trigger hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                    aria-controls="select-your-industry-modal"><span className="hsds-button__label">Select your industry<svg
                                        aria-hidden="true" className="hsds-icon hsds-button__icon hsds-button__icon--inline">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg></span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="hsds-row hsds-row--background-brand-primary-dark hsds-row--oval-bottom hsds-row--oval-bottom-light-blue">
                <div className="hsds-row__container hsds-row__container--full-width">
                    <div className="hsds-row__grid hsds-row__grid--3-col">
                        <div className="hsds-row__col">
                            <div className="hsds-sticker-container hsds-sticker-container--left">
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"><img
                                    alt="jira integration" className="hsds-sticker__icon" loading="lazy" width="36" height="36"
                                    decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/jira-mark-dcc8982baa2812b784f0172a6740f4c5e95dce9f49c7f70835aeb6214899fb85.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--small hsds-sticker--waiting-to-animate">
                                    <img alt="gitlab integration" className="hsds-sticker__icon" loading="lazy" width="22" height="21"
                                        decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/gitlab-mark-53d2b8f539040ea7eb5462b172551d1ed1080b99821c2be2305eac95632815fd.svg" />
                                </div>
                                <div
                                    className="hsds-sticker hsds-sticker--responsive hsds-sticker--responsive hsds-sticker--large hsds-sticker--waiting-to-animate"
                                    style={{ background: "#C8DE72" }}><img alt="zendesk integration" className="hsds-sticker__icon" loading="lazy"
                                        width="48" height="35" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/zendesk-mark-e743b09960594c57d98012efc195cb70c0aa50da139b789162dd25b1c8bca4c6.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"
                                    style={{ background: "#28A037" }}><img alt="quickbooks integration" className="hsds-sticker__icon" loading="lazy"
                                        width="36" height="32" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/quickbooks-mark-white-0fd7af1d7fcd9c491c83f59bccbce52880f8042fe3d45de4a9dab24fb09aae05.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--small hsds-sticker--waiting-to-animate">
                                    <img alt="paypal integration" className="hsds-sticker__icon" loading="lazy" width="22" height="26"
                                        decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/paypal-mark-1c234c1c47001e9c518961c3561466a270421d4b480b6730ed12afb69328f9cc.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"><img
                                    alt="breeze integration" className="hsds-sticker__icon" loading="lazy" width="36" height="34"
                                    decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/breeze-mark-1580f970d82c62c518fc7af9c968d17e50d5295d6e35cb270a24a2e9b37fee04.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--xlarge hsds-sticker--waiting-to-animate"
                                    style={{ background: "linear-gradient(135deg, #ff4566 0%,#ff5478 35%,#ff7150 100%)" }}><img
                                        alt="asana integration" className="hsds-sticker__icon" loading="lazy" width="64" height="59"
                                        decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/asana-mark-white-b69dd558eb716f020205275b842ee2a8174297d3e530e1dcf76f7bade543f039.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"><img
                                    alt="slack integration" className="hsds-sticker__icon" loading="lazy" width="36" height="36"
                                    decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/slack-mark-12adc41eeb84bc0a6ca1ad3bf1450ebb7ac2a455345931568bf0f4b0502e46b2.svg" />
                                </div>
                            </div>
                        </div>
                        <div className="hsds-row__col hsds-row__col--fixed-width">
                            <div className="hsds-row__header">
                                <h3 className="hsds-row__heading">Over 30 integrations</h3>
                                <p className="hsds-row__p">Hubstaff syncs with the apps you’re already using.</p><a
                                    className="hsds-button hsds-button--large hsds-button--primary hsds-button--on-dark"
                                    href="integrations.html">View all integrations</a>
                            </div>
                        </div>
                        <div className="hsds-row__col">
                            <div className="hsds-sticker-container hsds-sticker-container--right">
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"
                                    style={{ background: "linear-gradient(135deg, #0091e6 0%,#0079bf 100%)" }}><img alt="trello integration"
                                        className="hsds-sticker__icon" loading="lazy" width="36" height="36" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/trello-mark-white-9d5d6528c74f4747688bd2cfa4e3f76f4d94fd093eecc45b5d75e532033d1da7.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--small hsds-sticker--waiting-to-animate"
                                    style={{ background: "#F45D48" }}><img alt="gusto integration" className="hsds-sticker__icon" loading="lazy"
                                        width="22" height="31" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/gusto-mark-white-fe0435c57e8443908b846f040e3737a7a4f1478a501ac2be04f626bdc3f382cc.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--large hsds-sticker--waiting-to-animate"
                                    style={{ background: "#00B6ED" }}><img alt="gusto integration" className="hsds-sticker__icon" loading="lazy"
                                        width="48" height="52" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/transferwise-mark-white-07e04a243bc50194190aaebd9a495b5b5c7974df1647542e32275cf324acb19f.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--xlarge hsds-sticker--waiting-to-animate">
                                    <img alt="asana integration" className="hsds-sticker__icon" loading="lazy" width="64" height="77"
                                        decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/clickup-mark-2896d10820ada77481e810a2ea5785f966e7689766c4d03931f4ac688f1ae7c4.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"><img
                                    alt="freshdesk integration" className="hsds-sticker__icon" loading="lazy" width="36" height="36"
                                    decoding="async"
                                    src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/freshdesk-mark-556745935677b8841a1823cc9e711d026530044a4702d03696cc68b926d3d171.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--waiting-to-animate"
                                    style={{ background: "#000000" }}><img alt="github integration" className="hsds-sticker__icon" loading="lazy"
                                        width="36" height="36" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/github-mark-white-c8c44a7dd384d2650be6464c48ede93e18224e19dca4a76758d8f76b58c937fe.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--small hsds-sticker--waiting-to-animate"
                                    style={{ background: "#FF5621" }}><img alt="insightly integration" className="hsds-sticker__icon"
                                        style={{ width: "70%" }} loading="lazy" width="45" height="17" decoding="asyn"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/insightly-logo-white-2785668a47f1f03b43504ed6968f36ff95c24f9d8135f037ddc496884a64c49a.svg" />
                                </div>
                                <div className="hsds-sticker hsds-sticker--responsive hsds-sticker--small hsds-sticker--waiting-to-animate">
                                    <img style={{ width: "100%" }} alt="zapier integration" className="hsds-sticker__icon" loading="lazy" width="3"
                                        height="36" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/integrations/zapier-mark-62847adf935dc131808c238e1551a8926547d28cb5e7d5cd88765ab1bf1cc694.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--background-light-blue hsds-row--collapse-padding-top">
                <div className="hsds-row__container">
                    <div className="hsds-row__header hsds-row__header--width-medium">
                        <h2 className="hsds-row__eyebrow">Customer stories</h2>
                        <h3 className="hsds-row__heading">Over 40,000 businesses have increased productivity and profit with Hubstaff</h3>
                    </div>
                </div>
            </section>
            <section className="hsds-row hsds-row--background-rectangle-left">
                <div className="hsds-row__container">
                    <div className="hsds-blockquote-carousel">
                        <span
                            className="wistia_embed popover=true popoverContent=html wistia_async_4kt4cx471d playerColor=294DFF"></span>
                        <span
                            className="wistia_embed popover=true popoverContent=html wistia_async_pwv53tg7u8 playerColor=294DFF"></span>
                        <div className="hsds-blockquote-carousel__track" data-glide-el="track">
                            <ul className="hsds-blockquote-carousel__list">
                                <li className="hsds-blockquote-carousel__item">
                                    <div className="hsds-blockquote-object">
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--image"><button name="button"
                                            type="button"
                                            className="js-hsds-wistia-popover-trigger hsds-round-button hsds-round-button--primary hsds-round-button--large hsds-blockquote-object__round-button"
                                            aria-label="launch Hubstaff video" data-video-id="4kt4cx471d"><svg aria-hidden="true"
                                                className="hsds-icon hsds-round-button__icon-triangle">
                                                <use xlinkHref="#triangle-right"></use>
                                            </svg></button>
                                            <picture>
                                                <source
                                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/customers/tallyfy-thumbnail@2x-3b0b66885f9fa52f1e133c1fd410c7b35972391b56e1333700068ded24cdec72.webp"
                                                    type="image/webp" /><img alt="Amit Kothari co-founder of Tallyfy"
                                                        className="hsds-blockquote-object__thumbnail" loading="lazy" width="464" height="464"
                                                        decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/customers/tallyfy-thumbnail@2x-dd21aeffd56876e7f0a911dab9ac0d99e38a07a56221a71476329abc266706e1.jpg" />
                                            </picture>
                                        </div>
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--content">
                                            <blockquote className="hsds-blockquote-object__blockquote">
                                                <p className="hsds-blockquote-object__quote">We believe — just like Hubstaff — that <strong>talent is
                                                    everywhere and people should be able to work any time, anywhere, even in their
                                                    pajamas</strong>. As a company, we believe in the same future of work as Hubstaff, which is
                                                    great because our values align.</p>
                                                <footer className="hsds-blockquote-object__footer">
                                                    <div className="hsds-blockquote-object__footer-col hsds-blockquote-object__footer-col--cite"><img
                                                        alt="Tallyfy logo" className="hsds-blockquote-object__logo" loading="lazy" width="115"
                                                        height="36" decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/tallyfy-ea62568630aebdbf2d528772de9fa9613bd7a1f41b89e1a3b089e9a8b73420bd.svg" /><cite
                                                            className="hsds-blockquote-object__cite"><span className="hsds-blockquote-object__name">Amit
                                                                Kothari</span><span className="hsds-blockquote-object__title"> / Co-founder of
                                                                    Tallyfy</span></cite></div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </li>
                                <li className="hsds-blockquote-carousel__item">
                                    <div className="hsds-blockquote-object">
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--image">
                                            <picture>
                                                <source
                                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/customers/encdd-thumbnail@2x-a32cb4f954b64c5da28fd0597eebd093bd43ca7bdcd3a0aa6176efe845bd4335.webp"
                                                    type="image/webp" /><img alt="Javier Enciso Jr. Founder and President of ENC Construction"
                                                        className="hsds-blockquote-object__thumbnail" loading="lazy" width="464" height="464"
                                                        decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/customers/encdd-thumbnail@2x-0cd1aa7d2df7b89c7e228024c77af3ea88ede24d4b494d1b4b3848f5bc877e59.jpg" />
                                            </picture>
                                        </div>
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--content">
                                            <blockquote className="hsds-blockquote-object__blockquote">
                                                <p className="hsds-blockquote-object__quote">Knowing how long workers are taking to <strong>move from
                                                    one job to another or exactly where your workers</strong> are at all times is vital in
                                                    construction.</p>
                                                <footer className="hsds-blockquote-object__footer">
                                                    <div className="hsds-blockquote-object__footer-col hsds-blockquote-object__footer-col--cite"><img
                                                        alt="ENC Construction logo" className="hsds-blockquote-object__logo" loading="lazy" width="132"
                                                        height="36" decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/enccd_logo_horizontal@2x-08e816cab54feb30d0ec423ed1b2ff7ed57e599d91bbc36d4e33e9627d134528.png" /><cite
                                                            className="hsds-blockquote-object__cite"><span className="hsds-blockquote-object__name">Javier
                                                                Enciso Jr.</span><span className="hsds-blockquote-object__title"> / Founder and President of
                                                                    ENC Construction</span></cite></div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </li>
                                <li className="hsds-blockquote-carousel__item">
                                    <div className="hsds-blockquote-object">
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--image">
                                            <picture>
                                                <source
                                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/customers/linkup-thumbnail@2x-eed25fce24ec4f9799c04d5ad94b09224c13190a3fddef19b9763f74c821ce12.webp"
                                                    type="image/webp" /><img alt="Andriy Sambir CEO of LinkUp Studio"
                                                        className="hsds-blockquote-object__thumbnail" loading="lazy" width="464" height="464"
                                                        decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/customers/linkup-thumbnail@2x-d8873ee9eab15053101e41d418217e0d2045e81ea61bce8891ca142b02a49794.jpg" />
                                            </picture>
                                        </div>
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--content">
                                            <blockquote className="hsds-blockquote-object__blockquote">
                                                <p className="hsds-blockquote-object__quote">Hubstaff solved our pain point the moment we started
                                                    using it. Compared to other tools we’d tested, <strong>Hubstaff is simple, easy, and
                                                        synchronizes with the other applications we use</strong>.</p>
                                                <footer className="hsds-blockquote-object__footer">
                                                    <div className="hsds-blockquote-object__footer-col hsds-blockquote-object__footer-col--cite"><img
                                                        alt="LinkUp Studio logo" className="hsds-blockquote-object__logo" loading="lazy" width="40"
                                                        height="36" decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/linkup-0e66523d3e0f0b777c445fdc0a5e6bd4f87c873fa29fb7a25099230ad1fab963.svg" /><cite
                                                            className="hsds-blockquote-object__cite"><span className="hsds-blockquote-object__name">Andriy
                                                                Sambir</span><span className="hsds-blockquote-object__title"> / CEO of LinkUp
                                                                    Studio</span></cite></div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </li>
                                <li className="hsds-blockquote-carousel__item">
                                    <div className="hsds-blockquote-object">
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--image"><button name="button"
                                            type="button"
                                            className="js-hsds-wistia-popover-trigger hsds-round-button hsds-round-button--primary hsds-round-button--large hsds-blockquote-object__round-button"
                                            aria-label="launch Hubstaff video" data-video-id="pwv53tg7u8"><svg aria-hidden="true"
                                                className="hsds-icon hsds-round-button__icon-triangle">
                                                <use xlinkHref="#triangle-right"></use>
                                            </svg></button>
                                            <picture>
                                                <source
                                                    srcSet="https://marketing-assets.hubstaff.com/assets/refresh/customers/front-runner-thumbnail@2x-fa008ffa6d218506011c481a75a4ae6929d98a7a75c2378b923d430ab2926077.webp"
                                                    type="image/webp" /><img alt="Tyler Nimmons CEO of Front Runner Films"
                                                        className="hsds-blockquote-object__thumbnail" loading="lazy" width="464" height="464"
                                                        decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/customers/front-runner-thumbnail@2x-d91e1e04029097a5a6454c9679b79e3f24e8b588382ae8334ec78f8bdc00ea6f.jpg" />
                                            </picture>
                                        </div>
                                        <div className="hsds-blockquote-object__col hsds-blockquote-object__col--content">
                                            <blockquote className="hsds-blockquote-object__blockquote">
                                                <p className="hsds-blockquote-object__quote">Once we implemented Hubstaff I was amazed to see that
                                                    <strong>some of the projects I thought were going to be profitable, we were blowing through
                                                        hours</strong> that I wasn't aware of.
                                                </p>
                                                <footer className="hsds-blockquote-object__footer">
                                                    <div className="hsds-blockquote-object__footer-col hsds-blockquote-object__footer-col--cite"><img
                                                        alt="Front Runner Films logo" className="hsds-blockquote-object__logo" loading="lazy" width="46"
                                                        height="36" decoding="async"
                                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/front-runner-films-logo@2x-4517afbd33d15712d0f557bd235d43cfb346e52b4ee8864c3fa30fbb303f0445.png" /><cite
                                                            className="hsds-blockquote-object__cite"><span className="hsds-blockquote-object__name">Tyler
                                                                Nimmons</span><span className="hsds-blockquote-object__title"> / CEO of Front Runner
                                                                    Films</span></cite></div>
                                                </footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="hsds-blockquote-carousel__footer">
                            <div className="hsds-blockquote-carousel__footer-row">
                                <div className="hsds-blockquote-carousel__footer-col hsds-blockquote-carousel__footer-col--controls">
                                    <div className="hsds-blockquote-carousel__controls">
                                        <div className="hsds-blockquote-carousel__controls-controls" data-glide-el="controls"><button
                                            name="button" type="submit"
                                            className="hsds-blockquote-carousel__nav-scroll-button hsds-blockquote-carousel__nav-scroll-button--prev"
                                            aria-label="select previous blockquote" data-glide-dir="&lt;"><svg
                                                className="hsds-icon hsds-blockquote-carousel__nav-icon hsds-blockquote-carousel__nav-icon--prev">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg></button></div>
                                        <div className="hsds-blockquote-carousel__controls-nav" data-glide-el="controls[nav]"><button
                                            name="button" type="submit"
                                            className="hsds-blockquote-carousel__nav-button hsds-blockquote-carousel__nav-button--is-active"
                                            aria-label="select blockquote 1" data-glide-dir="=0"></button><button name="button" type="submit"
                                                className="hsds-blockquote-carousel__nav-button" aria-label="select blockquote 2"
                                                data-glide-dir="=1"></button><button name="button" type="submit"
                                                    className="hsds-blockquote-carousel__nav-button" aria-label="select blockquote 3"
                                                    data-glide-dir="=2"></button><button name="button" type="submit"
                                                        className="hsds-blockquote-carousel__nav-button" aria-label="select blockquote 4"
                                                        data-glide-dir="=3"></button></div>
                                        <div className="hsds-blockquote-carousel__controls-controls" data-glide-el="controls"><button
                                            name="button" type="submit"
                                            className="hsds-blockquote-carousel__nav-scroll-button hsds-blockquote-carousel__nav-scroll-button--next"
                                            aria-label="select next blockquote" data-glide-dir="&gt;"><svg
                                                className="hsds-icon hsds-blockquote-carousel__nav-icon hsds-blockquote-carousel__nav-icon--next">
                                                <use xlinkHref="#arrow-right"></use>
                                            </svg></button></div>
                                    </div>
                                </div>
                                <div className="hsds-blockquote-carousel__footer-col hsds-blockquote-carousel__footer-col--cta"><a
                                    className="hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                    href="customers.html"><span className="hsds-button__label">View all case studies<svg aria-hidden="true"
                                        className="hsds-icon hsds-button__icon hsds-button__icon--inline">
                                        <use xlinkHref="#arrow-right"></use>
                                    </svg></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="hsds-row hsds-row--background-light-blue hsds-row--collapse-padding-bottom hsds-row--collapse-padding-left hsds-row--collapse-padding-right">
                <div className="hsds-row__container">
                    <div className="hsds-row__header">
                        <h3 className="hsds-row__heading">What our customers say</h3>
                    </div>
                    <div className="hsds-carousel-wrapper">
                        <div className="hsds-carousel">
                            <div className="hsds-carousel__track" data-glide-el="track">
                                <ul className="hsds-carousel__list">
                                    <li className="hsds-carousel__item">
                                        <blockquote className="hsds-testimonial">
                                            <p className="hsds-testimonial__heading">I always ended up coming back to Hubstaff!</p>
                                            <p className="hsds-testimonial__quote">When I started working as a freelancer I tested most of the most
                                                famous time tracking software services out there. I always ended up coming back to Hubstaff!</p>
                                            <footer className="hsds-testimonial__footer"><cite className="hsds-testimonial__cite">Arman S.</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                    <li className="hsds-carousel__item">
                                        <blockquote className="hsds-testimonial">
                                            <p className="hsds-testimonial__heading">Def helps you stay motivated.</p>
                                            <p className="hsds-testimonial__quote">The app is super stable and on the user end of things, always
                                                works as expected. My favorite feature is the productivity score especially as it notifies you via
                                                email when your productivity is consistently high. Def helps you stay motivated.</p>
                                            <footer className="hsds-testimonial__footer"><cite className="hsds-testimonial__cite">Moseph M.</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                    <li className="hsds-carousel__item">
                                        <blockquote className="hsds-testimonial">
                                            <p className="hsds-testimonial__heading">I love the screenshot taking feature.</p>
                                            <p className="hsds-testimonial__quote">This is by far the most robust time tracking software I've ever
                                                tested. I love the screenshot taking feature and how easy is to create new tasks.</p>
                                            <footer className="hsds-testimonial__footer"><cite className="hsds-testimonial__cite">Luis R.</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                    <li className="hsds-carousel__item">
                                        <blockquote className="hsds-testimonial">
                                            <p className="hsds-testimonial__heading">It's the best time tracking software I've come across.</p>
                                            <p className="hsds-testimonial__quote">We've been using Hubstaff for a few years now, and it's the best
                                                time tracking software I've come across. They also award badges if someone has consistently high
                                                activity levels, which is also motivating for employees.</p>
                                            <footer className="hsds-testimonial__footer"><cite className="hsds-testimonial__cite">Esther L.</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                    <li className="hsds-carousel__item">
                                        <blockquote className="hsds-testimonial">
                                            <p className="hsds-testimonial__heading">It does help many companies keep track of their employees.</p>
                                            <p className="hsds-testimonial__quote">As a time tracking, payment management, and employee monitoring
                                                software, Hubstaff does a great job. It does help many companies keep track of their employees and
                                                is pretty comprehensive and even fun to use (when you look at it from the browser).</p>
                                            <footer className="hsds-testimonial__footer"><cite className="hsds-testimonial__cite">Benjamín T.</cite>
                                            </footer>
                                        </blockquote>
                                    </li>
                                </ul>
                            </div>
                            <div className="hsds-carousel__nav" data-glide-el="controls[nav]"><button name="button" type="button"
                                className="hsds-carousel__nav-button" aria-label="select slide 1" data-glide-dir="=0"></button><button
                                    name="button" type="button" className="hsds-carousel__nav-button" aria-label="select slide 2"
                                    data-glide-dir="=1"></button><button name="button" type="button" className="hsds-carousel__nav-button"
                                        aria-label="select slide 3" data-glide-dir="=2"></button><button name="button" type="button"
                                            className="hsds-carousel__nav-button" aria-label="select slide 4" data-glide-dir="=3"></button><button
                                                name="button" type="button" className="hsds-carousel__nav-button" aria-label="select slide 5"
                                                data-glide-dir="=4"></button></div>
                        </div>
                    </div>
                    <div className="hsds-review-wrapper">
                        <ul className="hsds-review__list">
                            <li className="hsds-review__item">
                                <dl className="hsds-review__review">
                                    <dt className="hsds-review__cite"><img className="hsds-review__logo" alt="GetApp logo" loading="lazy"
                                        width="130" height="24" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/getapp-59e0292084e820f5ff42ffee8d11b54fbafcd6db3a189d82b58c8184707c02c6.svg" />
                                    </dt>
                                    <dd className="hsds-review__meta">
                                        <div className="hsds-review__description">4.58 out of 5 stars from 1,045 reviews</div>
                                        <div className="hsds-review__stars"><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                            <use xlinkHref="#star"></use>
                                        </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#half-star"></use>
                                            </svg></div>
                                    </dd>
                                </dl>
                            </li>
                            <li className="hsds-review__item">
                                <dl className="hsds-review__review">
                                    <dt className="hsds-review__cite"><img className="hsds-review__logo" alt="Capterra logo" loading="lazy"
                                        width="108" height="24" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/capterra-02c9bbde3f14e4e46c00179c07cb5c004b0af6e8ede8f78d3b623888db576a7a.svg" />
                                    </dt>
                                    <dd className="hsds-review__meta">
                                        <div className="hsds-review__description">4.6 out of 5 stars from 1,045 reviews</div>
                                        <div className="hsds-review__stars"><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                            <use xlinkHref="#star"></use>
                                        </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#half-star"></use>
                                            </svg></div>
                                    </dd>
                                </dl>
                            </li>
                            <li className="hsds-review__item">
                                <dl className="hsds-review__review">
                                    <dt className="hsds-review__cite"><img className="hsds-review__logo" alt="G2 Cloud logo" loading="lazy"
                                        width="85" height="24" decoding="async"
                                        src="https://marketing-assets.hubstaff.com/assets/refresh/logos/customers/g2-f8595946722c3096c56e6b16f32e84442c6a78a0244c9d2d1d666de8a6ceb857.svg" />
                                    </dt>
                                    <dd className="hsds-review__meta">
                                        <div className="hsds-review__description">4.4 out of 5 stars from 319 reviews</div>
                                        <div className="hsds-review__stars"><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                            <use xlinkHref="#star"></use>
                                        </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#star"></use>
                                            </svg><svg aria-hidden="true" className="hsds-icon hsds-review__star">
                                                <use xlinkHref="#half-star"></use>
                                            </svg></div>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section
                className="hsds-row hsds-row--background-brand-primary hsds-row--background-hubstaff-spoke hsds-row--oval-top hsds-row--oval-top-light-blue">
                <div className="hsds-row__container">
                    <div className="hsds-row__header">
                        <h3 className="hsds-row__heading hsds-row__heading--level-1">Try Hubstaff free for 14 days</h3><a
                            className="hsds-button hsds-button--large hsds-button--tertiary js-hsds-cta-track"
                            data-name="Bottom section signup" href="signup.html">Start my free trial</a>
                    </div>
                </div>
            </section>
            <div aria-hidden="true" aria-labelledby="select-your-industry-modal-heading" aria-modal="true"
                className="hsds-modal hsds-modal--xlarge" id="select-your-industry-modal" role="dialog">
                <div className="hsds-modal__dialog"><button name="button" type="submit"
                    className="hsds-button hsds-button--ghost hsds-button--muted hsds-button--icon-only hsds-button--secondary hsds-button--xsmall hsds-modal__close-button"
                    aria-label="close select your industry modal"><svg aria-hidden="true" className="hsds-icon hsds-button__icon">
                        <use xlinkHref="#close-x"></use>
                    </svg></button>
                    <div className="hsds-modal__content">
                        <div className="hsds-modal__header">
                            <div className="hsds-modal__heading" id="select-your-industry-modal-heading">Select your industry</div>
                        </div>
                        <div className="hsds-modal__body">
                            <ul className="hsds-link-list hsds-link-list--3-col">
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/janitorial.html"><span
                                    className="hsds-link-list__label">Cleaning</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/construction.html"><span
                                    className="hsds-link-list__label">Construction</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/landscaping.html"><span
                                    className="hsds-link-list__label">Landscaping</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link"
                                    href="solutions/home-health-care.html"><span className="hsds-link-list__label">Health care</span><svg
                                        aria-hidden="true" className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/consulting.html"><span
                                    className="hsds-link-list__label">Consultants</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/agencies.html"><span
                                    className="hsds-link-list__label">Agencies</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/manufacturing.html"><span
                                    className="hsds-link-list__label">Manufacturing</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link"
                                    href="solutions/architects-engineers.html"><span className="hsds-link-list__label">Architects and
                                        engineers</span><svg aria-hidden="true" className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/accounting.html"><span
                                    className="hsds-link-list__label">Accountants</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        <use xlinkHref="#caret-down-l"></use>
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/law-firms.html"><span
                                    className="hsds-link-list__label">Attorneys</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link"
                                    href="solutions/software-development.html"><span className="hsds-link-list__label">Software
                                        developers</span><svg aria-hidden="true" className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/ecommerce.html"><span
                                    className="hsds-link-list__label">E-commerce</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/real-estate.html"><span
                                    className="hsds-link-list__label">Real estate</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/nonprofits.html"><span
                                    className="hsds-link-list__label">Nonprofit</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                                <li className="hsds-link-list__item"><a className="hsds-link-list__link" href="solutions/designers.html"><span
                                    className="hsds-link-list__label">Design</span><svg aria-hidden="true"
                                        className="hsds-icon hsds-link-list__caret-icon">
                                        {/* <use xlink:href="#caret-down-l"></use> */}
                                    </svg></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
