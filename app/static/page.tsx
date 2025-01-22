import client from '@/contentful/client';
import RoutingButton from '@/components/RoutingButton/RoutingButton';

import styles from './app.module.css';

export default async function Static() {

  const data = await client.getEntries({
    content_type: 'survey',
    limit: 1
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const surveyData = data?.items?.[0]?.fields as { title: string, firstQuestion: any, description: string };;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1
          className={styles.title}
        >
          {surveyData?.title}
        </h1>
        <p
          className={styles.description}
        >
          {surveyData?.description}
        </p>
        <RoutingButton
          route={`/survey/question/${surveyData?.firstQuestion?.fields?.slug}`}
          buttonText='Start Survey'
          className={styles.startButton}
        />
        <RoutingButton
          route="/"
          buttonText='Static SSR Welcome page'
          className={styles.startButton}
        />
      </div>
    </div>
  );
}

export const revalidate = 30;