import React from 'react'

const PROJECTS = [
  {
    title: 'Pricing',
    description: 'Pricing section with 3 plans',
    url: 'https://zdahmed93.github.io/pricing-22-06/',
    githubId: 'pricing'
  },
  {
    title: 'Business Land',
    description: 'Web page developed with only HTML and CSS',
    url: 'https://zdahmed93.github.io/business-land-22-06/',
    githubId: 'business-land'
  }
]

function Projects() {
  return (
    <div>
      {PROJECTS.map(item => (
        <div key={item.githubId} style={{border: 'solid 1px black', margin: 10, padding: 10}} >
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <a href={item.url} target='_blank'>Preview</a>
          <h6>{item.githubId}</h6>
        </div>
      ))}
    </div>
  )
}

export default Projects