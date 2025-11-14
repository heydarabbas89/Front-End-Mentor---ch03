<script setup>
	import { reactive } from "vue";

	const filter = reactive({
		all: true,
		active: false,
		completed: false,
	});
</script>

<template>
	<div
		class="flex justify-evenly items-center lg:basis-2/4 p-4 lg:py-0 dark:bg-gray-800 my-4 lg:my-0 shadow-2xl lg:shadow-transparent rounded-lg bg-white lg:bg-transparent"
	>
		<div
			class="font-bold cursor-pointer"
			:class="filter.all ? 'text-blue-500' : 'text-gray-400 dark:text-gray-600'"
		>
			All
		</div>
		<div
			class="font-bold cursor-pointer"
			:class="
				filter.active ? 'text-blue-500' : 'text-gray-400 dark:text-gray-600'
			"
		>
			Active
		</div>
		<div
			class="font-bold cursor-pointer"
			:class="
				filter.completed ? 'text-blue-500' : 'text-gray-400 dark:text-gray-600'
			"
		>
			Completed
		</div>
	</div>
</template>
