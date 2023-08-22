import { useEffect, useState } from "react";

const useGetSlugContent = ({ slug }) => {
  const [data, setData] = useState(null);

  const query = `
  {
    portfolioCollection(where: {slug: "${slug}"}) {
      items {
        title
        subtext
        coverimage{
          url
        }
        openingText
        contentImageCollection{
          items{
            url
          }
        }
        conclusion
        slug
      }
    }
  }
  `;

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/qatwxfj3hbc4/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_API_KEY}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setData(data.portfolioCollection.items);
      });
  }, [query]);

  if (!data) {
    return "loading";
  }

  return { data };
};
export default useGetSlugContent;
