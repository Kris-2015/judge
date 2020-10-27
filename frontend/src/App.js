import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [organization, setOrg] = useState('');

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updatePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const updateOrg = (e) => setOrg(e.target.value);

  const handleSubmit = () => {
    // After submitting the data, reset the form fields
    // State to show that user has been registered and show a flash message after that
    const addNewUser = axios.post('http://localhost:8000/registration/new_users/', {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      organization: organization,
    });

    addNewUser.then(res => {
      if (res.status === 200) {
        setTimeout(() => {
          return (
            <div class="alert alert-secondary" role="alert">
              This is a secondary alert—check it out!
            </div>
          )
        }, 3000);
      }
    })
      .catch(err => console.log('show me the error', err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5 welcome-box">
          <div className="card">
            <div className="card-body">
              <h2 style={{ 'color': 'red' }}>Welcome</h2>
              <p>Expect <strong>more</strong>.</p>
              <p>Expect <strong>performance</strong></p>
              <p>Expect <strong>result</strong></p>

              <p>On-demand courses and bite-sized videos to fit your schedule.</p>

              <div className="button-group">
                <button type="button" className="btn btn-default next-btn">Schedule a Demo</button>
                <button type="button" className="btn btn-default learn-more">Learn more</button>
              </div>
              
            </div>
          </div>
        </div>
        <div className="col-sm-5">
          <h2 className="create-account">Create Account</h2>
          <form>
            <div className="form-group">
              <select className="form-control">
                <option value="0">Registering as</option>
              </select>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                onChange={updateFirstName}
                value={firstName}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                onChange={updateLastName}
                value={lastName}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Organization"
                onChange={updateOrg}
                value={organization}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={updatePhoneNumber}
              />
            </div>

            <div className="form-group">
              <button type="button" className="form-control btn next-btn" onClick={handleSubmit}>Next</button>
            </div>

            <div>
              <p className="sign-in">Already have an account ? <a href="http://localhost:3000/" >Sign in</a></p>
              <p className="sign-in"><sub>Copyright 2020 Brihha. All Right Reserved.</sub></p>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="wavyShape"></div> */}
    </div>
  );
}

export default App;
