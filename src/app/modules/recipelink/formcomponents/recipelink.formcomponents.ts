export const recipelinkFormComponents = {
	formId: 'recipelink',
	title: 'Recipelink',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill recipelink title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill recipelink description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
