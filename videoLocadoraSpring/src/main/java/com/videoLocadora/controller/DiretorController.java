package com.videoLocadora.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.videoLocadora.domain.controle_acervo.Diretor;
import com.videoLocadora.repository.DiretorRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/diretor")
@AllArgsConstructor
public class DiretorController {
    
    private final DiretorRepository diretorRepository;

    @GetMapping
    public List<Diretor> listarDiretores() {
        return diretorRepository.findAll();
    }

    
}
