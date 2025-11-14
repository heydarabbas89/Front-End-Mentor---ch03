<script setup>
	import Logo from "./Logo.vue";
	import ThemeButton from "./ThemeButton.vue";
</script>

<template>
	<header
		class="h-50 lg:h-68 lg:py-6 md:min-h-[18.7] bg-[url('@/assets/images/bg-mobile-light.jpg')] dark:bg-[url('@/assets/images/bg-mobile-dark.jpg')] sm:bg-[url('@/assets/images/bg-desktop-light.jpg')] dark:sm:bg-[url('@/assets/images/bg-desktop-dark.jpg')] bg-no-repeat bg-cover"
	>
		<!-- Title -->
		<div
			class="flex justify-between items-center px-4 py-10 md:py-8 md:px-0 md:w-lg mx-auto"
		>
			<Logo />
			<ThemeButton />
		</div>
		<!-- /Title -->
	</header>
</template>
