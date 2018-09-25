let m = [ { titles: [ 'Yoghurt Griego con trozos, frutos rojos 110 g' ],
    prices: [ '$349' ],
    sku: [ '44536' ] },
  { titles: [ 'Yoghurt batido Batifrut Soprole clásico durazno 165 g' ],
    prices: [ '$399' ],
    sku: [ '20420' ] },
  { titles: [ 'Yoghurt Quillayes Griego Natural 900 g' ],
    prices: [ '$2.339' ],
    sku: [ '7278' ] },
  { titles: 
     [ 'Yoghurt con Trozos de Fruta Danone Colchón de Frutas Trozos Frutilla 150 g' ],
    prices: [ '$409' ],
    sku: [ '7248' ] },
  { titles: 
     [ 'Yoghurt con Trozos de Fruta Danone Colchón de Frutas Frutos del Bosque 150 g' ],
    prices: [ '$409' ],
    sku: [ '7246' ] },
  { titles: [ 'Yoghurt con Trozos de Fruta Danone Papaya 110 g' ],
    prices: [ '$315' ],
    sku: [ '7244' ] },
  { titles: [ 'Yoghurt griego Danone trozos frutilla 110 g' ],
    prices: [ '$315' ],
    sku: [ '7243' ] },
  { titles: [ 'Yoghurt con Trozos de Fruta Danone Durazno 110 g' ],
    prices: [ '$315' ],
    sku: [ '7242' ] },
  { titles: [ 'Yogurt griego trozos Nestlé mango papaya 110 g' ],
    prices: [ '$319' ],
    sku: [ '25505' ] },
  { titles: [ 'Yoghurt Griego Manzana Maracuya Shake Danone 150 g' ],
    prices: [ '$409' ],
    sku: [ '20504' ] },
  { titles: [ 'Yoghurt Griego con Durazno Soprole 110 g' ],
    prices: [ '$339' ],
    sku: [ '20430' ] },
  { titles: [ 'Yoghurt batido Batifrut Soprole clásico mora 165 g' ],
    prices: [ '$399' ],
    sku: [ '20419' ] },
  { titles: [ 'Yoghurt batido Batifrut Soprole clásico piña 165 g' ],
    prices: [ '$399' ],
    sku: [ '20418' ] },
  { titles: [ 'Yoghurt Griego Soprole con trozos de Frutilla 110 g' ],
    prices: [ '$339' ],
    sku: [ '7286' ] },
  { titles: [ 'Yoghurt Batifrut Soprole Americano Mora 155 g' ],
    prices: [ '$475' ],
    sku: [ '7284' ] },
  { titles: [ 'Yoghurt Batifrut Soprole Americano Frutilla 155 g' ],
    prices: [ '$1.599' ],
    sku: [ '7283' ] },
  { titles: 
     [ 'Yoghurt Gold Soprole Nueces Pasas Almendras y Manzana 165 g' ],
    prices: [ '$475' ],
    sku: [ '7259' ] },
  { titles: [ 'Yoghurt Gold Soprole Cocholate Almendra 165 g' ],
    prices: [ '$1.599' ],
    sku: [ '7257' ] } ]

module.exports = { clean: function(toclean) {
		let arr = [];
		var corrArr = [];

		for (let i = 0; i < toclean.length; i++) {
			// Find the price in the object
			//console.log(toclean[i]);
			for (let j = 0; j < toclean[i].prices.length; j++) {
				// Find each item inside the price of the object
				//console.log("PRE CLEAN", toclean[i].prices[j]);
				for (let k = 0; k < toclean[i].prices[j].length; k++) {
					// Make a new list with each item of the price
					arr.push(toclean[i].prices[j][k]);
					// console.log("loop", k, "arr", arr);
					// Filter the new array that has each item of the price
					var corrArr = arr.filter(function(num) {
						// if the item is one of these signs ignore it
						if (num == "$" || num == ".") {
							return 
						} else { // if we want the number, return it
							return num
						}
					});
				}
				toclean[i].prices[j] = corrArr.join("");
				//console.log("POST CLEAN", toclean[i].prices[j])
				arr = []
			}
		}
		return toclean;
	}
}

//thought process: get into the item at index i of the object m, then enter the price in object m index i, and then 
//loop through that price looking for the $ and . and remove them, and then replace the price in object m index i
//with the new string you made, without $ and .








