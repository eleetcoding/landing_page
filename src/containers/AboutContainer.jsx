import React from 'react';
import styles from './AboutContainer.module.scss';

export default function AboutContainer() {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.aboutHeader}>We Love Algorithms</div>
      <div className={styles.founders}>Our Founders</div>
      <div className={styles.bio}>
        <div>
          <p className={styles.names}>Jimmy Tran</p>
          <p>Co-Founder and CEO</p>
        </div>
        <div>
          <p className={styles.names}>Joseph Caballero</p>
          <p>Co-Founder and CFO</p>
        </div>
        <div>
          <p className={styles.names}>Praise Emmanuel</p>
          <p>Co-Founder and COO</p>
        </div>
        <div>
          <p className={styles.names}>Mahir Mohtasin</p>
          <p>Co-Founder and CSO</p>
        </div>
        <div>
          <p className={styles.names}>Kevin Fan</p>
          <p>Co-Founder and CTO</p>
        </div>
      </div>
    </div>
  );
}
