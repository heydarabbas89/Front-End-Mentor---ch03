<script setup>
	import { useDark, useToggle } from "@vueuse/core";

	const isDark = useDark();
	const toggleDark = useToggle(isDark);
</script>

<template>
	<button
		@click="toggleDark()"
		class="w-9 h-9 flex content-center p-2 cursor-pointer"
	>
		<img v-if="!isDark" src="@/assets/images/icon-moon.svg" alt="icon moon" />
		<img v-else src="@/assets/images/icon-sun.svg" alt="icon moon" />
	</button>
</template>
