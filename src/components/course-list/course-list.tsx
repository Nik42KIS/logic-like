import { TypeCourse } from '../../types';
import { Course } from '../course-item/course-item';
import s from './course-list.module.css'

export const CourseList = ({ courseList }: { courseList: TypeCourse[] }) => {
  return (
    <ul className={s.list}>
      {courseList?.map((course: TypeCourse) => {
        return (
          <Course name={course.name} id={course.id} image={course.image} bgColor={course.bgColor} tags={course.tags}/>
        );
      })}
    </ul>
  );
};
