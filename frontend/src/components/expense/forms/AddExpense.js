import axios from 'axios';
import { useState, useEffect } from 'react';

function AddExpenseForm(props) {

	const [id, setId] = useState('');
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');

	const onSubmit = (event) => {
		console.log(props.project)
		event.preventDefault();
		const expense = {
			id: id,
			name: name,
			description: description,
			amount: parseInt(amount),
			project_id: props.project.id,
			category_id: category,
			created_at: new Date(),
			created_by: 'someone', //this one need to get from somewhere.
			updated_by: 'someone',
			updated_at: new Date()
		};
		//axios to post expense to backend

		axios.post('/add-expense', expense)

		setId('')
		setName('');
		setAmount('');
		setDescription('');
	};

	const handleChange = (event) => {
		setCategory(event.target.value)
	}

	useEffect(() => {
		setId('')
		setName('');
		setAmount('');
		setDescription('');
	}, [])

	return (
		<form onSubmit={onSubmit}>
			<div class='row'>
				<div class='col-sm col-lg-4'>
					<label for='id'>ID</label>
					<input
						required='required'
						type='text'
						class='form-control'
						id='id'
						value={id}
						onChange={(event) => setId(event.target.value)}
					/>
				</div>
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
				<div class='col-sm col-lg-4'>
					<label for='name'>Category</label>
					<select class='form-control' value={category} onChange={handleChange}>
						<option value='1'>Production</option>
						<option value='2'>Operation</option>
						<option value='3'>Financial</option>
						<option value='4'>Vendor</option>
						<option value='5'>Manpower</option>
						<option value='6'>Software</option>
						<option value='7'>Hardware</option>
					</select>
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