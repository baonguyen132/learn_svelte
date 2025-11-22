<script>
	import Header from '$components/Layout/Header.svelte';
	import { invalidate } from '$app/navigation';
	import { setUserState } from '$components/state/user-state.svelte.ts';

    let { children, data } = $props();
    let { supabase, session , user } = $derived(data);

    let userState = setUserState({ session: data.session, supabase: data.supabase, user: data.user });

    $effect(() => {
        userState.updateState({ session, supabase, user });
        
        
    })

    $effect(() => {
        const {data} = supabase.auth.onAuthStateChange((_, newSession) => {
            if(newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });
        return () => data.subscription?.unsubscribe();
    })

</script>

<Header />
{@render children()}

