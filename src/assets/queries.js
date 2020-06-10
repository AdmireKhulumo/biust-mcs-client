import { gql } from "apollo-boost";

//Get All recordings from a given station
const getRecordingsQuery = gql`
	query recordings($station: String!) {
		recordings(station: $station) {
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
				physicalAdd
			}
			student {
				name
				studentId
				officialId
				contactNum
				email
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

export { getRecordingsQuery };
