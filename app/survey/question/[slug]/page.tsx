import client from '@/contentful/client';
import Header from '@/components/Header';
import SurveyQuestion from '@/components/SurveyQuestion';

import styles from './question.module.css';

export async function generateStaticParams() {
  const data = await client.getEntries({
    content_type: 'question',
    limit: 1,
  });

  const questions = data.items;

  const paths = questions.map((question: any) => ({
    slug: question?.fields?.slug,
  }));

  return paths.map((param) => ({
    slug: param?.slug,
  }));
}

export default async function Question({ params }: { params: { slug: string } }) {
  const survey = await client.getEntries({
    content_type: 'survey',
    limit: 1
  });

  const { slug } = await params;

  const data = await client.getEntries({
    content_type: 'question',
    'fields.slug': slug,
    limit: 1,
  });

  const surveyData = survey?.items?.[0]?.fields as { title: string, description: string };

  if (!data.items.length) {
    return (
      <div className={styles.page}>
        <h1>Question not found</h1>
      </div>
    );
  }

  const question = data.items[0]?.fields as { title: string, nextQuestion: any };

  return (
    <div className={styles.page}>
            <div className={styles.survey_container}>
                <Header
                    surveyData={surveyData}
                />
                <hr />
                <main className={styles.main}>
                    <div>
                        <SurveyQuestion
                            currentQuestion={question}
                        />
                    </div>
                </main>
            </div>
        </div>
  );
}

export const revalidate = 60;
