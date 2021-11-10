import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <h1>Refun signup</h1>
            <form>
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              </form>
        </div>
      </header>
      
    </div>
  );
}

export default App;
