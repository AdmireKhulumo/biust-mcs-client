import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { makeStyles } from "@material-ui/core/styles";
import {
	MenuItem,
	FormControl,
	ListSubheader,
	Select,
	Typography,
	InputLabel,
	Grid
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: " 200px"
	},
	datePicker: {
		minWidth: "200px",
		borderRadius: "5px!important",
		border: "2px solid grey"
	}
}));

export default function Selections() {
	const classes = useStyles();
	const [date, setDate] = useState(new Date());
	const [station, setStation] = useState("New Main Gate");

	//let options = { year: "numeric", month: "numeric", day: "numeric" };
	//let today = new Date(); //.toLocaleDateString("en-GB", options);

	console.log(date);
	console.log(station);
	return (
		<div>
			<Grid
				container
				spacing={3}
				direction="row"
				justify="center"
				alignItems="center"
				style={{ paddingLeft: "20px", paddingRight: "20px" }}
			>
				<Grid item xs={11} sm={11} md={4} lg={4}>
					<Typography variant="overline">Select Station and Date: </Typography>
				</Grid>

				<Grid item xs={11} sm={11} md={4} lg={4}>
					<FormControl
						className={classes.formControl}
						placeholder="New Main Gate"
					>
						<InputLabel htmlFor="grouped-native-select">STATION</InputLabel>
						<Select
							native
							defaultValue="New Main Gate"
							id="grouped-native-select"
							onChange={(event) => {
								setStation(event.target.value);
							}}
						>
							<option aria-label="None" value="New Main Gate">
								New Main Gate
							</option>
							<optgroup label="Main Entrances">
								<option value={1}>New Main Gate</option>
								<option value={2}>Admin Building</option>
							</optgroup>
							<optgroup label="Faculty Of Science">
								<option value={3}>Biology Offices</option>
								<option value={4}>Physics Offices</option>
								<option value={5}>Chemistry Offices</option>
								<option value={6}>CS Offices</option>
							</optgroup>
							<optgroup label="Faculty Of Engineering">
								<option value={7}>Telecoms Offices</option>
								<option value={8}>Mechatronics Offices</option>
								<option value={9}>Chemical Eng. Offices</option>
								<option value={10}>Industrial Eng. Offices</option>
							</optgroup>
							<optgroup label="Classrooms">
								<option value={11}>A1010</option>
								<option value={12}>A1011</option>
								<option value={13}>A1012</option>
								<option value={14}>A1013</option>
							</optgroup>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={11} sm={11} md={4} lg={4}>
					<DatePicker
						clearIcon={null}
						onChange={(value) => {
							setDate(value);
						}}
						value={date}
						format="dd/MM/y"
						className={classes.datePicker}
					/>
				</Grid>
			</Grid>
		</div>
	);
}
