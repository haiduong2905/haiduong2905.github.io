var teacher = {
	firstName: "Alex",
	lastName: "Furguson",
	age: 62,
	job: "Manager FootBall",
	say: function()	{
	document.write("Xin chào, tôi là "+ this.firstName + " "+ this.lastName + " . Năm nay tôi "+this.age + " tuổi." );
}
}

var parent = {
	firstName: "David",
	lastName: "Beckham",
	age: 43,
	say: function()	{
	document.write ("Xin chào, tôi là "+ this.firstName + " "+ this.lastName + " . Năm nay tôi "+this.age + " tuổi.");
}
}

var student = {
	firstName: "Cristian",
	lastName: "Ronaldo",
	age: 19,
	say: function()	{
	document.write ("Xin chào, tôi là "+ this.firstName + " "+ this.lastName + " . Năm nay tôi "+this.age + " tuổi.");
}
}
		
function aboutMe() {
	return(teacher.say());
	return(parent.say());
	return(student.say());
}