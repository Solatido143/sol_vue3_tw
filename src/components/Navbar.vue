<script setup>
import {ref} from "vue";
import {Dialog, DialogPanel} from "@headlessui/vue";
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/24/outline";

const navigation = [
	{name: "Home", href: "#", active: true},
	{name: "About", href: "#about"},
	{name: "Projects", href: "#projects"},
	{name: "Skills", href: "#skills"},
	{name: "Contact", href: "#contact"},
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
						<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black"
							>M.A. Sol Cruz</span
						>
					</a>
				</div>
				<div class="flex lg:hidden">
					<button
						type="button"
						class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = true">
						<span class="sr-only">Open main menu</span>
						<Bars3Icon class="size-6" aria-hidden="true" />
					</button>
				</div>
				<div class="hidden lg:flex lg:gap-x-12">
					<a
						v-for="item in navigation"
						:key="item.name"
						:href="item.href"
						class="text-sm/6 font-semibold text-gray-900"
						>{{ item.name }}</a
					>
				</div>
			</nav>
			<Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
				<div class="fixed inset-0 z-50" />
				<DialogPanel
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">Your Company</span>
							<img
								class="h-8 w-auto"
								src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
								alt="" />
						</a>
						<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
							<span class="sr-only">Close menu</span>
							<XMarkIcon class="size-6" aria-hidden="true" />
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<div class="space-y-2 py-6">
								<a
									v-for="item in navigation"
									:key="item.name"
									:href="item.href"
									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>{{ item.name }}</a
								>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	</div>

	<!-- <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10">
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img
					src="../img/61226400_1284391731709782_6838077067582504960_n.jpg"
					class="h-8 rounded-full"
					alt="Logo" />
				<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black"
					>M.A. Sol Cruz</span
				>
			</a>
			<button
				data-collapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15" />
				</svg>
			</button>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
				<ul
					class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a
							href="#"
							class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
							aria-current="page"
							>Home</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>About</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>Projects</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>Skills</a
						>
					</li>
					<li>
						<a
							href="#"
							class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	</nav> -->
</template>
