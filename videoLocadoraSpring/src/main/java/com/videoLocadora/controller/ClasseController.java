package com.videoLocadora.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.videoLocadora.domain.controle_acervo.Classe;
import com.videoLocadora.repository.ClasseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/classe")
@AllArgsConstructor
public class ClasseController {
    
    private final ClasseRepository classeRepository;

    @GetMapping
    public List<Classe> listarClasses() {
        return classeRepository.findAll();
    }
    
}
