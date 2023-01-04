<script>
	export let data;
	let addTodos = false;
	import AddTodos from '../components/AddTodos.svelte';
	import SingleTodos from '../components/SingleTodos.svelte';

	let todos;
	$: todos = data.body.todos;
</script>

<svelte:head>
	<title>Todos App</title>
</svelte:head>

<section class="md:max-w-[1200px] md:mx-auto mt-5 px-5">
	<div class="flex md:gap-7 items-center md:justify-start justify-between ">
		<h2 class="text-3xl font-bold">Todos</h2>

		{#if addTodos}
			<button
				class="btn btn-sm"
				on:click={() => {
					addTodos = false;
				}}
				>Cancel Add
			</button>
		{:else}
			<button
				class="btn btn-sm"
				on:click={() => {
					addTodos = true;
				}}
			>
				Add Todos</button
			>
		{/if}
	</div>

	{#if addTodos}
		<div>
			<AddTodos />
		</div>
	{/if}

	{#if todos.length > 0}
		<div class="flex flex-col gap-5 mt-10">
			{#each todos as todo (todo.id)}
				<SingleTodos {todo} />
			{/each}
		</div>
	{/if}
</section>
