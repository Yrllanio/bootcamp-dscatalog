package com.devsuperior.dscatalog.resources.exceptions;

import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError {
	private static final long serialVersionUID = 1L;
	
	private List<FieldMessege> errors = new ArrayList<>();

	public List<FieldMessege> getErrors() {
		return errors;
	}
		
	public void addError(String fieldName, String message) {
		errors.add(new FieldMessege(fieldName, message));
	}
}
