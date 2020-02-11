
import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService'
class ListCourses extends Component {

    constructor(props) {
        super(props)
        this.state = { courses: [], message: null, coursename: "", counter: 0 }
        this.getCoursesByName = this.getCoursesByName.bind(this)
        this.getAllCourses = this.getAllCourses.bind(this)
        // this.getInputValue = this.getInputValue.bind(this)
    }

    /**
     * work after render direct
     */
    componentDidMount() {
        //  this.refreshCourses();
    }
    /**
     * get all courses that mathc defined name bind to input change
     */
    getCoursesByName() {
        CourseDataService.findCourseByName(this.state.coursename)
            .then(response => {
                console.log(response);
                this.setState({ courses: response.data })
            })
    }
    /**
     * get all courses from rest service bind to button
     */
    getAllCourses() {
        CourseDataService.findAllCoursesWithGet()
            .then(response => {
                console.log(response);
                this.setState({ courses: response.data })
            })
    }
    /**
     * it pass course input value (i.e name) to coursename and check
     * if passed name empty or have value 
     * @param {*} text 
     */
    updateInputValue(text) {
        this.setState({
            coursename: text
        }, () => {
            if (this.state.coursename.length > 0) {
                this.getCoursesByName();
            }
        });
    }
    render() {
        return (
            <div className="container">
                <div className="mt-3">
                    <div className="jumbotron">
                        <h3>All Courses</h3>
                        <div className="pagination">
                            <input type="text" onChange={text => this.updateInputValue(text.target.value)} value={this.state.coursename} className="form-control col-sm-3" placeholder="course name real search"></input>
                            <button className="btn btn-success col-sm-3" onClick={this.getAllCourses}>get all</button>
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                                course =>
                                    <tr key={course.id}>
                                        <td className>{course.id}</td>
                                        <td>{course.username}</td>
                                        <td>{course.description}</td>
                                    </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}




export default ListCourses
