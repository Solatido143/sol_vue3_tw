<script setup>
import {ref} from "vue";
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";

const navigation = [
	{name: "Home", href: "/", active: true},
	{name: "About", href: "/#about"},
	{name: "Projects", href: "/#projects"},
	{name: "Skills", href: "/#skills"},
	{name: "Contact", href: "/#contact"},
];

const mobileMenuOpen = ref(false);
</script>

<template>
	<div class="bg-white">
		<header class="absolute inset-x-0 top-0 z-50">
			<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div class="flex lg:flex-1">
					<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
						<img src="../img/61226400_1284391731709782_6838077067582504960_n.jpg" class="h-8 rounded-full" alt="Logo" />
						<span class="self-center text-2xl tracking-widest font-bold whitespace-nowrap dark:text-neutralLight text-neutralDark"
							>MASC</span
						>
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutralDark"
						@click="mobileMenuOpen = true">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="size-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<a v-for="item in navigation" :key="item.name" :href="item.href" class="navbar-show-lg text-sm/6 text-neutralDark font-bold hover:text-secondary">{{
						item.name
					}}</a>
				</div>
			</nav>
			<Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50" />
				<DialogPanel
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutralLight px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">Ehe</span>
							<img
								class="h-8 w-auto rounded-full"
								src="../img/61226400_1284391731709782_6838077067582504960_n.jpg"
								alt="" />
						</a>
						<button type="button" class="-m-2.5 rounded-md p-2.5 text-primary" @click="mobileMenuOpen = false">
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="size-6" aria-hidden="true" />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-neutralDark">
							<div class="space-y-2 py-6">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutralDark hover:bg-secondary hover:text-neutralLight"
									>{{ item.name }}</a
								>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	</div>
</template>

<style scoped>
	.navbar-show-lg {
		display:inline-block;
		position: relative;
	}
	.navbar-show-lg:after{
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #0a9396;
		transform-origin: bottom left;
		transition: transform 0.25s ease-in-out	;
	}
	.navbar-show-lg:hover::after {
		transform: scaleX(1);
		transform-origin: bottom right;
	}
</style>