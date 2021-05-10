# Bitcoin Converter
> Convertește numărul dorit de bitcoin în orice monedă.

## Cuprins
* [Descriere problemă](#descriere-probkemă)
* [Interfață utilizator](#Interfată-utiliator)
* [Tehnologii](#tehnologii)
* [Descriere API](#descriere-api)
* [Autentificare și autorizare servicii utilizate](#autentificare)
* [Flux de date](#flux-date)
* [To-do list](#to-do)
* [Referinte](#referinte)
* [Contact](#contact)

## Descriere problemă
Tehnologia blockchain a dobândit o recunoaștere tot mai largă din partea publicului. Bitcoin, numit și Gold 2.0, este la ora actuală cea mai puternică cryptomonedă.
Prețul cryptomonedelor este exprimat în USD, însă fiind monede virtuale acestea sunt foarte volatile iar prețul fluctuează și calculul ar putea să-ți fie dat peste cap în câteva secunde.

Aplicația își propune să convertească în timp real numărul de Bitcoin pe care dorești să îl achiziționezi, în orice monedă tradițională.

## Interfața utilizator

Introducere parametrii

<img width="838" alt="conv1" src="https://user-images.githubusercontent.com/83670295/117683449-bf840380-b1bc-11eb-802a-91dda86cf409.PNG">

Obținere rezultat

<img width="823" alt="conv2" src="https://user-images.githubusercontent.com/83670295/117683835-1ee21380-b1bd-11eb-8259-c308358794e3.PNG">


## Tehnologii
* Node.js
* JavaScript
* HTML
* CSS

## Descriere API
* Primul API utilizat întoarce un JSON cu prețul actual al unui Bitcoin exprimat în USD.

Request (Metoda HTTP: GET ) la endpoint-ul:
`"https://api.coindesk.com/v1/bpi/currentprice/BTC.json"`

Response:
`{"time":{"updated":"May 8, 2021 11:31:00 UTC","updatedISO":"2021-05-08T11:31:00+00:00","updateduk":"May 8, 2021 at 12:31 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"58,739.6211","description":"United States Dollar","rate_float":58739.6211},"BTC":{"code":"BTC","rate":"1.0000","description":"Bitcoin","rate_float":1}}}`

 Prețul unui Bitcoin este dat de valoare atributului bpi.USD.rate

* AL doilea API utilizat întoarce un JSON cu prețul actual USD în toate celelalte monede tradiționale.

Request (Metoda HTTP: GET) la endpoint-ul:
`"https://api.vatcomply.com/rates?base=USD"`

Response:
`{"date":"2021-05-07","base":"USD","rates":{"EUR":0.8292561572269674,"USD":1.0,"JPY":109.26279127622522,"BGN":1.621859192304503,"CZK":21.296956629902976,"DKK":6.166431710755452,"GBP":0.7198772700887304,"HUF":296.8819968488266,"PLN":3.794178621776267,"RON":4.085330458578655,"SEK":8.39729662492744,"CHF":0.9091135251679244,"ISK":124.8030516626586,"NOK":8.30292727423501,"HRK":6.248030516626587,"RUB":74.19114354424082,"TRY":8.294137158968406,"AUD":1.2872543328634216,"BRL":5.290737208723774,"CAD":1.2180943693506925,"CNY":6.452359233767311,"HKD":7.766896094203499,"IDR":14270.14677833983,"ILS":3.270420432871714,"INR":73.50319263620533,"KRW":1119.927025458164,"MXN":20.06849655858695,"MYR":4.112032506841364,"NZD":1.3873455510407164,"PHP":47.88705531138569,"SGD":1.3318683141222325,"THB":31.170080437847254,"ZAR":14.25184509494983}}`

Prețul unui USD este dat de accesarea valorii atributului rates.[curreny], currency reprezentând moneda selectată de către utilizator.

## Autentificare și autorizare servicii utilizate
Cele două API-uri utilizate sunt publice, însă am întâmpinat dificultăți în ceea ce privește CORS policy.
Acestea au fost tratate oferind acces pe partea de backend, la primirea răspunsului:

`res.header("Access-Control-Allow-Origin", "*");`
`res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");`
`res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");`
`res.header('Content-Type', 'application/json');`


## Flux de date
Utilizatorul introduce de la tastatură numărul de bitcoin pe care dorește să îl convertească și selectează dintr-un drop-down list moneda în care se va face conversia.
Se face un request către primul API, care întoarce un JSON ce conținte prețul unui Bitcoin exprimat în USD în acel moment.
Ulterior, se face un request către al doilea API, care întoarce un JSON ce conține prețul unui USD exprimat în toate celelalte monede tradiționale.
Din acest JSON este selectat valoarea atributului dat de către utilizator, respectiv moneda în care se dorește a se face conversia.
În final, utilizând response-urile de la cele două API-uri, aplicația întoarce suma convertită în monedă tradițională.



## To-do list
* Convertirea oricărei cryptomonede existente pe piață
* Convertirea în sens invers, din monede tradiționale, în criptomonede


## Referinte
* API BITCON: https://www.coindesk.com/coindesk-api
* API USD Exchange: https://vatcomply.com

## Contact
Created by onofrasigianina17@stud.ase.ro - feel free to contact me!
