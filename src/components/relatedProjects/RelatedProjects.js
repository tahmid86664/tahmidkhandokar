import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedProjects.scss';

const RelatedProjects = ({ relatedProjects }) => {
  return (
    <div className="relatedProjectContainer">
      {
        relatedProjects.map(rp => 
          <Link to={`/projects/${rp.basis}/${rp.id}`} style={{textDecoration: "none"}}>
            <div className="relatedProject">
              <img src={rp.coverImg} alt={rp.title} />
              <h3>{rp.title}</h3>
            </div>
          </Link>    
        )
      }
    </div>
  )
}

export default RelatedProjects;
