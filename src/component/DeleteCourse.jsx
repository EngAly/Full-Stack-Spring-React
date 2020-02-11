
import React, { Component } from 'react';

import CourseDataService from '../service/CourseDataService'


/**
 * class is used to add course to data in spring boot
 * 1) make ui to handle data from client 
 * 2) use axious to make api to open channel between react and spring
 */
class AddCourse extends Component {

    constructor(props) {
        super(props)
        this.state = { id: "" };
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    /**
     * work after render direct
     */
    componentDidMount() {
        // this.refreshCourses();
    }
    commitDeleteCourse() {
        CourseDataService.deleteCourseById(this.state.id)
            .then(response => {
                console.log(response);
                this.setState({ id: '' })
                alert("course deleted  successfully");
            })
    }
    // get id input value
    updateId(text) {
        this.setState({
            id: text
        });
    }
    // save course details to database
    deleteCourse() {
        if (this.state.id.length > 0) {
            this.commitDeleteCourse();
        } else {
            alert("please sure that field is full");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="pagination-vertical pagination-lg jumbotron text-center">
                    <h1>delete course</h1>
                    <input value={this.state.id} onChange={text => this.updateId(text.target.value)} className="mt-1 form-control" type="number" placeholder="course id"></input>
                    <button onClick={this.deleteCourse} className="btn btn-primary btn-lg mt-3">deleteCourse</button>
                </div>
            </div>
        )
    }
}
export default AddCourse
