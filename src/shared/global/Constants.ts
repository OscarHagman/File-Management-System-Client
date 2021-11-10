enum Fields {
    TITLE = 'title',
    AUTHOR = 'author',
    CATEGORY = 'category',
    FILE = 'file',
    SEARCH = 'search'
}

enum URLs {
    baseURL = 'http://127.0.0.1:3001'
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