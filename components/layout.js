import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import pancake from '../public/images/pancake.jpg';

export default function Layout({ children, home }) {
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
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}