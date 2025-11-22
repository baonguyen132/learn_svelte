<script lang="ts">
    import AuthForm from '$components/AuthForm.svelte';
    
    let { form } = $props();
    console.log(form);
    
</script>

<AuthForm isRegistration={false} form={form} />
