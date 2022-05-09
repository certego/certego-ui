import React from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledPopover, PopoverBody } from "reactstrap";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FaLink } from "react-icons/fa";
import { MdShare } from "react-icons/md";
import CopyToClipboardButton from "./CopyToClipboardButton";


export default function SocialShareBtn({
  id,
  url,
  onlyIcon,
  btnProps,
  popoverTrigger,
  popoverPlacement,
  ...shareProps
}) {

  return (
    <div>
      <Button
        id={`${id}-socialbtn`}
        className="ms-2"
        size="sm"
        color="accent-2"
        {...btnProps}
      >
        <MdShare />
        {!onlyIcon && <>&nbsp;Share</>}
      </Button>
      <UncontrolledPopover
        target={`${id}-socialbtn`}
        trigger={popoverTrigger}
        placement={popoverPlacement}
      >
        <PopoverBody className="d-flex-center bg-darker border border-accent-2 rounded">
          <TwitterShareButton url={url} {...shareProps} />
          <FacebookShareButton url={url} {...shareProps} />
          <LinkedinShareButton url={url} {...shareProps} />
          <EmailShareButton url={url} {...shareProps} />
          <CopyToClipboardButton id={`${id}-copybtn`} text={url}>
            <FaLink className="ms-3 me-4 text-large text-secondary" />
          </CopyToClipboardButton>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

SocialShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onlyIcon: PropTypes.bool,
  btnProps: PropTypes.object,
  popoverTrigger: PropTypes.string,
  popoverPlacement: PropTypes.string,
};

SocialShareBtn.defaultProps = {
  onlyIcon: false,
  btnProps: null,
  popoverTrigger: "hover",
  popoverPlacement: "bottom-end",
};
