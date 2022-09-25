import Link from "next/link";
import React from "react";
import HeaderLogo from "../../assets/HeaderLogo";
import styles from "../../styles/Layout.module.css";

function Navigation() {
  return (
    <header className="header__container header__container-main top-0 h-17.5 xl:h-[6.5rem] xl:w-full xl:opacity-100 xl:z-20">
      <div className="header__container-child xl:flex xl:justify-between xl:items-center max-w-[1400px] xl:h-full  mx-auto">
        <div
          className="header__top-section flex items-center justify-between py-[1.625rem] px-5 md:pt-[1.6875rem] md:pb-[1.1875rem] lg:pt-10 lg:pr-10
      xl:flex xl:py-2 md:flex-row-reverse xl:flex-row xl:p-0"
        >
          <div className="md:hidden xl:inline-block">
            <Link href="https://www.atera.com">
              <HeaderLogo />
            </Link>
          </div>
          <div className="inline-block relative h-5 left-0.5 md:h-auto xl:hidden">
            <div className="header__hamburger">
              <div className="hamburger-icon relative top-1 md:top-3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="header__bottom-section flex items-center  xl:overflow-visible xl:opacity-100 xl:h-auto xl:p-0  xl:gap-[10rem] xl2:gap-[9.75rem]  xl:mt-0 xl:flex-row">
          <div className="header__nav md:pt-12.5 xl:pt-8 xl:pt-0 xl:flex xl:items-center">
            <div className="menu-atera-rebranded-menu-container">
              <ul id="menu-atera-rebranded-menu" className={styles.menu}>
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${styles.depth0}`}
                  id="menu-item-57089"
                >
                  <div className={styles.menuItemInner}>
                    <a href="">
                      Features
                      <span className="dropdown-icon">
                        <i className="ai-arrow-down ai"></i>
                      </span>
                    </a>
                  </div>
                  <ul className={styles.subMenu}>
                    <li
                      className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children depth-1"
                      id="menu-item-57090"
                    >
                      <div className={styles.menuItemInner}>
                        <a href="#">
                          sub1
                          <span className="dropdown-icon">
                            <i className="ai-arrow-down ai"></i>
                          </span>
                        </a>
                      </div>
                      <ul className={styles.subMenu}>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57529"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/remote-monitoring-and-management/">
                              RMM
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Remote monitoring and management</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57532"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/patch-management/">
                              Patch Management
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Automated patching software</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57534"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/network-discovery/">
                              Network Discovery
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Security scan and 360° view</h5>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li
                      className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children depth-1"
                      id="menu-item-57094"
                    >
                      <div className={styles.menuItemInner}>
                        <a href="#">
                          sub2
                          <span className="dropdown-icon">
                            <i className="ai-arrow-down ai"></i>
                          </span>
                        </a>
                      </div>
                      <ul className={styles.subMenu}>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57538"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/psa/">
                              PSA
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Helpdesk, billing, and reporting</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57097"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/helpdesk/">
                              Helpdesk
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Tailored to IT departments</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-58356"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/integrations/">
                              Integrations
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>For MSPs and IT departments</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className="see-all-link menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57099"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/features/">
                              Discover all features
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${styles.depth0}`}
                  id="menu-item-57100"
                >
                  <div className={styles.menuItemInner}>
                    <a>
                      Solutions
                      <span className="dropdown-icon">
                        <i className="ai-arrow-down ai"></i>
                      </span>
                    </a>
                  </div>
                  <ul className={styles.subMenu}>
                    <li
                      className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children depth-1"
                      id="menu-item-57101"
                    >
                      <div className={styles.menuItemInner}>
                        <a href="#">
                          sub
                          <span className="dropdown-icon">
                            <i className="ai-arrow-down ai"></i>
                          </span>
                        </a>
                      </div>
                      <ul className={styles.subMenu}>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57102"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/msp/">
                              For MSPs
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>All-in-one RMM and PSA</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57103"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/it-departments/">
                              For IT Departments
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>All-in-one IT solution</h5>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${styles.depth0}`}
                  id="menu-item-58716"
                >
                  <div className={styles.menuItemInner}>
                    <a href="https://www.atera.com/pricing/">
                      Pricing
                      <span className="dropdown-icon">
                        <i className="ai-arrow-down ai"></i>
                      </span>
                    </a>
                  </div>
                </li>
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${styles.depth0}`}
                  id="menu-item-57105"
                >
                  <div className={styles.menuItemInner}>
                    <a>Resources</a>
                  </div>
                </li>
                <li
                  className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children ${styles.depth0}`}
                  id="menu-item-57127"
                >
                  <div className={styles.menuItemInner}>
                    <a>
                      Company
                      <span className="dropdown-icon">
                        <i className="ai-arrow-down ai"></i>
                      </span>
                    </a>
                  </div>
                  <ul className={styles.subMenu}>
                    <li
                      className=" menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children depth-1"
                      id="menu-item-57128"
                    >
                      <div className={styles.menuItemInner}>
                        <a href="#">
                          sub
                          <span className="dropdown-icon">
                            <i className="ai-arrow-down ai"></i>
                          </span>
                        </a>
                      </div>
                      <ul className={styles.subMenu}>
                        <li
                          className=" menu-item menu-item-type-custom menu-item-object-custom depth-2"
                          id="menu-item-57129"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="/company/">
                              About
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Our mission statement</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-post_type menu-item-object-page depth-2"
                          id="menu-item-57130"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="https://www.atera.com/careers/">
                              Careers
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Join the Atera crew</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-post_type menu-item-object-page depth-2"
                          id="menu-item-57131"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="https://www.atera.com/press-page/">
                              In the Press
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Press and media coverage</h5>
                            </a>
                          </div>
                        </li>
                        <li
                          className=" menu-item menu-item-type-post_type menu-item-object-page depth-2"
                          id="menu-item-57132"
                        >
                          <div className={styles.menuItemInner}>
                            <a href="https://www.atera.com/contact-us/">
                              Contact Us
                              <span className="dropdown-icon">
                                <i className="ai-arrow-down ai"></i>
                              </span>
                              <h5>Get in touch with support</h5>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="header__buttons mb-10 justify-center align-center flex-row-reverse gap-2 mt-10.5
xl:mx-0 xl:flex xl:m-0"
          >
            <a href="/signup/">
              <div
                className={`button-link botton-signup ${styles.buttonLinkRounded} mb-3 w-full xl:mb-0 xl:min-w-[10rem] bg-primaryPink text-white `}
              >
                Sign up
              </div>
            </a>
            <a href="https://app.atera.com/">
              <div
                className={`button-link ${styles.buttonLogin} ${styles.buttonLinkRounded} `}
              >
                Log in
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
