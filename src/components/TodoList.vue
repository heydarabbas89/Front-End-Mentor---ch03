<script setup>
	import StatusBar from "./StatusBar.vue";
	import TodoItem from "./TodoItem.vue";
	import { computed } from "vue";
	import { useItemStore } from "@/stores/item";

	const itemStore = useItemStore();
	const items = computed(() => itemStore.items);
</script>

<template>
	<div class="bg-gray-300 shadow-2xl dark:bg-slate-600 rounded-lg">
		<div
			v-if="items.length === 0"
			class="p-4 text-center text-gray-600 dark:text-gray-500 text-sm bg-white dark:bg-gray-800 rounded-t-lg mb-0.5"
		>
			Create a new todo...
		</div>
		<ul v-else class="min-h-12 mb-px rounded-t-lg">
			<TodoItem v-for="(item, index) in items" :key="index" :item="item" />
		</ul>
		<!-- Status bar -->
		<StatusBar />
		<!-- /Status bar -->
	</div>
</template>
