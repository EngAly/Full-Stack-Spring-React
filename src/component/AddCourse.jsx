
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
        this.state = { name: "", desc: "" };
        this.saveCourse = this.saveCourse.bind(this);
    }

    /**
     * work after render direct
     */
    componentDidMount() {
        // this.refreshCourses();
    }
    refreshCourses() {
        CourseDataService.addNewCourse(this.state.name, this.state.desc)
            .then(response => {
                console.log(response);
                alert("saved successfully");
                this.setState({ name: '' })
                this.setState({ desc: '' })
            })
    }
    // get name input value
    updateName(text) {
        this.setState({
            name: text
        });
    }
    // get desc input value
    updateDesc(text) {
        this.setState({
            desc: text
        });
    }
    // save course details to database
    saveCourse() {
        if (this.state.name.length > 4 && this.state.name.length < 16 && this.state.desc.length > 0) {
            this.refreshCourses();
        } else {
            alert("please sure name min=5 and max=15 and desc field is full");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="pagination-vertical pagination-lg jumbotron text-center">
                    <h1>add new course</h1>
                    <input value={this.state.name} onChange={text => this.updateName(text.target.value)} className="mt-1 form-control" type="text" placeholder="instructor name"></input>
                    <input value={this.state.desc} onChange={text => this.updateDesc(text.target.value)} className="mt-1 form-control" type="text" placeholder="course description"></input>
                    <button onClick={this.saveCourse} className="btn btn-primary btn-lg mt-3">saveCourse</button>
                </div>
            </div>
        )
    }
}
// ReactDOM.render(AddCourse, document.getElementById('addcourse'));
export default AddCourse
