import React, { useEffect } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import {
	Grid,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Paper
} from "@material-ui/core";
import CanvasJSReact from "../assets/canvasjs.react";
import { makeStyles } from "@material-ui/core/styles";

//Chart 1 Doughnut
const data = {
	labels: ["Guests", "Staff", "Students"],
	datasets: [
		{
			data: [33, 58, 102],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
		}
	]
};
const options = {
	rotation: 1 * Math.PI,
	circumference: 1 * Math.PI,
	responsive: true,
	maintainAspectRatio: true,
	legend: {
		display: true,
		position: "bottom",
		fullWidth: true
	},
	cutoutPercentage: 60
};

/*const options = {
	animationEnabled: true,
	data: [
		{
			type: "doughnut",
			startAngle: 180,
			//innerRadius: 60,
			indexLabelFontSize: 17,
			indexLabel: "{label} - #percent%",
			toolTipContent: "<b>{label}:</b> {y} (#percent%)",
			dataPoints: [
				{ y: 67, label: "Guests" },
				{ y: 28, label: "Staff" },
				{ y: 10, label: "Students" }
			]
		}
	]
};*/

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

function showChart() {
	return <Doughnut data={data} options={options} />;
}

function Charts(props) {
	//const classes=useStyles();

	useEffect(() => {
		showChart();
	}, []);
	return (
		<div style={{ marginTop: "20px" }}>
			{/*<Paper elevation={5}>
				<h4>Total Number of People in the Station This Week</h4>
				<Grid container>
					<Grid item style={{ width: "900px", height: "900px" }}>
						<Pie
							data={data}
							type="doughnut"
							options={{
								responsive: true,
								animateRotate: true
							}}
						/>
					</Grid>
				</Grid>
						</Paper>*/}

			<Typography variant="button">
				<u>Number Of People Currently In The Building</u>
			</Typography>
			<Grid container direction="row">
				<Grid item xs={12} sm={9} md={9} lg={9} style={{ width: "900px" }}>
					{showChart()}
				</Grid>
				<Grid item xs={12} sm={3} md={3} lg={3}>
					<Table size="medium" style={{ margin: "auto 0px auto auto" }}>
						<TableBody>
							<TableRow hover="true" padding="10px">
								<TableCell align="left">
									<Typography variant="overline">Guests</Typography>
								</TableCell>
								<TableCell align="right">33</TableCell>
							</TableRow>

							<TableRow hover="true">
								<TableCell align="left">
									<Typography variant="overline">Staff</Typography>
								</TableCell>
								<TableCell align="right">58</TableCell>
							</TableRow>

							<TableRow hover="true">
								<TableCell align="left">
									<Typography variant="overline">Students</Typography>
								</TableCell>
								<TableCell align="right">102</TableCell>
							</TableRow>

							<TableRow hover="true">
								<TableCell align="left">
									<Typography variant="overline">
										<strong>Total</strong>
									</Typography>
								</TableCell>
								<TableCell align="right">
									<strong>193</strong>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Grid>
			</Grid>

			{/*<Grid item xs={12} md={12} lg={12}>
					<Grid container direction="row" alignItems="center">
						<Grid item xs={12} md={6} lg={6}>
							<p>Chart 1</p>
							<CanvasJSChart options={options} />
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<p>Chart 2</p>
							<CanvasJSChart options={options} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} xs={12} md={12} lg={12}>
					<Grid container direction="row" alignItems="center">
						<Grid
							item
							xs={12}
							md={6}
							lg={6}
							style={({ height: "500px" }, { width: "1000px" })}
						>
							<p>Chart 3</p>
							<CanvasJSChart options={options} />
						</Grid>
						<Grid item xs={12} md={6} lg={6}>
							<p>Chart 4</p>
							<CanvasJSChart options={options} />
						</Grid>
					</Grid>
	</Grid>*/}
		</div>
	);
}

export default Charts;
