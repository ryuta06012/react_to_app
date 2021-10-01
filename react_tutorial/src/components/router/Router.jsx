import { BrowserRouter, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Router exact path="/">
					<Top />
				</Router>
				<Router path="/users">
					<Users />
				</Router>
			</Switch>
		</BrowserRouter>
	);
}