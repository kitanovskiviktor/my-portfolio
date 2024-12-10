

const ProjectCard = ({props}) => {
    return (
        <>
        <div className="d-flex gap-3 project-card px-5 pt-3 pb-3">
            <img src={props.mainImage} alt="" style={{width:"200px"}} className="border-radius-20"></img>
            <div>
                <h6 className="text-infos text-uppercase">{props.title}</h6>
                <p className="light-grey">{props.description}</p>
                <button className="project-btn"><a href={props.link} target="_blank">View Live</a></button>
            </div>
        </div>
        </>
    )
}

export default ProjectCard;