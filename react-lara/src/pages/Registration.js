import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function signUp(event) {
        event.preventDefault();

        let item = {name,email,password}
        // console.log(item)
        let result = await fetch("http://localhost:8000/api/user", {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        })
        // result = await result.json() //atai real code kintu error ase dekhe 2nd ways
        // localStorage.setItem('user-info', JSON.stringify(result))
        localStorage.setItem('user-info', JSON.stringify(item))
        history.push('/')

     };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Registration</div>

                            <div className="card-body">
                                <form onSubmit={signUp}>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
                                        <div className="col-md-6">
                                            <input id="name" type="text" className="form-control" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input id="email" type="email" className="form-control" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input id="password" type="password" className="form-control" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                                        </div>
                                    </div>
                                    
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
