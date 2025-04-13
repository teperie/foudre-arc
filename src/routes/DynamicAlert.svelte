<script>
    import { showAlert } from "$lib/utils/showAlert"

    let inputText = "안녕하세요"
    let isChecked = false
</script>

<div>
    <input type="text" bind:value={inputText} placeholder="안녕못해요" />
    <label>
        <input type="checkbox" bind:checked={isChecked} />
        브라우저
    </label>
    <button on:click={() => showAlert(inputText, isChecked)}>Show Alert</button>
</div>

<style>
    div {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    input[type="text"] {
        padding: 5px;
        font-size: 1rem;
    }

    input[type="checkbox"] {
        margin-right: 5px;
    }

    button {
        padding: 5px 10px;
        font-size: 1rem;
        cursor: pointer;
    }

    label {
        display: flex;
        align-items: center;
    }
</style>
