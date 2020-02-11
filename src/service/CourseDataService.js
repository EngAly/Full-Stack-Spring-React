import axios from 'axios'

// note that you can inject url in each method but we shortcut it and 
// pass it as variable to ease modifiy it once
var domain = "http://localhost:8080";
class CourseDataService {
    /**
     * get all courses from spring rest using get method using axious
     */
    findAllCoursesWithGet() {
        return axios.get(`${domain}/getcourses`);

    }
    /**
     * get all courses using post method from spring rest using axious
     */
    findAllCoursesWithPost() {
        return axios.post(`${domain}/postcourses`);
    }

    /**
     * get specific course with its id
     */
    findCourseById(id) {
        return axios.get(`${domain}/getbyid/${id}`);
    }

    findCourseByName(name) {
        return axios.get(`${domain}/getbyname/${name}`);
    }
    /**
     * will pass data to this method to arrive it to spring 
     * note here we use post method so that url dont support it 
     * you can call it direct but here we need to pass data to spring 
     * so that we will send data in body as a request
     * @param {*} name 
     * @param {*} desc 
     */
    addNewCourse(name, desc) {
        return axios.post(`${domain}/addcourse`, {
            "username": name,
            "description": desc
        });
    }
    /**
     * delete course by its id 
     * you must pass valid id to remove course bind with this id
     * @param {id} id 
     */
    deleteCourseById(id) {
        return axios.delete(`${domain}/deletecourse/${id}`);
    }

    updateCourse(id, name, desc) {
        return axios.put(`${domain}/updatecourse`, {
            "id": id,
            "username": name,
            "description": desc
        });
    }
}

export default new CourseDataService()