'use strict';

const todoInner = document.querySelector('.todo-list__inner');
const input = document.querySelector('input');
const addBtn = document.querySelector('.add');
const popup = document.querySelector('.pop');

addBtn.addEventListener('click', () => {
	if (input.value !== '') {
		const div = document.createElement('div');
		const deleteNoteBtn = document.createElement('button');
		const changeNoteBtn = document.createElement('button');
		const cancelNoteBtn = document.createElement('button');

		div.classList.add('note');
		deleteNoteBtn.classList.add('delete');
		changeNoteBtn.classList.add('change');
		cancelNoteBtn.classList.add('cancel');

		div.textContent = input.value;
		deleteNoteBtn.textContent = 'X';
		changeNoteBtn.textContent = 'C';
		cancelNoteBtn.textContent = 'X';

		todoInner.append(div);
		todoInner.append(changeNoteBtn);
		todoInner.append(deleteNoteBtn);

		input.value = '';

		changeNoteBtn.onclick = () => {
			popup.classList.remove('pop');
			popup.classList.add('popup');
			input.classList.add('input-pop');
			popup.append(cancelNoteBtn);
		};

		cancelNoteBtn.onclick = () => {
			popup.classList.remove('popup');
			input.classList.remove('input-pop');
			popup.classList.add('pop');
			cancelNoteBtn.parentNode.removeChild(cancelNoteBtn);
			input.value = '';
		};
		
		deleteNoteBtn.onclick = () => {
			div.parentNode.removeChild(div);
			deleteNoteBtn.parentNode.removeChild(deleteNoteBtn);
			changeNoteBtn.parentNode.removeChild(changeNoteBtn);
		};
	};
});