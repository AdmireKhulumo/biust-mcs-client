import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select, Typography, Grid, Button } from "@material-ui/core";
import FilterIcon from "@material-ui/icons/FilterList";

//Query stuff
import { useQuery } from "@apollo/react-hooks";
import { getStationsQuery } from "../assets/queries";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(2)
	},
	datePicker: {
		minWidth: "200px",
		borderRadius: "5px!important",
		border: "3px solid #f68951"
	},
	submit: {
		marginTop: theme.spacing(1),
		minWidth: "150px"
	}
}));

export default function Selections(props) {
	const classes = useStyles();
	const [station, setStation] = useState(props.station);
	const [dateStart, setDateStart] = useState(props.dateStart);
	const [dateEnd, setDateEnd] = useState(props.dateEnd);

	//hook for getting recordings
	const {
		loading: stationsLoading,
		error: stationsError,
		data: stationsData
	} = useQuery(getStationsQuery);

	if (stationsError) {
		console.log(stationsError);
	}

	const submitQuery = (event) => {
		event.preventDefault();
		props.setStation(station);
		props.setDateStart(dateStart);
		props.setDateEnd(dateEnd);
	};

	return (
		<div className={classes.formControl}>
			<Typography variant="overline">Select Station and Date: </Typography>

			<form onSubmit={submitQuery}>
				<Grid
					container
					spacing={3}
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid item xs={11} sm={11} md={3} lg={3}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<Typography variant="overline">Station:</Typography>
							</Grid>
							<Grid item>
								<Select
									id="select"
									value={station || "Admin Block"}
									onChange={(event) => {
										setStation(event.target.value);
									}}
									className={classes.datePicker}
								>
									{stationsLoading && (
										<MenuItem disabled>
											<i>Loading Stations</i>
										</MenuItem>
									)}

									{!stationsLoading &&
										stationsData.stations.map((station) => {
											return (
												<MenuItem value={station.stationName} key={station.id}>
													{station.stationName}{" "}
												</MenuItem>
											);
										})}
								</Select>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={11} sm={11} md={3} lg={3}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<Typography variant="overline">From:</Typography>
							</Grid>
							<Grid item>
								<DatePicker
									id="dateStart"
									clearIcon={null}
									onChange={(value) => {
										setDateStart(value);
									}}
									value={dateStart}
									format="dd/MM/y"
									className={classes.datePicker}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={11} sm={11} md={3} lg={3}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<Typography variant="overline">TO:</Typography>
							</Grid>
							<Grid item>
								<DatePicker
									id="dateEnd"
									clearIcon={null}
									onChange={(value) => {
										setDateEnd(value);
									}}
									value={dateEnd}
									format="dd/MM/y"
									className={classes.datePicker}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={11} sm={11} md={3} lg={3}>
						<Grid
							container
							direction="column"
							justify="center"
							alignItems="center"
						>
							<Grid item>
								<Typography variant="caption">.</Typography>
							</Grid>
							<Grid item>
								<Button
									disableElevation
									onClick={submitQuery}
									type="submit"
									variant="contained"
									color="primary"
									className={classes.submit}
									startIcon={<FilterIcon />}
								>
									<strong>Filter</strong>
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		</div>
	);
}
