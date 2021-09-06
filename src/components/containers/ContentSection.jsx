import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function ContentSection(props) {
  const { className, children, ...rest } = props;
  return (
    <div className={classnames("content-section bg-dark", className)} {...rest}>
      {children}
    </div>
  );
}

ContentSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ContentSection.defaultProps = {
  className: null,
};

export default ContentSection;
