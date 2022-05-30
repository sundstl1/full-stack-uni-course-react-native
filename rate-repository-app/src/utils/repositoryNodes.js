export const repositoryNodes = (repositories) => {
  return repositories ? repositories.edges.map((edge) => edge.node) : [];
};
