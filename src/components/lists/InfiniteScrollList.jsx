import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Row,
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
export default function InfiniteScrollList(props) {
  // props
  const {
    data,
    showSearch,
    searchableKeys,
    renderListItem,
    genListKeyProp,
    children,
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
  }, [data, setState]);

  return (
    <Fade in timeout={200} {...rest}>
      <ListGroup>
        <InfiniteScroll
          dataLength={state.index}
          next={fetchMoreData}
          hasMore={state.hasMore}
          loader={<Spinner className="d-block mx-auto my-2" />}
          endMessage={
            items?.length && items.length > SCROLL_STEP * 2 ? (
              <p className="fw-bold text-info text-center">
                Oof! scrolled a lot, didn&apos;t you? Nothing more to see here.
                &#x1F440;
              </p>
            ) : (
              ""
            )
          }
        >
          {/* Extra Actions */}
          <Row className="m-3">
            {/* Children */}
            <Col>{children}</Col>
            {/* Search Input */}
            <Col sm={6} md={3}>
              {showSearch && data?.length > 5 &&
                <Input
                  id="infinitescrolllist-search-input"
                  type="search"
                  name="search-input"
                  value={searchInput}
                  className="input-dark"
                  placeholder="Search keyword..."
                  onChange={onInputChange}
                />
              }
            </Col>
          </Row>
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
  children: PropTypes.node,
};

InfiniteScrollList.defaultProps = {
  showSearch: true,
  searchableKeys: [],
  children: null,
};
