
package com.inventiory.Api.auth;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author jonii
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor  
class RegisterRequest {
    
    private String firstname;
    private String lastname;
    private String email;
    private String password;
    
}
