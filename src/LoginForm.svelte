<script>
    import { createEventDispatcher } from "svelte";
    import IncorrectAlert from "./IncorrectAlert.svelte";

    const dispatch = createEventDispatcher();

    let username = "";
    let password = "";
    let show_alert = false;

    function onLogin() {
        if (
            username == import.meta.env.VITE_USERNAME &&
            password == import.meta.env.VITE_PASSWORD
        ) {
            dispatch("correctCredentials");
        } else {
            dispatch("wrongCredentials");
            show_alert = true;
        }

        username = "";
        password = "";
    }

    function closeAlert() {
        show_alert = false;
    }
</script>

<div class="bg-gray-50 dark:bg-gray-900 font-consolas">
    <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0"
    >
        {#if show_alert}
            <IncorrectAlert on:click={closeAlert} />
        {/if}
        <a
            href="https://www.instagram.com/owaspiiitd"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
            <img
                class="block dark:hidden"
                src="./logo/no_bg_1.svg"
                alt="owasp logo"
                width="400"
            />

            <img
                class="hidden dark:block"
                src="./logo/no_bg_2.svg"
                alt="owasp logo"
                width="400"
            />
        </a>
        <div
            class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                    class="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
                >
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" on:submit={onLogin}>
                    <div>
                        <label
                            for="username"
                            class="block mb-2 text-m font-medium text-gray-900 dark:text-white"
                            >Username</label
                        >
                        <input
                            type="text"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="l33t_5p34k"
                            required
                            bind:value={username}
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-m font-medium text-gray-900 dark:text-white"
                            >Password</label
                        >
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500"
                            required
                            bind:value={password}
                        />
                    </div>
                    <div class="pt-5">
                        <button
                            type="button"
                            class="block w-full h-[50px]  text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800"
                            on:click={onLogin}>Login</button
                        >
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
