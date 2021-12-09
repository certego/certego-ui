import React from "react";
import PropTypes from "prop-types";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

const railOuterStyle = {
  position: "absolute",
  width: "100%",
  transform: "translate(0%, -50%)",
  cursor: "pointer",
};
const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: 10,
  transform: "translate(0%, -50%)",
  pointerEvents: "none",
  backgroundColor: "var(--darker)",
  border: "1px solid  var(--dark)",
};
const sliderStyle = {
  position: "relative",
  width: "100%",
};

export default function MultiRangeSlider({
  domain,
  defaultValues,
  disabled,
  onChange,
}) {
  const [min, max] = domain;
  const ticksCount = (max - min) % 5;

  return (
    <Slider
      mode={2}
      step={1}
      rootStyle={sliderStyle}
      domain={domain}
      values={defaultValues}
      onChange={onChange}
    >
      <Rail>
        {({ getRailProps, }) => (
          <>
            <div style={railOuterStyle} {...getRailProps()} />
            <div style={railInnerStyle} />
          </>
        )}
      </Rail>
      <Handles>
        {({ handles, getHandleProps, }) => (
          <div className="slider-handles">
            {handles.map(({ id, value, percent, }) => (
              <div
                key={id}
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                title={value}
                style={{
                  left: `${percent}%`,
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                  WebkitTapHighlightColor: "rgba(0,0,0,0)",
                  cursor: "ew-resize",
                  zIndex: 5,
                  width: 15,
                  height: 15,
                  border: "1px solid var(--tertiary)",
                  borderRadius: 0,
                  backgroundColor: disabled ? "var(--gray)" : "var(--dark)",
                }}
                {...getHandleProps(id)}
              />
            ))}
          </div>
        )}
      </Handles>
      <Tracks left={false} right={false}>
        {({ tracks, getTrackProps, }) => (
          <div className="slider-tracks">
            {tracks.map(({ id, source, target, }) => (
              <div
                key={id}
                style={{
                  position: "absolute",
                  transform: "translate(0%, -50%)",
                  height: 5,
                  zIndex: 1,
                  backgroundColor: disabled
                    ? "var(--darker)"
                    : "var(--tertiary)",
                  cursor: "pointer",
                  left: `${source.percent}%`,
                  width: `${target.percent - source.percent}%`,
                }}
                {...getTrackProps(id)}
              />
            ))}
          </div>
        )}
      </Tracks>
      <Ticks count={ticksCount}>
        {({ ticks, }) => (
          <div className="slider-ticks">
            {ticks.map(({ id, length, value, percent, }) => (
              <div key={id}>
                <div
                  style={{
                    position: "absolute",
                    marginTop: 10,
                    width: 1,
                    height: 5,
                    backgroundColor: "rgb(200,200,200)",
                    left: `${percent}%`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    marginTop: 15,
                    fontSize: "xx-small",
                    textAlign: "center",
                    marginLeft: `${-(100 / length) / 2}%`,
                    width: `${100 / length}%`,
                    left: `${percent}%`,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        )}
      </Ticks>
    </Slider>
  );
}

MultiRangeSlider.propTypes = {
  domain: PropTypes.arrayOf(PropTypes.number).isRequired,
  defaultValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

MultiRangeSlider.defaultProps = {
  disabled: false,
};
