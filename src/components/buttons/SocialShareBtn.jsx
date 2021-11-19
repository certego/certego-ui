import React from "react";
import PropTypes from "prop-types";
import { Button, UncontrolledPopover, PopoverBody } from "reactstrap";
import { ShareButtonIconOnly, ShareBlockStandard } from "react-custom-share";
import {
  FaLink,
  FaTwitter,
  FaFacebook,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";
import { MdShare } from "react-icons/md";

import CopyToClipboardButton from "./CopyToClipboardButton";

export default function SocialShareBtn({
  id,
  url,
  btnProps,
  popoverTrigger,
  popoverPlacement,
  ...shareProps
}) {
  const shareBlockProps = {
    button: ShareButtonIconOnly,
    buttons: [
      { network: "Twitter", icon: FaTwitter, },
      { network: "Facebook", icon: FaFacebook, },
      {
        network: "Linkedin",
        icon: FaLinkedin,
        link: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      },
      { network: "Email", icon: FaEnvelope, },
    ],
    url,
    ...shareProps,
  };

  return (
    <div>
      <Button
        id={`${id}-socialbtn`}
        className="ml-2"
        size="sm"
        color="accent-2"
        {...btnProps}
      >
        <MdShare />
        &nbsp; Share
      </Button>
      <UncontrolledPopover
        target={`${id}-socialbtn`}
        trigger={popoverTrigger}
        placement={popoverPlacement}
      >
        <PopoverBody className="d-flex-center bg-darker border border-accent-2 rounded">
          <ShareBlockStandard {...shareBlockProps} />
          <CopyToClipboardButton id={`${id}-copybtn`} text={url}>
            <FaLink className="ml-3 mr-4 text-large text-secondary" />
          </CopyToClipboardButton>
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

SocialShareBtn.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  btnProps: PropTypes.object,
  popoverTrigger: PropTypes.string,
  popoverPlacement: PropTypes.string,
};

SocialShareBtn.defaultProps = {
  btnProps: null,
  popoverTrigger: "hover",
  popoverPlacement: "bottom-end",
};
