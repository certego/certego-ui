import React from "react";
import PropTypes from "prop-types";
import { Button, ButtonGroup } from "reactstrap";
import moment from "moment";
import { IoInfinite } from "react-icons/io5";

// constants
const INFINITY = "inf";
const TIME_INTERVALS = ["6h", "24h", "7d", "1M", "3M"];
const INTERVAL_TO_VAL = /(?<value>\d+)(?<unit>\w)/;

function intervalToTime(ti) {
  const match = INTERVAL_TO_VAL.exec(ti);
  const fromTime = moment().subtract(+match.groups.value, match.groups.unit);
  return fromTime.minutes(0).seconds(0).milliseconds(0).toISOString();
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
  /**
   * @param {event} e
   */
  const onClick = React.useCallback(
    (e) => setSelected(e.currentTarget.value),
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
          className="font-weight-bold"
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
          className="font-weight-bold"
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
  intervals: TIME_INTERVALS.slice(),
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
