import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { computed, ref } from "vue";

export const useItemStore = defineStore("item", () => {
	const storedItems = useLocalStorage("items", []);
	const filter = ref("all"); // "all" | "active" | "completed"
	const items = computed(() => {
		if (filter.value === "active")
			return storedItems.value.filter((item) => item.done !== true);
		if (filter.value === "completed")
			return storedItems.value.filter((item) => item.done === true);
		return storedItems.value;
	});

	function generateId() {
		return `${Date.now()}-${Math.floor(Math.random() * 1e6)}`;
	}

	function addNewItem(newItem) {
		const title = String(newItem?.title ?? "").trim();
		if (!title) return;
		const item = {
			id: newItem.id ?? generateId(),
			title,
			done: !!newItem.done,
		};
		storedItems.value = [...storedItems.value, item];
	}

	function deleteItem(id) {
		storedItems.value = storedItems.value.filter((item) => item.id !== id);
	}

	function clearCompletedItems() {
		storedItems.value = storedItems.value.filter((item) => item.done !== true);
	}

	function displayAllItems() {
		filter.value = "all";
	}

	function displayActiveItems() {
		filter.value = "active";
	}

	function displayCompletedItems() {
		filter.value = "completed";
	}

	function toggleDone(id) {
		storedItems.value = storedItems.value.map((item) =>
			item.id === id ? { ...item, done: !item.done } : item
		);
	}

	return {
		storedItems,
		filter,
		items,
		addNewItem,
		deleteItem,
		toggleDone,
		clearCompletedItems,
		displayAllItems,
		displayActiveItems,
		displayCompletedItems,
	};
});
