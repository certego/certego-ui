import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";
import { IoInfinite } from "react-icons/io5";
import { sub } from "date-fns";

// constants
const INFINITY = "inf";
const TIME_INTERVALS = {
  "6h": {hours: 6,},
  "24h": {hours: 24,},
  "7d": {days: 7,},
  "3M": {months: 3,},
  "6M": {months: 6,},
  "2Y": {years: 2,},
};

function intervalToTime(ti) {
  const fromTime = sub(new Date(), TIME_INTERVALS[ti]);
  fromTime.setMinutes(0);
  fromTime.setSeconds(0);
  fromTime.setMilliseconds(0);
  return fromTime.toISOString();
}

/**
 * @type {component}
 * @param props
 * @example
 *
 * ```js
 *   <ElasticTimePicker
 *       size="sm"
 *       onChoose={(ti) => console.log(ti)}
 *   />
 * ```
 */
function ElasticTimePicker(props) {
  const { onChange, size, defaultSelected, intervals, showInfinity, ...rest } =
    props;

  // state
  const [selected, setSelected] = React.useState(defaultSelected);

  // callbacks
  const onClick = React.useCallback(e =>
      setSelected(e.currentTarget.value),
    [setSelected]
  );

  // effects
  React.useEffect(() => {
    if (selected === INFINITY) {
      onChange(selected, null);
    } else {
      onChange(selected, intervalToTime(selected));
    }
  }, [onChange, selected]);

  return (
    <ButtonGroup size={size} {...rest}>
      {intervals.map((ti) => (
        <Button
          key={ti}
          className="fw-bold"
          color="secondary"
          value={ti}
          onClick={onClick}
          active={selected === ti}
        >
          {ti}
        </Button>
      ))}
      {showInfinity && (
        <Button
          className="fw-bold"
          color="secondary"
          value={INFINITY}
          onClick={onClick}
          active={selected === INFINITY}
        >
          <IoInfinite />
        </Button>
      )}
    </ButtonGroup>
  );
}

ElasticTimePicker.defaultProps = {
  size: "sm",
  defaultSelected: "24h",
  intervals: Object.keys(TIME_INTERVALS),
  showInfinity: false,
};

ElasticTimePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultSelected: PropTypes.string,
  size: PropTypes.string,
  intervals: PropTypes.arrayOf(PropTypes.string),
  showInfinity: PropTypes.bool,
};

export default ElasticTimePicker;
