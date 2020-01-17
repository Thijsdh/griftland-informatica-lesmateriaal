(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{262:function(e,a,r){"use strict";r.r(a);var n=r(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"oefenopdrachten"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oefenopdrachten","aria-hidden":"true"}},[e._v("#")]),e._v(" 📗 Oefenopdrachten")]),e._v(" "),r("p",[e._v("Er zijn veel typische problemen waarbij het gebruik van recursie erg handig kan zijn om tot een oplossing te komen. In dit hoofdstuk worden enkele van deze voorbeelden besproken:\n")]),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#vermenigvuldigen"}},[e._v("Vermenigvuldigen")])]),r("li",[r("a",{attrs:{href:"#palindroom"}},[e._v("Palindroom")])]),r("li",[r("a",{attrs:{href:"#van-decimaal-naar-binair"}},[e._v("Van decimaal naar binair")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"vermenigvuldigen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vermenigvuldigen","aria-hidden":"true"}},[e._v("#")]),e._v(" Vermenigvuldigen")]),e._v(" "),r("p",[e._v("Het vermenigvuldigen van twee gehele getallen is een rekenkundige bewerking met hetzelfde resultaat als het herhaald optellen van steeds eenzelfde getal. Op deze manier kan het product van twee getallen dus worden berekend. De pseudocode zou er als volgt uit kunnen zien:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Product (a, b)\n\nresultaat := 0;\nZolang a > 0\n\tresultaat := resultaat + b\n\ta := a-1\nProduct := resultaat\n")])])]),r("p",[e._v("Opdracht: Ontwerp een recursief algoritme waarmee het product van twee getallen wordt berekend door middel van herhaald optellen.")]),e._v(" "),r("h2",{attrs:{id:"palindroom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#palindroom","aria-hidden":"true"}},[e._v("#")]),e._v(" Palindroom")]),e._v(" "),r("p",[e._v("Een palindroom (ook wel een keerwoord of een spiegelwoord genoemd) is een woord waarin de letters symmetrisch gerangschikt zijn, zodanig dat het woord van achter naar voren gelezen hetzelfde is als van voor naar achter. Een algoritme waarmee wordt bepaald of een woord een palindroom is zou er (in pseudocode) als volgt uit kunnen zien:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Palindroom (woord)\n\nx := 1\ny := lengte(woord)\nok := waar\nZolang (ok) en (x < y)\n    Als (woord[x]<>woord[y])\n        ok := niet waar\n    x := x+1\n    y := y-1\nPalindroom := ok\n")])])]),r("p",[e._v("Opdracht: Ontwerp een algoritme voor een recursieve functie waarin wordt bepaald of een woord een palindroom is.")]),e._v(" "),r("h2",{attrs:{id:"van-decimaal-naar-binair"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#van-decimaal-naar-binair","aria-hidden":"true"}},[e._v("#")]),e._v(" Van decimaal naar binair")]),e._v(" "),r("p",[e._v("Er zijn verschillende manieren om de binaire representatie van een decimale waarde te bepalen. Een van deze manieren is door herhaaldelijk de decimale waarde door 2 te delen en te kijken wat de restwaarde is. Deze restwaarde wordt aan de (voorkant van de ) binaire representatie toegevoegd. Dit wordt herhaald zolang de decimale waarde groter is dan 0.")]),e._v(" "),r("p",[e._v("Stel dat je de binaire representatie van de decimale waarde 13 wilt berekenen. Je begint met een lege binaire representatie.")]),e._v(" "),r("ul",[r("li",[e._v("Begin\n"),r("ul",[r("li",[e._v("Waarde: 13, Binaire representatie: ''")])])]),e._v(" "),r("li",[e._v("Stap 1:\n"),r("ul",[r("li",[e._v("Als je 13 deelt door 2 dan is de restwaarde 1. Deze 1 wordt aan de (voorkant van de) binaire representatie toegevoegd:")]),e._v(" "),r("li",[e._v("Waarde: 6, Binaire representatie: '1'")])])]),e._v(" "),r("li",[e._v("Stap 2:\n"),r("ul",[r("li",[e._v("Als je 6 deelt door 2 dan is de restwaarde 0. Deze 0 wordt aan de (voorkant van de) binaire representatie toegevoegd:")]),e._v(" "),r("li",[e._v("Waarde: 3, Binaire representatie: '01'")])])]),e._v(" "),r("li",[e._v("Stap 3:\n"),r("ul",[r("li",[e._v("Als je 3 deelt door 2 dan is de restwaarde 1. Deze 1 wordt aan de (voorkant van de) binaire representatie toegevoegd:")]),e._v(" "),r("li",[e._v("Waarde: 1, Binaire representatie: '101'")])])]),e._v(" "),r("li",[e._v("Stap 4:\n"),r("ul",[r("li",[e._v("Als je 1 deelt door 2 dan is de restwaarde 1. Deze 1 wordt aan de (voorkant van de) binaire representatie toegevoegd:")]),e._v(" "),r("li",[e._v("Waarde: 0, Binaire representatie: '1101'")])])])]),e._v(" "),r("p",[e._v("Een niet recursief algoritme zou er als volgt kunnen uitzien:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("BinString (waarde)\n\nresultaat := ''\nherhaal\n    helft := waarde / 2\n    restwaarde := waarde – (helft * 2)\n    resultaat := restwaarde + resultaat\n    waarde := helft;\ntotdat waarde=0;\nBinString := resultaat\n")])])]),r("ul",[r("li",[r("p",[e._v("Opmerking 1:\nEr wordt in dit algoritme vanuit gegaan dat bij de berekening van getal / 2 de cijfer achter de komma wegvallen: het resultaat van deze berekening is een geheel getal.")])]),e._v(" "),r("li",[r("p",[e._v("Opmerking 2:\nMet resultaat := restwaarde+resultaat wordt bedoeld dat de waarde van rest (0 of 1) aan de voorkant van resultaat wordt geplakt.")])])]),e._v(" "),r("p",[e._v("Opdracht: Ontwerp een algoritme voor een recursieve functie waarmee de binaire representatie van een decimale waarde wordt bepaald.")])])}],!1,null,null,null);a.default=t.exports}}]);