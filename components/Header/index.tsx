import styles from "./header.module.css";

export default function Header(
    { surveyData }
        : { surveyData: { title: string, description: string } }
) {

    return (
        <div className={styles.header}>
            <h1>
                {surveyData?.title}
            </h1>
            <p>
                {surveyData?.description}
            </p>
        </div>
    )
}