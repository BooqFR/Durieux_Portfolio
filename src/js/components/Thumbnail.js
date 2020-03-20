import React    from 'react';
import { Link } from 'react-router-dom';
import { tranformPath }            from '../functions'
 
const Thumbnail = props => {

  // Create Project Path
  const link = tranformPath( props.title );

  // Return Thumbnail
  return (
    <div className="thumbnail">
      <Link to={ link }>
        <div className="thumbnail__image" style={ {backgroundImage: `url(${props.image})`} }></div>
        <div className="thumbnail__title">{ props.title }</div>
        <div className="thumbnail__category">{ props.category }</div>
      </Link>
    </div>
  )
}
 
export default Thumbnail;