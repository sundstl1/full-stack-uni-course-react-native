export const queryNodes = (query) => {
  return query ? query.edges.map((edge) => edge.node) : [];
};
