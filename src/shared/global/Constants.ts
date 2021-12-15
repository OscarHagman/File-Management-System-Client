enum Fields {
	TITLE = 'title',
	AUTHOR = 'author',
	CATEGORY = 'category',
	FILE = 'file',
	SEARCH = 'search',
	SUBJECTS = 'subjects'
}

enum URLs {
	baseURL_DEV = 'http://127.0.0.1:3001',
	baseURL_PROD = 'https://codic-file-management-system.herokuapp.com',
	baseURL_DEMO = "http://85.226.48.250"
}

const CATEGORIES = [
	'Assignment',
	'Lecture Material',
	'Exercise',
	'Examination'
]

const Constants = {
	Fields,
	URLs,
	CATEGORIES
}


export default Constants
