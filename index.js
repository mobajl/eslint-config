require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	plugins: [
		'import'
	],
	env: {
		es2021: true
	},
	parserOptions: {
		sourceType: "module"
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended'
	],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: [
				'import',
				'@typescript-eslint',
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
			},
			parser: '@typescript-eslint/parser',
		},
	],

}
