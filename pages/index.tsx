import type { NextPage } from "next";
import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={styles.homeHero}>
        <div className="container mx-auto text-center">
          <div className="top basic-reveal load-hidden text-white">
            <h1 className="uppercase my-0 mb-6 md:mb-8 text-rh3 xxsm:text-rh2 md:text-rh1 xl:text-[4.5rem] xl:leading-[0.8]">
              Designed for everyday heroes, Built for IT professionals.
            </h1>
            <p className="hero-text mb-10 block mx-auto">
              <strong>All-in-one RMM and PSA platform.</strong>
              <br />
              RMM Software, Remote Access, IT Automations, Patch Management,
              Scripting, Ticketing, and Reporting.
            </p>
            <a
              className="button-link mb-2 lg:mb-4 bg-primaryPink"
              href="/signup/"
            >
              Get started
            </a>
            <p className="text-sm md:text-lg	lg:text-p0">
              No credit card required
            </p>
          </div>
        </div>
        <Dashboard />
      </section>
    </Layout>
  );
};

export default Home;
