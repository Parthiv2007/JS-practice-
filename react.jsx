    import React, { useState } from 'react';

    function MyForm() {
      const [formData, setFormData] = useState({
        username: '',
        email: ''
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();  
        console.log('Form Data:', formData);  
      };

      return (
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }

    export default MyForm;
/*
import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Cards';


function App() {
  const [value, setvalue] = useState(0);

  useEffect( ()=> {
 alert("Hello have a grate day ahead");
  },[value]);
  return (
    <>
      <div className="App">       

         <Navbar logoText="Parthiv Patel"/>

      </div>
      <div className="cards">
        <Card title="Hello World 1" description="You need to enable JavaScript to run this app."/>
        <Card title="Hello World 2" description="This HTML file is a template."/>
        <Card title="Hello World 3" description=" You can add webfonts, meta tags, or analytics to this file."/>
        <Card title="Hello World 4" description="To begin the development, run `npm start` or `yarn start`."/>
      </div>
      <div className='counter'>
        {value}
        <div className="buttons">
          <button onClick={() => { setvalue(value + 1) }} >increase</button>
          <button onClick={() => { setvalue(value - 1) }} >decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;

*/
