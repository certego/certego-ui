import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import moment from "moment";
import Moment from "react-moment";
import {
  ListGroup,
  ListGroupItem,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from "reactstrap";

function MomentHoverable(props) {
  const { id, value, className, showAgo, ...rest } = props;

  const [utcVal, userTz, userTzVal] = React.useMemo(() => {
    const formatStr = "h:mm A MMM Do, YYYY";
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const obj = typeof value === "number" ? moment.unix(value) : moment(value);
    return [obj.utc().format(formatStr), tz, obj.local().format(formatStr)];
  }, [value]);

  return (
    <>
      <Moment
        id={id}
        unix={typeof value === "number"}
        date={value}
        className={classnames("moment-hoverable", className)}
        {...rest}
      />
      <UncontrolledPopover target={id} trigger="hover">
        <PopoverHeader className="p-1">
          <small>Time Conversion</small>
        </PopoverHeader>
        <PopoverBody className="bg-body">
          <ListGroup flush>
            {showAgo && (
              <ListGroupItem className="p-1 d-flex justify-content-between align-items-center">
                <b className="mx-auto text-secondary">
                  <Moment
                    unix={typeof value === "number"}
                    date={value}
                    fromNow
                  />
                </b>
              </ListGroupItem>
            )}
            <ListGroupItem className="p-1 d-flex justify-content-between align-items-center">
              <b>UTC</b>
              <span className="ml-4">{utcVal}</span>
            </ListGroupItem>
            <ListGroupItem className="p-1 d-flex justify-content-between align-items-center">
              <b>{userTz} · Your computer</b>
              <span className="ml-4">{userTzVal}</span>
            </ListGroupItem>
          </ListGroup>
        </PopoverBody>
      </UncontrolledPopover>
    </>
  );
}

MomentHoverable.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  className: PropTypes.string,
  showAgo: PropTypes.bool,
};

MomentHoverable.defaultProps = {
  className: undefined,
  showAgo: false,
};

export default React.memo(MomentHoverable);
