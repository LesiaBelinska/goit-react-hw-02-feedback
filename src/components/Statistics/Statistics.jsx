
const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
            {total > 0 ? (<ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
                <li>Total:{total}</li>
                <li>Positive feedback:{positivePercentage}%</li>
            </ul>) : (
                <p>no feedback...</p>
            )}
        </div>
    );
};

export default Statistics;