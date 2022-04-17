import PropTypes from 'prop-types'; 

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

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};