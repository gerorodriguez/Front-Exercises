import React from 'react'
import FamilyMember from './FamilyMember'

const Family = ({persons}) => {
    const familyFiltered = persons.sort((a,b) => b.age - a.age)
    .map ((person) => <FamilyMember name={person.name} age={person.age} />)
  return (
    <div>{familyFiltered}</div>
  )
}

export default Family