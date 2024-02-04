import Head from 'next/head';
import Layout from '../components/layout';
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
  return (
    <Layout home>
      <Head>
        <title>OLIVIARCHIVE</title>
      </Head>
      <section>
        <p>OLIVIARCHIVE</p>
        <p>
          My favorite recipes, finally digitized.
        </p>
      </section>
      <section>
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
      </section>
    </Layout>
  );
}