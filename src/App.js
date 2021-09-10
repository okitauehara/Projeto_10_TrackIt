import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Today from './components/Today';
import Habits from './components/Habits';
import History from './components/History';
import UserContext from './contexts/UserContext';

export default function App() {

	const [user, setUser] = useState(null);

	return (
		<UserContext.Provider value={user}>
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

