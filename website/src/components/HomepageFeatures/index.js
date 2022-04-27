import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built in Typescript',
    icon: '🧑‍💻',
    description: (
      <>
        Pdfmake-wrapper contains types, which helps you to build PDF documents
        in an easy and readable way.
      </>
    ),
  },
  {
    title: 'Fast Development',
    icon: '⚡',
    description: (
      <>
        Pdfmake-wrapper also contains some functionalities under the hood that helps you
        to develop faster than using the original pdfmake library, such as working with images.
      </>
    ),
  },
  {
    title: 'Client/Server Support',
    icon: '💻',
    description: (
      <>
        Pdfmake-wrapper lets you to write your PDF documents either in client side
        and server side sharing the same API with minimal changes.
      </>
    ),
  },
];

function Feature({title, description, icon}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" style={{fontSize: '40px'}}>
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
