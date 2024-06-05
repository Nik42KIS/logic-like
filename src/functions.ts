import { TypeCourse } from './types';


export const fetchData = () =>{
    const data = fetch('https://logiclike.com/docs/courses.json')
      .then((res) => res.json())
      .then((result) => result)
    return data
}

export const getTags = (arr: TypeCourse[] | undefined) => {
    
        const tagArr:string[] = []
        arr?.forEach((el:TypeCourse) => {
          el.tags.forEach((item:string) => {
            tagArr.indexOf(item) === -1 ? tagArr.push(item) : null
          })
        })
        return tagArr;
      
}