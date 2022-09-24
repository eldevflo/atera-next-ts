import React from "react";
import styles from "../../styles/Dashboard.module.css";
function Dashboard() {
  return (
    <div id="upper_wrapper">
      <div
        id="dashboard_wrapper"
        className={`relative mx-auto ${styles.dashboardWrapper}`}
      >
        <div id="db_animation_container" className={styles.dashboardBase}>
          <div
            id="info_sections"
            className={`hidden lg:block ${styles.infoSections}`}
          >
            <div
              id="dashboard_alerts"
              className={`${styles.dashboardAlerts} hidden lg:block`}
            >
              <img src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/alerts.svg" />
            </div>
            <div className={`${styles.infoSection} ${styles.infoSection1}`}>
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-1.svg"
                data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-2.svg"
              />
            </div>
            <div className={`${styles.infoSection} ${styles.infoSection2}`}>
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-1.svg"
                data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-2.svg"
              />
            </div>
            <div className={`${styles.infoSection} ${styles.infoSection3}`}>
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-1.svg"
                data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-2.svg"
              />
            </div>
            <div className={`${styles.infoSection} ${styles.infoSection6}`}>
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/b-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/b-1.svg"
                data-active=""
              />
            </div>
            <div className={`${styles.infoSection} ${styles.infoSection5}`}>
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/d-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/d-1.svg"
                data-active=""
              />
            </div>
          </div>

          <div className={`${styles.infoSection} ${styles.infoSection4}`}>
            <img
              src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-1.svg"
              alt=""
              data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-1.svg"
              data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-2.svg"
            />
          </div>

          <div id="dashboard_buttons" className="hidden lg:block">
            <div
              className="dashboard-button button-reveal load-hidden"
              data-sr-id="3"
            >
              <button
                type="button"
                title="more info"
                className="open-info"
                data-index="1"
              ></button>
            </div>
            <div
              className="dashboard-button button-reveal load-hidden"
              data-sr-id="4"
            >
              <button
                type="button"
                title="more info"
                className="open-info"
                data-index="2"
              ></button>
            </div>
            <div
              className="dashboard-button button-reveal load-hidden"
              data-sr-id="5"
            >
              <button
                type="button"
                title="more info"
                className="open-info"
                data-index="3"
              ></button>
            </div>
            <div
              className="dashboard-button button-reveal load-hidden"
              data-sr-id="6"
            >
              <button
                type="button"
                title="more info"
                className="open-info"
                data-index="4"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboard_keyboard" className={styles.dashboardKeyboard}>
        <img
          src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/keyboard.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Dashboard;
