import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Today from './components/pages/Today/Today';
import Habits from './components/pages/Habits/Habits';
import History from './components/pages/History/History';
import UserContext from './contexts/UserContext';

export default function App() {

	const [user, setUser] = useState(null);
	const [todayHabits, setTodayHabits] = useState([]);

	return (
		<UserContext.Provider value={{user, todayHabits, setTodayHabits}}>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact>
						<Login setUser={setUser}/>
					</Route>
					<Route path='/cadastro' exact>
						<SignUp />
					</Route>
					<Route path='/hoje' exact>
						<Today />
					</Route>
					<Route path='/habitos' exact>
						<Habits />
					</Route>
					<Route path='/historico' exact>
						<History />
					</Route>
				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

