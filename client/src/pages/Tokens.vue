<script setup>
    const onSelectFile = (event) => {
        const file = event.target.files[0];
    
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result; 
                const img = document.getElementById('image-preview');
                img.src = imageData;
            };
            reader.readAsDataURL(file); 
        }    
    };
</script>

<template>
    <div class="m-6">
        <h1 class="font-serif mb-4 text-xl">Create New VTT Token</h1>
        <input type="file" class="file-input w-full max-w-xs text-gray-600" accept="image/*" id="upload-res" @change="onSelectFile"/>
        <img class="mt-10 h-100" id="image-preview"></img>
    </div>
</template>