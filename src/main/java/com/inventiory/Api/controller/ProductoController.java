
package com.inventiory.Api.controller;




import com.inventiory.Api.Entity.Producto;
import com.inventiory.Api.Service.ProductoService;
import com.inventiory.Api.exception.DuplicateProductException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import org.apache.coyote.BadRequestException;

@RestController
@RequestMapping("/api/productos")

public class ProductoController {

    @Autowired
    private ProductoService productoService;

   @CrossOrigin(origins = "http://localhost:5173")
@PostMapping("/crearProductos")
public ResponseEntity<?> crearProducto(@Valid @RequestBody Producto producto) throws BadRequestException {
    Producto nuevoProducto = productoService.crearProducto(producto);
    return ResponseEntity.ok(nuevoProducto);
}


  @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/verProductos")
    public ResponseEntity<List<Producto>> obtenerTodosLosProductos() {
        List<Producto> productos = productoService.obtenerTodosLosProductos();
        return ResponseEntity.ok(productos);
    }

    
    @CrossOrigin(origins = "http://localhost:5173")
      @GetMapping("obtenerCategorias")
    public ResponseEntity<List<String>> obtenerCategorias() {
        List<String> categorias = Arrays.stream(Producto.Categoria.values())
                                        .map(Enum::name) // Convertir cada valor de la enum a String
                                        .collect(Collectors.toList());
        return ResponseEntity.ok(categorias);
    }
    
   
}

