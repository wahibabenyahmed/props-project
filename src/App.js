
import './App.css';
import Profile from './profile'

function App() {
  let data={fullName:"wahiba",bio:"devlopper web",profession:"devlopper"}
  return (
    <div className="App">
  <Profile data={data} >https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg</Profile>

    </div>
  );
}

export default App;
