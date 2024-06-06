
import { TypeCourse } from '../../types'
import s from './course-item.module.css'
export const Course = ({name,id,image,bgColor}:TypeCourse) => {
  return (
    <li className={s.item} key={id} style={{backgroundColor:bgColor}}>
      <img className={s.img} src={image} alt="" />  
      <div className={s.name}>{name}</div>
    </li>
  )
}
