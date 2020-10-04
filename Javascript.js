var database = [
   {
   	    username: "Callina",
   	    password: "pink"
   }
];

var newsFeed= [
{
	    username: "Sarah",
	    timeline: "So happy about my new skills I've learned!" 
	},
	{
		 username: "Will",
		 timeline: "Javascript is sooo cool!"
	},
	];

	var userNamePrompt= prompt("What's your username?");
	var passwordPrompt= prompt("What's your password?");

	function signIn(user,pass) {
		if(user==database[0].username &&
			pass==database[0].password){
			console.log(newsFeed);
		} else {
			alert("OOPS, wrong username and password!")
	    }
}

signIn(userNamePrompt,passwordPrompt);	    