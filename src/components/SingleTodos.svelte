<script>
	export let todo;

	console.log(todo);
</script>

<div class="bg-slate-900 flex justify-between items-center px-5 py-2 text-white rounded-lg">
	{todo.todo}

	<div class="actions flex justify-center items-center gap-3">
		<span class="material-symbols-outlined"> done </span>
		<span class="material-symbols-outlined"> close </span>
	</div>
</div>
