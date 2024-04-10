import { createApp } from 'vue'

const queryParams = new URLSearchParams(window.location.search);
let type = queryParams.get('type');

// Handle the case when 'type' is null
if (!type) {
  type = 'rampes'; // Provide a default value or handle the error accordingly
}


const dynamicImport = async () => {
  try {
    const { default: FormType } = await import(`./${type}/Index.vue`);
    const app = createApp(FormType);
    app.mount('#app');
  } catch (error) {
    console.error(error);
  }
}

dynamicImport();
