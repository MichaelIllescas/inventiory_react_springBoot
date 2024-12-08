/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.inventiory.Api.Service;

import com.inventiory.Api.Entity.User;
import com.inventiory.Api.repository.UserRepository;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 *
 * @author jonii -- esta clase busca los datos del usuario en la base de datos por nombre de usuario
 */
@Service
//implements UserDetailsService
public class CustomUserDetailsService  {

//    @Autowired
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userRepository.findByUsername(username)
//            .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));
//            return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthorities(user));
//    }
//
////    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
////        return user.getAuthorities().stream()
////            .map(role -> new SimpleGrantedAuthority(role.getAuthority())
////            .collect(Collectors.toList());
////    }
//}
}