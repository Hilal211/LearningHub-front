import '../AdminPage/AdminPage.css'
import React, { useState, useEffect } from "react";

export default function AddAdmin(){
	const [username, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [postid, setPostId] = useState('');


	//const [phone, setUserName] = useState('');
	//const [username, setUserName] = useState('');

	useEffect(() => {
		// POST request using fetch inside useEffect React hook
		const createAdmin = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username,email,password })
		};
		fetch('localhost:8000/api/addadmin', createAdmin)
			.then(response => response.json())
			.then(data => setPostId(data.id));
	
	// empty dependency array means this effect will only run once (like componentDidMount in classes)
	}, []);
	
	const handleChangeUserName = (event) => {
        let { name, value } = event.target;
        setUserName({ [name]: value });
    }
	const handleChangeEmail = (event) => {
        let { name, value } = event.target;
        setEmail({ [name]: value });
    }

	const handleChangePassword= (event) => {
        let { name, value } = event.target;
        setPassword({ [name]: value });
    }
	const handleSubmit = (event) => {
        event.nativeEvent.preventDefault();
      //  { username, email, password } = this.state;
        this.createAdmin({ username, email, password });
       // document.getElementById("email").focus();
       // this.props.history.goBack()
	}

    return(
		// class="modal fade"
        <div id="addEmployeeModal" >
	<div class="modal-dialog">
		<div class="modal-content">
			<form >
				<div class="modal-header">						
					<h4 class="modal-title">Add Admin</h4>
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
				</div>
				<div class="modal-body">					
					<div class="form-group">
						<label>User Name</label>
						<input type="text"
							   class="form-control" 
							   name="username"
							   value={username} 
							   onChange={handleChangeUserName}
							   required/>
					</div>
					<div class="form-group">
						<label>Email</label>
						<input type="email"
						       class="form-control" 
						       name="email" 
							   value={email} 
						       onChange={handleChangeEmail}
						       required/>
					</div>
					<div class="form-group">
						<label>Password</label>
						<textarea class="form-control"
							      name="password" 
								  value={password} 
								  onChange={handleChangePassword}
								  required></textarea>
					</div>
					<div class="form-group">
						<label>Phone</label>
						<input type="text" class="form-control" required/>
					</div>					
				</div>
				<div class="modal-footer">
					<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel"/>

					<input type="submit" class="btn btn-success" value="Add"/>
				</div>
			</form>
		</div>
	</div>
</div>

    );
}