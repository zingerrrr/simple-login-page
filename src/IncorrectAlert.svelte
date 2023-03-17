<div
  role="alert"
  class="rounded-xl border border-gray-100 p-4 shadow-xl dark:border-gray-800 mx-[400px] bg-red-900"
>
  <div class="flex items-start gap-4">
    <div class="flex-1">
      <strong class="block font-medium text-gray-900 dark:text-white">
        Wrong Credentials
      </strong>
      
    </div>

    <button on:click
      class="text-gray-500 transition hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500"
    >
      <span class="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>
