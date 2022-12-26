import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import Logo from '../assets/images/logo.svg'
export default function Navbar() {
    return (
        <header className="hsds-header">
            <div className="hsds-header__container">
                <nav className="hsds-nav">
                    <div className="hsds-nav__cell hsds-nav__cell--menu-toggle">
                        <button
                            id="hsds-nav-menu-toggle"
                            name="button"
                            type="submit"
                            aria-controls="hsds-nav-menu"
                            aria-haspopup="true"
                            aria-expanded="false"
                            aria-label="toggle navigation menu"
                            className="hsds-button hsds-button--icon-only hsds-button--ghost hsds-button--muted hsds-button--small hsds-nav__link--menu-toggle"
                        >
                            <div className="hsds-icon--primary hsds-nav__hamburger-icon">
                                Menu
                            </div>
                        </button>
                    </div>
                    <div className="hsds-nav__cell hsds-nav__cell--logo">
                        <a
                            href="/"
                            aria-label="logo"
                            className="hsds-nav__logo-element hsds-nav__logo-element--link"
                        >
                            <img
                                src="/assets/images/logo.svg"
                                alt=""
                                className="hsds-icon hsds-nav__logo"
                            />
                        </a>
                    </div>
                    <div
                        id="hsds-nav-menu"
                        className="hsds-nav__cell hsds-nav__cell--nav-menu"
                    >
                        <ul className="hsds-nav__list hsds-nav__list--updated">
                            <li className="hsds-nav__item hsds-nav__item--features">
                                <div className="hsds-nav__dropdown hsds-nav__dropdown--wide">
                                    <button
                                        name="button"
                                        type="button"
                                        aria-controls="hsds-nav-dropdown-features"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="hsds-nav__link hsds-nav__link--menu-button"
                                    >
                                        <span className="hsds-nav__menu-button-label">
                                            Features
                                        </span>
                                        <svg
                                            aria-hidden="true"
                                            className="hsds-icon hsds-nav__menu-icon"
                                        >
                                            <use xlinkHref="/images/icons/icons.svg#caret-down-l"></use>
                                        </svg>
                                    </button>
                                    <div
                                        id="hsds-nav-dropdown-features"
                                        aria-hidden="true"
                                        className="hsds-nav__dropdown-panel"
                                    >
                                        <div className="hsds-nav__dropdown__wide-layout">
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">
                                                    Time tracking
                                                </div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="time_tracking_software.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#time-tracking"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Time tracking software
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track employee work hours across devices for more
                                                            accurate timesheets
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/employee_timesheets.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#timesheets"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Online timesheets
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Get automatically generated timesheets from
                                                            digital or manual time entries
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="time-report.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#to-dos"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Time reporting
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Detailed time reports that help you improve
                                                            business processes
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="time-clock-app.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#time-approvals"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Time clock app
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Mobile apps track time to specific clients,
                                                            projects, and work orders
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/geofence_time_clock.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#gps"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Geofence time tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Create location-based Job sites that automatically
                                                            clock employees in and out
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">
                                                    Employee monitoring
                                                </div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/employee_monitoring.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#quick-details"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Employee monitoring software
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Know the right work is getting done with activity
                                                            levels, screenshots, apps, and URLs
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/gps_time_tracking.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#geofences"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    GPS location tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Manage on-the-go work crews with mobile app
                                                            geofencing and live map views.
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/employee_productivity.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#team"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Employee productivity
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Built-in efficiency tools to help teams work
                                                            smarter.
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="how-tracking-works.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#screenshots"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    How tracking features work
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Hubstaff was built to empower teams with
                                                            transparency, access, and control of their data
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">
                                                    Workforce management
                                                </div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/employee_scheduling_software.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#scheduling-l"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Employee scheduling
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Simplify scheduling with automated attendance
                                                            tracking
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/online_payroll.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#payroll-l"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Payroll tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Pay teams faster and more easily based on hours
                                                            worked
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/online_invoicing.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#invoicing"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Invoice tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Create custom invoices and send them right from
                                                            your dashboard
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="features/work-order-software.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#send"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Work orders / job management
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Create, assign, and track time to Work orders for
                                                            various clients
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">
                                                    Agile project management
                                                </div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="tasks.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main hsds-nav_menu-link__icon--tasks"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#time-tracking"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Agile project management software
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Embrace Agile with user-friendly, collaborative
                                                            task management
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="tasks/agile-sprints.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main hsds-nav_menu-link__icon--tasks"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#sprints"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Sprint management
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Manage your Sprints more easily and automate
                                                            Sprint planning
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="tasks/automated-standups.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main hsds-nav_menu-link__icon--tasks"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#stand-ups"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Automated Stand-ups
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Work asynchronously and limit meetings with
                                                            virtual Stand-ups
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="tasks/project-time-tracker.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="hsds-icon hsds-icon hsds-nav_menu-link__icon--main hsds-nav_menu-link__icon--tasks"
                                                                >
                                                                    <use xlinkHref="/images/icons/icons.svg#workflows"></use>
                                                                </svg>
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Project time tracker
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Clock hours on specific projects for better
                                                            project planning and reporting
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hsds-nav__menu-item hsds-nav__dropdown__wide-layout hsds-nav__menu-item--footer">
                                            <a href="features.html" className="hsds-nav__menu-link">
                                                <div className="hsds-nav__menu-link-label">
                                                    See all features
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hsds-nav__item">
                                <div className="hsds-nav__dropdown hsds-nav__dropdown--wide">
                                    <button
                                        name="button"
                                        type="button"
                                        aria-controls="hsds-nav-dropdown-features"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="hsds-nav__link hsds-nav__link--menu-button"
                                    >
                                        <span className="hsds-nav__menu-button-label">
                                            How it works
                                        </span>
                                        <svg
                                            aria-hidden="true"
                                            className="hsds-icon hsds-nav__menu-icon"
                                        >
                                            <use xlinkHref="/images/icons/icons.svg#caret-down-l"></use>
                                        </svg>
                                    </button>
                                    <div
                                        id="hsds-nav-dropdown-how-it-works"
                                        aria-hidden="true"
                                        className="hsds-nav__dropdown-panel"
                                    >
                                        <div className="hsds-nav__dropdown__wide-layout">
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">Solutions</div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/remote.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Remote work software
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Manage remote and hybrid teams with greater
                                                            visibility and productivity
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/field-services.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Field service management
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Create schedules, Work orders, and geofenced Job
                                                            sites for your team
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/agencies.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Agency time tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track time, see project spend, and create
                                                            automatic invoices for your agency clients
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/freelancers.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Freelance time tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Easily bill clients for hours worked and track
                                                            invoices
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/consulting.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Consultant time tracking
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Manage consulting projects, invoicing, and payroll
                                                            from one software
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item hsds-nav__menu-item--footer">
                                                        <div>
                                                            <a
                                                                href="solutions.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    See all solutions
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">Industries</div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/software-development.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Software development
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Automate billable hours tracking and invoice dev
                                                            clients
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/ecommerce.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    E-commerce
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Manage your e-commerce teams with timesheets and
                                                            productivity features
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/construction.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Construction
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Set up Job sites with geofenced time tracking and
                                                            scheduling for your crew
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="solutions/janitorial.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Cleaning
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Schedule cleaning teams and track hours with
                                                            real-time GPS tracking
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">
                                                    Integrations
                                                </div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="project-management-hours-tracking.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Hubstaff + Tasks
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Sync time tracking and project management with two
                                                            integrated tools
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="jira_time_tracking.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Jira
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Pair Hubstaff with Jira for better project
                                                            management
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="trello_time_tracking.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Trello
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track time to specific Trello boards and cards
                                                            with Hubstaff
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="quickbooks_time_tracking.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Quickbooks
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Link Quickbooks and Hubstaff for more efficient
                                                            payroll
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item hsds-nav__menu-item--footer">
                                                        <div>
                                                            <a
                                                                href="integrations.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    See all integrations
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu hsds-nav__dropdown__layout__col--grey">
                                                <div className="hsds-nav__menu__label">Talk to us</div>
                                                <div className="hsds-nav__content hsds-nav__content--sales">
                                                    <p>
                                                        Learn more about Hubstaff from our in-house product
                                                        specialist.
                                                    </p>
                                                    <a
                                                        href="tel: +13174827165"
                                                        className="hsds-contact__item-link"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="hsds-icon hsds-contact__item-icon hsds-icon"
                                                        >
                                                            <use xlinkHref="/images/icons/icons.svg#phone"></use>
                                                        </svg>
                                                        <div>
                                                            <div>Americas</div>
                                                            <div>+1 317 482 7165</div>
                                                        </div>
                                                    </a>
                                                    <a
                                                        href="tel: +442045251373"
                                                        className="hsds-contact__item-link"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="hsds-icon hsds-contact__item-icon hsds-icon"
                                                        >
                                                            <use xlinkHref="/images/icons/icons.svg#phone"></use>
                                                        </svg>
                                                        <div>
                                                            <div>EMEA/APAC</div>
                                                            <div>+44 20 4525 1373</div>
                                                        </div>
                                                    </a>
                                                    <div className="hsds-contact__item--footer">
                                                        <svg
                                                            aria-hidden="true"
                                                            className="hsds-icon hsds-contact__item-icon--info hsds-icon"
                                                        >
                                                            <use xlinkHref="/images/icons/icons.svg#info"></use>
                                                        </svg>
                                                        <span>
                                                            Phone numbers are only for sales queries
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="hsds-nav__item hsds-nav__item--apps">
                                <div className="hsds-nav__dropdown hsds-nav__dropdown--wide">
                                    <button
                                        name="button"
                                        type="button"
                                        aria-controls="hsds-nav-dropdown-features"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        className="hsds-nav__link hsds-nav__link--menu-button"
                                    >
                                        <span className="hsds-nav__menu-button-label">Apps</span>
                                        <svg
                                            aria-hidden="true"
                                            className="hsds-icon hsds-nav__menu-icon"
                                        >
                                            <use xlinkHref="/images/icons/icons.svg#caret-down-l"></use>
                                        </svg>
                                    </button>
                                    <div
                                        id="hsds-nav-dropdown-apps"
                                        aria-hidden="true"
                                        className="hsds-nav__dropdown-panel"
                                    >
                                        <div className="hsds-nav__dropdown__wide-layout">
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">Desktop</div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="mac-time-tracker.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Mac
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            A time tracking and productivity suite for OS X
                                                            Mavericks or newer
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="windows.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Windows
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            A time tracking and productivity suite for Windows
                                                            8 or newer
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="linux.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Linux
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Lightweight time tracking that runs quietly in the
                                                            background on Linux
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item hsds-nav__menu-item--footer">
                                                        <div>
                                                            <a
                                                                href="https://app.hubstaff.com/download"
                                                                target="_blank"
                                                                rel="noopener"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Download the app
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">Mobile</div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="time_tracking_app_iphone.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    iOS
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track time and GPS location from the iOS app
                                                        </div>
                                                    </li>
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="android_time_tracking_app_with_gps.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Android
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track time and GPS location from the Android app
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu">
                                                <div className="hsds-nav__menu__label">Web</div>
                                                <ul role="menu" className="hsds-nav__menu">
                                                    <li className="hsds-nav__menu-item">
                                                        <div>
                                                            <a
                                                                href="chrome.html"
                                                                className="hsds-nav__menu-link"
                                                            >
                                                                <div className="hsds-nav__menu-link-label">
                                                                    Google Chrome extension
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="hsds-nav__menu-link-descrition">
                                                            Track time to specific projects straight from your
                                                            Chrome browser
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="hsds-nav__dropdown__wide-layout__col hsds-nav__dropdown__wide-layout__col--menu hsds-nav__dropdown__layout__col--grey">
                                                <div className="hsds-nav__menu__label">
                                                    Start free trial
                                                </div>
                                                <div className="hsds-nav__content">
                                                    <a
                                                        href="signup.html"
                                                        alt="Start free trial"
                                                        className="hsds-button hsds-button--medium hsds-button--ghost hsds-button--flush hsds-button--animate-icon-inline"
                                                    >
                                                        <div className="hsds-nav__menu-link-label">
                                                            Start free trial
                                                            <svg
                                                                aria-hidden="true"
                                                                className="hsds-icon hsds-icon hsds-button__icon hsds-button__icon--inline"
                                                            >
                                                                <use xlinkHref="/images/icons/icons.svg#arrow-right"></use>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <li className="hsds-nav__item hsds-nav__item--pricing"><a href="pricing.html"
                                className="hsds-nav__link">Pricing</a></li> */}
                            {/* <li className="hsds-nav__item">
                                <div data-name="Demo link navbar" className="js-hsds-cta-track"><a href="demo.html"
                                    className="hsds-nav__link">Demo</a></div>
                            </li> */}
                            <li className="hsds-nav__item hsds-nav__item--cta-mobile">
                                <a
                                    href="https://app.hubstaff.com/login"
                                    className="hsds-button hsds-button--large hsds-button--secondary hsds-button--block-level"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="hsds-icon hsds-button__icon hsds-button__icon--before"
                                    >
                                        <use xlinkHref="/images/icons/icons.svg#sign-in"></use>
                                    </svg>
                                    <span className="hsds-button__label">Sign in</span>
                                </a>
                                <a
                                    data-name="Navbar signup on Mobile"
                                    href="signup.html"
                                    className="hsds-button hsds-button--large hsds-button--primary hsds-button--block-level js-hsds-cta-track"
                                >
                                    Create account
                                </a>
                            </li>
                            {/* <li className="hsds-nav__item hsds-nav__item--cta-desktop"><a data-name="Navbar signup" href="signup.html"
                                className="hsds-button hsds-button--medium hsds-button--primary js-hsds-cta-track">Free 14-day trial</a>
                            </li> */}
                            <li className="hsds-nav__item hsds-nav__item--sign-in-desktop hsds-nav__item--pricing">
                                <a
                                    href="/login"
                                    className="hsds-button hsds-button--medium hsds-button--secondary"
                                >
                                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                    <span className="hsds-button__label ml-2">Sign in</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="hsds-nav__cell hsds-nav__cell--sign-in-mobile">
                        <a
                            aria-label="Sign in"
                            href="/login"
                            className="hsds-button hsds-button--ghost hsds-button--on-dark hsds-button--muted hsds-button--icon-only hsds-button--small"
                        >
                            <i className="fa-solid fa-arrow-right-to-bracket hsds-icon"></i>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="hsds-header__backdrop"></div>
        </header>
    );
}
