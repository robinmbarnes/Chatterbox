//var username_list

//---Listen for post request loop start

	//Get value of action variable
	
	//Switch
		//Case login
			//login(params)
		//Case logout
			//logout(params)
		//Case message
			//message(params)	

//---Request listen end

//function login(params, callback)
	//try
		//is username not present?
			//throw(err)
		//is username on username_list already?
			//throw(err)
		//Is socket id alreay associated with a username?
			//throw(err)
		//add username to username list
		//associate user name with socket id
	//catch
		//callback(err)
		//return
	//callback(null, success_params)

//function logout
	//try
		//is socket not associated with user name on user name list?
			//throw(err)
		//Remove user associated with socket from user list
	//catch
		//callback(err)
		//return
	//callback(null, success)

//function message
	//try
		//is socket not associated with user name on user name list?
			//throw(err)
		//Push message to all users
	//catch
		//callback(err)
		//return
	//callback(null, success)
