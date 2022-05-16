import moment from 'moment'

export const getDate = (seconds: number) => {
	return moment(seconds).format('D MMM, hh:mm')
}
