import React from 'react'
/* Components */
import SidebarRow from '../SidebarRow';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useWeather } from '../../infraestructure/hooks';

const Sidebar = () => {
  const { cities } = useWeather();
  return (
    <Container>
      <SidebarRow selected path="/" icon={'home'} title="Home" />
      <hr />
      {cities.length > 0 && cities.map((city) => (<SidebarRow path="/" icon={'home'} title={city} />))}
    </Container>
  )
}

export default Sidebar;
