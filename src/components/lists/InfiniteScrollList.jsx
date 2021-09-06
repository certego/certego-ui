import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Col,
  ListGroup,
  ListGroupItem,
  Fade,
  Spinner,
  Input
} from "reactstrap";

import useFuzzySearch from "../../hooks/useFuzzySearch";

// constants
const SCROLL_STEP = 10;

// Component
function InfiniteScrollList(props) {
  // props
  const {
    data,
    showSearch,
    searchableKeys,
    renderListItem,
    genListKeyProp,
    ...rest
  } = props;

  // memo
  const keys = React.useMemo(
    () =>
      searchableKeys?.length
        ? searchableKeys
        : Object.keys(data?.length ? data[0] : {}),
    [searchableKeys, data]
  );

  // custom hook
  const [searchInput, onInputChange, items] = useFuzzySearch({
    dataList: data,
    searchableKeys: keys,
  });

  // state
  const [state, setState] = React.useState({
    index: SCROLL_STEP,
    hasMore: SCROLL_STEP < data.length,
  });

  // callbacks
  const fetchMoreData = React.useCallback(() => {
    // load SCROLL_STEP number more list items
    setTimeout(() => {
      setState(({ index, }) => ({
        index: index + SCROLL_STEP,
        hasMore: index < data.length,
      }));
    }, 150);
  }, [data.length, setState]);

  return (
    <Fade in timeout={200} {...rest}>
      {/* FIXME use infinite scroll list */}
      <ListGroup>
        <InfiniteScroll
          dataLength={state.index}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<Spinner className="d-block mx-auto my-2" />}
          endMessage={
            items?.length && items.length > SCROLL_STEP * 2 ? (
              <p className="font-weight-bold text-info text-center">
                Oof! scrolled a lot, didn't you? Nothing more to see here.
                &#x1F440;
              </p>
            ) : (
              ""
            )
          }
        >
          {/* Search Input */}
          {showSearch && data?.length > 5 && (
            <Col className="d-flex align-items-center justify-content-end my-3">
              <Col md={3}>
                <Input
                  name="search-input"
                  type="search"
                  value={searchInput}
                  className="form-control bg-darker rounded-0 border-dark text-info"
                  placeholder="Search keyword"
                  onChange={onInputChange}
                />
              </Col>
            </Col>
          )}
          {/* List Items */}
          {items?.length ? (
            items
              .slice(0, state.index)
              .map((obj) => (
                <ListGroupItem key={`infinitelist__${genListKeyProp(obj)}`}>
                  {renderListItem(obj)}
                </ListGroupItem>
              ))
          ) : (
            <h2 className="text-center">No Data</h2>
          )}
        </InfiniteScroll>
      </ListGroup>
    </Fade>
  );
}

InfiniteScrollList.propTypes = {
  data: PropTypes.array.isRequired,
  showSearch: PropTypes.bool,
  searchableKeys: PropTypes.array,
  renderListItem: PropTypes.func.isRequired,
  genListKeyProp: PropTypes.func.isRequired,
};

InfiniteScrollList.defaultProps = {
  showSearch: true,
  searchableKeys: [],
};

export default React.memo(InfiniteScrollList);
