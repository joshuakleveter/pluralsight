(function IIFE() {
	A();
	
	function C() {
		console.log("OOPS!");
	}
	
	function E(f) {
		console.log("E");
		F();
		var f = F;
	}
	
	function A() {
		console.log("A");
		B();
	}
	
	function G() {
		console.log("G");
		H();
		
		function H() {
			console.log("H");
			I();
		}
	}
	
	function D() {
		console.log("D");
		E();
	}
	
	function I() {
		console.log("I");
		J();
	}
	
	function B() {
		console.log("B");
		C();
	}
	
	function F() {
		console.log("F");
		G();
	}
	
	var rest = "KLMNOPQRSTUVWXYZ".split("");
	for (var i=0; i<rest.length; i++) {
		(function IIFE(i){
			// define the current function
			window[rest[i]] = function() {
				console.log(rest[i]);
				if (i < rest.length-1) {
					// TODO: call the next function
				}
			};
			window[rest[i]]();
		})(i);
	}
	
	function J() {
		(function() {
			console.log("J");
			// K();
		})();
	}
	
	function C() {
		console.log("C");
		D();
	}
})();