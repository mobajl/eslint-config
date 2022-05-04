require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
		'import'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
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
	}
}
