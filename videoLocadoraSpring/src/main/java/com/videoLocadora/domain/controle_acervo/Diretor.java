package com.videoLocadora.domain.controle_acervo;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Diretor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String nome;

}
