import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: #36454f;
  height: 100px;
  h4{
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: #ffffff;
`

class NavBar extends Component {
  render() {
    return (
      <Bar>
        <StyledLink to={'/'}>
          <h4><Icon>movie</Icon> cin·e·ma·theque</h4>
        </StyledLink>
      </Bar>
    );
  }
}

export default NavBar;