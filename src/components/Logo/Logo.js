import React from 'react';

import classes from './Logo.module.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo} >
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
