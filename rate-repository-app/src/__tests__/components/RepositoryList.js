import { RepositoryListContainer } from "../../components/RepositoryList";
import { render } from "@testing-library/react-native";
import { within } from "@testing-library/dom";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const { getByText, getAllByText, debug } = render(
        <RepositoryListContainer repositories={repositories} />
      );
      //debug();
      //const repositoryItems = getAllByTestId("repositoryItem");

      //   const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
      const repo1 = repositories.edges[0].node;
      const repo2 = repositories.edges[1].node;

      const threes = getAllByText("3");
      expect(threes.length).toEqual(2);

      expect(getByText(repo1.fullName)).toBeDefined();
      expect(getByText(repo1.description)).toBeDefined();
      expect(getByText(repo1.language)).toBeDefined();
      expect(getByText("1.6k")).toBeDefined();
      expect(getByText("21.9k")).toBeDefined();
      expect(getByText("88")).toBeDefined();
      //expect(getByText("3")).toContain();

      expect(getByText(repo2.fullName)).toBeDefined();
      expect(getByText(repo2.description)).toBeDefined();
      expect(getByText(repo2.language)).toBeDefined();
      expect(getByText("69")).toBeDefined();
      expect(getByText("1.8k")).toBeDefined();
      expect(getByText("72")).toBeDefined();
    });
  });
});
