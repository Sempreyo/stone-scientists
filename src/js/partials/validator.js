document.addEventListener('DOMContentLoaded', function() {
	const validator = new JustValidate('#contacts');

	validator
		.addField('#firstName', [
			{
				rule: 'required'
			},
			{
				rule: 'customRegexp',
				value: /^[a-zа-яё]+$/i,
				errorMessage: 'Only letters'
			},
			{
				rule: 'minLength',
				value: 1
			},
			{
				rule: 'maxLength',
				value: 30
			}
		])
		.onSuccess((event) => {
			location.reload();
		})
		.onFail((event) => {
			location.reload();
		})
});