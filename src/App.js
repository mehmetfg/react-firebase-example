import logo from './logo.svg';
import './App.css';
import Contact from "./views/Contact";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
function App() {
  return (
    <div className="">

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" width="100px" height="100px" />
                    </header>
                </div>

            </div>
        <Contact/>
        </div>
    </div>
  );
}

export default App;
