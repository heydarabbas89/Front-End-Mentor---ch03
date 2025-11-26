<script setup>
	import { useItemStore } from "@/stores/item";

	const props = defineProps(["item"]);

	const itemStore = useItemStore();

	function handleDeleteItem() {
		itemStore.deleteItem(props.item.id);
	}

	function handleToggleDone() {
		itemStore.toggleDone(props.item.id);
	}
</script>

<template>
	<li
		class="group w-full bg-white dark:bg-gray-800 first:rounded-t-lg flex items-center mb-px"
	>
		<!-- Item title -->
		<button
			@click="handleToggleDone"
			:aria-label="`Mark '${item.title}' as ${
				item.done ? 'incomplete' : 'complete'
			}`"
			class="w-full p-4 flex items-center cursor-pointer"
		>
			<!-- Item status -->
			<div class="mr-4">
				<div
					v-if="!item.done"
					class="w-5 h-5 border border-gray-300 dark:border-gray-600 rounded-full"
				></div>
				<div
					v-else
					class="w-5 h-5 flex items-center justify-center bg-linear-to-r from-check-from to-check-to rounded-full"
				>
					<img
						src="@/assets/images/icon-check.svg"
						alt="Check icon"
						class="w-2 h-2"
					/>
				</div>
			</div>
			<!-- /Item status -->
			<div
				class="w-full text-xs xl:text-sm text-left overflow-hidden"
				:class="{ 'line-through text-gray-300 dark:text-gray-600': item.done }"
			>
				{{ item.title }}
			</div>
		</button>
		<!-- /Item title -->

		<!-- Delete item -->
		<button
			@click="handleDeleteItem"
			:aria-label="`Delete '${item.title}'`"
			class="p-4 xl:invisible group-hover:visible cursor-pointer"
		>
			<img
				src="@/assets/images/icon-cross.svg"
				class="w-5 h-5"
				alt="Cross icon"
			/>
		</button>
		<!-- /Delete item -->
	</li>
</template>
