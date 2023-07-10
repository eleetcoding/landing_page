import React from 'react';
import styles from './MainContainer.module.scss';

export default function main() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty('--scroll', window.scrollY);
      let bodyScroll = document.querySelector('body').style.cssText.slice(10);
      bodyScroll = Number(bodyScroll.slice(0, bodyScroll.length - 1));
      if (bodyScroll > 1900) document.querySelector('body').setAttribute('logo', 'stop');
      else document.querySelector('body').setAttribute('logo', 'go');
    },
    false
  );

  return (
    <div className={styles.bigDiv}>
      <p className={styles.mainLogo}>eLEET</p>
      <div className={styles.opaqueDiv}></div>
      <p>Join our community of </p>
    </div>
  );
}
