import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState(null);

  const getFetchUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/user_info');

      setUserList(data);
    } catch (error) {
      alert('fetchUser Error');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const postAddUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post('/add_user', {
        username: '호날두'
      });

      setUserList(data);
    } catch (error) {
      alert('fetchUser Error');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div>
        로딩중
      </div>
    )
  }

  return (
    <div className="App">
      <div>
        <button onClick={getFetchUser}>
          [GET] 유저 정보 가져오기
        </button>
        <button onClick={postAddUser}>
          [POST] 유저 추가하기
        </button>
      </div>
      <div>
        {
          userList?.map(users => (
            <div style={{ display: 'flex' }}>
              <p>{users.id}</p>
              <p>{users.username}</p>
              <p>{users.age ?? '0'}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
