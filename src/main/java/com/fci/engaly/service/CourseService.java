package com.fci.engaly.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;
import com.fci.engaly.model.Course;

@Service
public class CourseService {

	private static List<Course> courses = new ArrayList<>();

	/**
	 * init map with group of records to test about them you can use mongo
	 * database or JPA as you want to test about it. i concise the time with
	 * simple hard code to ease my work
	 */
	static {
		courses.add(new Course(1, "aly ahmed mohamed", "Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(2, "hossam ommara", "Learn Full stack with Spring Boot and React"));
		courses.add(new Course(3, "mohamed ouf", "Master Microservices with Spring Boot and Spring Cloud"));
		courses.add(new Course(4, "ibrahim trka", "Deploy Spring Boot Microservices to Cloud"));
	}

	/**
	 * get all records in simple database
	 * 
	 * @return
	 */
	public List<Course> findAll() {
		return courses;
	}

	/**
	 * get specific record with its id<br />
	 * you can call it search by id
	 * 
	 * @param id
	 * @return
	 */
	public List<Course> findById(int id) {
		ArrayList<Course> courses = new ArrayList<Course>();
		for (Course c : findAll()) {
			if (c.getId() == id) {
				courses.add(c);
			}
		}
		return courses;
	}

	/**
	 * get specific records with its name<br />
	 * you can call it search by name
	 * 
	 * @param name
	 * @return
	 */
	public List<Course> findByName(String name) {
		ArrayList<Course> courses = new ArrayList<Course>();
		for (Course c : findAll()) {
			if (c.getUsername().toLowerCase().contains(name.toLowerCase())) {
				courses.add(c);
			}
		}
		return courses;
	}

	/**
	 * add new course to simple database
	 * 
	 * @param course
	 * @return
	 */
	public boolean createCourse(Course course) {
		int lastId = courses.get(courses.size() - 1).getId();
		return courses.add(new Course(lastId + 1, course.getUsername(), course.getDescription()));
	}

	/**
	 * delete specific course with its unique id
	 * 
	 * @param id
	 */
	public void deleteCourse(int id) {
		for (Iterator<Course> iterator = courses.iterator(); iterator.hasNext();) {
			if (iterator.next().getId() == id) {
				iterator.remove();
			}
		}
	}

	/**
	 * update specific instructor with its id
	 */
	public void updateCourse(Course course) {
		deleteCourse(course.getId());
		courses.add(course);

	}

}
