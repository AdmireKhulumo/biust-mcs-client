import { gql } from "apollo-boost";

//Get All recordings from a given station
const getRecordingsQuery = gql`
	query recordings($station: String!, $dateStart: String, $dateEnd: String) {
		recordings(station: $station, dateStart: $dateStart, dateEnd: $dateEnd) {
			candidate
			candidateDbId
			dateRecorded
			direction
			recordedBy
			recordedByDbId
			station
			temperature
			typeOfCandidate
			stationTotalRecords
			guest {
				contactPersonEmail
				contactPersonNames
				contactPersonPhoneNum
				dateOfRegistration
				email
				gender
				name
				officialId
				phoneNum
				physicalAdd
				purposeOfVisit
				registerByDbId
				registeredBy
				station
			}
			staff {
				name
				employeeId
				officialId
				email
				contactNum
				department
				office
				gender
				physicalAdd
			}
			student {
				name
				studentId
				officialId
				contactNum
				email
				gender
				physicalAdd
				incampus
				education
				programme
			}
			moderator {
				fullname
				gender
				email
				phone
				identificationNum
				physicalAddress
				registrationDate
			}
		}
	}
`;

//Get all available stations
const getStationsQuery = gql`
	query stations {
		stations {
			id
			stationName
		}
	}
`;

export { getRecordingsQuery, getStationsQuery };
