import React from 'react';
import './App.css';
import CourseApp from './component/CourseApp'
import AddCourse from './component/AddCourse'
import DeleteCourse from './component/DeleteCourse'
import UpdateCourse from './component/UpdateCourse'


function App() {
  return (
    <div className="container">
      <CourseApp />
      <AddCourse />
      <DeleteCourse />
      <UpdateCourse />
    </div>
  );
}
export default App;

