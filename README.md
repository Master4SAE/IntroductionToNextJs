domain = introduction-to-next-js-kappa.vercel.app

#Tallenna Github-repoon README.md-tiedosto, jossa on seuraavat asiat:
#1 kuvakaappaukset sovelluksen käyttöliittymästä: 
<img width="1440" alt="Screenshot 2024-04-03 at 16 07 30" src="https://github.com/Master4SAE/IntroductionToNextJs/assets/111730844/b84806fe-2e64-4970-a69e-716a36e898ff">
<img width="1440" alt="Screenshot 2024-04-03 at 16 07 24" src="https://github.com/Master4SAE/IntroductionToNextJs/assets/111730844/b3c263fa-b537-483c-94af-163d6271e2bb">
<img width="1440" alt="Screenshot 2024-04-03 at 16 07 18" src="https://github.com/Master4SAE/IntroductionToNextJs/assets/111730844/3f9ab01c-b662-4494-b2ba-910b4fa7ba1f">
<img width="1440" alt="Screenshot 2024-04-03 at 16 07 14" src="https://github.com/Master4SAE/IntroductionToNextJs/assets/111730844/a82b6df6-491f-436c-9cfb-b61ad4e8dff2">
<img width="1440" alt="Screenshot 2024-04-03 at 16 07 10" src="https://github.com/Master4SAE/IntroductionToNextJs/assets/111730844/a2de96b4-5c0f-4d92-8642-ef370b018628">

#2 linkki julkaistuun sovellukseen (front-end), tai jos toteutit sovelluksen react nativella, tarvittavat käyttööntottoohjeet, jotta sovelluksen saa toimimaan esim. expo go:lla
domain = introduction-to-next-js-kappa.vercel.app

#3 tietokannan kuvaus: 
  1. Users (Käyttäjät):
Tämä taulu tallentaa sovelluksen käyttäjien tiedot.
Kukin käyttäjä on uniikki, ja heillä on nimi, sähköpostiosoite ja salasana.
Käyttäjien tietoturva on otettu huomioon salasanojen suolan ja hash-funktion käytöllä.
  2. Invoices (Laskut):
Tämä taulu tallentaa laskutustietoja.
Jokainen lasku on sidoksissa asiakkaaseen (customer_id), ja sillä on määrä (amount), status (status) ja päivämäärä (date).
Laskun tila voi olla esimerkiksi "maksamaton", "maksettu" jne.
  3. Customers (Asiakkaat):
Tässä taulussa säilytetään asiakkaiden tietoja.
Jokaisella asiakkaalla on uniikki tunniste (id), nimi, sähköpostiosoite ja mahdollisesti kuvaus (image_url).
  4. Revenue (Tulot):
Tämä taulu tallentaa tulotietoja.
Tulotiedot voi olla aggregaattia, kuten kuukausittainen kokonaistulo.
Taulussa on kentät kuukaudelle (month) ja tulolle (revenue).

  5. Kunkin taulun luomisen ja tietojen syöttämisen yhteydessä käytetään uuid_generate_v4() -funktiota luomaan UUID:tä (uniikki tunniste) sekä tarkistetaan konfliktit (esim. jos uniikki avain on jo olemassa). Tietokantaan luodaan myös tarvittavat laajennukset, kuten "uuid-ossp" UUID-generaattoria varten. Kaikki taulut on suunniteltu niin, että ne voidaan luoda tarvittaessa ja tietoja voidaan lisätä niiden avulla sovelluksen käyttöön. Lisäksi tietokantaan on huomioitu tietoturva-aspektit, kuten salasanojen hash-funktiot ja tietojen ainutlaatuisuuden varmistaminen.

#4 listaus ja kuvaus kaikista toiminnallisuuksista, mitä olet toteuttanut
mahdolliset tiedossa olevat bugit/ongelmat: 
1. Responsivinen sovellus.
2. kirjautuminen
3. tiedot haku, poista, päivitys ja lisäys tietokantaan.
4. next.js sovellus.
5. käytetty Tailwind
6. uuden asiakkaan tekeminen(saatta olla vielä kesken).
   
#5 referenssit, käytetyt tutoriaalit, grafiikkakirjastot, tms.
olen käyttänyt vercel introduction kurssin tutoriaalit tämän sovelluksen tekemisen.
