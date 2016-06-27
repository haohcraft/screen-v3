import React, { Children, PropTypes } from 'react';
const Root = (props) => (Children.only(props.children));
Root.propTypes = {
    children: PropTypes.element.isRequired
};
export default Root;
