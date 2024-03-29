import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import pancake from '../public/images/pancake.jpg';
import { useState } from 'react';

export default function Layout({ children, home }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="My favorite recipes, digitized."
        />
        <meta name="og:title" content="OLIVIARCHIVE" />
      </Head>
      <header>
        {/* {home ? (
          <div className={styles.container}>
            <div className={styles.navBar}></div>
            <div className={styles.imageContainer}>
              <img src="/images/pancake.jpg" alt="Pancake" className={styles.headerImage} />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>BING BONG</h1>
            </div>
          </div>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/gallery.png"
                height={320}
                width={420}
                alt="Oliviarchive photo gallery"
              />
            </Link>
            <h2>
              <Link href="/">
                OLIVIARCHIVE
              </Link>
            </h2>
          </>
        )} */}
      </header>
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <Link href="/">
            <img src="/images/logo_tiny.png" alt="Oliviarchive logo" className={styles.logo} />
          </Link>
          <input type="checkbox" id="checkbox_toggle" checked={isMenuOpen} onChange={toggleMenu} />
          <label htmlFor="checkbox_toggle" className={styles.hamburger}>&#9776;</label>
          <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
            <li><Link href="/recipes">Recipes</Link></li>
            <li><Link href="/ingredients">Ingredients</Link></li>
            <li><Link href="/articles">Articles</Link></li>
          </div>
        </ul>
      </nav>
      <main>{children}</main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      <section>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerContent}>
            <div className={styles.emailFormContainer}>
              <div id="mc_embed_shell">
                <div id="mc_embed_signup">
                  <form
                    action="https://onrender.us21.list-manage.com/subscribe/post?u=35c3928f32114cf195b23f859&amp;id=52636556da&amp;f_id=00e259e1f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_self"
                    noValidate=""
                  >
                    <div id="mc_embed_signup_scroll" className={styles.emailForm}>
                      <h2>Join My Mailing List</h2>
                      <label htmlFor="mce-EMAIL">Email Address</label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        required=""
                        defaultValue="" />
                      <div hidden="">
                        <input type="hidden" name="tags" defaultValue="2981454" />
                      </div>
                      <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response"></div>
                        <div className="response" id="mce-success-response"></div>
                      </div>
                      <div id={styles.emailFormHidden} aria-hidden="true">
                        <input type="text" name="b_35c3928f32114cf195b23f859_52636556da" tabIndex="-1" defaultValue="" />
                      </div>
                      <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                    </div>
                  </form>
                </div>
              </div>

            </div>
            <div className={styles.footerContactContainer}>
              <div className={styles.footerContact}>
                <p>500 Terry Francine Street</p>
                <p>San Francisco, CA 94158</p>
                <br />
                <p>info@mysite.com</p>
                <p>Tel: 123-456-7890</p>
                <br />
              </div>
              <div className={styles.footerCopyright}>
                <p>Designed, Developed, and Deployed</p>
                <p>by Olivia, © 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}