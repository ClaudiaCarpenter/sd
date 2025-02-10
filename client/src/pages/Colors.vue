<script setup>
// import ImageEditor from '@toast-ui/vue-image-editor/src/ImageEditor.vue';
// const ImageEditor = require('tui-image-editor').default;
//const FileSaver = require('file-saver').default; //to download edited image to local. Use after npm install file-saver
//const blackTheme = require('./js/theme/black-theme.js').default;

// const instance = new ImageEditor(document.querySelector('#tui-image-editor'), {
//   includeUI: {
//     loadImage: {
//       path: 'img/sampleImage.jpg',
//       name: 'SampleImage',
//     },
// //    theme: blackTheme, // or whiteTheme
//     initMenu: 'filter',
//     menuBarPosition: 'bottom',
//   },
//   cssMaxWidth: 700,
//   cssMaxHeight: 500,
//   selectionStyle: {
//     cornerSize: 20,
//     rotatingPointOffset: 70,
//   },
// });

</script>

<template>
  <div class="m-6">
    <h1 class="font-serif mb-4 text-xl"> Edit image</h1>
    <div id="tui-image-editor"></div>
  </div>
</template>
