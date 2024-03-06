import Head from 'next/head';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import { getSortedRecipesData } from '../lib/recipes';
import Link from 'next/link';
import Date from '../components/date';

export function getStaticProps() {
  const recipes = getSortedRecipesData();
  return {
    props: {
      recipes,
    },
  };
}

export default function Home({ recipes }) {
  return (
    <Layout home>
      <Head>
        <title>OLIVIARCHIVE</title>
      </Head>
      <section>
        <div className={styles.titleContainer}>

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
            Welcome to Oliviarchive, a collection of recipes I've thieved from restaurant kitchens or learned from my Mom over the years. These aren't particularly interesting or show-stopping recipes, just ones that I've been cooking forever and work well for me. Enjoy!
          </p>
          <p className={styles.blurbContact}>
            500 Terry Francine Street San Francisco, CA 94158   |   123-456-7890   |   info@mysite.com
          </p>
          <div className={styles.horizontalLine}></div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.card}>
            <img src="/images/recipes/apple-pie.png" alt="Explore Recipes" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <h2>Explore Recipes</h2>
              <p>Search the full recipe collection and filter by title, category, or ingredient.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={`${styles.cardBody} right`}>
              <h2>Search Ingredients</h2>
              <p>Search the full recipe collection by ingredients you're daydreaming about.</p>
              <p>(or just want to use up)</p>
            </div>
            <img src="/images/recipes/mung-bean-cookies.png" alt="Search Ingredients" className={styles.cardImage} />
          </div>
          <div className={styles.card}>
            <img src="/images/recipes/buttermilk-pancakes.png" alt="Browse Articles" className={styles.cardImage} />
            <div className={styles.cardBody}>
              <h2>Browse Articles</h2>
              <p>I like studying gastronomy as much as I like cooking and eating - here you'll find some of the short articles I've written about my findings.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={`container ${styles.slideContainer}`}>
        </div>
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
