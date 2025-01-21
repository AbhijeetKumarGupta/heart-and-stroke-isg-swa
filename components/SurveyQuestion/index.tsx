'use client';
import { useRouter } from 'next/navigation';

import styles from "./surveyQuestion.module.css";

export default function SurveyQuestion(
    { currentQuestion }: { currentQuestion: { title: string, nextQuestion: any } }
) {
    const router = useRouter();

    const handleNext = () => {
        if (currentQuestion?.nextQuestion) {
            router.push(`/survey/question/${currentQuestion?.nextQuestion?.fields?.slug}`);
        } else {
            alert('End of survey');
        }
    };

    return (
        <>
            <div className={styles.questionContainer}>
                <h3>{currentQuestion?.title}</h3>
            </div>
            <hr />
            <div
                className={styles.singleButton}
            >
                <button
                    onClick={handleNext}
                    className={styles.button}
                >
                    {'Next'}
                </button>
            </div>
        </>
    )
}