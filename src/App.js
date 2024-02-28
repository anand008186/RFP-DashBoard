import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import RFPList from './components/RfpList';

function App() {
  return (
    <>
    <Navbar />
    <RFPList />
    </>
  );
}

export default App;
