import { useState } from 'react';

function AddExpenseForm(props) {

	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');


	const onSubmit = (event) => {
		event.preventDefault();
		const expense = {
			id: props.currentId,
			name: name,
			description: description,
			amount: parseInt(amount),
			project_id: props.project.project_id,
			category_id: props.project.category_id,
			created_at: new Date(),
			created_by: '', //this one need to get from somewhere.
		};

		//axios to post expense to backend

		setName('');
		setAmount('');
		setDescription('');
	};

	return (
		<form onSubmit={onSubmit}>
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