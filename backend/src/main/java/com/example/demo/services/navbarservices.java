package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.navbar;
import com.example.demo.repository.navbarrepo;

@Service
public class navbarservices {

    @Autowired
    navbarrepo repo;

    // Add Student
    public String addstudent(navbar s) {

        repo.save(s);

        return "successfully added";
    }

    // Get All Students
    public List<navbar> getallstudent() {

        return repo.findAll();
    }

    // Get Student By ID
    public navbar getstudentbyid(Long id) {

        return repo.findById(id).orElse(null);
    }

    // Update Student
    public String updatestudent(Long id, navbar s) {

        navbar existing = repo.findById(id).orElse(null);

        if (existing != null) {

            existing.setName(s.getName());
            existing.setAge(s.getAge());
            existing.setCourse(s.getCourse());
            existing.setMarks(s.getMarks());

            repo.save(existing);

            return "successfully updated";
        }

        return "student not found";
    }

    // Delete Student
    public String deletestudent(Long id) {

        if (repo.existsById(id)) {

            repo.deleteById(id);

            return "successfully deleted";
        }

        return "student not found";
    }
}