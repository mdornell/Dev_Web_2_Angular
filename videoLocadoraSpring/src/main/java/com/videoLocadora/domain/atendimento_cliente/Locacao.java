package com.videoLocadora.domain.atendimento_cliente;

import java.sql.Date;

public class Locacao {
    private Date dataLocacao;
    private Date dataDevolucaoPrevista;
    private Date dataDevolucaoEfetiva;
    private double valorCobrado;
    private double multaCobrada;

    public Locacao() {
    }

    public Locacao(Date dataLocacao, Date dataDevolucaoPrevista, Date dataDevolucaoEfetiva, double valorCobrado, double multaCobrada) {
        this.dataLocacao = dataLocacao;
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
        this.valorCobrado = valorCobrado;
        this.multaCobrada = multaCobrada;
    }

    public Date getDataLocacao() {
        return dataLocacao;
    }

    public void setDataLocacao(Date dataLocacao) {
        this.dataLocacao = dataLocacao;
    }

    public Date getDataDevolucaoPrevista() {
        return dataDevolucaoPrevista;
    }

    public void setDataDevolucaoPrevista(Date dataDevolucaoPrevista) {
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
    }

    public Date getDataDevolucaoEfetiva() {
        return dataDevolucaoEfetiva;
    }

    public void setDataDevolucaoEfetiva(Date dataDevolucaoEfetiva) {
        this.dataDevolucaoEfetiva = dataDevolucaoEfetiva;
    }

    public double getValorCobrado() {
        return valorCobrado;
    }

    public void setValorCobrado(double valorCobrado) {
        this.valorCobrado = valorCobrado;
    }

    public double getMultaCobrada() {
        return multaCobrada;
    }

    public void setMultaCobrada(double multaCobrada) {
        this.multaCobrada = multaCobrada;
    }

    
}
