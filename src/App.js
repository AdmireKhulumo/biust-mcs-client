import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import login from "./login";

//for Auth
import { withRouter } from "react-router-dom";
import { AuthProvider } from "./authentication/Auth";
import PrivateRoute from "./authentication/PrivateRoute";

//Apollo Imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//MUI Imports
import {
	makeStyles,
	MuiThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import { Link, Typography, Box } from "@material-ui/core";

//Creating Global MUI Theme
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#f68951",
			light: "#33eaff",
			dark: "#00a0b2",
			contrastText: "#ffff"
		},
		secondary: {
			main: "#f68951",
			light: "#53c8ee",
			dark: "#00a0b2",
			contrastText: "#ffff"
		},
		textPrimary: {
			main: "#fff"
		}
	},
	typography: {
		useNextVariants: true
	}
});

//setting Up Apollo Client
const client = new ApolloClient({
	uri: "https://biust-mcs-apollo-server.oa.r.appspot.com"
});

function App() {
	return (
		<ApolloProvider client={client}>
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<AuthProvider>
						<Router>
							<Navbar />
							<Switch>
								<Route exact path="/login" component={login} />
								<PrivateRoute exact path="/" component={Dashboard} />
							</Switch>
						</Router>
					</AuthProvider>
					<Box mt={5}>
						<Copyright />
					</Box>
				</div>
			</MuiThemeProvider>
		</ApolloProvider>
	);
}

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="primary" href="https://www.biust.ac.bw/" target="_blank">
				BIUST
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default App;
