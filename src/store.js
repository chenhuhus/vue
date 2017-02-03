const STORAGE_KEY = 'comment'
export default {
	fetch: function () {
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	},
	save: function (items) {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	}
	// fetch () {
	// 	return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
	// },
	// save (items) {
	// 	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	// }
}