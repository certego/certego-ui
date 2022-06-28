/**
 * @argument {String} id
 * @return {String}
 */
const deserializeKeyId = (id) =>
  // eslint-disable-next-line no-nested-ternary
  id.indexOf("weight") >= 0
    ? id.indexOf("__gte") >= 0
      ? id.replace("__gte", "-gte")
      : `${id}-gte`
    : id;

/**
 * @argument {Array<Object>} filters
 * @return {Object}
 */
const serializeFilterParams = (filters) =>
  filters.reduce(
    (acc, { id, value, }) => ({ ...acc, [`${id.replace("-", "__")}`]: value, }),
    {}
  );

/**
 * @argument {Object} filters
 * @return {Array<Object>}
 */
const deserializeFilterParams = (filters) =>
  Array.from(
    Object.entries(filters).map(([k, v]) => ({
      id: deserializeKeyId(k),
      value: v,
    }))
  );

/**
 * @argument {Array<Object>} sortBy
 * @return {String}
 */
const serializeSortByParams = (sortBy) =>
  sortBy
    .map(({ id, desc, }) => `${desc ? "-" : ""}${id.split("-")[0]}`)
    .join(",");

/**
 * @argument {String} filters
 * @return {Array<Object>}
 */
const deserializeSortByParams = (sortByStr) =>
  Array.from(
    sortByStr.split(",").map((str) => ({
      id: deserializeKeyId(str.charAt(0) === "-" ? str.slice(1) : str),
      desc: str.charAt(0) === "-",
    }))
  );

export {
  serializeFilterParams,
  deserializeFilterParams,
  serializeSortByParams,
  deserializeSortByParams
};
