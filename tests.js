
test("return 'hello world'", function(assert) {
	assert.equal(hello (), "hello world");
});

test("takes a username as parameter and returns 'Hello'", function(assert) {
	assert.equal(hello_uppercase("zikhona"), "Hello , ZIKHONA");
});


test("takes a username as parameter and returns 'Hello!'", function(assert) {
	assert.equal(hello_joe("Zikhona"), "Hello , Zikhona");
	assert.equal(hello_joe("Bob"), "Hello!");
	assert.equal(hello_joe("Joe"), "Hello!");
});

test("takes a number as a parameter (n) and returns a list of numbers from 1 to n", function(assert){
	assert.deepEqual(number_list)
});