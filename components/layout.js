import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Olivia Giandrea';

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
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/gallery.png"
              height={320}
              width={420}
              alt="Oliviarchive photo gallery"
            />
            <h1>OLIVIARCHIVE</h1>
          </>
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
        )}
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