<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import axios from "axios";

interface Faq {
	id: number;
	question: string;
	answer: string;
	category: string;
}

const faqs = ref<Faq[]>([]);
const searchQuery = ref("");
const selectedCategory = ref("");
const categories = ref<string[]>([]);
const selectedFaq = ref<number | null>(null);
const isLoading = ref(true);

const fetchFaqs = async () => {
	try {
		isLoading.value = true;
		const response = await axios.get(
			"https://thuisborg.dotcms.online/api/v1/content-manger/get-data/tb-faq?sortBy=id&orderBy=asc"
		);
		faqs.value = response.data.result;
		categories.value = Array.from(new Set(faqs.value.map((faq) => faq.category)));
	} catch (error) {
		console.error("Error fetching FAQs:", error);
	} finally {
		isLoading.value = false;
	}
};

let debounceTimer: any;
const debounceSearch = () => {
	if (debounceTimer) clearTimeout(debounceTimer);
	debounceTimer = setTimeout(() => {
		console.log(searchQuery.value);
	}, 1000);
};

const toggleTag = (category: string) => {
	if (selectedCategory.value === category) {
		selectedCategory.value = "";
	} else {
		selectedCategory.value = category;
	}
};

const toggleFaqAnswer = (index: number) => {
	selectedFaq.value = selectedFaq.value === index ? null : index;
};

const filteredFaqs = computed(() => {
	return faqs.value.filter((faq: any) => {
		const matchesCategory = !selectedCategory.value || faq.category === selectedCategory.value;
		const matchesSearchQuery =
			faq.question.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchQuery.value.toLowerCase());
		return matchesCategory && matchesSearchQuery;
	});
});

onMounted(() => {
	fetchFaqs();
});
</script>

<template>
	<div class="flex flex-col min-h-screen w-screen px-6 pb-8 pt-32">
		<!-- Page Header - Title -->
		<header class="mb-8">
			<h1 class="text-4xl font-bold text-blue-600 mb-4">FAQ</h1>
		</header>

		<!-- Page Content -->
		<div class="">
			<!-- Search bar -->
			<div>
				<input
					v-model="searchQuery"
					@input="debounceSearch"
					type="text"
					placeholder="Search FAQs..."
					class="px-4 py-2 border border-gray-300 rounded-lg w-full"
				/>
			</div>

			<!-- Category tags -->
			<div class="mt-6 flex flex-wrap items-center justify-center">
				<span
					v-for="(category, index) in categories"
					:key="index"
					@click="toggleTag(category)"
					:class="{
						'bg-blue-200 text-blue-800': selectedCategory !== category,
						'bg-blue-800 text-white': selectedCategory === category,
					}"
					class="inline-flex items-center rounded-full py-1 px-3 m-1 cursor-pointer select-none"
				>
					{{ category }}
				</span>
			</div>

			<!-- Loading -->
			<div v-if="isLoading" class="mt-4 flex items-center justify-center gap-2">
				<svg
					class="animate-spin h-8 w-8 text-blue-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
					<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6H4z"></path>
				</svg>
				<span class="text-blue-500">Loading FAQs... </span>
			</div>

			<!-- FAQ List -->
			<div class="mt-8">
				<div
					v-for="(item, index) in filteredFaqs"
					:key="index"
					class="faq-item p-4 border border-slate-300 mb-4 rounded-lg cursor-pointer hover:bg-slate-100"
					@click="toggleFaqAnswer(index)"
				>
					<div class="flex justify-between items-center">
						<h3 class="text-lg font-bold">{{ item.question }}</h3>
						<span class="text-xl">
							<i
								:class="{
									'fas fa-chevron-down': selectedFaq === index,
									'fas fa-chevron-up': selectedFaq !== index,
								}"
							></i>
						</span>
					</div>
					<div class="mt-4.5" v-if="selectedFaq === index" v-html="item.answer"></div>
				</div>
			</div>
		</div>
	</div>
</template>
