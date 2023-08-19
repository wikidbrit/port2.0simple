import { useEffect, useState } from 'react';

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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: 'Bearer g5t46S71zrX4Y63FfKqfW7lZYn-OMjb3zqc6UxKmO-k',
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
    return 'loading';
  }

  return { data };
};
export default useGetSlugContent;
