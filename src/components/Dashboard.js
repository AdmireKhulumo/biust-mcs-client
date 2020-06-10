import React, { useState } from "react";
import Tables from "./Tables";
import Charts from "./Charts";
import Selections from "./Selections";

//queries stuff
import { useQuery } from "@apollo/react-hooks";
import { getRecordingsQuery } from "../assets/queries";

//MUI
import { Grid, Typography, Paper } from "@material-ui/core";

function Dashboard() {
	const [station, setStation] = useState("New Main Gate");
	//const [guestRecordings, setGuestRecordings]=useState();
	//const [staffRecordings, setStaffRecordings]=useState();
	//const [studentRecordings, setstudentRecordings]=useState();

	//hook for getting recordings
	const {
		loading: recordingsLoading,
		error: recordingsError,
		data: recordingsData
	} = useQuery(getRecordingsQuery, { variables: { station } });

	if (recordingsError) {
		console.log(recordingsError);
	}

	const guestRecordings = [],
		staffRecordings = [],
		studentRecordings = [];

	if (recordingsLoading == false) {
		const recordings = recordingsData.recordings; //pick up array of recordings

		//creating individual arrays for guests, staff, and students
		recordings.map((recording) => {
			if (recording.typeOfCandidate === "Guest") {
				guestRecordings.push(recording);
			} else if (recording.typeOfCandidate === "Staff") {
				staffRecordings.push(recording);
			} else if (recording.typeOfCandidate === "Student") {
				studentRecordings.push(recording);
			}
		});
	} else {
		return <Typography variant="overline">Loading Data</Typography>;
	}

	return (
		<div>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="center"
				spacing={2}
			>
				<Grid
					item
					xs={11}
					sm={11}
					md={11}
					lg={11}
					style={{ marginTop: "20px" }}
				>
					<Paper>
						<Selections />
					</Paper>
				</Grid>
				<Grid item xs={11} sm={11} md={11} lg={11}>
					<Charts
						guestRecordings={guestRecordings}
						staffRecordings={staffRecordings}
						studentRecordings={studentRecordings}
						station={station}
					/>
				</Grid>
				<Grid item xs={11} sm={11} md={11} lg={11}>
					<Tables
						guestRecordings={guestRecordings}
						staffRecordings={staffRecordings}
						studentRecordings={studentRecordings}
						station={station}
					/>
				</Grid>
			</Grid>
		</div>
	);
}

export default Dashboard;
