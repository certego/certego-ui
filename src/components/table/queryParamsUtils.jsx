/* This functions are used to serialize and deserialize URL params, to values for ordering and filter

Data in tables about filter and ordering are saved as object, but in the url is a string.
These funcitions helps to convert from obj to string and vice versa
*/

/**
 * @argument {Array<Object>} filters
 * @return {Object}
 */
const serializeFilterParams = (filters) => 
  filters.reduce(
    // id and value connot be changed, are requested with this name in the lib
    (acc, { id, value, }) => ({ ...acc, [id]: value, }),
    {}
  );

/**
 * @argument {Object} filters
 * @return {Array<Object>}
 */
const deserializeFilterParams = (filters) =>
  Array.from(
    Object.entries(filters).map(([filterName, filterValue]) => ({
      id: filterName,
      value: filterValue,
    }))
  );

/**
 * @argument {Array<Object>} sortBy
 * @return {String}
 */
const serializeSortByParams = (sortBy) =>
  sortBy
    // id and desc connot be changed, are requested with this name in the lib
    .map(({ id, desc, }) => `${desc ? "-" : ""}${id.split("-")[0]}`)
    .join(",");

/**
 * @argument {String} filters
 * @return {Array<Object>}
 */
const deserializeSortByParams = (sortByStr) => ({
  id: sortByStr.charAt(0) === "-" ? sortByStr.slice(1) : sortByStr,
  desc: sortByStr.charAt(0) === "-",
});

export {
  serializeFilterParams,
  deserializeFilterParams,
  serializeSortByParams,
  deserializeSortByParams
};
