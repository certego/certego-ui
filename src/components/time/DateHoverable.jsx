import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  ListGroup,
  ListGroupItem,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";
import {
  addMinutes,
  format,
  formatDistanceToNow
} from "date-fns";


function DateHoverable(props) {
  const { id, value, className, showAgo, format: formatProp, ...rest } = props;

  const [utcVal, userTz, userTzVal] = React.useMemo(() => {
    const formatStr = "p PP";
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const d = new Date(value||null);
    const dUTC = addMinutes(d, d.getTimezoneOffset());
    return [format(dUTC, formatStr), tz, format(d, formatStr)];
  }, [value]);

  return (
    <>
      <time
        id={id}
        className={classnames("date-hoverable", className)}
        {...rest}
      >
        {format(new Date(value||null), formatProp)}
      </time>
      <UncontrolledPopover target={id} trigger="hover">
        <PopoverHeader className="p-1">
          <small>Time Conversion</small>
        </PopoverHeader>
        <PopoverBody className="bg-body">
          <ListGroup flush>
            {showAgo && (
              <ListGroupItem className="p-1 d-flex justify-content-between align-items-center text-light">
                <b className="mx-auto text-secondary">
                  {formatDistanceToNow(new Date(value||null), { addSuffix: true, })}
                </b>
              </ListGroupItem>
            )}
            <ListGroupItem className="p-1 d-flex justify-content-between align-items-center text-light">
              <b>UTC</b>
              <span className="ms-4">{utcVal}</span>
            </ListGroupItem>
            <ListGroupItem className="p-1 d-flex justify-content-between align-items-center text-light">
              <b>{userTz} · Your computer</b>
              <span className="ms-4">{userTzVal}</span>
            </ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
}

DateHoverable.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
  showAgo: PropTypes.bool,
};

DateHoverable.defaultProps = {
  className: undefined,
  format: "PPpppp",
  showAgo: false,
};

export default React.memo(DateHoverable);
