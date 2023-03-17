<script lang="ts">
    import LoginForm from "./LoginForm.svelte";

    let correctCredentials = true;

</script>

{#if correctCredentials}

    <p class="bg-white text-black font-consolas md:h-screen text-left dark:bg-black dark:text-white">{import.meta.env.VITE_FLAG}</p>
    


{:else}
    <LoginForm on:correctCredentials={() => {correctCredentials = true}}/>
    
{/if}
<!-- <form on:submit|preventDefault={onLogin}>
    <input type="text"  />
    <input type="password" />
    <button>Login</button>
</form> -->