import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'graphql'

const BlogPage = ({ data}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allFile.nodes.map(node =>{
          return(
            <li key={node.name}>
              {node.name}
            </li>
          )
        })
      }
      <p>My cool posts will go in here</p>
    </Layout>
  )
}

export default BlogPage
export const query = graphql`
  query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`
