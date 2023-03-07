import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <table>
      <tr>
        <td>About &nbsp;</td>
        <td>Contact &nbsp;</td>
        <td>linkedIn &nbsp;</td>
      </tr>
      </table>

      <p>
        <a className  = "ml-10" href = 'https://www.linkedin.com/in/ivanfigueroa1/' id ='linkedIn'>linkedIn</a>
        <div id = "pic">
        <img src = "https://media.licdn.com/dms/image/C4D03AQFWjxVNostSBA/profile-displayphoto-shrink_800_800/0/1646160925726?e=1682553600&v=beta&t=z6MoKrg5v15Nr-yGKuMXrGS6n_uifnlnoUGdPj700qc" height = "200" width = "200"></img>
        </div><br></br>
      </p>
    <button id = "button1">This is a button</button>
    </div>
    
  )
}

export default App;
