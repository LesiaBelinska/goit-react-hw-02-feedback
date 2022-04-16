
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => (
                <button
                    type="button"
                    data-feedback={option}
                    onClick={onLeaveFeedback}
                    key={option}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default FeedbackOptions;