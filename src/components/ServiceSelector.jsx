const ServiceSelector = ({ grade, handleSelected }) => {
    return (
        <div className="service-grade-amout">
            <input type="radio" onChange={handleSelected} name="service-grade" value={grade} />
            <div className="service-grade-btn">{grade}</div>
        </div>
    )
}

export default ServiceSelector;