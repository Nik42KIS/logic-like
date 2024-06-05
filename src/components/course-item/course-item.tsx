
import { TypeCourse } from '../../types'

export const Course = ({name,id,image,bgColor}:TypeCourse) => {
  return (
    <li key={id} style={{backgroundColor:bgColor}}>
      <img src={image} alt="" />  
      <div>{name}</div>
    </li>
  )
}
