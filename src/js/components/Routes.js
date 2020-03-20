import React            from 'react';
import { Route }        from 'react-router-dom'; 
import { Projects }     from '../../datas/Projects-datas';
import { tranformPath } from '../functions';
import SingleProject    from './SingleProject';
import About            from './About';

 
const Routes = () => {

  // Create App Route
  const appRoutes = [
    <Route key="about"    path="/about"    component={ About } />,
    <Route key="skills"   path="/skills"   component={ About } />,
    <Route key="work"     path="/work"     component={ About } />,
    <Route key="contact"  path="/contact"  component={ About } />
  ]

  // Create Projects Route
  const projectsRoutes = Projects.map( ( project, index ) => {
      // Format Project Name to validate Path
      const path = tranformPath( project.title );
      return <Route key={ index } path={ path } render={ () => <SingleProject project={ project } /> } /> 
  });

  // Return All Routes
  return [ ...appRoutes, ...projectsRoutes ];
}
 
export default Routes;