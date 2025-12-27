import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/">
            Start Learning Now
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src="/img/undraw_docusaurus_mountain.svg" alt="Feature 1" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Hands-On Learning</Heading>
              <p>Learn by doing with practical examples and projects that you can build yourself.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src="/img/undraw_docusaurus_tree.svg" alt="Feature 2" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">From Beginner to Intermediate</Heading>
              <p>Start with the basics and gradually move on to more advanced topics.</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img className={styles.featureSvg} src="/img/undraw_docusaurus_react.svg" alt="Feature 3" />
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">Powered by Docusaurus</Heading>
              <p>A modern static website generator that helps you get your docs up and running in no time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A Hands-On Guide to Building Intelligent Systems that Interact with the Physical World">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
