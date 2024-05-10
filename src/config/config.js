let url = '';
if(window.location.href.indexOf("localhost") > -1) {
  url = "http://public.test/api/v1/contact";
} else {
  url = "https://rampas-carga-moviles.es/api/v1/contact";
}

export const API_URL = url;