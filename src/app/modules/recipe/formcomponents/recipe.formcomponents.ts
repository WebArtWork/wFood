export const recipeFormComponents = {
	formId: 'recipe',
	title: 'Recipe',
	components: [
	  {
		name: 'Text',
		key: 'name',
		focused: true,
		readOnly: true, // Додаємо readOnly для неактивних полів
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
		readOnly: true, // Аналогічно, робимо опис неактивним
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
	  },
	  {
		name: 'Text',
		key: 'imageUrl',
		readOnly: true, // Якщо потрібно, можна зробити і поле з URL зображення неактивним
		fields: [
		  {
			name: 'Placeholder',
			value: 'insert image URL',
		  },
		  {
			name: 'Label',
			value: 'Image URL',
		  }
		]
	  }
	]
  }
  