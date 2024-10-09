package com.videoLocadora.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.videoLocadora.domain.controle_acervo.Ator;
import com.videoLocadora.repository.AtorRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/ator")
@AllArgsConstructor
public class AtorController {

    private final AtorRepository atorRepository;

    @GetMapping
    public List<Ator> listarAtores() {
        return atorRepository.findAll();
    }

}
