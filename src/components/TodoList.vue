<script setup>
	import StatusBar from "./StatusBar.vue";
	import TodoItem from "./TodoItem.vue";
	import Draggable from "vuedraggable";
	import { useItemStore } from "@/stores/item";
	import { storeToRefs } from "pinia";

	const itemStore = useItemStore();
	const { items } = storeToRefs(itemStore);
</script>

<template>
	<div class="bg-gray-300 shadow-2xl dark:bg-slate-600 rounded-lg">
		<div
			v-if="items.length === 0"
			class="p-4 text-center text-gray-600 dark:text-gray-500 text-sm bg-white dark:bg-gray-800 rounded-t-lg mb-0.5"
		>
			Create a new todo...
		</div>

		<ul>
			<TodoItem v-for="(item, index) in items" :key="index" :item="item" />
		</ul>
		<!-- <Draggable
			v-else
			tag="ul"
			v-model="items"
			group="items"
			item-key="id"
			drag-class="drag"
			class="min-h-12 mb-px rounded-t-lg"
		>
			<template #item="{ element }">
				<TodoItem :item="element" />
			</template>
		</Draggable> -->
		<!-- Status bar -->
		<StatusBar :itemsLenght="items.length" />
		<!-- /Status bar -->
	</div>
</template>
