
(async () => {
    const url = 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price?referenceCurrencyUuid=yhjMzLPhuIDl';
    const opcionesDePrecio = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c03868d1e5msh9d4c2b7e2d38274p198bbdjsn88ad61a6143a',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
  
    try {
      const respuesta = await fetch(url, opcionesDePrecio);
      const resultado = await respuesta.text();
      console.log(resultado);
    } catch (error) {
      console.error(error);
    }
  })();

const resultadoAPI = {"status":"success","data":{"price":"42198.69187003291","timestamp":1702651200}};

const precioBTC = document.getElementById("cryptoPrice");
precioBTC.textContent = `Precio actual de BTC: U$D ${Number(resultadoAPI.data.price).toFixed(2)}`;

// let totalDolares = total;
let totalDolares = 400;

// Convertir precio del servicio a btc
let resAPI = Number(resultadoAPI.data.price);

totalBTC = totalDolares / resAPI;


const precioEQ = document.getElementById("totalPrice");
precioEQ.textContent = `Precio del servicio equivalente en BTC es de: ${totalBTC.toFixed(10)} BTC`;
