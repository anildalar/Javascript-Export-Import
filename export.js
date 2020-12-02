
//1. We Can Export Classes
export class MyClass{
	//1. Property
	
	//2. Constructor
	
	//3. Method
	showName(){
		console.log('Hello From MyClass ShowName Method');
	}
	
}

//2. We Can Export Class Object
class MyClass2{
	
	showName2(){
		console.log("Hello Form MyClass2  and Showname2 Method");
	}
}

export var myclassobj2 = new MyClass2();

//3. We Can Export Functions
function anil(){
	console.log('Hello');
}

//4. We Can Export Js Object {}
export var students = {
	//1. P:V
	
	//2.Methods
	displayName:function(name){
		console.log(`Hello ${name}  from Display Name`);
	},
	displayName2: function displayName2(){
			console.log('Hello from Display Name2');
	}
};

//5. We can export Variables
export var name='Anil DOLLOR';

export { anil };