import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SkillDetails() {
  const params = useParams()
  console.log(params)
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState(null)
  useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((response) => { setSkills(response.data) })
      .catch((error) => { console.log(error) })
  }, [])
  useEffect(() => {
    const foundSkill = skills.find(item => item.id === params.id)
    console.log(foundSkill)
    setSkill(foundSkill)
  }, [skills])
  return (
    <div>
      {skill ? (
      <div style={{textAlign: 'center'}} >
        <h1> {skill.name} </h1>
        <img src={skill.image} width="200px" alt={skill.name} />
        <p> {skill.description} </p>
      </div>
      ) : (<h2>Skill not found</h2>)}
    </div>
  )
}

export default SkillDetails