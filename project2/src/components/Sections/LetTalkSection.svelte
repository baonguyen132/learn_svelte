<script lang="ts">
	import {Button, SectionHeline} from "$components";

    let name = $state('');
    let email = $state('');
    let message = $state('');
    let error = $state(false);
    let isEmailSent = $state(false)
    let showError = $state(false)
    let isLoading = $state(false)

    async function handleSubmit() {
        // Handle form submission logic here
        if(!name || !email || !message) error = true;
        else {
            error = false;
            // Submit the form data
            try {
                isLoading = true;
                const response = await fetch('/api/send-mail' , {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, message })
                })
                isLoading = false;

                if(response.ok) {
                    isEmailSent = true;
                    name = '';
                    email = '';
                    message = '';
                } else {
                    showError = true;
                    console.log('Failed to send email');
                }

            } catch (error) {
                console.log(error);
            }
        }
    }

    $effect(() => {
        if(!name || !email || !message) {
            error = false;
        }
    })
</script>
<section class="contact-section mt-m" id="form-contact">
    <SectionHeline title="Let's Talk!" id="let-talk" /> 
    <div class="container default-margin mt-m">
        {#if isEmailSent}
            <div class="form-section">
                <h3>Thank you for reaching out!</h3>
                <p>I appreciate you taking the time to contact me. I'll get back to you as soon as possible.</p>
            </div>

        {:else if showError}
            <div class="form-section">
                <h3>Oops! Something went wrong.</h3>
                <p>There was an error sending your message. Please try again later.</p>
            </div>

        {:else if isLoading}
            <div class="form-section">
                <div class="spinner-container">
                    <div class="spinner"></div>
                    <span>Sending your message...</span>
                </div>
            </div>
        {:else}
            <div class="form-section">
                <form>
                    <input type="text" placeholder="Your Name" required class="text-input mb-m {!error ? '' : 'input-error'}" bind:value={name} />

                    <input type="email" placeholder="Your Email" required class="text-input mb-m {!error ? '' : 'input-error'}" bind:value={email} />

                    <textarea placeholder="Your Message" required class="text-input mb-m {!error ? '' : 'input-error'}" bind:value={message}></textarea>

                    <Button className="btn-black" handleClick={handleSubmit}>Submit</Button>
                </form>
            </div>
        {/if}
        
        <div class="info">
            <h3 class="bold mb-s">Talk to me about your project</h3>
            <p>
                I'm always excited to hear about new and innovative ideas! Whether
                you're in the early stages of planning or have a well-defined project,
                I'm here to help bring your vision to life. Feel free to drop me a
                message with some details about your project, and let's start a
                conversation about how we can work together. I look forward to
                connecting with you and discussing the possibilities. Talk to you soon!
            </p>
        </div>
    </div>
</section>
<style>
    .contact-section {
        padding-bottom: 140px;
    }
    .container {
        display: flex;
        flex-direction: row;
        gap: 60px;
        flex-wrap: wrap;
    }
    .container .form-section {
        flex: 6;
    }
    .container .info {
        flex: 6;
    }

    .text-input {
        width: 100%;
        background-color: rgb(0, 0, 0 , 0.035);
        border-radius: 8px;
        padding: 4px 12px;
        outline: none;
        border: none;
    
    }
    input {
        height: 48px;
    }
    textarea {
        height: 120px;
        margin-bottom: 40px;
    }

    input::placeholder, textarea::placeholder {
        font-size: 20px;
        font-weight: 400px;
    }

    .input-error {
        border: 1px solid red;
        background-color: rgba(248, 4, 4, 0.76);
    }
    .input-error::placeholder {
        color: white;
    }
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black ;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        animation: spin 1s linear infinite;

    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .spinner-container {
        display: flex;
    }
</style>