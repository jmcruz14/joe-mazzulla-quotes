<script setup lang="ts">
import { ref } from 'vue'
import QuoteSection from '@/components/QuoteSection.vue'
import JoeGPT from '@/components/JoeGPT.vue'
import AboutSection from '@/components/AboutSection.vue'

// import JoeAvatar from './assets/joe_mazzulla_avatar.webp'
// import HelloWorld from './components/HelloWorld.vue'

const activeTab = ref<string | null>('Generate Quote');
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
}

</script>

<template>
  <div class="m-0 p-0 h-[100vh] flex flex-col justify-center">
    <div class="p-8 m-4 flex flex-col gap-8 h-1/2 w-3/4 self-center card shadow-xl">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-6 items-center">
          <span class="text-4xl font-weight-medium">Joe Mazzulla Quote Generator</span>
          <!-- <img src="./assets/joe_mazzulla_avatar.png" /> -->
          <div class="avatar">
            <div class="w-12 rounded">
              <img src="https://hoopshype.com/wp-content/uploads/sites/92/2022/09/i_a2_65_ca_joe-mazzulla.png" />
            </div>
          </div>
        </div>

        <div class="flex row-reverse ">
          <div class="tooltip hover:cursor-pointer" data-tip="GitHub">
            <a target="_blank" href="https://github.com/jmcruz14/joe-mazzulla-quotes">
              <i class="lab la-github text-4xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div role="tablist" class="tabs tabs-lifted">
        <a 
          role="tab"
          class="tab" 
          :class="{ 
            'tab-active': activeTab === 'Generate Quote',
            '[--tab-bg:#30A659]': activeTab === 'Generate Quote',
            'text-black': activeTab === 'Generate Quote'
          }" 
          @click="setActiveTab('Generate Quote')"
        >
          Generate Quote
        </a>
        <a 
          role="tab" 
          class="tab tab-disabled" 
          :class="{ 
            'tab-active': activeTab === 'Talk to Joe',
            '[--tab-bg:#30A659]': activeTab === 'Talk to Joe',
            'text-black': activeTab === 'Talk to Joe' 
          }"
        >
          Talk to Joe
        </a>
        <a 
          role="tab" 
          class="tab" 
          :class="{ 
            'tab-active': activeTab === 'About',
            '[--tab-bg:#30A659]': activeTab === 'About',
            'text-black': activeTab === 'About' 
          }" 
          @click="setActiveTab('About')"
        >
          About
        </a>
      </div>

      <!-- put content here -->
      <QuoteSection v-if="activeTab === 'Generate Quote'" />
      <AboutSection v-if="activeTab === 'About'" />
      <JoeGPT v-if="activeTab === 'Talk to Joe'" />
    </div>
  </div>
</template>

<style scoped>
</style>
