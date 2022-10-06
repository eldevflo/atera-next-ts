import React, { useRef, useState } from "react";
import styles from "../../styles/Dashboard.module.css";
import Atropos from "atropos/react";

function Dashboard() {
  return (
    <Atropos activeOffset={20} shadow={false} alwaysActive highlight={false}>
      <div id="upper_wrapper" data-atropos-offset="0">
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
                data-atropos-offset="3"
                id="dashboard_alerts"
                className={`${styles.dashboardAlerts} hidden lg:block`}
              >
                <img src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/alerts.svg" />
              </div>
              <div
                className={`${styles.infoSection} ${styles.infoSection1}`}
                data-atropos-offset="-1"
              >
                <img
                  src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-1.svg"
                  alt=""
                  data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-1.svg"
                  data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/a-2.svg"
                />
              </div>
              <div
                className={`${styles.infoSection} ${styles.infoSection2}`}
                data-atropos-offset="3"
              >
                <img
                  src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-1.svg"
                  alt=""
                  data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-1.svg"
                  data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/c-2.svg"
                />
              </div>
              <div
                className={`${styles.infoSection} ${styles.infoSection3}`}
                data-atropos-offset="-1"
              >
                <img
                  src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-1.svg"
                  alt=""
                  data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-1.svg"
                  data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/e-2.svg"
                />
              </div>
              <div
                className={`${styles.infoSection} ${styles.infoSection6}`}
                data-atropos-offset="5"
              >
                <img
                  src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/b-1.svg"
                  alt=""
                  data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/b-1.svg"
                  data-active=""
                />
              </div>
              <div
                className={`${styles.infoSection} ${styles.infoSection5}`}
                data-atropos-offset="-1"
              >
                <img
                  src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/d-1.svg"
                  alt=""
                  data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/d-1.svg"
                  data-active=""
                />
              </div>
            </div>

            <div
              className={`${styles.infoSection} ${styles.infoSection4}`}
              data-atropos-offset="5"
            >
              <img
                src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-1.svg"
                alt=""
                data-default="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-1.svg"
                data-active="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/homepage/dashboard/parts/f-2.svg"
              />
            </div>

            <div id="dashboard_buttons" className="hidden lg:block">
              <div
                className={`${styles.dashboardButton} ${styles.dashboardButton1}`}
                data-atropos-offset="80"
              >
                <button
                  type="button"
                  title="more info"
                  className="open-info"
                  data-index="1"
                ></button>
              </div>
              <div
                className={`${styles.dashboardButton} ${styles.dashboardButton2}`}
                data-sr-id="4"
                data-atropos-offset="80"
              >
                <button
                  type="button"
                  title="more info"
                  className="open-info"
                  data-index="2"
                ></button>
              </div>
              <div
                className={`${styles.dashboardButton} ${styles.dashboardButton3}`}
                data-atropos-offset="80"
              >
                <button
                  type="button"
                  title="more info"
                  className="open-info"
                  data-index="3"
                ></button>
              </div>
              <div
                className={`${styles.dashboardButton} ${styles.dashboardButton4}`}
                data-atropos-offset="80"
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
    </Atropos>
  );
}

export default Dashboard;
