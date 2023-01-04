<script>
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/addTodo" use:enhance class="mt-10 flex gap-5 items-center">
	<input
		type="text"
		placeholder="Add a todo..."
		name="todo"
		class="input input-bordered w-full max-w-xs"
	/>
	<button class="btn">Add Todos</button>
</form>
