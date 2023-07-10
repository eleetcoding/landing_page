import React from 'react';
import styles from './AboutContainer.module.scss';

export default function AboutContainer() {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.aboutHeader}>We Love Algorithms</div>
      <div className={styles.founders}>Our Founders</div>
    </div>
  );
}
