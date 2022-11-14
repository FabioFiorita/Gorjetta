const QualitySelector = ({ grade }) => {
    return (
        <div className="grade-amout">
            <input type="radio" name="grade" value={grade/100} />
            <div className="grade-btn">{grade}</div>
        </div>
    )
}

export default QualitySelector;