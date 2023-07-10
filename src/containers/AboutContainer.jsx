import React from 'react';
import styles from './AboutContainer.module.scss';

export default function AboutContainer() {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.aboutHeader}>We Love Algorithms</div>
      <div className={styles.founders}>Our Founders</div>
      <div className={styles.bio}>
        <div className={styles.eachPerson}>
          <p className={styles.names}>Jimmy Tran</p>
          <p>Co-Founder and CEO</p>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <p className={styles.names}>Joseph Caballero</p>
          <p>Co-Founder and CFO</p>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <p className={styles.names}>Praise Emmanuel</p>
          <p>Co-Founder and COO</p>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <p className={styles.names}>Mahir Mohtasin</p>
          <p>Co-Founder and CSO</p>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <p className={styles.names}>Kevin Fan</p>
          <p>Co-Founder and CTO</p>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
