<template>
	<div>
		<AppHeader />
		<router-view />
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
export default {
	name: "BasicLayout",
	components: {
		AppHeader,
		AppFooter,
	},
}
</script>

<style></style>
