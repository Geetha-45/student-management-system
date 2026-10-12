package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.navbar;

public interface navbarrepo extends JpaRepository<navbar, Long> {

    @Query("SELECT COUNT(DISTINCT n.course) FROM navbar n")
    Long gettotalcourses();

}