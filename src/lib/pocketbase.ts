import Pocketbase from 'pocketbase';
import {writable} from 'svelte/store';

export const pb = new Pocketbase(import.meta.env.VITE_POCKETBASE);
export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
    console.log("authStore changed");
    currentUser.set(pb.authStore.model);
});