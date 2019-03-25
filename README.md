# JEST
Jest is a test runner.
When you run jest command or npm test it watch all the files in the directory who have .test.js

# Mocking and Stubbing
To isolate the behavior of the object you want to replace the other objects by mocks that simulate the behavior of the real objects. 
	At times you may want to distinguish between mocking as opposed to stubbing. There may be some disagreement about this subject but my definition of a stub is a "minimal" simulated object. The stub implements just enough behavior to allow the object under test to execute the test.
A mock is like a stub but the test will also verify that the object under test calls the mock as expected. Part of the test is verifying that the mock was used correctly.

#Note:-
One thing that could help a lot is to realize that tests verify behavior, not implementation.

This means you shouldn't be validating these things:

should have a <form> element
<form> element should have a onSubmit attribute
onSubmit attribute should be of type function
<form> element should have an <input /> element
<input> element should be of type text
<form> element should have an <p> element
<p> element should have a className
<form> element should have an <input type="submit" /> element
<input> element should be of type submit
<input /> element should have a className
<input /> element should have a value attribute
<input> element should have an onChange attribute
onChange attribute should be of type function

These things are good, but the descriptions should be rewritten with a focus on the behavior, not the implementation:

<input> element should have a placeholder attribute with value Name
<input> element value should be empty (2x of these)
should update the state when a value is input
should display an error when no value is input
<p> element should be null when passed validationError: false
<p> element should be Please enter your name when passed validationError: true

Matchers
syntax : 
	test('name of the test',()=>{
		expect(functionCall).toBe('expectedResult');	
	});
 types :-
	toBe, toEqual, not.toBe
truthiness :-toBeNull,toBeUndefined,toBeDefined,toBeTruthy,toBeFalsy

number :-
toBeGreaterThen,toBeGreaterThanorEqual , toBeLessThan , toBeLessThanorEqual
forFloatingNumber :-
use toBeCloseTo instead of toEqual because you don't want a test to depe
string :- 
 toMatch(),toContain 