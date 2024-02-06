import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllRecipeIds, getRecipeData } from '../../lib/recipes';
import utilStyles from '../../styles/utils.module.css';

export default function Recipe({ recipeData }) {
  return (
    <Layout>
      <Head>
        <title>{recipeData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{recipeData.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={recipeData.date} />
        </div>

        <div className={utilStyles.lightText}>
          <p>{recipeData.servings} servings &#183; {recipeData.minutes} minutes</p>
        </div>

        {recipeData?.id && (
          <Image
            priority
            src={"/images/recipes/" + recipeData.id + ".png"}
            height={320}
            width={420}
            alt={"Photo of " + recipeData.title}
          />
        )}

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ flex: '1' }}>
            {recipeData.ingredients && (
              <>
                <h2>Ingredients</h2>
                <ul dangerouslySetInnerHTML={{ __html: recipeData.ingredients }} />
              </>
            )}
          </div>
          <div style={{ flex: '1' }}>
            {recipeData.directions && (
              <>
                <h2>Directions</h2>
                <ol dangerouslySetInnerHTML={{ __html: recipeData.directions }} />
              </>
            )}
          </div>
        </div>
      </article>
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