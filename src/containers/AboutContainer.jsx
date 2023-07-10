import React from 'react';
import styles from './AboutContainer.module.scss';
import kevinPic from '../assets/kevin.jpg';

export default function AboutContainer() {
  return (
    <div className={styles.aboutDiv}>
      <div className={styles.aboutHeader}>We Love Algorithms</div>
      <div className={styles.founders}>Our Founders</div>
      <div className={styles.bio}>
        <div className={styles.eachPerson}>
          <img
            className={styles.profilePic}
            src='https://media.licdn.com/dms/image/D5603AQFnqvczuDYXpA/profile-displayphoto-shrink_800_800/0/1687726118528?e=1694649600&v=beta&t=lioRd1xOLDUYmrHgQZao5bEndchHwC5HFNwNViX6daI'></img>
          <p className={styles.names}>Jimmy Tran</p>
          <p>Co-Founder and CEO</p>
          <a className={styles.links} href='https://www.linkedin.com/in/jimmytran48/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <img
            className={styles.profilePic}
            src='https://media.licdn.com/dms/image/D4E03AQFR2WCODxeL4Q/profile-displayphoto-shrink_800_800/0/1682083113503?e=1694649600&v=beta&t=s8uX4LLbc7sz63yyhppNqm-6Lqmw3rZaf5c6V2pjAW4'></img>
          <p className={styles.names}>Joseph Caballero</p>
          <p>Co-Founder and CFO</p>
          <a className={styles.links} href='https://www.linkedin.com/in/joseph-w-caballero/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <img
            className={styles.profilePic}
            src='https://media.licdn.com/dms/image/D4E03AQFbCXJk7G4_FQ/profile-displayphoto-shrink_800_800/0/1688748682276?e=1694649600&v=beta&t=rKkqKwG9HLRdVfbfBIehP7zd0S_EHYR-XEr0e2UvwNw'></img>
          <p className={styles.names}>Praise Emmanuel</p>
          <p>Co-Founder and COO</p>
          <a className={styles.links} href='https://www.linkedin.com/in/praiseemmanuel/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <img
            className={styles.profilePic}
            src='https://media.licdn.com/dms/image/D4E03AQFdT6NeW0hhcg/profile-displayphoto-shrink_800_800/0/1684950164526?e=1694649600&v=beta&t=BpjaTwrMcFWf23x3CRNIa7pPjXWR8SDSnhKkLa-wzSg'></img>
          <p className={styles.names}>Mahir Mohtasin</p>
          <p>Co-Founder and CSO</p>
          <a className={styles.links} href='https://www.linkedin.com/in/mmohtasin/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href=''>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
        <div className={styles.eachPerson}>
          <img className={styles.profilePic} src={kevinPic}></img>
          <p className={styles.names}>Kevin Fan</p>
          <p>Co-Founder and CTO</p>
          <a className={styles.links} href='https://www.linkedin.com/in/kfan1/'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
          <a className={styles.links} href='https://github.com/kfan1'>
            <i className='fa-brands fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}
