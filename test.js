/* Simple implementation of a testing framework */
(function() {

	var TestCase = function() {
		this.pass = false;
	}

	var TestGroup = function(name, fn) {
		this.results = [];
		this.passed = 0;
		this.failed = 0;

		this.append = function(node) {
			if(typeof(node) === 'TestCase') {
				this.results.push(node);
			}
		}
		this.run = function() {
			this.results.forEach(function(node) {
				if(typeof(node) === 'TestCase') {
					if(node.pass) {
						this.passed += 1;
					}
					else
						this.failed += 1;
				}
			})
			fn();
			return function() {
				console.log("Test Case: " + name);
				console.log("Passed = " + this.passed);
				console.log("Failed = " + this.failed);
			}
		}
	}
	this.assert = function(condition, msg) {
		TestCase t = new TestCase();
		t.pass = condition ? true : false;
		return t;
	}
})
