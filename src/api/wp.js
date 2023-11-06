import { flatListToHierarchical } from '../utils/utils.js'

export async function sendWPRequest({ query, variables }) {
    // // console.log query, variables in Shopify Request', query, variables)
    const result = await fetch('https://wp.spacebox.digital/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    })

    // console.log('result in sendWPRequest', result)

    if (!result.ok) {
        console.error('error with WPGraphQL request', result)
        return false
    }

    const { data } = await result.json()

    console.log('data in sendWPRequest', data)

    return data
}

export async function getNodeByUri(uri) {
    // console.log('uri', uri, typeof uri)
    const data = await sendWPRequest({
        query: `
        query GetNodeByUri($uri: String!) {
            nodeByUri(uri: $uri) {
              __typename
              ...on Page {
                id
                modules {
                  layouts {
                    __typename
                  }
                }
              }
            }
        }`,
        variables: { uri },
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve node',
            }),
        }
    }

    return {
        statusCode: 200,
        data: data.nodeByUri,
    }
}

export async function getSiteSettings() {
    const data = await sendWPRequest({
        query: `
        {
            generalSettings {
                title
                description
                url
            }
        }
      `,
        variables: {},
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve site settings',
            }),
        }
    }

    return {
        statusCode: 200,
        data: data.generalSettings,
    }
}



export async function getMainMenu() {
    const data = await sendWPRequest({
        query: `
        {
            menuItems(where: {location: MAIN_NAV}) {
              nodes {
                key: id
                parentId
                title: label
                url
                uri
                label
                path
                childItems(first:50) {
                  edges {
                    node {
                      id
                      title
                      url
                      uri
                      label
                      path

                    }
                  }
                }
              }
            }
          }
            `,
        variables: {},
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve main menu',
            }),
        }
    }


    return {
        statusCode: 200,
        data: data.menuItems.nodes,
    }
}

export async function getMenuByName(id) {
    const data = await sendWPRequest({
        query: `
        query GET_MENU_BY_NAME ($id: ID!) {
            menu(id: $id, idType: NAME) {
              count
              id
              databaseId
              name
              slug
              menuItems(first: 50) {
                nodes {
                  id
                  databaseId
                  title
                  url
                  cssClasses
                  description
                  label
                  linkRelationship
                  target
                  parentId
                }
              }
            }
          }
            `,
        variables: { id },
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve menu',
            }),
        }
    }


    return {
        statusCode: 200,
        data: data.menu.menuItems.nodes
    }
}

export async function getPageModule(id, fragment) {
    const data = await sendWPRequest({
        query: `
        query GetPageById($id: ID!){
            page(id: $id) {
              id
              slug
              status
              isFrontPage
              uri
              title
              featuredImage {
                node {
                  altText
                  id
                  sourceUrl
                  title
                }
              }
              modules {
                __typename
                layouts {
                  __typename
                    ${fragment}
                }
              }
            }
          }
        `,
        variables: { id },
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve pageData',
            }),
        }
    }

    // console.log('data in getPage', data)

    return {
        statusCode: 200,
        data: data.page,
    }
}

export async function getPageLayouts(id, fragments) {
    const data = await sendWPRequest({
        query: `
        query GetPageById($id: ID!){
            page(id: $id) {
              id
              slug
              status
              isFrontPage
              uri
              title
              featuredImage {
                node {
                  altText
                  id
                  sourceUrl
                  title
                }
              }
              modules {
                __typename
                layouts {
                  __typename
                    ${fragments}
                }
              }
            }
          }
        `,
        variables: { id },
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve pageData',
            }),
        }
    }

    // console.log('data in getPage', data)

    return {
        statusCode: 200,
        data: data.page,
    }
}

export async function getLayoutsByUri(uri, fragments) {
    // console.log('uri', uri, typeof uri)
    const data = await sendWPRequest({
        query: `
        query GetNodeByUri($uri: String!) {
            nodeByUri(uri: $uri) {
              __typename
              ...on Page {
                databaseId
                id
                slug
                status
                isFrontPage
                uri
                title
                featuredImage {
                  node {
                    altText
                    id
                    sourceUrl
                    title
                  }
                }
                modules {
                  __typename
                  layouts {
                    __typename
                      ${fragments}
                  }
                }

              }
              ... on Post {
                databaseId
                id
                slug
                status
                date
                uri
                title
                featuredImage {
                  node {
                    altText
                    id
                    sourceUrl
                    title
                  }
                }
                modules {
                  __typename
                  layouts {
                    __typename
                      ${fragments}
                  }
                }
            }
            }
        }`,
        variables: { uri },
    })

    if (!data) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Could not retrieve node',
            }),
        }
    }

    return {
        statusCode: 200,
        data: data.nodeByUri,
    }
}
