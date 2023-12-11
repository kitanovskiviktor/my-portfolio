import { Link } from 'react-router-dom';
import './projectcardstyle.css';
import linkIcon from '../../Assets/Images/link-icon.svg';

const ProjectCard = ({props}) => {
    return (
        <>
            <div className="project-card-container">
                <div className="project-card-img-wrapper">
                    <img src={props.img} alt='' className='w-100'/>
                </div>
                <div className="project-card-info-wrapper mt-3">
                    <div>
                        <p className='text-desc text-uppercase'>{props.desc}</p>
                        <h1 className='size-18 mt-2'>{props.title}</h1>
                    </div>
                    <div>
                        <Link to={`/project/${props.id}`}><img src={linkIcon} alt=""/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard;