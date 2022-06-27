
import React from "react";
import PropTypes from "prop-types";
import { RiArrowUpSLine } from "react-icons/ri";
import { Button } from "reactstrap";

export default function ScrollToTopButton(props) {
  // props
  const { defaultVisible, scrollYOffset, ...rest } = props;

  // local state
  const [isVisible, setIsVisible] = React.useState(defaultVisible);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = React.useCallback(
    () =>
      window.pageYOffset > scrollYOffset
        ? setIsVisible(true)
        : setIsVisible(false),
    [scrollYOffset, setIsVisible]
  );

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  return (
    <div id="ScrollToTopButton" {...rest}>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          color="accent-1"
          size="md"
          className="rounded-circle"
        >
          <RiArrowUpSLine />
        </Button>
      )}
    </div>
  );
}

ScrollToTopButton.propTypes = {
  defaultVisible: PropTypes.bool,
  scrollYOffset: PropTypes.number,
};

ScrollToTopButton.defaultProps = {
  defaultVisible: false,
  scrollYOffset: 300,
};
