import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/nav-bar/nav-bar'
import { fetchData, filterCourses, getTags } from './functions'
import { TypeCourse } from './types';
import { CourseList } from './components/course-list/course-list';
function App() {

  const [tagList, setTagList] = useState<string[]>();
  const [courseList, setCourseList] = useState<TypeCourse[]>();
  const [active, setActive] = useState<string>('Все темы')
  useEffect(() => {
    fetchData()
    .then((res:TypeCourse[]) => {
      setCourseList(filterCourses(res,active))
      setTagList(getTags(res))
    })
    
  }, [active]);

  return (
    <>
     <main>
      <NavBar active={active} setActive={setActive} tagList={tagList}/>
      <CourseList courseList={courseList}/>
     </main>
    </>
  )
}

export default App
