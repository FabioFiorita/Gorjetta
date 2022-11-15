const FoodSelector = ({ grade, handleSelected }) => {
    return (
        <div className="food-grade-amout">
            <input type="radio" onChange={handleSelected} name="food-grade" value={grade} />
            <div className="food-grade-btn">{grade}</div>
        </div>
    )
}

export default FoodSelector;