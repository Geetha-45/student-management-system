package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.navbarrepo;

@Service
public class dashboardservices {

    @Autowired
    navbarrepo repo;

    // Total Students
    public Long gettotalstudents() {
        return repo.count();
    }

    // Total Courses
    public Long gettotalcourses() {
        return repo.gettotalcourses();
    }
}