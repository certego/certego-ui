import React from "react";
import PropTypes from "prop-types";
import LoadingBar from "react-top-loading-bar";

export default function AxiosLoadingBar({ axiosInstance, color, ...rest }) {
  // ref
  const ref = React.useRef(null);

  React.useEffect(() => {
    // Add a request interceptor
    axiosInstance.interceptors.request.use(
      (config) => {
        if (ref?.current && config.certegoUIenableProgressBar)
          ref.current.continuousStart();
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        if (ref?.current && response.config.certegoUIenableProgressBar)
          ref.current.complete();
        return response;
      },
      (error) => {
        if (ref?.current && error.response.config.certegoUIenableProgressBar)
          ref.current.complete();
        return Promise.reject(error);
      }
    );
  }, [axiosInstance]);

  return <LoadingBar shadow ref={ref} color={color} {...rest} />;
}

AxiosLoadingBar.propTypes = {
  axiosInstance: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
  color: PropTypes.string,
};

AxiosLoadingBar.defaultProps = {
  color: "#9441b7",
};
