import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';

export async function DELETE({ request }) {
	const todoId = await request.json();
	console.log('todo id is', todoId);
	await deleteDoc(doc(db, 'todos', todoId));
	console.log('deleted');

	return new Response({ success: true });
}
