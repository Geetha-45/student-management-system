package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.navbar;
import com.example.demo.services.navbarservices;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class navbarcontroller {

    @Autowired
    navbarservices service;

    // Add Student
    @PostMapping("/addstudent")
    public String addstudent(@RequestBody navbar s) {
        return service.addstudent(s);
    }

    // Get All Students
    @GetMapping("/getallstudent")
    public List<navbar> getallstudent() {
        return service.getallstudent();
    }

    // Get Student By ID
    @GetMapping("/getstudent/{id}")
    public navbar getstudentbyid(@PathVariable Long id) {
        return service.getstudentbyid(id);
    }

    // Update Student
    @PutMapping("/updatestudent/{id}")
    public String updatestudent(
            @PathVariable Long id,
            @RequestBody navbar s) {

        return service.updatestudent(id, s);
    }

    // Delete Student
    @DeleteMapping("/deletestudent/{id}")
    public String deletestudent(@PathVariable Long id) {
        return service.deletestudent(id);
    }
}