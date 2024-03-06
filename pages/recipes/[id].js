import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllRecipeIds, getRecipeData } from '../../lib/recipes';
import styles from '../../styles/recipe.module.css';

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <Head>
        <title>{`${recipeData.title} - OLIVIARCHIVE`}</title>
      </Head>
      <section>
        <div className="container">
          <h1>{recipeData.title}</h1>

          <Date dateString={recipeData.date} />

          <p>{recipeData.servings} servings &#183; {recipeData.minutes} minutes</p>

          {/* <Image
            priority
            src={"/images/recipes/" + recipeData.id + ".png"}
            height={320}
            width={420}
            alt={"Photo of " + recipeData.title}
          /> */}

          <div className={styles.recipeContainer}>
            <div className={styles.ingredientsContainer}>
              {recipeData.ingredients && (
                <>
                  <h2>Ingredients</h2>
                  <ul dangerouslySetInnerHTML={{ __html: recipeData.ingredients }} />
                </>
              )}
            </div>
            <div className={styles.directionsContainer}>
              {recipeData.directions && (
                <>
                  <h2>Directions</h2>
                  <ol dangerouslySetInnerHTML={{ __html: recipeData.directions }} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllRecipeIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recipeData = await getRecipeData(params.id);
  return {
    props: {
      recipeData,
    },
  };
}