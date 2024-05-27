import React from 'react'

export const NavItem = ({text}) => {
  return (
    <li key={text}>
        {text}
    </li>
  )
}
