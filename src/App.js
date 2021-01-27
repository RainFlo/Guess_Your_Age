// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import students from './students';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
    
      <Form/>
      {students.map((student, index) => (
        <Person name={student} key={index}/>
      ))}
    
    </div>
  );
}

export default App;
