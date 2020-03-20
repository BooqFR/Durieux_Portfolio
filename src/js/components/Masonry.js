import React        from 'react';
import Thumbnail    from './Thumbnail';
import { Projects } from '../../datas/Projects-datas';

 
const Masonry = () => {

  // Create Thumbnails from projects.js
  const thumbnails = Projects.map(( project, index ) => {
    return (
      <li className="masonry__item" key={ index }>
        <Thumbnail
          link  = { project.link }
          image = { project.image }
          title = { project.title }
        />
      </li>
    );
  });

  // Return Masonry
  return (
      <ul className="masonry">
        { thumbnails }
      </ul>
  )
}
 
export default Masonry;