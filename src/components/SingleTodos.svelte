<script>
	export let todo;
	import { invalidateAll, invalidate } from '$app/navigation';
	console.log(todo);

	async function handleDelete(todoId) {
		await fetch('/api/delete', {
			method: 'DELETE',
			body: JSON.stringify(todoId),
			headers: {
				'content-type': 'application/json'
			}
		});
		invalidateAll();
	}

	// import { db } from '../firebase';
	// import { deleteDoc, doc } from 'firebase/firestore';
	// async function handleDelete(todoId) {
	// 	await deleteDoc(doc(db, 'todos', todoId));
	// 	console.log('deleted', todoId);
	// 	invalidateAll();
	// }
</script>

<div class="bg-slate-900 flex justify-between items-center px-5 py-2 text-white rounded-lg">
	{todo.todo}

	<div class="actions flex justify-center items-center gap-3">
		<span class="material-symbols-outlined"> done </span>
		<!-- <span class="material-symbols-outlined cursor-pointer" on:click={() => handleDelete(todo.id)}> close </span> -->
		<span class="material-symbols-outlined cursor-pointer" on:click={() => handleDelete(todo.id)}>
			close
		</span>
	</div>
</div>
