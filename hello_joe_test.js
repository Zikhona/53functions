test("returns as Hello,  if the username is Joe or Bob only say 'Hello!'", function(assert) {
	assert.equal(hello_joe("Zikhona"), "Hello , Zikhona");
	assert.equal(hello_joe("Bob"), "Hello!");
	assert.equal(hello_joe("Joe"), "Hello!");
});
