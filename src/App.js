import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Layout/Layout';
import ContactDetail from './Components/ContactDetail';
import ContactList from './Components/ContactList/ContactList';
import ContactForm from '../src/Components/ContactForm/ContactForm';
import EditContacts from './Components/EditContacts';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/edit/:id" component={EditContacts} />
            <Route path="/user/:id" component={ContactDetail} />
            <Route path="/contacts" component={ContactList} />
            <Route path="/" exact="true" component={ContactForm} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
