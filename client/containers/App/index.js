import React, { PropTypes } from 'react';
import * as style from './style.css';
const App = (props) => (
  <div className={style.normal}>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element
};
export default App;
