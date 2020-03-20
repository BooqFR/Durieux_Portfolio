import React            from 'react';
import { Route }        from 'react-router-dom'; 
import { Projects }     from '../../datas/Projects-datas';
import { tranformPath } from '../functions';
import SingleProject    from './SingleProject';
import Homepage         from '../pages/Homepage';
import AboutMe          from '../pages/AboutMe';
import Work             from '../pages/Work';
import Shop             from '../pages/Shop';
import Contact          from '../pages/Contact';
 
const Routes = () => {

  // Create App Route
  const appRoutes = [
    
    <Route key="about-me" exact path="/about-me"  component={ AboutMe } />,
    <Route key="work"     exact path="/work"      component={ Work } />,
    <Route key="shop"     exact path="/shop"      component={ Shop } />,
    <Route key="contact"  exact path="/contact"   component={ Contact } />,
    <Route key="homepage" exact path="/"          component={ Homepage } />
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