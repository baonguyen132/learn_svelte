<script lang="ts">
    import AuthForm from '$components/AuthForm.svelte';
    import type { ActionData } from './$types.js';
    
    interface PageProps {
        form: ActionData;
    }
    
    let { form }: PageProps = $props();
</script>

<AuthForm isRegistration={false} form={form} />
