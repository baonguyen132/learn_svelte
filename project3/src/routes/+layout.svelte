<script>
	import Header from '$components/Layout/Header.svelte';
	import { invalidate } from '$app/navigation';
	import { setUserState } from '$lib/state/user-state.svelte.ts';
    import "../app.css"

    let { children, data } = $props();
    let { supabase, session } = $derived(data);


    let userState = setUserState({ session: data.session, supabase: data.supabase, user: data.user });



    $effect(() => {
        const {data} = supabase.auth.onAuthStateChange((_, newSession) => {
            userState.updateState({ session: newSession, supabase, user: newSession?.user || null });

            if(newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });
        return () => data.subscription?.unsubscribe();
    })

</script>

<Header />
{@render children()}

