import React from 'react'
import Person from './Person'

const Persons = ({personNames}) => {
    const filteredNames = personNames
    .filter((person) => person.toUpperCase().startsWith('P'))
    .map((person) => <Person name={person} />)

  return (
    <div>{filteredNames}</div>
  )
}

export default Persons