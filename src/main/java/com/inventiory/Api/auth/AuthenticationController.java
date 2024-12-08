/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.inventiory.Api.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    
    private final AuthenticationService authenticationService;
            
            
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
                                @RequestBody RegisterRequest request){
    
        return ResponseEntity.ok(authenticationService.register(request));
    }
    
    
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
                                @RequestBody AuthenticationRequest request){
         return ResponseEntity.ok(authenticationService.login(request));
    
    }
    
    
}
