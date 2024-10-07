const apartment = {
  type: "rent",
  disposition: "3+1",
  area: {
    floorage: 100,
    balcony: 2,
    units: "sqm",
  },
  city: "Prague",
  district: "Old Town",
  price: {
    rent: 28000,
    fees: {
      water: 1000,
      energy: 2500,
      services: 560,
    },
    currency: "czk",
  },
  ownership: "personal",
  condition: "renovated",
  status: "free",
  floor: 3,
};

/*
Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.
  */

// Pomocí tečkové notace vypište do stránky dispozici bytu.
document.body.innerHTML +=
  "<p>Dispozice bytu: " + apartment.disposition + "</p>";

// Vypište do stránky čistý nájem bez poplatků.
document.body.innerHTML +=
  "<p>Nájem: " + apartment.price.rent + " " + apartment.price.currency + "</p>";

// Vypište do stránky celý objekt představující výměru bytu.

document.body.innerHTML +=
  "<p>Plocha bytu: " +
  apartment.area.floorage +
  " " +
  apartment.area.units +
  ", balkón: " +
  apartment.area.balcony +
  " " +
  apartment.area.units +
  "</p>";

//Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
const city = apartment.city;
const district = apartment.district;

document.body.innerHTML += "<p>Adresa bytu: " + city + ", " + district + "</p>";

// Změnte stav inzerátu z 'free' na 'taken'.
document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + "</p>"; // před změnou
apartment.status = "taken";
document.body.innerHTML += "<p>Stav inzerátu: " + apartment.status + "</p>"; // po změně
