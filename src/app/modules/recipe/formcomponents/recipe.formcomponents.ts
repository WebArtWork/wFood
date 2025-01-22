export const recipeFormComponents = {
	formId: 'recipe',
	title: 'Recipe',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill recipe title',
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
					value: 'fill recipe description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
