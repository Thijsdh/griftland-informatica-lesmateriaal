(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{228:function(e,n,a){e.exports=a.p+"assets/img/variabelen.c97c2a8c.png"},264:function(e,n,a){"use strict";a.r(n);var t=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"gegevens-en-gegevenssoorten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gegevens-en-gegevenssoorten","aria-hidden":"true"}},[e._v("#")]),e._v(" 📗 Gegevens en gegevenssoorten")]),e._v(" "),t("p",[e._v("Wanneer je programma's gaat schrijven, dan kom je al snel in aanraking met het begrip variabele. Een variabele is eigenlijk niets anders dan een opslagplaats waarin je allerlei gegevens kunt bewaren. Ga er voorlopig maar vanuit dat deze opslagplaats zich, volgens het Turingmodel, in het geheugen van een computer bevindt. Het doel van een computergeheugen is: het opslaan en lezen van gegevens die belangrijk zijn voor de werking van een programma of voor de werking van de computer in het algemeen. Computerprogramma’s maken gebruik van veel verschillende variabelen. Om onderscheid te kunnen maken tussen deze variabelen heeft iedere variabele een eigen naam. De naam van een variabele wordt een identifier genoemd.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(228),alt:"Variabelen"}})]),e._v(" "),t("p",[e._v("Bij programmeren wordt informatie in het computergeheugen gewijzigd. Dit gebeurt door waarden van de variabelen te veranderen. Elke keer dat de computer de naam van de variabele (een identifier) in het programma tegenkomt, wordt de waarde gebruikt die in het geheugen wordt gevonden. Op deze manier worden de waarden in de stukjes geheugenruimte opgevraagd of gewijzigd. In dit voorbeeld zijn er twee variabelen met als identifiers x en y. Door het toekennen van waarden aan deze variabelen (x:=5; en y:=7;) worden er waarden geplaatst in de bijbehorende stukjes geheugenruimte. Met de volgende instructie worden beide getallen bij elkaar opgeteld: z:=x+y;. Het stukje geheugenruimte waar de identifier z naar verwijst bevat nu de som van de waarden die zijn opgeslagen in de stukjes geheugenruimte waar de identifiers x en y naar verwijzen. Met de opdracht “readln(x);” wordt de inhoud van de variabele met identifier x getoond. Met de opdracht “writeln(y);” wordt aan de gebruiker gevraagd om een waarde in te voeren. De ingevoerde waarde wordt opgeslagen in de variabele met identifier y.")]),e._v(" "),t("p",[e._v("In voorgaand voorbeeld werden in de variabelen gehele getallen opgeslagen. Het is echter ook mogelijk om andere soorten waarden op te slaan. Het soort gegevens dat in een variabele wordt opgeslagen wordt het gegevenstype van een variabele genoemd.")]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"elementaire-gevenstypes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elementaire-gevenstypes","aria-hidden":"true"}},[e._v("#")]),e._v(" Elementaire gevenstypes")]),e._v(" "),t("h3",{attrs:{id:"gehele-getallen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gehele-getallen","aria-hidden":"true"}},[e._v("#")]),e._v(" Gehele getallen")]),e._v(" "),t("p",[e._v("Bij gehele getallen kan bij veel programmeertalen onderscheid worden gemaakt in variabelen die een negatieve waarde mogen bevatten (‘signed’) en getallen die uitsluitend een positieve waarde kunnen krijgen (‘unsigned’). Daarnaast is het in veel gevallen mogelijk om onderscheid te maken in het waarde bereik van een variabele. Deze twee factoren (signed/unsigned en waarde bereik) bepalen hoeveel geheugenruimte wordt gereserveerd voor een variabele.")]),e._v(" "),t("p",[e._v("In Pascal is het basis datatype voor gehele getallen integer. Variabelen van dit type kunnen waarden bevatten tussen -32768 tot en met 32767. Alternatieve datatypes in Pascal voor gehele getallen zijn onder meer:")]),e._v(" "),t("ul",[t("li",[e._v("word (0 tot en met 65535),")]),e._v(" "),t("li",[e._v("shortint (-128 tot en met 127),")]),e._v(" "),t("li",[e._v("longint (-2147483648 tot en met 2147483647).")])]),e._v(" "),t("h3",{attrs:{id:"gebroken-getallen-kommagetallen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gebroken-getallen-kommagetallen","aria-hidden":"true"}},[e._v("#")]),e._v(" Gebroken getallen (kommagetallen)")]),e._v(" "),t("p",[e._v("Naast gehele getallen kunnen ook gebroken getallen worden opgeslagen in variabelen. In de regel kunnen gebroken getallen zowel positieve als negatieve waarden zijn. De nauwkeurigheid waarmee de getallen worden opgeslagen bepaalt de hoeveelheid geheugenruimte die wordt gereserveerd voor een variabele.")]),e._v(" "),t("p",[e._v("In Pascal is het basis datatype voor gebroken getallen real. De nauwkeurigheid waarmee waarden kunnen worden opgeslagen is afhankelijk van het platform waarop wordt geprogrammeerd. Om verzekerd te zijn van een grote(re) nauwkeurigheid kan ook gebruik worden gemaakt van het datatype double.")]),e._v(" "),t("h3",{attrs:{id:"tekens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tekens","aria-hidden":"true"}},[e._v("#")]),e._v(" Tekens")]),e._v(" "),t("p",[e._v("Naast getalswaarden kunnen ook tekens (symbolen, karakters) worden opgeslagen. Het teken dat moet worden opgeslagen wordt gerepresenteerd door een getal. Er is een standaard vertaling van tekens naar de bijbehorende getallen. In de meeste PC-achtige omgevingen wordt gewerkt met de ASCII tabel. In deze tabel staat bijvoorbeeld de waarde 32 voor een spatie, de waarde 42 voor een *, de waarde 48 voor een 0, de waarden 65 tm 90 voor een A tm Z en de waarden 97 tm 122 voor een a tm z.")]),e._v(" "),t("p",[e._v("Voor tekens maakt Pascal gebruikt van het datatype char. De functie ord() levert de ascii waarde van een teken op. De functie chr() geeft het teken dat bij een ascii waarde hoort.")]),e._v(" "),t("h3",{attrs:{id:"tekst"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tekst","aria-hidden":"true"}},[e._v("#")]),e._v(" Tekst")]),e._v(" "),t("p",[e._v("Vrijwel alle programmeertalen bieden mogelijkheden om tekenreeksen op te slaan. Hiermee is het mogelijk om hele woorden in één variabele te bewaren. De hoeveelheid geheugenruimte voor deze tekstvariabelen wordt bepaald door de maximale lengte van de tekst die een variabele kan bevatten. Een tekstvariabele bevat een aaneengesloten reeks van tekens. Het eerste teken staat op de eerste positie. In sommige programmeertalen wordt het einde van de tekst aangegeven met een speciaal karakter. In andere programmeertalen (waaronder Pascal) bevat de eerste positie van een tekstvariabele de lengte van de tekst die is opgeslagen.")]),e._v(" "),t("p",[e._v("Net zoals in de meeste programmeertalen is het in Pascal mogelijk om de tekens in een tekst direct te benaderen. Een voorbeeld van hoe dit in Pascal kan worden gedaan is:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("woord := 'APPEL';\nwoord[2]:= 'X';\nwrite (woord);\n")])])]),t("p",[e._v("Na uitvoering van deze programmacode zal AXPEL zijn getoond.")]),e._v(" "),t("p",[e._v("Het basis datatype voor tekst in Pascal is "),t("strong",[e._v("string")]),e._v(". Een string kan maximaal 255 tekens bevatten. Probeer zelf te verklaren waarom dit zo is.")]),e._v(" "),t("p",[e._v("###Logische waarden\nVariabelen met een logische waarde kunnen slechts twee waarden hebben: WAAR of ONWAAR (TRUE of FALSE). In de meeste programmeertalen komt WAAR (TRUE) overeen met de getalswaarde 1 en ONWAAR (FALSE) met de getalswaarde 0.\nHet gegevenstype dat in Pascal wordt gebruikt voor logische variabelen is een boolean. Je kan variabelen van dit gegevenstype op de volgende manier gebruiken:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Program Schrikkeljaar;\n\nvar jaar: integer;\n    schrikkel: boolean;\nbegin\n    readln(jaar);\n    if (jaar mod 4 = 0) then\n        schrikkel := true\n    else\n        schrikkel := false;\n\n    if schrikkel = true then\n        writeln('Schrikkeljaar')\n    else\n        writeln ('Geen schrikkeljaar');\nend.\n")])])]),t("p",[e._v("Dit kan echter ook iets compacter worden genoteerd:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Program Schrikkeljaar;\n\nvar jaar: integer;\n    schrikkel: boolean;\nbegin\n    readln(jaar);\n    schrikkel := (jaar mod 4 = 0);\n    if schrikkel then\n        writeln('Schrikkeljaar')\n    else\n        writeln ('Geen schrikkeljaar');\nend.\n")])])]),t("p",[e._v("Bovenstaande voorbeelden gaan er vanuit dat er sprake is van een schrikkeljaar als het jaartal deelbaar is door 4 (of beter: als het jaartal een viervoud is). In werkelijkheid is dit echter niet voldoende om met zekerheid vast te stellen of een jaartal een schrikkeljaar is. Weet jij waar een schrikkeljaar nog meer aan moet voldoen?")]),e._v(" "),t("h2",{attrs:{id:"samengestelde-gevenstypes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#samengestelde-gevenstypes","aria-hidden":"true"}},[e._v("#")]),e._v(" Samengestelde gevenstypes")]),e._v(" "),t("p",[e._v("De meeste (imperatieve) programmeertalen bieden de mogelijkheid om, naast het gebruik van variabelen met een standaard gegevenstype, ook te werken met variabelen van een gegevenssoort die door de programmeur zelf gedefinieerd is.")]),e._v(" "),t("p",[e._v("###Enumeratietypes\nVariabelen van een enumeratietype kunnen een vaststaand aantal waarden aannemen, die met een identifier kunnen worden aangeduid.")]),e._v(" "),t("p",[e._v("Voorbeeld:\nBijvoorbeeld (in Pascal):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type kleur = (rood, oranje, geel, groen, blauw, paars) ;\n\nvar lievelingskleur : kleur; \n\nbegin \n   lievelingskleur := blauw;\nend.\n")])])]),t("h3",{attrs:{id:"records-structures"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#records-structures","aria-hidden":"true"}},[e._v("#")]),e._v(" Records / structures")]),e._v(" "),t("p",[e._v("In een aantal gevallen horen verschillende gegevens bij één instantie. Zo kan er bijvoorbeeld van een leerling worden bijgehouden het leerlingnummer, voornaam, achternaam, geboortedatum, adres, telefoonnummer, klas, etc. Hiervoor wordt door veel programmeertalen de mogelijkheid geboden om een samengesteld gegevenstype te definiëren (records, structs). In het voorbeeld van de gegevens over een leerling bevat het samengestelde datatype bovendien zelf ook nog eens enkele samengestelde datatypes, zoals de geboortedatum (dag, maand, jaar) en het adres (straat, nummer, postcode, plaats).")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("type datum    = record\n                   dag, maand, jaar: integer;\n                end;\n     adres    = record\n                   straat: string;\n                   huisnr: word;\n                   postcode: string[6];\n                   plaats: string;\n                end;\n     leerling = record\n                   leerlingnr: longint;\n                   voornaam, achternaam: string;\n                   geboortedatum: datum;\n                   stamgroep: string[3];\n                   thuis: adres;\n                end;\n\nvar bijzondere_leerling: leerling;\n\nbegin\n   bijzondere_leerling.leerlingnr := 439760;\n   bijzondere_leerling.voornaam := 'Jan';\n   bijzondere_leerling.achternaam := 'Punt';\n   bijzondere_leerling.geboortedatum.dag := 12;\n   bijzondere_leerling.geboortedatum.maand := 2;\n   bijzondere_leerling.geboortedatum.jaar := 2004;\n   bijzondere_leerling.stamgroep := '3VC';\n   bijzondere_leerling.thuis.straat := 'Hoofdstraat';\n   bijzondere_leerling.thuis.nummer := 104;\n   bijzondere_leerling.thuis.postcode := '7919NX';\n   bijzondere_leerling.thuis.plaats := 'Vierbergen';\n   with bijzondere_leerling do\n      begin\n         writeln (leerlingnr);\n         writeln (voornaam,' ',achternaam);\n         writeln (stamgroep);\n         with geboortedatum do\n            writeln (dag,'-',maand,'-',jaar);\n         with thuis do\n            begin\n               writeln (straat,' ',nummer);\n               writeln (postcode,' ', plaats);\n            end;\n      end;\nend.\n")])])]),t("h3",{attrs:{id:"reeksen-arrays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reeksen-arrays","aria-hidden":"true"}},[e._v("#")]),e._v(" Reeksen (arrays)")]),e._v(" "),t("p",[e._v("Een bijzonder geval van een samengesteld gegevenstype is een gegeven dat bestaat uit een aantal gelijksoortige gegevens. Een voorbeeld hiervan is een variabele maandnamen. Het gegevenstype van deze variabele is een reeks (een tabel, een array) van 12 tekstvelden. Een uitbreiding hierop is een reeks met meerdere dimensies, zoals een tweedimensionale tabel waarin per periode per vak een rapportcijfer is opgeslagen. Onderstaand voorbeeld geeft weer hoe reeksen er uitzien in Pascal:")]),e._v(" "),t("p",[e._v("Vakken\t\t\t1\t2\t3\t4\t\t\nNederlands\t\t1\t \t \t \t \t\tvak: array[1..9] of string;\nEngels\t\t2\t \t \t \t \t\tcijfers: array[1..9,1..4] of real;\nDuits\t\t3\t6,2\t \t \t \t\t\nWiskunde\t\t4\t \t \t \t \t\tvak[1] := 'Nederlands';\nGeschiedenis\t\t5\t \t \t7,6\t \t\tvak[2]:= 'Engels';\nEconomie\t\t6\t \t \t \t \t\t...\nMuziek\t\t7\t \t \t \t \t\t\nNatuurkunde\t\t8\t \t \t \t \t\tcijfers [3,1] := 6.2;\nBiologie\t\t9\t \t \t \t \t\tcijfers[5,3] := 7.6;")]),e._v(" "),t("p",[e._v("Het is ook mogelijk om in een reeks gegevens op te slaan van een samengesteld datatype, zoals een tabel met de leerlingengegevens (uit het eerdere voorbeeld).")]),e._v(" "),t("h3",{attrs:{id:"verzamelingen-sets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verzamelingen-sets","aria-hidden":"true"}},[e._v("#")]),e._v(" Verzamelingen (sets)")]),e._v(" "),t("p",[e._v("...")]),e._v(" "),t("h2",{attrs:{id:"dynamische-gegevensstructuren-lijsten-bomen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamische-gegevensstructuren-lijsten-bomen","aria-hidden":"true"}},[e._v("#")]),e._v(" Dynamische gegevensstructuren (lijsten, bomen, ...)")]),e._v(" "),t("h3",{attrs:{id:"lijsten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lijsten","aria-hidden":"true"}},[e._v("#")]),e._v(" Lijsten")]),e._v(" "),t("p",[e._v("Verschillende programmeertalen bieden mogelijkheden om meer dynamische gegevenstypes te definiëren. Een voorbeeld hiervan is een (gelinkte) lijst. Een lijst is opgebouwd uit allemaal schakels, waarbij een schakel een gegeven bevat en een verwijzing naar de volgende schakel. Alleen de laatste schakel verwijst niet naar een element (het einde van de lijst). Iedere keer als er een gegeven moet worden toegevoegd aan een  lijst, wordt er een nieuwe schakel aangemaakt. Het gegeven dat aan de lijst moet worden toegevoegd wordt in deze schakel gestopt. De laatste schakel uit de lijst moet gaan verwijzen naar de nieuw aangemaakte schakel. Tenslotte moet worden aangegeven dat de nieuwe schakel het einde van de lijst is (deze schakel verwijst niet meer naar een andere schakel). De lijst variabele is een verwijzing naar de eerste schakel in de lijst.\nHet is alleen mogelijk om van voren naar achteren door zo’n lijst te lopen. Als het ook de bedoeling is dat je de lijst van achteren naar voren kan doorlopen, dan zal je een schakel niet alleen naar de volgende schakel moeten laten wijzen, maar ook naar de vorige (een dubbel gelinkte lijst).")]),e._v(" "),t("p",[e._v("Lijsten worden veelal gebruikt voor de implementatie van twee abstracte datastructuren: stapels en rijden.")]),e._v(" "),t("h4",{attrs:{id:"stapels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stapels","aria-hidden":"true"}},[e._v("#")]),e._v(" Stapels")]),e._v(" "),t("p",[e._v("Een stapel (stack) is een reeks elementen van hetzelfde gegevenstype met de volgende toegestane operaties:\n•\teen lege stapel aanmaken,\n•\ttesten of de stapel leeg is,\n•\teen element toevoegen (push),\n•\thet laatst-toegevoegde element eruit halen (pop),\n•\tsoms: kijken of de stapel al vol is.\nEen stapel heeft een LIFO-eigenschap: LIFO = Last In First Out. Dit betekent dat bij een pop operatie het element uit de stapel wordt gehaald dat als laatste is toegevoegd. Toevoegen en verwijderen gebeurt derhalve aan dezelfde kant: de 'bovenkant'.")]),e._v(" "),t("h4",{attrs:{id:"rijen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rijen","aria-hidden":"true"}},[e._v("#")]),e._v(" Rijen")]),e._v(" "),t("p",[e._v("Een rij (queue) is een reeks elementen van hetzelfde type, bijvoorbeeld karakters, met de volgende toegestane operaties:\n•\teen lege rij aanmaken,\n•\ttesten of de rij leeg is,\n•\teen element toevoegen (push),\n•\thet eerst-toegevoegde element eruithalen (pop),\n•\tsoms: kijken of de rij al vol is.\nEen rij heeft een FIFO-eigenschap: FIFO = First In First Out. Dit betekent dat bij een pop operatie het element uit de stapel wordt gehaald dat als eerste is toegevoegd. Toevoegen en verwijderen gebeuren dus aan verschillende kanten: 'achteraan' respectievelijk 'vooraan'.")]),e._v(" "),t("h3",{attrs:{id:"bomen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bomen","aria-hidden":"true"}},[e._v("#")]),e._v(" Bomen")]),e._v(" "),t("p",[e._v("Een andere dynamische gegevensstructuur is een boom. Een boom bestaat uit knopen. Iedere knoop bevat een gegeven en een aantal (0 of meer) verwijzingen naar opvolgers. Iedere opvolger is ook weer een knoop met een aantal (0 of meer) opvolgers. Hiermee is iedere opvolger als het ware een subboom.\nEen binaire boom is een boom waarbij iedere knoop maximaal 2 opvolgers heeft (een linker en een rechter opvolger). Een binaire boom is dus een knoop met aan de linkerkant een binaire subboom en aan de rechterkant een binaire subboom. Binaire bomen worden bijvoorbeeld gebruikt wanneer gegevens geordend moeten worden opgeslagen; de waarden van alle knopen in de linker subboom zijn kleiner dan de waarde van het gegeven in de knoop en de waarden van alle knopen in de rechter subboom zijn groter dan de waarde van het gegeven in de knoop.")]),e._v(" "),t("p",[e._v("Er zijn nog heleboel andere manieren om bomen te representeren. Er zijn bovendien nog veel andere dynamische  gegevensstructuren mogelijk.")])])}],r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},t,!1,null,null,null);n.default=i.exports}}]);