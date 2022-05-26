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
import { nanoid } from "nanoid";


function DateHoverable(props) {
  const { id, value, className, noHover, ago, showAgo, format: formatProp, showFormat, ...rest } = props;

  const [utcVal, userTz, userTzVal] = React.useMemo(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const d = new Date(value||null);
    const dUTC = addMinutes(d, d.getTimezoneOffset());
    return [format(dUTC, showFormat), tz, format(d, showFormat)];
  }, [value, showFormat]);

  const timeId = id || `date-${nanoid(4)}`;

  return (
    <>
      <time
        id={timeId}
        className={classnames("date-hoverable", className)}
        {...rest}
      >
        {ago ? formatDistanceToNow(new Date(value||null), { addSuffix: true, }) :
          format(new Date(value||null), formatProp)}
      </time>
      {!noHover && <UncontrolledPopover target={timeId} trigger="hover">
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
      </UncontrolledPopover>}
    </>
  );
}

DateHoverable.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
  id: PropTypes.string,
  noHover: PropTypes.bool,
  showFormat: PropTypes.string,
  ago: PropTypes.bool,
  showAgo: PropTypes.bool,
};

DateHoverable.defaultProps = {
  ago: false,
  className: undefined,
  format: "PPpppp",
  id: undefined,
  noHover: false,
  showAgo: false,
  showFormat: "p PP",
};

export default React.memo(DateHoverable);
