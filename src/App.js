import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Today from './components/Today';
import Habits from './components/Habits';
import History from './components/History';
import Navbar from './components/Navbar';
import Menu from './components/Menu';


export default function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Home />
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
			<Menu />
		</BrowserRouter>
	);
}

