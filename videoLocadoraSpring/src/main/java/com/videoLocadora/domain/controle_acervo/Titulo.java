package com.videoLocadora.domain.controle_acervo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Titulo {

    @Id
    private Long id;

    @Column(length = 255, nullable = false)
    private String nome;

    @Column(nullable = false)
    private String ano;

    @Column(nullable = false)
    private String sinopse;

    @Column(nullable = false)
    private String categoria;
    
}
