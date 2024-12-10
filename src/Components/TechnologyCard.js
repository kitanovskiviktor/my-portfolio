

const TechnologyCard = ({props}) => {
    return (
        <>
        <div className="d-flex align-items-center text-white gap-3 technology-card px-5 pt-2 pb-2 flex-wrap justify-content-center">
            <img src={props.image} alt="" style={{width:"50px"}}/>
            <p>{props.name}</p>
        </div>
        </>
    )
}
export default TechnologyCard;