import React from 'react';
import styles from './MainContainer.module.scss';
import { Link } from 'react-router-dom';

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
    <>
      <div className={styles.bigDiv}>
        <p className={styles.mainLogo}>eLEET</p>
        <div className={styles.opaqueDiv}></div>
      </div>
      <div className={styles.intro}>
        <h2>
          Created by developers for developers. A community for <span className={styles.everyone}>everyone</span> who{' '}
          <span className={styles.heart} onClick={(e) => (e.target.style.color = 'red')}>
            ♥
          </span>{' '}
          code. <span className={styles.learn}>Learn</span> together, <span className={styles.grow}>grow</span>{' '}
          together.
        </h2>
        <p className={styles.introText}>
          Whether you've been an engineering for 20 years or just started yesterday, I'm sure we have something for you.
          Check out our{' '}
          <Link className={styles.schedule} to='schedule'>
            <i className='fa-solid fa-calendar-days'></i> schedule
          </Link>{' '}
          for our Algorithm white-boarding sessions. We have a{' '}
          <a className={styles.schedule} href='https://meet.google.com/emg-akph-gib'>
            <i className='fa-solid fa-video'></i> hangout room
          </a>{' '}
          Monday-Friday 10am-10pm for accountability, motivation, application sprints, question and answers, and more!
          Join our{' '}
          <a className={styles.schedule} href='https://discord.gg/bxtH95tb'>
            <i className='fa-brands fa-discord'></i> discord
          </a>{' '}
          to meet like-minded engineers and stay up to date with any upcoming events!
        </p>
      </div>
    </>
  );
}
