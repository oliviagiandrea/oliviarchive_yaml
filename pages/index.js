import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/home.module.css';
import utilStyles from '../styles/utils.module.css';
import { getSortedRecipesData } from '../lib/recipes';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const recipes = await getSortedRecipesData();
  return {
    props: {
      recipes,
    },
  };
}

export default function Home({ recipes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout home>
      <Head>
        <title>OLIVIARCHIVE</title>
      </Head>
      <section>
        <div className={styles.titleContainer}>
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
          <div className={styles.imageContainer}>
            <img src="/images/pancake.jpg" alt="Pancake" className={styles.headerImage} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>OLIVIARCHIVE</h1>
            <p className={styles.subtitle}>My favorite recipes, finally digitized.</p>
            <img src="/images/logo_dark_orange.png" alt="Website Pancake Logo" className={styles.titleLogo} />
          </div>
        </div>
      </section>
      <section>
        <div className={`container ${styles.blurbContainer}`}>
          <p className={styles.blurb}>
            This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
          </p>
          <p className={styles.blurbContact}>
            500 Terry Francine Street San Francisco, CA 94158   |   123-456-7890   |   info@mysite.com
          </p>
          <div className={styles.horizontalLine}></div>
        </div>
      </section>
      <section>
        
      </section>
      {/* <section>
        <h2>Recipes</h2>
        <ul className={utilStyles.list}>
          {recipes.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/recipes/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
