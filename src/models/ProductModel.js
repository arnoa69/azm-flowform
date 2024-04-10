
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
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5BD8%2F8986%2F0822%2FC13F%2FECDA%2F0A48%2F3549%2F17A2%2Frampe_mobile_avec_niveleur_quai_express.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement Fixe avec quai niveleur intégré AZ RAMP-FORMATION 2020 - 8T",
  product_price: "15950",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 2,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DA8%2FD2E1%2FC905%2FB8AD%2F4BB6%2F0A48%2F3549%2FD6A5%2F-rampe-otc-caces-az-machinery.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement fixe Adjacente avec niveleur FORMATION 2020 ADJ- 8T-L",
  product_price: "24750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 3,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DBA%2FC3CC%2F1D27%2F40C3%2F8C35%2F0A48%2F3549%2F4884%2Frampe_startevo_detouree.png&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement fixe Adjacente avec niveleur FORMATION 2020 ADJ- 8T-ZR-STV",
  product_price: "30750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 4,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DBA%2FC5B5%2FFFE6%2F314F%2F3BDC%2F0A48%2F3549%2FABE2%2Frampe_startevo_detouree.png&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement fixe Adjacente avec niveleur FORMATION 2020 ADJ- 10T-ZR-STV",
  product_price: "33750",
  type: "fix_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 5,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F4B%2FC559%2FE579%2F46FA%2F4072%2F0A48%2F3549%2FD39F%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR- 8T",
  product_price: "12950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 6,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DC4%2FB52C%2FB78C%2FA2DC%2F274E%2F0A48%2F3549%2FF05B%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR- 10T",
  product_price: "13450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 7,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DC5%2F9DA4%2F06CD%2FA5D4%2FBD70%2F0A48%2F3549%2F5EDC%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR- 12T",
  product_price: "14250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 8,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DC5%2F9F58%2FB8FF%2F8256%2F81E3%2F0A48%2F3549%2F58DF%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR- 15T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 9,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DC5%2FA0CB%2F4886%2FB14C%2F4D48%2F0A48%2F3549%2F0935%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR- 20T",
  product_price: "16950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 10,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DCA%2FBE91%2F9A18%2F31A6%2F45F2%2F0A48%2F3549%2F67B3%2Fprime-rl-rampe_fixe-2.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Quai fixe- AZ RAMP-PRIME FIX 10-8 RL.Avec garde-corps latéraux",
  product_price: "12900",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 11,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DD0%2F4374%2F264B%2F0B9E%2FCA58%2F0A48%2F3549%2F8EB3%2Fprime-rl-rampe_fixe-2.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Quai fixe- AZ RAMP-PRIME FIX 10-10 RL.Avec garde-corps latéraux",
  product_price: "13750",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 12,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5DD0%2F44A4%2F0D83%2F8ABA%2F35A4%2F0A48%2F3549%2FEDCA%2Fprime-rl-rampe_fixe-2.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Quai fixe- AZ RAMP-PRIME FIX 10-12 RL.Avec garde-corps latéraux",
  product_price: "14550",
  type: "fix_ramp",
  usage: "quai_ramp",
  weight_capacity: 10
}, {
  id: 13,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E10%2FB4EF%2F84C3%2F5AF2%2F1E8E%2F0A48%2F3549%2F1425%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-8T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 14,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E10%2FC372%2F5309%2FB146%2FC341%2F0A48%2F3549%2FA822%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-10T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 15,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E10%2FC46A%2F0FEE%2F7C12%2F7A93%2F0A48%2F3549%2F638A%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-12 T",
  product_price: "16950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 16,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E10%2FC5E6%2F6A4B%2FD248%2F2CD8%2F0A48%2F3549%2F1694%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-15 T",
  product_price: "17950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 17,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E10%2FC6B9%2FEEFF%2FE8FE%2FE538%2F0A48%2F3549%2F900A%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant . AZ RAMP-STAR- LLO-20 T",
  product_price: "19750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 18,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E73%2F4625%2FA586%2F9A55%2F6470%2F0A48%2F3549%2F21F0%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant et ZR 500 mm . AZ RAMP-STAR-8T-ZR",
  product_price: "13450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 19,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E73%2F4D3C%2F5A21%2F09B7%2FDCB4%2F0A48%2F3549%2F9F2B%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant et ZR 500 mm . AZ RAMP-STAR-10T-ZR",
  product_price: "13950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 20,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E73%2F4F93%2F0BBE%2FC8F6%2F93AF%2F0A48%2F3549%2FE066%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant et ZR 500 mm . AZ RAMP-STAR-12T-ZR",
  product_price: "14750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 21,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E73%2F5138%2F1DEE%2FED4F%2F5834%2F0A48%2F3549%2F39FC%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant et ZR 500 mm . AZ RAMP-STAR-15T-ZR",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 22,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5E73%2F5334%2F6562%2F5F9C%2F0122%2F0A48%2F3549%2F9C37%2Faz_ramp_star_ZR_rampe_mobile_avec_zone_refuge.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant et ZR 500 mm . AZ RAMP-STAR-20T-ZR",
  product_price: "17450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 23,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5EC3%2F79D1%2F1887%2F7C1C%2F70CD%2F0A48%2F3549%2F3408%2FStation_de_dechargement_3_camions-logisticien.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe et 3 niveleurs de quai AZ RAMP-DISPATCH 3-11.9-9.1-6T",
  product_price: "27950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 6
}, {
  id: 24,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5EC3%2F8E17%2FACA6%2F0030%2F5118%2F0A48%2F3549%2FE5FE%2FStation_de_dechargement_3_camions-logisticien.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe et 3 niveleurs de quai AZ RAMP-DISPATCH 3-11.9-9.1-8T",
  product_price: "29950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 8
}, {
  id: 25,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5EC3%2F8EED%2F9D35%2F07B9%2FE572%2F0A48%2F3549%2FBFB6%2FStation_de_dechargement_3_camions-logisticien.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe et 3 niveleurs de quai AZ RAMP-DISPATCH 3-11.9-9.1-10T",
  product_price: "31950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 10
}, {
  id: 26,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F43%2F6066%2F56B8%2FCDF7%2F25C9%2F0A48%2F3549%2FBB2B%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec ponts basculants Electrique et ZR 500 mm . AZ RAMP-STAR-8-ZR-LLO-E",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 27,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F43%2F7034%2F4014%2FA175%2F6D74%2F0A48%2F3549%2F4A3A%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec ponts basculants Electrique et ZR 500 mm . AZ RAMP-STAR-10-ZR-LLO-E",
  product_price: "18250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 28,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F43%2F7151%2F9569%2F1354%2F4208%2F0A48%2F3549%2F6A6C%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec ponts basculants Electrique et ZR 500 mm . AZ RAMP-STAR-12-ZR-LLO-E",
  product_price: "19450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 29,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F43%2F727C%2FFC4F%2FE340%2F39EF%2F0A48%2F3549%2FB3FB%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec ponts basculants Electrique et ZR 500 mm . AZ RAMP-STAR-15-ZR-LLO-E",
  product_price: "20450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 30,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F83%2F74EA%2F1D76%2FDF9D%2FED56%2F0A48%2F3549%2F1B98%2FRAMPE_OTC_AVEC_PROTECION_PIETON_ET_NIVELEUR_HYDRAUL.JPG&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR-RL-8T",
  product_price: "13950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 31,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F83%2F7BA5%2F1439%2F2545%2FBBC3%2F0A48%2F3549%2FCE87%2FRAMPE_OTC_AVEC_PROTECION_PIETON_ET_NIVELEUR_HYDRAUL.JPG&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR-RL-10T",
  product_price: "14450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 32,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F83%2F840E%2F7921%2F4D0B%2F683D%2F0A48%2F3549%2F2171%2FRAMPE_OTC_AVEC_PROTECION_PIETON_ET_NIVELEUR_HYDRAUL.JPG&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR-RL-12T",
  product_price: "15250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 33,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F83%2F8670%2FF875%2FF558%2F6689%2F0A48%2F3549%2FDC61%2FRAMPE_OTC_AVEC_PROTECION_PIETON_ET_NIVELEUR_HYDRAUL.JPG&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR-RL-15T",
  product_price: "16250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 34,
  operation: "hydraulique",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F83%2F87FA%2F7B64%2F1DB2%2F0AA2%2F0A48%2F3549%2FE6BF%2FRAMPE_OTC_AVEC_PROTECION_PIETON_ET_NIVELEUR_HYDRAUL.JPG&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec pont basculant hydraulique . AZ RAMP-STAR-RL-20T",
  product_price: "17950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 35,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F94%2F4869%2FD975%2F19AA%2FB03B%2F0A48%2F3566%2F1A49%2FAZ_RAMP-DISPATCH.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe, niveleurs de quai AZ RAMP-DISPATCH 9-16.44-11.58-6T",
  product_price: "57950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 6
}, {
  id: 36,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F94%2F54BF%2FD820%2FE1B7%2F165F%2F0A48%2F3566%2FBFDE%2FAZ_RAMP-DISPATCH.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe, niveleurs de quai AZ RAMP-DISPATCH 9-16.44-11.58-8T",
  product_price: "63950",
  type: "not_found",
  usage: "station_ramp",
  weight_capacity: 8
}, {
  id: 37,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5F94%2F5657%2F679C%2FE34F%2F02B6%2F0A48%2F356B%2FA9BD%2FAZ_RAMP-DISPATCH.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Station Logistique avec rampe, niveleurs de quai AZ RAMP-DISPATCH 9-16.44-11.58-10T",
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
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F5FF2%2F06C4%2FCAFC%2FDAE2%2F3F1F%2F0A48%2F356B%2F3295%2Fstar_zr_detouree.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile électrique avec ZR 500 mm . AZ RAMP-STAR-8T-ZR-E",
  product_price: "15450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 40,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F36D6%2FBA8B%2FD948%2FCBAF%2F0A48%2F356A%2F1D90%2Fstar_zr_detouree.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile électrique avec ZR 500 mm . AZ RAMP-STAR-10T-ZR-E",
  product_price: "15950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 41,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F38E9%2F4738%2F185E%2F574D%2F0A48%2F3566%2F6E55%2Fstar_zr_detouree.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile électrique avec ZR 500 mm . AZ RAMP-STAR-12T-ZR-E",
  product_price: "16250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 42,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F424B%2F5CD2%2FD35A%2F13A1%2F0A48%2F356B%2F5C23%2Fstar_zr_detouree.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile électrique avec ZR 500 mm . AZ RAMP-STAR-15T-ZR-E",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 43,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F43E3%2F3D03%2F8A20%2F37B9%2F0A48%2F356A%2F3F8A%2Fstar_zr_detouree.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile électrique avec ZR 500 mm . AZ RAMP-STAR-20T-ZR-E",
  product_price: "19450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 44,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F92B6%2FBC0E%2F5F17%2FC167%2F0A48%2F356A%2FBDD2%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile Electrique LARGE. AZ RAMP-STAR-10-XL-E",
  product_price: "20950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 45,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2F9FDF%2F0470%2F4079%2F3C4E%2F0A48%2F356A%2FBD21%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile Electrique LARGE. AZ RAMP-STAR-15-XL-E",
  product_price: "22450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 46,
  operation: "electric",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2FA24B%2F3B34%2F519E%2FA3B2%2F0A48%2F3566%2F3856%2Frampe_elec.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile Electrique LARGE. AZ RAMP-STAR-20-XL-E",
  product_price: "24250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 47,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2FA516%2F668E%2F3F63%2F560C%2F0A48%2F356A%2FBD01%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile LARGE. AZ RAMP-STAR-10-XL",
  product_price: "18950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 48,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2FB553%2FD41A%2F6626%2F2F04%2F0A48%2F356A%2F30C9%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile LARGE. AZ RAMP-STAR-15-XL",
  product_price: "20450",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 49,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6011%2FB787%2F298D%2F2D35%2FCE4E%2F0A48%2F356A%2FBBFE%2FRampe_mobile_hydraulique_avec_grand_plan_horizontal_AZ_RAMP_STAR-LLO.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile LARGE. AZ RAMP-STAR-20-XL",
  product_price: "22250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}, {
  id: 50,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6115%2F325C%2F2D6E%2FB931%2FEAEB%2F0A48%2F356A%2F2735%2FAZ-RAMP-star-otc_-_logo.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec niveleur par compensation à gaz. AZ RAMP-STAR-OTC-8T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 51,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6163%2F3B75%2FA50F%2F3E2E%2F75C0%2F0A48%2F356B%2F1F1C%2FAZ-RAMP-star-otc_-_logo.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec niveleur par compensation à gaz. AZ RAMP-STAR-OTC-10T",
  product_price: "16750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 52,
  operation: "leveler",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F6163%2F425F%2FB240%2F12B7%2F9F99%2F0A48%2F356B%2FEA17%2FAZ-RAMP-star-otc_-_logo.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de chargement mobile avec niveleur par compensation à gaz. AZ RAMP-STAR-OTC-12T",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 53,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F64ED%2FDF5A%2F7D8A%2F3B33%2F7156%2F0A48%2F3566%2F0AC8%2F-rampe-chargement-mobile-sur-pneus-azrampa.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement Mobile sur PPS. AZ RAMP-EASY XL-8-LS, Capacité 8 T",
  product_price: "15750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 8
}, {
  id: 54,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F64ED%2FEC65%2F946E%2F6FB5%2F8C16%2F0A48%2F356B%2FDED7%2F-rampe-chargement-mobile-sur-pneus-azrampa.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement Mobile sur PPS. AZ RAMP-EASY XL-10-LS, Capacité 10 T",
  product_price: "16750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 10
}, {
  id: 55,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F64ED%2FEE88%2FCB9F%2F624A%2FCAB5%2F0A48%2F3566%2FBF2B%2F-rampe-chargement-mobile-sur-pneus-azrampa.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement Mobile sur PPS. AZ RAMP-EASY XL-12-LS, Capacité 12 T",
  product_price: "17750",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 12
}, {
  id: 56,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F64ED%2FFB69%2FD125%2F7020%2F9706%2F0A48%2F356A%2F7808%2F-rampe-chargement-mobile-sur-pneus-azrampa.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement Mobile sur PPS. AZ RAMP-EASY XL-15-LS, Capacité 15 T",
  product_price: "19250",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 15
}, {
  id: 57,
  operation: "pps",
  product_image: "https://az-machinery.fr/storage/images/image?remote=https%3A%2F%2Faz-machinery.fr%2FWebRoot%2FStore20%2FShops%2F94d8e2c8-f938-48eb-933d-6e8a524cf7ee%2F64ED%2FFC2D%2F0D05%2FC699%2FC766%2F0A48%2F356B%2FD645%2F-rampe-chargement-mobile-sur-pneus-azrampa.jpg&amp;shop=94d8e2c8-f938-48eb-933d-6e8a524cf7ee&amp;width=600&amp;height=2560",
  product_name: "Rampe de Chargement Mobile sur PPS. AZ RAMP-EASY XL-20-LS, Capacité 20 T",
  product_price: "20950",
  type: "mobile_ramp",
  usage: "loading_ramp",
  weight_capacity: 20
}]