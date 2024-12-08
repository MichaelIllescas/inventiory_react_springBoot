package com.inventiory.Api.exception;

public class DuplicateProductException extends RuntimeException {

    public DuplicateProductException(String nombre, String marca, String descripcion) {
        super(String.format(
            "El producto nombre: %s, Marca: %s, Descripcion: %s, ya se encuentra registrado.",
            nombre, marca, descripcion
        ));
    }
}
