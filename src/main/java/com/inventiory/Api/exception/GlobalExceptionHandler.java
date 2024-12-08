/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.inventiory.Api.exception;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import jakarta.validation.ConstraintViolationException;
import org.springframework.web.bind.MethodArgumentNotValidException;

import java.util.HashMap;
import java.util.Map;
import org.apache.coyote.BadRequestException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Manejar ResourceNotFoundException
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> manejarResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    // Manejar BadRequestException
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<String> manejarBadRequestException(BadRequestException ex, WebRequest request) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }

    // Manejar CreationFailedException
    @ExceptionHandler(CreationFailedException.class)
    public ResponseEntity<String> manejarCreationFailedException(CreationFailedException ex, WebRequest request) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

   @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> manejarValidaciones(MethodArgumentNotValidException ex) {
        Map<String, String> errorResponse = new HashMap<>();

        // Capturar el primer error de validación (puedes iterar si necesitas todos los errores)
        String mensajeError = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> error.getDefaultMessage()) // Obtener el mensaje personalizado
                .findFirst()
                .orElse("Error de validación desconocido");

        errorResponse.put("error", mensajeError); // Asignar al campo "error"
        return ResponseEntity.badRequest().body(errorResponse); // Código 400 Bad Request
    }

   @ExceptionHandler(ConstraintViolationException.class)
public ResponseEntity<Map<String, String>> manejarConstraintViolationException(ConstraintViolationException ex) {
    // Construir un mensaje concatenado con todos los errores
    String mensajeError = ex.getConstraintViolations().stream()
        .map(violation -> String.format("%s: %s", violation.getPropertyPath(), violation.getMessage()))
        .reduce((mensaje1, mensaje2) -> mensaje1 + "; " + mensaje2) // Concatenar mensajes
        .orElse("Error de validación desconocido");

    // Crear la respuesta en formato JSON
    Map<String, String> errorResponse = new HashMap<>();
    errorResponse.put("error", mensajeError);

    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
}


    // Manejar excepciones generales
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> manejarExcepcionesGenerales(Exception ex, WebRequest request) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocurrió un error inesperado: " + ex.getMessage());
    }
    
    
  

     @ExceptionHandler(DuplicateProductException.class)
    public ResponseEntity<Map<String, String>> manejarDuplicateProductException(DuplicateProductException ex) {
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", ex.getMessage()); // Usamos el mensaje de la excepción directamente
        return ResponseEntity.status(409).body(errorResponse); // HTTP 409 Conflict
    }
    
}

