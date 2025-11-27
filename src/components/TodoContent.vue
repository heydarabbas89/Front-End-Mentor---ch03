<script setup>
	import AddTodoField from "./AddTodoField.vue";
	import Filter from "./Filter.vue";
	import TodoList from "./TodoList.vue";
</script>

<template>
	<!-- Todo content -->
	<section
		class="bg-transparent -translate-y-28 md:-translate-y-30 lg:-translate-y-34 xl:-translate-y-30 sm:w-lg p-4 sm:px-0 sm:py-6 xl:py-0 mx-auto"
	>
		<!-- Add todo -->
		<AddTodoField />
		<!-- /Add todo -->

		<!-- Todo list -->
		<TodoList />
		<!-- /Todo list -->

		<!-- Filter -->
		<Filter class="lg:hidden" />
		<!-- /Filter -->

		<!-- Drag & Drop notes -->
		<p class="text-center text-gray-400 dark:text-gray-600 py-3 my-8 xl:my-12">
			Drag and drop to reorder list
		</p>
	</section>
	<!-- /Todo content -->
</template>
