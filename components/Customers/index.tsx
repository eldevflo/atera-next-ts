import { RevealList } from "next-reveal";
import React from "react";
import styles from "../../styles/Customers.module.css";

function Customers() {
  return (
    <section className={styles.customers}>
      <div className="container mx-auto md:px-9 lg:px-0">
        <div className={styles.overflowingBorder}>
          <p
            className={`text-center ${styles.preTitle} tracking-[0.0625rem] leading-[1.125rem] md:max-w-[530px] md:mx-auto lg:max-w-none`}
          >
            MSPs and IT departments around the world have reached the next level
            of IT.
          </p>
          <h2 className="text-center mb-12 md:mb-20 lg:max-w-[750px] lg:mx-auto 2xl:max-w-none lg:text-[5rem]">
            Next-generation customers
          </h2>
          <ul className={styles.customerList}>
            <RevealList
              interval={200}
              delay={300}
              duration={3000}
              origin={"bottom"}
              className="flex flex-wrap justify-around"
            >
              {Array(10)
                .fill(0)
                .map((i) => (
                  <li className="fade-bottom-interval load-hidden">
                    <picture>
                      <source
                        media="(min-width: 1024px)"
                        srcSet="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/our-customers/mcdonalds.svg"
                      ></source>
                      <source
                        media="(min-width: 768px)"
                        srcSet="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/our-customers/mcdonalds.svg"
                      ></source>
                      <source
                        media="(min-width: 0px)"
                        srcSet="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/our-customers/mobile/mcdonalds-m.svg"
                      ></source>
                      <img
                        data-lazyloaded="1"
                        src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/our-customers/mcdonalds.svg"
                        data-src="https://d12tbd6xzgxi73.cloudfront.net/app/themes/atera/dist/images/our-customers/mcdonalds.svg"
                        alt="McDonald's"
                        className="entered litespeed-loaded"
                        data-ll-status="loaded"
                      />
                    </picture>
                  </li>
                ))}
            </RevealList>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Customers;
