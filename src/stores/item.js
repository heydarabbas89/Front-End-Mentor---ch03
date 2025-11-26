import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useItemStore = defineStore("item", () => {
	const items = useLocalStorage("items", []);

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
		items.value = [...items.value, item];
	}

	function deleteItem(id) {
		items.value = items.value.filter((item) => item.id !== id);
	}

	function toggleDone(id) {
		items.value = items.value.map((item) =>
			item.id === id ? { ...item, done: !item.done } : item
		);
	}

	return { items, addNewItem, deleteItem, toggleDone };
});
