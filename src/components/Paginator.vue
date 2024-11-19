<template>
  <div class="paginator">
    <button
      @click="changePage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="paginator__arrow-button"
    >
      <img
        src="/assets/images/material-icons/arrow-back.svg"
        alt="back arrow"
      />
    </button>

    <button
      v-for="pageNum in totalPages"
      :key="pageNum"
      @click="changePage(pageNum)"
      :class="[
        'paginator__page-number',
        currentPage === pageNum ? 'active' : '',
      ]"
    >
      {{ pageNum }}
    </button>

    <button
      @click="changePage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="paginator__arrow-button"
    >
      <img
        src="/assets/images/material-icons/arrow-forward.svg"
        alt="forward arrow"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  totalElements: {
    type: Number,
    default: 0,
  },
  elementsPerPage: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["page-changed"]);
const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(props.totalElements / props.elementsPerPage) || 1;
});

const changePage = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage;
    emit("page-changed", newPage);
  }
};
</script>

<style scoped lang="scss">
.paginator {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  &__arrow-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    box-shadow: none;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__page-number {
    padding: 0.4rem 0.8rem;
    border: none;
    border-radius: 40px;
    background: white;
    cursor: pointer;
    min-width: 2.5rem;
    text-align: center;
    color: black;

    &.active {
      background-color: var(--c-blue-500);
      color: white;
    }
  }
}
</style>
