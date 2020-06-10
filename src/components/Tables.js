import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MUIDataTable from "mui-datatables";

const useStyles = makeStyles((theme) => ({
	table: {
		//marginRight: theme.spacing(4),
		//marginLeft: theme.spacing(4)
	}
}));

function Tables(props) {
	const classes = useStyles();
	const guestsColumns = [
		"Date",
		"Direction",
		"Temperature",
		"Full Name",
		"Official ID",
		"Gender",
		"Phone",
		"Email",
		"Address",
		"Purpose Of Visit",
		"Contact Person Name",
		"Contact Person Phone",
		"Contact Person Email",
		"Recorded By",
		"Recorder's Phone",
		"Recorder's Official ID",
		"Date Registered",
		"Registered By",
		"Registered At"
	];
	const staffColumns = [
		"Date",
		"Direction",
		"Temperature",
		"Full Name",
		"Employee ID",
		"Official ID",
		"Gender",
		"Phone",
		"Email",
		"Department",
		"Office",
		"Address",
		"Recorded By",
		"Recorder's Phone",
		"Recorder's Official ID"
	];
	const studentsColumns = [
		"Date",
		"Direction",
		"Temperature",
		"Full Name",
		"Student ID",
		"Official ID",
		"Gender",
		"Phone",
		"Email",
		"Study Level",
		"Programme",
		"Address",
		"On Campus",
		"Recorded By",
		"Recorder's Phone",
		"Recorder's Official ID"
	];

	const guestsData = [],
		staffData = [],
		studentsData = [];
	//pupulate arrays
	props.guestRecordings.map((recording) => {
		try {
			guestsData.push([
				recording.dateRecorded,
				recording.direction,
				recording.temperature,
				recording.guest.name,
				recording.guest.officialId,
				recording.guest.gender,
				recording.guest.phoneNum,
				recording.guest.email,
				recording.guest.physicalAdd,
				recording.purposeOfVisit,
				recording.guest.contactPersonNames,
				recording.guest.contactPersonPhoneNum,
				recording.guest.contactPersonEmail,
				recording.moderator.fullname,
				recording.moderator.phone,
				recording.moderator.identificationNum,
				recording.guest.dateOfRegistration,
				recording.guest.registeredBy,
				recording.guest.station
			]);
		} catch (error) {
			console.log(error);
		}
	});

	props.staffRecordings.map((recording) => {
		try {
			staffData.push([
				recording.dateRecorded,
				recording.direction,
				recording.temperature,
				recording.staff.name,
				recording.staff.employeeId,
				recording.staff.officialId,
				recording.staff.gender,
				recording.staff.phoneNum,
				recording.staff.email,
				recording.staff.department,
				recording.staff.office,
				recording.staff.physicalAdd,
				recording.moderator.fullname,
				recording.moderator.phone,
				recording.moderator.identificationNum
			]);
		} catch (error) {
			console.log(error);
		}
	});

	props.studentRecordings.map((recording) => {
		try {
			studentsData.push([
				recording.dateRecorded,
				recording.direction,
				recording.temperature,
				recording.student.name,
				recording.student.studentId,
				recording.student.officialId,
				recording.student.gender,
				recording.student.phoneNum,
				recording.student.email,
				recording.student.education,
				recording.student.programme,
				recording.student.physicalAdd,
				recording.student.incampus,
				recording.moderator.fullname,
				recording.moderator.phone,
				recording.moderator.identificationNum
			]);
		} catch (error) {
			console.log(error);
		}
	});

	const options = {
		filterType: "multiselect",
		responsive: "scrollMaxHeight"
	};

	return (
		<div>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				spacing={2}
			>
				<Grid item xs={12} className={classes.table}>
					<MUIDataTable
						title={"GUESTS"}
						data={guestsData}
						columns={guestsColumns}
						options={{
							...options,
							...{
								downloadOptions: {
									filename: `${props.station} Guests Table.csv`,
									separator: ","
								}
							}
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<MUIDataTable
						title={"STAFF"}
						data={staffData}
						columns={staffColumns}
						options={{
							...options,
							...{
								downloadOptions: {
									filename: `${props.station} Staff Table.csv`,
									separator: ","
								}
							}
						}}
					/>
				</Grid>
				<Grid item xs={12}>
					<MUIDataTable
						title={"STUDENTS"}
						data={studentsData}
						columns={studentsColumns}
						options={{
							...options,
							...{
								downloadOptions: {
									filename: `${props.station} Students Table.csv`,
									separator: ","
								}
							}
						}}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Tables;
