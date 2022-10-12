module.exports = {
	root: true,
	plugins: [
		'@typescript-eslint',
		'import',
		'prettier'
	],
	env: {
		es2021: true
	},
	parserOptions: {
		sourceType: "module"
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	rules: {
		'import/order': [
			'warn',
			{
				groups: [['builtin', 'external'], 'internal', ['parent', 'index', 'sibling']],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
				},
			},
		],
	},
	parser: '@typescript-eslint/parser',
}
