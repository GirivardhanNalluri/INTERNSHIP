import './App.css';
//import InfoSection from './Components/InfoSection/InfoSection';
//import LoginPage from './Components/LoginPage/LoginPage';
//import MainContent from './Components/MainContent/MainContent';
import MainPage from './Components/MainPage/MainPage';
//import HomePage from './Components/HomePage/Home';
import LoginPage from './Components/LoginPage/LoginPage';
function App() {
  return (
    <div className="App">
      {
        (localStorage.getItem("users") === undefined || localStorage.getItem("users") == null) ?
        <LoginPage/>:<MainPage/>
      }
    </div>
  );
}

export default App;
