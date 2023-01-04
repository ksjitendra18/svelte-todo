import { json } from '@sveltejs/kit';
import {
	addDoc,
	collection,
	getDocs,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp
} from 'firebase/firestore';
import { db } from '../firebase';

export const actions = {
	addTodo: async ({ fetch, request }) => {
		const formData = await request.formData();

		const todo = formData.get('todo');

		try {
			await addDoc(collection(db, 'todos'), {
				todo: todo,
				isCompleted: false,
				createdAt: serverTimestamp()
			});
		} catch (err) {
			console.log('Error', err);
		}
	}
};

const fetchTodos = async () => {
	const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));

	// const getTodos = onSnapshot(q, (querySnapshot) => {
	// 	let todosArray = [];
	// 	querySnapshot.forEach((doc) => {
	// 		// console.log({...doc.data()});
	// 		todosArray.push({ ...doc.data(), id: doc.id, createdAt: '' });
	// 		console.log('todos array', todosArray);
	// 	});

	// 	return todosArray;
	// });
	// return getTodos();

	let todosArray = [];

	const querySnapshot = await getDocs(q);
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		todosArray.push({ ...doc.data(), id: doc.id, createdAt: '' });
		// console.log(doc.id, ' => ', doc.data());
	});

	return todosArray;
};

export async function load() {
	return {
		body: {
			todos: await fetchTodos()
		}
	};
}
