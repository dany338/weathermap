import React from 'react'
/* Components */
import SidebarRow from '../SidebarRow';
/* Style Components */
import { Container } from './styled';

const Sidebar = () => {
  return (
    <Container>
      <SidebarRow selected path="/" icon={'home'} title="Home" />
      <hr />
    </Container>
  )
}

export default Sidebar;
