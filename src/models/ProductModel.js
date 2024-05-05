
export default class ProductModel {
  constructor() {
    this.products = productsJson;
  }

  loadProducts() {
    const products = JSON.parse(JSON.stringify(allProducts));
    this.products = products;
  }

  filterProducts(criteria) {
    return this.products.filter(product => product.product_name.toLowerCase().includes(criteria.toLowerCase()));
  }
}

const productsJson = [{
  id: 1,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-formation_org.jpg",
  product_name: "AZ RAMP-FORMATION 2020 - 8T",
  product_price: "15950",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 2,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-adj-L_org.jpg",
  product_name: "FORMATION 2020 ADJ- 8T-L",
  product_price: "24750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 3,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-adj-10t-zr-stv_org.jpg",
  product_name: "FORMATION 2020 ADJ- 8T-ZR-STV",
  product_price: "30750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 4,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-adj-10t-zr-stv_org.jpg",
  product_name: "FORMATION 2020 ADJ- 10T-ZR-STV",
  product_price: "33750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 5,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR- 8T",
  product_price: "12950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 6,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR- 10T",
  product_price: "13450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 7,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR- 12T",
  product_price: "14250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 8,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR- 15T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 9,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR- 20T",
  product_price: "16950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 10,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/quai-fix_org.jpg",
  product_name: "AZ RAMP-PRIME FIX 10-8 RL",
  product_price: "12900",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 11,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/quai-fix_org.jpg",
  product_name: "AZ RAMP-PRIME FIX 10-10 RL",
  product_price: "13750",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 12,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/quai-fix_org.jpg",
  product_name: "AZ RAMP-PRIME FIX 10-12 RL",
  product_price: "14550",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 13,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpghttps://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-8T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 14,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR- LLO-10T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 15,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR- LLO-12 T",
  product_price: "16950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 16,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR- LLO-15 T",
  product_price: "17950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 17,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR- LLO-20 T",
  product_price: "19750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 18,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR-8T-ZR",
  product_price: "13450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 19,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR-10T-ZR",
  product_price: "13950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 20,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR-12T-ZR",
  product_price: "14750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 21,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR-15T-ZR",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 22,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/rampes-star_org.jpg",
  product_name: "AZ RAMP-STAR-20T-ZR",
  product_price: "17450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 23,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-dispatch_org.jpg",
  product_name: "AZ RAMP-DISPATCH 3-11.9-9.1-6T",
  product_price: "27950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 6
}, {
  id: 24,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-dispatch_org.jpg",
  product_name: "AZ RAMP-DISPATCH 3-11.9-9.1-8T",
  product_price: "29950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 8
}, {
  id: 25,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-dispatch_org.jpg",
  product_name: "AZ RAMP-DISPATCH 3-11.9-9.1-10T",
  product_price: "31950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 10
}, {
  id: 26,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-zr-llo-e_org.jpg",
  product_name: "AZ RAMP-STAR-8-ZR-LLO-E",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 27,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-zr-llo-e_org.jpg",
  product_name: "AZ RAMP-STAR-10-ZR-LLO-E",
  product_price: "18250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 28,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-zr-llo-e_org.jpg",
  product_name: "AZ RAMP-STAR-12-ZR-LLO-E",
  product_price: "19450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 29,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-zr-llo-e_org.jpg",
  product_name: "AZ RAMP-STAR-15-ZR-LLO-E",
  product_price: "20450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 30,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-star-rl-hydraulic_org.jpg",
  product_name: "AZ RAMP-STAR-RL-8T",
  product_price: "13950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 31,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-star-rl-hydraulic_org.jpg",
  product_name: "AZ RAMP-STAR-RL-10T",
  product_price: "14450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 32,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-star-rl-hydraulic_org.jpg",
  product_name: "AZ RAMP-STAR-RL-12T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 33,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-star-rl-hydraulic_org.jpg",
  product_name: "AZ RAMP-STAR-RL-15T",
  product_price: "16250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 34,
  operation: "hydraulique",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramp-star-rl-hydraulic_org.jpg",
  product_name: "AZ RAMP-STAR-RL-20T",
  product_price: "17950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 35,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-11.58_org.jpg",
  product_name: "AZ RAMP-DISPATCH 9-16.44-11.58-6T",
  product_price: "57950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 6
}, {
  id: 36,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-11.58_org.jpg",
  product_name: "AZ RAMP-DISPATCH 9-16.44-11.58-8T",
  product_price: "63950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 8
}, {
  id: 37,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/station-11.58_org.jpg",
  product_name: "AZ RAMP-DISPATCH 9-16.44-11.58-10T",
  product_price: "67950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 10
}, {
  id: 38,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5D9A%2FCA67%2FA74A%2F868F%2F9242%2F0A48%2F3549%2F14E2%2FLogo_AZ_RAMP.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement pour OTC CACES - Fabrication sur mesure",
  product_price: "",
  type: "not_found",
  usage: "loading_ramp",
  weight_capacity: null
}, {
  id: 39,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramps-zr-e_org.jpg",
  product_name: "AZ RAMP-STAR-8T-ZR-E",
  product_price: "15450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 40,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramps-zr-e_org.jpg",
  product_name: "AZ RAMP-STAR-10T-ZR-E",
  product_price: "15950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 41,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramps-zr-e_org.jpg",
  product_name: "AZ RAMP-STAR-12T-ZR-E",
  product_price: "16250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 42,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramps-zr-e_org.jpg",
  product_name: "AZ RAMP-STAR-15T-ZR-E",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 43,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/ramps-zr-e_org.jpg",
  product_name: "AZ RAMP-STAR-20T-ZR-E",
  product_price: "19450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 44,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-xl-e_org.jpg",
  product_name: "AZ RAMP-STAR-10-XL-E",
  product_price: "20950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 45,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-xl-e_org.jpg",
  product_name: "AZ RAMP-STAR-15-XL-E",
  product_price: "22450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 46,
  operation: "electric",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-xl-e_org.jpg",
  product_name: "AZ RAMP-STAR-20-XL-E",
  product_price: "24250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 47,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR-10-XL",
  product_price: "18950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 48,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR-15-XL",
  product_price: "20450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 49,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/llo_org.jpg",
  product_name: "AZ RAMP-STAR-20-XL",
  product_price: "22250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 50,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-otc_org.jpg",
  product_name: "AZ RAMP-STAR-OTC-8T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 51,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-otc_org.jpg",
  product_name: "AZ RAMP-STAR-OTC-10T",
  product_price: "16750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 52,
  operation: "leveler",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/star-otc_org.jpg",
  product_name: "AZ RAMP-STAR-OTC-12T",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 53,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/pps-xl-ls_org.jpg",
  product_name: "AZ RAMP-EASY XL-8-LS, Capacité 8 T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 54,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/pps-xl-ls_org.jpg",
  product_name: "AZ RAMP-EASY XL-10-LS, Capacité 10 T",
  product_price: "16750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 55,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/pps-xl-ls_org.jpg",
  product_name: "AZ RAMP-EASY XL-12-LS, Capacité 12 T",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 56,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/pps-xl-ls_org.jpg",
  product_name: "AZ RAMP-EASY XL-15-LS, Capacité 15 T",
  product_price: "19250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 57,
  operation: "pps",
  product_image: "https://rampas-carga-moviles.es/img/products/normal/pps-xl-ls_org.jpg",
  product_name: "AZ RAMP-EASY XL-20-LS, Capacité 20 T",
  product_price: "20950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}]