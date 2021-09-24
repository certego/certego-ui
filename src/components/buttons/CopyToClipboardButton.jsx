import React from "react";
import PropTypes from "prop-types";
import { Tooltip, UncontrolledTooltip } from "reactstrap";
import { HiClipboardCopy } from "react-icons/hi";

import useCopyToClipboard from "react-use/lib/useCopyToClipboard";

function CopyToClipboardButton(props) {
  // props
  const { id, text, children, tooltip, showOnHover, ...rest } = props;

  // local state
  const [copied, setCopied] = React.useState(false);

  const [, copyToClipboard] = useCopyToClipboard();

  // callbacks
  const onCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), tooltip?.timeout || 1000);
  };

  return (
    <>
      <span
        id={`copyBtn-${id}`}
        role="button"
        tabIndex={0}
        className="pointer"
        onClick={onCopy}
        onKeyPress={onCopy}
        {...rest}
      >
        {children || <HiClipboardCopy size="1.5em" />}
      </span>
      <Tooltip
        isOpen={copied}
        placement="top"
        target={`copyBtn-${id}`}
        trigger="click"
        innerClassName="bg-info text-darker"
        delay={{ show: 0, hide: 0, }}
      >
        {tooltip?.text || "Copied!"}
      </Tooltip>
      {showOnHover && (
        <UncontrolledTooltip target={`copyBtn-${id}`} trigger="hover">
          Click to copy
        </UncontrolledTooltip>
      )}
    </>
  );
}

CopyToClipboardButton.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
  tooltip: PropTypes.object,
  showOnHover: PropTypes.bool,
};

CopyToClipboardButton.defaultProps = {
  children: null,
  tooltip: null,
  showOnHover: false,
};

export default CopyToClipboardButton;
