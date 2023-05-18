import React from 'react'

const FamilyMember = ({age, name}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{age}</p>
    </div>
  )
}

export default FamilyMember