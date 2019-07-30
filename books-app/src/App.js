import React from 'react';
import axios from 'axios';
import {Table, Button} from 'reactstrap';


// import logo from './logo.svg';
// import './App.css';
class App extends Component {
  state = {
    books: []
  }
  componentWillMount() {
    axios.get('http://localhost3000/books').then(response) => {
      this.setState ({
        books: response.data
      })
    });
  }


render App() {
  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
           <td>1</td>
           <td>Book Title</td> 
           <td>2.5</td>
           <td>
             <Button color= "success" size="sm" className="mr-2">edit</Button>
             <Button color= "danger" size="sm">delete</Button>
           </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
}
export default App;
