package model.domain.atendimento_cliente;

import java.util.Date;

public class Cliente {
    private int numInscricao;
    private String nome;
    private Date dataNascimento;
    private char sexo;
    private boolean estaAtivo;

    public Cliente() {
    }

    public Cliente(int numInscricao, String nome, Date dataNascimento, char sexo, boolean estaAtivo) {
        this.numInscricao = numInscricao;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.estaAtivo = estaAtivo;
    }

    public int getNumInscricao() {
        return numInscricao;
    }

    public void setNumInscricao(int numInscricao) {
        this.numInscricao = numInscricao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public boolean isEstaAtivo() {
        return estaAtivo;
    }

    public void setEstaAtivo(boolean estaAtivo) {
        this.estaAtivo = estaAtivo;
    }

    
}
