import './projectcardstyle.css';

const ProjectCard = ({props}) => {
    return (
        <>
            <div className="project-card-container">
                <div className="project-card-img-wrapper">
                    <img src={props.img} alt='' className='w-100'/>
                </div>
                <div className="project-card-info-wrapper mt-3">
                    <p className='text-desc text-uppercase'>{props.desc}</p>
                    <h1 className='size-18 mt-2'>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;