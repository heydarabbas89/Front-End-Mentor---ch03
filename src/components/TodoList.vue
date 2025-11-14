<script setup>
	import { ref } from "vue";
	import StatusBar from "./StatusBar.vue";
	import TodoItem from "./TodoItem.vue";

	const done = ref(false);
</script>

<template>
	<div class="bg-gray-300 shadow-2xl dark:bg-slate-600 rounded-lg">
		<ul class="text-gray-800 dark:text-gray-300 mb-px">
			<TodoItem :done="done" title="Complete online javascript cource" />
			<TodoItem :done="done" title="Jog around the park 3x" />
			<TodoItem :done="done" title="10 menutes meditation" />
			<TodoItem :done="done" title="Read for 1 hour" />
			<TodoItem :done="done" title="Pick up groceries" />
			<TodoItem :done="done" title="Complete Todo Apps on Frontend Mentor" />
		</ul>
		<!-- Status bar -->
		<StatusBar />
		<!-- /Status bar -->
	</div>
</template>
