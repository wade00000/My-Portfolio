import { Link } from "react-router-dom";

function Card({ title, image, techStack, link }) {
  return (
    <Link to={link} className="project-card">
      <img src={image} alt={title} />
      <div className="project-card-info">
        <h3>{title}</h3>
        <div className="tech-tags">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Card