export const recipeingredientFormComponents = {
	formId: 'recipeingredient',
	title: 'Recipeingredient',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill recipeingredient title',
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
					value: 'fill recipeingredient description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
