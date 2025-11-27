<script setup>
	import { useItemStore } from "@/stores/item";
	import Filter from "./Filter.vue";

	defineProps(["itemsLenght"]);

	const itemStore = useItemStore();

	function handleClearCompletedItems() {
		itemStore.clearCompletedItems();
	}
</script>

<template>
	<div
		class="flex justify-between items-center text-xs bg-white dark:bg-gray-800 p-4 text-gray-400 dark:text-gray-600 font-semibold rounded-b-lg"
	>
		<div>
			<span>{{ itemsLenght }}</span> items left
		</div>

		<Filter class="hidden lg:flex" />

		<button
			aria-label="Clear completed items"
			@click="handleClearCompletedItems"
			class="cursor-pointer"
		>
			Clear Completed
		</button>
	</div>
</template>
