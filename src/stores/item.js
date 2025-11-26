import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useItemStore = defineStore("item", () => {
	const items = useLocalStorage("items", []);

	function addNewItem(newItem) {
		items.value.push(newItem);
	}

	return { items, addNewItem };
});
