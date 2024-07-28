import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid"; 
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logopaginaincial.png";

import style from "../Login/style.css";


const Copyright = () => {
	return (
		<Typography variant="body2" color="primary" align="center">
			{"Copyright "}
 			<Link color="primary" href="#">
 				WABOOT
 			</Link>{" "}
 			{new Date().getFullYear()}
 			{"."}
 		</Typography>
 	);
 };

const useStyles = makeStyles(theme => ({
	root: {
		width: "100vw",
		height: "100vh",
		background: "linear-gradient(to right, #8731cf , #051641)",
		//backgroundImage: "url(https://)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 100%",
		backgroundPosition: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
	},
	paper: {
		backgroundColor: theme.palette.login, //DARK MODE //
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "55px 30px",
		borderRadius: "12.5px",
	},
	avatar: {
		margin: theme.spacing(1),  
		backgroundColor: theme.palette.secondary.main,
	},
	// form: {
	// 	width: "100%", // Fix IE 11 issue.
	// 	marginTop: theme.spacing(1),
	// },
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	powered: {
		color: "#F5F7F6"
	}
}));

const Login = () => {
	const classes = useStyles();

	const [user, setUser] = useState({ email: "", password: "" });

	const { handleLogin } = useContext(AuthContext);

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const handlSubmit = e => {
		e.preventDefault();
		handleLogin(user);
	};

	return (
		<div class="flex-container">
			<CssBaseline/>
			<div class="LadoEsquerdo">
				<div class="logo">
					<img style={{ margin: "0 auto", width: "60%" }} src={logo} alt="WABOOT" />
				</div>
				<p>Multi Atendimento</p>

				<ul class="list-group">
					<li class="list-group-item"><span>Faça seu cadastro clicando no botão abaixo</span></li>
				</ul>

				<div class="SaibaMais">
					
					<button type="button" class="btn btn-primary"><a href="#" target="new">	<Link	href="#" variant="body2" component={RouterLink}		to="/signup">
								{i18n.t("login.buttons.register")}
							</Link></a></button>
				</div>
			</div>


			<div class="LadoDireito">

				<span class="BenVindo">Bem-Vindo</span> 
				<form class="formulario"  noValidate onSubmit={handlSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label={i18n.t("login.form.email")}
						name="email"
						value={user.email}
						onChange={handleChangeInput}
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label={i18n.t("login.form.password")}
						type="password"
						id="password"
						value={user.password}
						onChange={handleChangeInput}
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						{i18n.t("login.buttons.submit")}
					</Button>
					{ <Grid container>
						{/* <Grid item>
							<Link
								href="#"
								variant="body2"
								component={RouterLink}
								to="/inscrever-se"
							>
								{i18n.t("login.buttons.register")}
							</Link>
						</Grid> */}
					</Grid> }
				</form>

				<div class="creditos">
					<p>Versão 2024.1.0</p>
	
					<p class="container-footer"><a href="https://policies.google.com/privacy" target="_blank">Política de Privacidade</a></p>
					<p class="container-footer"><a href="https://policies.google.com/terms" target="_blank">Termos de serviço</a></p>
              

				</div>
			</div>
		</div>
	);
};

export default Login;
