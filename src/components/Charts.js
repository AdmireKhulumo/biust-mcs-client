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

function Charts(props) {
	//const classes=useStyles();
	let numGuests = props.guestRecordings.length;
	let numStaff = props.staffRecordings.length;
	let numStudents = props.studentRecordings.length;
	let totalNum = numGuests + numStaff + numStudents;

	useEffect(() => {
		showChart();
	}, []);

	//Chart 1 Doughnut
	const data = {
		labels: ["Guests", "Staff", "Students"],
		datasets: [
			{
				data: [numGuests, numStaff, numStudents],
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
				weight: 20,
				hoverBorderWidth: 10,
				hoverBorderColor: "#ffffff"
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

	function showChart() {
		return <Doughnut data={data} options={options} />;
	}

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
			<Grid container direction="row">
				<Grid item xs={12} sm={9} md={9} lg={9} style={{ width: "900px" }}>
					{showChart()}
				</Grid>
				<Grid item xs={12} sm={3} md={3} lg={3}>
					<Table size="medium" style={{ margin: "auto 0px auto auto" }}>
						<TableBody>
							<TableRow hover padding="10px">
								<TableCell align="left">
									<Typography variant="overline">Guests</Typography>
								</TableCell>
								<TableCell align="right">{numGuests}</TableCell>
							</TableRow>

							<TableRow hover>
								<TableCell align="left">
									<Typography variant="overline">Staff</Typography>
								</TableCell>
								<TableCell align="right">{numStaff}</TableCell>
							</TableRow>

							<TableRow hover>
								<TableCell align="left">
									<Typography variant="overline">Students</Typography>
								</TableCell>
								<TableCell align="right">{numStudents}</TableCell>
							</TableRow>

							<TableRow hover>
								<TableCell align="left">
									<Typography variant="overline">
										<strong>Total</strong>
									</Typography>
								</TableCell>
								<TableCell align="right">
									<strong>{totalNum}</strong>
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
