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
		<ul class="min-h-12 text-gray-800 dark:text-gray-300 mb-px rounded-t-lg">
			<TodoItem
				v-for="(item, index) in items"
				:key="index"
				:item="item"
				:itemId="index"
			/>
		</ul>
		<!-- Status bar -->
		<StatusBar />
		<!-- /Status bar -->
	</div>
</template>
