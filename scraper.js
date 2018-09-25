const puppeteer = require("puppeteer");
const cleaner = require("./cleaner.mjs");

require("events").EventEmitter.defaultMaxListeners = Infinity;

let a1 = [
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-blancas/leche-entera",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-blancas/leche-semidescremada",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-blancas/leche-descremada",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-blancas/leche-sin-lactosa",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-blancas/leche-individual",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-cultivadas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-saborizadas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leches-saborizadas/saborizadas-sin-lactosa",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/bebidas-vegetales",
    
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-batido",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-frutado",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-funcional",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-light",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-con-cereales",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-defensas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/yoghurt/yoghurt-sin-lactosa",
    

        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/flan",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/jaleas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/compotas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/postres-especiales",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/semola-con-leche",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/leche-asada",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/postres/arroz-con-leche",

        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/mantequillas-y-margarinas/mantecas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/mantequillas-y-margarinas/mantequillas",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/mantequillas-y-margarinas/margarinas",


        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/cremas/crema-chantilly",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/cremas/crema-individual",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/cremas/crema-light-y-funcional",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/cremas/crema-litro",


        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/manjar-y-dulce-de-leche/manjar-bolsa",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/manjar-y-dulce-de-leche/manjar-funcional",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/manjar-y-dulce-de-leche/manjar-pote",
    
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/huevos/huevos-bandeja",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/huevos/huevos-de-codorniz",
        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/huevos/huevos-gallina-libre-y-omega-3",

        "https://nuevo.jumbo.cl/lacteos-y-bebidas-vegetales/leche-en-polvo",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/verduras",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/frutas",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/frutas-y-verduras-organicas",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/frutos-secos",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/frutas-deshidratadas",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/hierbas",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/aderezos",
    

        "https://nuevo.jumbo.cl/frutas-y-verduras/ensaladas-listas",
    

        "https://nuevo.jumbo.cl/despensa/abarrotes/aceite",
        "https://nuevo.jumbo.cl/despensa/abarrotes/arroz",
        "https://nuevo.jumbo.cl/despensa/abarrotes/cereales-y-semillas",
        "https://nuevo.jumbo.cl/despensa/abarrotes/comida-instantanea",
        "https://nuevo.jumbo.cl/despensa/abarrotes/cremas-y-sopas",
        "https://nuevo.jumbo.cl/despensa/abarrotes/fideos",
        "https://nuevo.jumbo.cl/despensa/abarrotes/harina-y-complementos",
        "https://nuevo.jumbo.cl/despensa/abarrotes/legumbres",
        "https://nuevo.jumbo.cl/despensa/abarrotes/pure",
    

        "https://nuevo.jumbo.cl/despensa/coctel/aceitunas",
        "https://nuevo.jumbo.cl/despensa/coctel/encurtidos",
        "https://nuevo.jumbo.cl/despensa/coctel/frutos-secos-y-deshidratados",
        "https://nuevo.jumbo.cl/despensa/coctel/galletas-de-coctel",
        "https://nuevo.jumbo.cl/despensa/coctel/otros-snacks",
        "https://nuevo.jumbo.cl/despensa/coctel/papas-fritas",
        "https://nuevo.jumbo.cl/despensa/coctel/pastas-de-coctel",
    

        "https://nuevo.jumbo.cl/despensa/conservas/conservas-de-pescado",
        "https://nuevo.jumbo.cl/despensa/conservas/conservas-de-pate",
        "https://nuevo.jumbo.cl/despensa/conservas/conservas-de-mariscos",
        "https://nuevo.jumbo.cl/despensa/conservas/comidas-preparadas",
        "https://nuevo.jumbo.cl/despensa/conservas/conservas-de-verduras",
        "https://nuevo.jumbo.cl/despensa/conservas/fruta-en-conserva",
    
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/aji",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/caldos-y-bases",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/condimentos",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/ketchup",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/mayonesa",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/mostazas-y-aderezos",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/sal",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/salsas",
        "https://nuevo.jumbo.cl/despensa/salsas-y-condimentos/sucedaneos-y-vinagres",
    

        "https://nuevo.jumbo.cl/despensa/comidas-etnicas/oriental",
        "https://nuevo.jumbo.cl/despensa/comidas-etnicas/mexicana",
        "https://nuevo.jumbo.cl/despensa/comidas-etnicas/otros",
    
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/azucar",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/barras-de-cereal",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/cafe-y-complementos",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/cereales-y-avena",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/endulzantes",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/mermeladas",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/miel-y-dulces",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/saborizantes",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/desayuno/te-y-hierbas",
    

        "https://nuevo.jumbo.cl/desayuno-y-dulces/postres-y-dulces/decoracion",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/postres-y-dulces/gelatinas-y-flanes",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/postres-y-dulces/horneables",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/postres-y-dulces/leches-condensadas-y-evaporadas",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/postres-y-dulces/salsas-esencias-y-coberturas",
    

        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/chocolates-y-mazapan",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/colaciones",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/dulces-y-gomitas",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/galletas-de-agua-y-soda",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/galletas-alfajores-y-queques",
        "https://nuevo.jumbo.cl/desayuno-y-dulces/confiteria/turron-barquillos-y-cuchuflis",
    

        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/crema-y-untables",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/especiales",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/frescos-y-quesillos",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/gauda",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/mantecosos-y-chanco",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/queseria/rallados-y-granulados",
    

        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/arrollados-y-perniles",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/jamones",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/jamon-serrano-y-otros",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/parrilleros",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/pate",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/salames-y-tocinos",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria/vienesas",
    
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria-jumbo-artesanal/jamones-jumbo-artesanal",
        "https://nuevo.jumbo.cl/quesos-y-fiambres/fiambreria-jumbo-artesanal/parrilleros-jumbo-artesanal",
    

        "https://nuevo.jumbo.cl/quesos-y-fiambres/tablas-de-coctel",
    
        "https://nuevo.jumbo.cl/quesos-y-fiambres/encurtidos",
    

        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/bistec-y-otros",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/carne-americana",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/carne-molida-de-vacuno",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/carne-organica-y-natural",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/carnes-premium",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/cortes-desgrasados",
        "https://nuevo.jumbo.cl/carnes-rojas/carnes-de-vacuno/cortes-tradicionales-al-vacio",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=huesos-y-otros"
    

        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/chuletas",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/costillar-y-costillitas",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/filete",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/lomo",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/malaya-y-plateadas",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/otros-cortes",
        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cerdo/pulpas",
    

        "https://nuevo.jumbo.cl/carnes-rojas/carne-de-cordero",
    

        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=carne-molida-y-bistec-de-pollo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/parrilleros-y-saborizados-de-pollo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pechugas-y-filetes-de-pollo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pollo-americano",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pollo-entero-y-otros",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pollo-listo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pollo-organico",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/pollo-sin-marinar",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pollo/trutros-de-pollo",
    

        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/alitas-y-trutros-de-pavo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/bistec-y-albondigas-de-pavo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/carne-molida-y-picada-de-pavo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/filetes-de-pavo",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=menudencias-de-pavo",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=pavo-entero",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/pechuga-deshuesada-de-pavo",
        "https://nuevo.jumbo.cl/pollo-y-pavo/pavo/pechuga-entera-de-pavo",
    

        "https://nuevo.jumbo.cl/pescaderia/pescados/pescados-congelados",
        "https://nuevo.jumbo.cl/pescaderia/pescados/pescados-frescos",
    

        "https://nuevo.jumbo.cl/pescaderia/mariscos",
    

        "https://nuevo.jumbo.cl/pescaderia/cocktail-pescaderia",
    

        "https://nuevo.jumbo.cl/pescaderia/apanados-y-otros",
    
        "https://nuevo.jumbo.cl/pescaderia/camarones",
    

        "https://nuevo.jumbo.cl/pescaderia/ahumados/ahumados-en-caliente",
        "https://nuevo.jumbo.cl/pescaderia/ahumados/ahumados-en-frio",
    

        "https://nuevo.jumbo.cl/congelados/hamburguesas/hamburguesas-de-vacuno",
        "https://nuevo.jumbo.cl/congelados/hamburguesas/hamburguesas-de-soya",
        "https://nuevo.jumbo.cl/congelados/hamburguesas/hamburguesas-de-pollo",
        "https://nuevo.jumbo.cl/congelados/hamburguesas/hamburguesas-de-pavo",
        "https://nuevo.jumbo.cl/congelados/hamburguesas/hamburguesas-de-cerdo",
    

        "https://nuevo.jumbo.cl/congelados/apanados/nuggets",
        "https://nuevo.jumbo.cl/congelados/apanados/milanesas-y-croquetas-apanadas",
        "https://nuevo.jumbo.cl/congelados/apanados/pechugas-y-filetitos-apanados",
    

        "https://nuevo.jumbo.cl/congelados/churrascos-lomitos-y-otros/carpaccios-y-otros",
        "https://nuevo.jumbo.cl/congelados/churrascos-lomitos-y-otros/churrascos",
        "https://nuevo.jumbo.cl/congelados/churrascos-lomitos-y-otros/lomitos",
    

        "https://nuevo.jumbo.cl/congelados/verduras/legumbres-congeladas",
        "https://nuevo.jumbo.cl/congelados/verduras/papas",
        "https://nuevo.jumbo.cl/congelados/verduras/surtidos-de-verdura",
        "https://nuevo.jumbo.cl/congelados/verduras/tortillas-y-croquetas",
        "https://nuevo.jumbo.cl/congelados/verduras/verduras-congeladas",
    

        "https://nuevo.jumbo.cl/congelados/comidas-preparadas/aperitivos",
        "https://nuevo.jumbo.cl/congelados/comidas-preparadas/comida-chilena",
        "https://nuevo.jumbo.cl/congelados/comidas-preparadas/comida-oriental",
        "https://nuevo.jumbo.cl/congelados/comidas-preparadas/pastas-congeladas",
        "https://nuevo.jumbo.cl/congelados/comidas-preparadas/pizzas",
    

        "https://nuevo.jumbo.cl/congelados/frutas-congeladas/fruta-entera",
        "https://nuevo.jumbo.cl/congelados/frutas-congeladas/pulpa-de-fruta",
    

        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/galletas-y-otros",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/kuchen-pie-y-tartaletas",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/pasteles-y-masitas",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/postres",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/queques-y-brazo-de-reina",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/pasteleria/tortas",
    

        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/baguette",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/hot-dog-y-hamburguesas-granel",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/pan-corriente",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/pan-especial",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/pan-artesanal",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=pan-integral-y-funcional",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-granel/pan-pita-granel",
    

        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/masas-y-tortillas/masas-especiales",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/masas-y-tortillas/masas-empanadas-y-pascualinas",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/masas-y-tortillas/masas-para-pizza",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/masas-y-tortillas/tortillas",
    

        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/cocktail-y-tostadas",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/hot-dog-y-hamburguesas",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/pan-congelado",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/pan-integral-y-funcional-envasado",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/pan-pita-y-panini",
        // THIS LINK IS BROKEN "https://nuevo.jumbo.cl/Sistema/buscavazia?ft=pan-rallado",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/pan-de-molde",
        "https://nuevo.jumbo.cl/panaderia-y-pasteleria/panaderia-envasada/pan-sin-gluten",
    

        "https://nuevo.jumbo.cl/platos-preparados/pastas-frescas/pastas-frescas",
        "https://nuevo.jumbo.cl/platos-preparados/pastas-frescas/pastas-frescas-jumbo-artesanal",
        "https://nuevo.jumbo.cl/platos-preparados/pastas-frescas/salsas-frescas",
    

        "https://nuevo.jumbo.cl/platos-preparados/empanadas",
    

        "https://nuevo.jumbo.cl/platos-preparados/pascualinas-y-quiches",
    

        "https://nuevo.jumbo.cl/platos-preparados/ensaladas-preparadas",
   
        "https://nuevo.jumbo.cl/platos-preparados/pizzas-frescas/pizzas-refrigeradas",
        "https://nuevo.jumbo.cl/platos-preparados/pizzas-frescas/pizzas-y-focaccias-jumbo-artesanal",
    

        "https://nuevo.jumbo.cl/platos-preparados/pastas-de-cocktail",
    

        "https://nuevo.jumbo.cl/platos-preparados/sandwich",
    

        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/bebidas-gaseosas/bebidas-light-o-zero-azucar",
        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/bebidas-gaseosas/bebidas-regulares",
    

        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/aguas-minerales/agua-mineral-con-gas",
        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/aguas-minerales/agua-mineral-sin-gas",
        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/aguas-minerales/agua-saborizada",
    

        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/jugos/jugos-frescos",
        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/jugos/jugos-y-nectar",
        "https://nuevo.jumbo.cl/bebidas-aguas-y-jugos/jugos/te-liquidos"];

let finishedObj = [];

for (let a = 0; a < a1.length; a++) {
    console.log(a1[a]);
    let scrape = async () => {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();

        await page.goto(a1[a], {waitUntil: "networkidle2", timeout: 0});

        const result = await page.evaluate(() => {
            let data = [];
            let pricesArray = [];
            let ppumlist = [];

            let titles = document.getElementsByClassName("product-item__name");
            let prices = document.getElementsByClassName("product-prices__value--best-price");
            let itemData = document.getElementsByClassName("gotten-product-item-data");
            let ppums = document.getElementsByClassName("product-prices__value--ppum");

            // Set up the objects in the data array
            for (let i = 0; i < titles.length; i++) {
                data.push({titles: [], prices: [], ppum: [], sku: []});
            }

            // Extract the titles from the site and add them to the data objects
            for (let i = 0; i < titles.length; i++) {
                let thisTitle = titles[i].innerText;
                data[i].titles.push(thisTitle);
            }

            for (let i = 0; i < itemData.length; i++) {
                let thisSKU = itemData[i].dataset.sku;
                data[i].sku.push(thisSKU);
            }

            // Extract the prices from the site and add them to the data objects
            for (let i = 0; i < prices.length; i++) {
                let thisPrice = prices[i].innerText;
                pricesArray.push(thisPrice);
            }

            
            // Extract the prices por unidad de medida (PUM)
            for (let i = 0; i < ppums.length; i++) {
                let thisPPUM = ppums[i].innerText;
                ppumlist.push(thisPPUM);
            }
            

            // For every title there is, add a price to it
            for (let i = 0; i < titles.length; i++) {
                data[i].prices.push(pricesArray[i]);
                data[i].ppum.push(ppumlist[i]);
            }

            return data;
        });

        browser.close();
        return result;
    };

    // Run the scraper and return the values or catch and log errors
    scrape().then((value) => {
        cleaner.clean(value);
        console.log(value);
    }).catch(function(error) {
    	console.log(error);
    });
}
