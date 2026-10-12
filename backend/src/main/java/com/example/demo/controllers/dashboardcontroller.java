package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.services.dashboardservices;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class dashboardcontroller {

    @Autowired
    dashboardservices service;

    // Total Students
    @GetMapping("/totalstudents")
    public Long gettotalstudents() {

        return service.gettotalstudents();
    }

    // Total Courses
    @GetMapping("/totalcourses")
    public Long gettotalcourses() {

        return service.gettotalcourses();
    }
}