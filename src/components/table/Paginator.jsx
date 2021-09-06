import React from "react";
import PropTypes from "prop-types";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const INITIAL_SLICE = 5;

function Paginator(props) {
  const { pageOptions, onPaginate, pageIndex } = props;

  const numPages = pageOptions.length - 1;

  const [slice, setSlice] = React.useState(INITIAL_SLICE);

  const slices = [
    Math.max(pageIndex - INITIAL_SLICE, 0),
    Math.min(pageIndex + slice, pageOptions.length),
  ];

  return (
    <Pagination className="mt-3" aria-label="Data Table Pagination">
      {/* first */}
      {pageIndex !== 0 && (
        <PaginationItem>
          <PaginationLink first onClick={() => onPaginate(0)} />
        </PaginationItem>
      )}
      {/* nums */}
      {pageOptions.slice(...slices).map((i) => (
        <PaginationItem active={i === pageIndex} key={i}>
          <PaginationLink onClick={() => onPaginate(i)}>{i + 1}</PaginationLink>
        </PaginationItem>
      ))}
      {/* ellipses */}
      {slices[1] < numPages && (
        <PaginationItem
          title="load more"
          onClick={() => setSlice((s) => s + INITIAL_SLICE)}
        >
          <PaginationLink>...</PaginationLink>
        </PaginationItem>
      )}
      {/* last */}
      {pageIndex !== numPages && (
        <PaginationItem>
          <PaginationLink last onClick={() => onPaginate(numPages)} />
        </PaginationItem>
      )}
    </Pagination>
  );
}

Paginator.propTypes = {
  pageOptions: PropTypes.array.isRequired,
  pageIndex: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
};

export default React.memo(Paginator);
