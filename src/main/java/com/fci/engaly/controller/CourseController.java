package com.fci.engaly.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fci.engaly.model.Course;
import com.fci.engaly.service.CourseService;

@CrossOrigin(origins = { "http://fci:3000", "http://127.0.0.1:4200" })
// @CrossOrigin(origins = "*")
@RestController
public class CourseController {

	@Autowired
	private CourseService courseServ;

	@GetMapping("/getcourses")
	public List<Course> getAllCourses() {
		return courseServ.findAll();
	}

	@RequestMapping(value = "/postcourses", method = RequestMethod.POST)
	public List<Course> postAllCourses() {
		return courseServ.findAll();
	}

	@RequestMapping(value = "/getbyid/{id}", method = RequestMethod.GET)
	public List<Course> getOneCourse(@PathVariable("id") int id) {
		return courseServ.findById(id);
	}

	@RequestMapping(value = "/getbyname/{name}", method = RequestMethod.GET)
	public List<Course> getCourseByName(@PathVariable("name") String name) {
		return courseServ.findByName(name);
	}

	@RequestMapping(value = "/addcourse", method = RequestMethod.POST)
	public String createCourse(@Valid @RequestBody Course course) {
		if (courseServ.createCourse(course)) {
			return "<h1>successful insertion</h1>";
		}
		return "<h1>error in insertion</h1>";
	}

	@RequestMapping(value = "/deletecourse/{id}", method = RequestMethod.DELETE)
	public String deleteCourse(@PathVariable("id") int id) {
		courseServ.deleteCourse(id);
		return "<h1>delete successfully</h1>";
	}

	@RequestMapping(value = "/updatecourse", method = RequestMethod.PUT)
	public String updateCourse(@Valid @RequestBody Course course) {
		courseServ.updateCourse(course);
		return "<h1>updated successfully</h1>";
	}

}
