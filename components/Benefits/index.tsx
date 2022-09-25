import { RevealList } from "next-reveal";
import React from "react";
import styles from "../../styles/Benefits.module.css";
function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className="home-benefits__wrapper">
        <div className="container md:flex xl2:flex justify-end">
          <div className={styles.benefitsTitle}>
            <p
              className="text-xs mb-2
                md:text-base md:mb-4"
            >
              EVERYTHING YOU NEED TO GET TO WHERE YOU WANT TO BE.
            </p>
            <h2 className="mb-10 md:mb-8 text-[5rem]">
              WELCOME <br className="sm:hidden xl2:block" />
              TO THE <br className="hidden sm:block xl2:hidden" />
              NEXT LEVEL OF IT
            </h2>
            <a
              className="button-link mb-16 md:mb-14 lg:mb-20  bg-primaryPink text-white"
              href="/signup/"
            >
              Try it free{" "}
            </a>
          </div>
          <RevealList
            interval={200}
            delay={300}
            duration={3000}
            origin={"bottom"}
            className="flex justify-end pt-16  flex-wrap gap-10"
          >
            <div className={`${styles.benefitsItem}`}>
              <h3 className="text-2xl mb-3 font-bold lg:mb-4 md:text-[2rem]">
                All-in-one
              </h3>
              <div className="text-p0 font-bold leading-normal md:text-lg md:mb-1">
                One comprehensive RMM solution
                <br /> built for IT professionals.
              </div>
              <p className="text-p0 mb-0 leading-normal md:text-lg">
                Remote Monitoring and Management, Remote Access, Helpdesk,
                Billing, and Reporting. You get every feature, every tool —
                everything you need — to streamline your workflow and start
                looking forward to Monday mornings again.
              </p>
            </div>
            <div className={styles.benefitsItem}>
              <h3 className="text-2xl mb-3 font-bold leading-normal lg:mb-4 md:text-[2rem]">
                Pay-per-technician
              </h3>
              <div className="text-p0 font-bold leading-normal md:text-lg md:mb-1">
                Manage unlimited devices,
                <br /> without breaking the bank.
              </div>
              <p className="text-p0 mb-0 leading-normal md:text-lg">
                Save a whole lot of money with our disruptive, honest, and
                transparent pricing. With unlimited devices, you now have the
                freedom to say yes. You’ll never have the hassle of awkward
                conversations about raising prices, and instead you’ll garner
                customer loyalty.
              </p>
            </div>
            <div className={`${styles.benefitsItem}`}>
              <h3 className="text-2xl mb-3 font-bold lg:mb-4 md:text-[2rem]">
                All-in-one
              </h3>
              <div className="text-p0 font-bold leading-normal md:text-lg md:mb-1">
                One comprehensive RMM solution
                <br /> built for IT professionals.
              </div>
              <p className="text-p0 mb-0 leading-normal md:text-lg">
                Remote Monitoring and Management, Remote Access, Helpdesk,
                Billing, and Reporting. You get every feature, every tool —
                everything you need — to streamline your workflow and start
                looking forward to Monday mornings again.
              </p>
            </div>
            <div className={styles.benefitsItem}>
              <h3 className="text-2xl mb-3 font-bold leading-normal lg:mb-4 md:text-[2rem]">
                Pay-per-technician
              </h3>
              <div className="text-p0 font-bold leading-normal md:text-lg md:mb-1">
                Manage unlimited devices,
                <br /> without breaking the bank.
              </div>
              <p className="text-p0 mb-0 leading-normal md:text-lg">
                Save a whole lot of money with our disruptive, honest, and
                transparent pricing. With unlimited devices, you now have the
                freedom to say yes. You’ll never have the hassle of awkward
                conversations about raising prices, and instead you’ll garner
                customer loyalty.
              </p>
            </div>
          </RevealList>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
