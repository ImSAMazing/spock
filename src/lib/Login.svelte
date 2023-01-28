<script lang="ts">
    import Messages from './Messages.svelte';
    import {currentUser, pb} from './pocketbase';

    let username: string;
    let password: string;

    async function login(){
        await pb.collection('users').authWithPassword(username, password);
    }

    async function register(){
        try{
            const data = {
                username, password,
                passwordConfirm: password
            }
            const createdUser = await pb.collection('users').create(data);
            await login();
        }catch(err){
            console.error(err);
        }
    }

    function signOut(){
        pb.authStore.clear();
    }
</script>

{#if $currentUser}
<p>
    Signed in as {$currentUser.username}
    <button on:click={signOut}>Signout</button>
    <Messages/>
</p>
{:else}
    <form on:submit|preventDefault>
        <input placeholder="Username" type="text" bind:value={username}/>
        <input placeholder="Password" type="password" bind:value={password}/>
        <button on:click={register}>Sign up</button>
        <button on:click={login}>Login</button>
    </form>
{/if}