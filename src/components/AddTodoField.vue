<script setup>
	import { useItemStore } from "@/stores/item";
	import { ref } from "vue";

	const itemStore = useItemStore();
	const title = ref("");

	function addItem() {
		const trimmedTitle = title.value.trim();
		if (!trimmedTitle) return; // avoid empty todos
		itemStore.addNewItem({ title: trimmedTitle, done: false });
		title.value = "";
	}
</script>

<template>
	<form
		@submit.prevent="addItem"
		class="bg-white dark:bg-gray-800 rounded-lg flex items-center mb-4 xl:mb-5"
	>
		<div class="pl-4 lg:p-4">
			<div
				class="border border-gray-300 dark:border-gray-600 rounded-full w-5 h-5"
			></div>
		</div>

		<input
			aria-label="Create a new todo"
			v-model="title"
			type="text"
			class="py-4 pr-4 lg:py-4 w-full text-sm rounded-r-lg focus:outline-0 dark:text-gray-300"
			placeholder="Create a new todo..."
		/>
	</form>
</template>
