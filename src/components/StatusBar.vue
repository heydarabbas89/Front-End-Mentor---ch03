<script setup>
	import Filter from "./Filter.vue";
</script>

<template>
	<div
		class="flex justify-between items-center text-xs bg-white dark:bg-gray-800 p-4 text-gray-400 dark:text-gray-600 font-semibold rounded-b-lg"
	>
		<div><span>5</span> items left</div>
		<Filter class="hidden lg:flex" />
		<div class="cursor-pointer">Clear Completed</div>
	</div>
</template>
