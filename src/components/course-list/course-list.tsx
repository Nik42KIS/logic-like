import { TypeCourse } from '../../types';
import { Course } from '../course-item/course-item';

export const CourseList = ({ courseList }: { courseList: TypeCourse[] }) => {
  return (
    <ul>
      {courseList?.map((course: TypeCourse) => {
        return (
          <Course name={course.name} id={course.id} image={course.image} bgColor={course.bgColor} tags={course.tags}/>
        );
      })}
    </ul>
  );
};
