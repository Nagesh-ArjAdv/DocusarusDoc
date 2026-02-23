import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Welcome to DeliveryHub',
    Svg: require('@site/static/img/gpt.svg').default,
    description: (
      <>
        Seamlessly replicate, transform, and deliver data across any cloud with enterprise-grade security and performance.
        <br />

        <Link to="/docs/welcome/what-is-deliveryhub">
          Learn more →
        </Link>
      </>
    ),
  },

,
  {
    title: 'Sources',
    Svg: require('@site/static/img/gpt2.svg').default,
    description: (
      <>
        Ingest data from cloud warehouses and object storage with automated pipelines.
      </>
    ),
  },
  {
    title: 'Destinations',
    Svg: require('@site/static/img/download-new.svg').default,
    description: (
      <>
        Deliver your transformed or replicated data to cloud warehouses, storage, or analytics systems.
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
