/* global window */

import React from "react";
import { MdArrowUpward } from "react-icons/md";
import { Button } from "reactstrap";

// constants
const SCROLL_Y_OFFSET = 300;

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button when page is scrolled upto given distance
  const toggleVisibility = React.useCallback(
    () =>
      window.pageYOffset > SCROLL_Y_OFFSET
        ? setIsVisible(true)
        : setIsVisible(false),
    [setIsVisible],
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
  }, []);

  return (
    <div id="ScrollToTopButton">
      {isVisible && (
        <Button onClick={scrollToTop} color="accent-1" size="md">
          <MdArrowUpward />
        </Button>
      )}
    </div>
  );
}
