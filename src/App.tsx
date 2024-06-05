import { useEffect, useState } from 'react'
import './App.css'
import { NavBar } from './components/nav-bar/nav-bar'
import { fetchData, getTags } from './functions'
import { TypeCourse } from './types';
import { CourseList } from './components/course-list/course-list';
function App() {

  const [tagList, setTagList] = useState<string[]>();
  const [courseList, setCourseList] = useState<TypeCourse[]>();

  useEffect(() => {
    fetchData()
    .then((res:TypeCourse[]) => {
      setCourseList(res)
      setTagList(getTags(res))
    })
    
  }, []);

  return (
    <>
     <main>
      <NavBar tagList={tagList}/>
      <CourseList courseList={courseList}/>
     </main>
    </>
  )
}

export default App
