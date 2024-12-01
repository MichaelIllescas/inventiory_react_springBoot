
package com.inventiory.Api.exception;

/**
 *
 * @author jonii
 */


public class CreationFailedException extends RuntimeException {
    public CreationFailedException(String message) {
        super(message);
    }
}
