<script setup lang="ts">
import { ref } from 'vue'
import JoeQuotes from '@/assets/quote_list.json'

const buttonRef = ref<boolean | null>(null)
const resultQuoteIndex = ref<number | null>(null)
const resultLink = ref<string | null>(null)
const resultQuote = ref<string | null>(null)
const resultDate = ref<string | null>(null)

// TODO: if resultQuote, store resultQuote and save that for next query
const getQuote = () => {
  const quotes: array = resultQuoteIndex.value ? JoeQuotes?.['quotes'].filter(quote => {
    return quote?.index != resultQuoteIndex?.value
  }) : JoeQuotes?.['quotes'];
  const rngNumber: number = Math.round(Math.random() * (quotes.length - 1));

  const quoteObj: object = quotes[rngNumber];
  resultQuoteIndex.value = quoteObj.index;
  resultDate.value = quoteObj?.date ? quoteObj?.date : null;
  resultLink.value = quoteObj?.link ? quoteObj?.link : null;
  resultQuote.value = `"` + quoteObj?.quote + `"`;
}

</script>

<template>
  <div class="p-6 bg-white h-[200px] border-[1px] border-slate-300 flex flex-col items-center justify-center rounded-md">
    <Transition name="fade" mode="out-in">
      <div :key="resultQuote" class="flex flex-col gap-2">
        <span class="text-black font-body text-xl italic font-semibold">
          {{ resultQuote }}
        </span>

        <div class="flex justify-between items-center">
          <span v-if="resultDate" class="text-slate-500 font-body text-sm italic">
            {{ resultDate }}
          </span>
          <span v-else-if="!resultDate && resultQuote" class="text-slate-500 font-body text-sm italic">
            undated
          </span>
          
          <a v-if="resultLink" :href="resultLink" target="_blank" class="link link-hover text-slate-700 text-sm">
            Source
          </a>

        </div>
      </div>
    </Transition>
  </div>

  <div class="flex justify-between">
    <button class="btn btn-neutral text-lg w-1/4">
      Submit a quote
    </button>

    <button class="btn btn-primary text-lg w-1/4" ref="buttonRef" @click="getQuote">
      Give me a quote
    </button>
  </div>
</template>

<style scoped>
/* Define the fade-in transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>