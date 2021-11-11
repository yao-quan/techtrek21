import { useState, useEffect } from 'react';
import axios from 'axios';

function AddExpenseForm(props) {

	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		setName(props.form.name);
		setAmount(props.form.amount);
		setDescription(props.form.description);
	}, [props.form.name, props.form.amount, props.form.description])

	const onSubmit = (event) => {
		event.preventDefault();

		// axios to post expense to backend
		axios.post('localhost:8001/update-expense-budget', {
			id: props.currentId,
			name: name,
			description: description,
			amount: parseInt(amount),
			project_id: props.form.project_id,
			category_id: props.form.category_id,
			updated_by: props.form.updated_by,
			updated_at: new Date(),
		}).then(response => {
			console.log(response)
			// here i need to update the list
		})

		// setName('');
		// setAmount('');
		// setDescription('');
	};

	return (
		<form onSubmit={onSubmit} key={props.form}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='name'
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='name'>Description</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='description'
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</div>
				<div class='col-sm col-lg-4'>
					<label for='amount'>Amount</label>
					<input
						required='required'
						type='number'
						class='form-control'
						id='amount'
						value={amount}
						onChange={(event) => setAmount(event.target.value)}
					/>
				</div>
			</div>
			<div class='row mt-3'>
				<div class='col-sm'>
					<button type='submit' class='btn btn-primary'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;