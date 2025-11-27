<script setup>
	import { useItemStore } from "@/stores/item";
	import { ref } from "vue";

	const itemStore = useItemStore();
	const activeFilter = ref("all");

	const filters = [
		{ id: "all", label: "All", action: () => itemStore.displayAllItems() },
		{
			id: "active",
			label: "Active",
			action: () => itemStore.displayActiveItems(),
		},
		{
			id: "completed",
			label: "Completed",
			action: () => itemStore.displayCompletedItems(),
		},
	];

	function setFilter(filterId) {
		activeFilter.value = filterId;
		const filter = filters.find((f) => f.id === filterId);
		filter?.action();
	}
</script>

<template>
	<div
		class="flex justify-evenly items-center lg:basis-2/4 p-4 lg:py-0 dark:bg-gray-800 my-4 lg:my-0 shadow-2xl lg:shadow-transparent rounded-lg bg-white lg:bg-transparent"
	>
		<button
			v-for="filter in filters"
			:key="filter.id"
			@click="setFilter(filter.id)"
			:aria-label="`Show ${filter.id} items`"
			class="font-bold cursor-pointer"
			:class="
				activeFilter === filter.id
					? 'text-blue-500'
					: 'text-gray-400 dark:text-gray-600'
			"
		>
			{{ filter.label }}
		</button>
	</div>
</template>
