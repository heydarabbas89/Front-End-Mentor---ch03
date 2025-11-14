<script setup>
	import { ref } from "vue";

	const props = defineProps({
		title: String,
		done: Boolean,
	});

	const done = ref(props.done);

	function deleteItem() {
		console.log("deleteItem");
	}
</script>

<template>
	<li
		class="w-full bg-white dark:bg-gray-800 first:rounded-t-lg flex items-center mb-px cursor-pointer"
	>
		<!-- Item title -->
		<div
			@click="done = !done"
			class="w-full flex items-center text-xs xl:text-sm overflow-hidden p-4 peer"
			:class="{ 'line-through text-gray-300 dark:text-gray-600': done }"
		>
			<!-- Item status -->
			<div class="mr-4">
				<div
					v-if="!done"
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
			{{ title }}
		</div>
		<!-- /Item title -->

		<!-- Delete item -->
		<div
			@click.stop="deleteItem()"
			class="xl:invisible p-4 peer-hover:visible hover:visible"
		>
			<img
				src="@/assets/images/icon-cross.svg"
				class="w-5 h-5"
				alt="Cross icon"
			/>
		</div>
		<!-- /Delete item -->
	</li>
</template>
