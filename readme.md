# Gyűjtemény

Az alkalmazásban lehetőségünk van gyűjteményeket létrehozni, ezekhez elemeket adni, törölni és mozgatni őket a gyűjtemények között.

## Készítette
[@Pagivabe0725]('https://github.com/Pagivabe0725')

## Futtatás

### Ahhoz hogy az importokat használni lehessen szükséges pl egy live-server vagy egy http-server

 ####  - telepítés:

```sh
npm install -g live-server
``` 

 ####  - futtatás:
```sh
live-server
``` 

### vagy

 ####  - telepítés:
```sh
npm install -g http-server
```

 ####  - futtatás:
```sh
http-server
```

## Feladatok

 ### 1. feladat 

 A HTML tartalmaz egy "**Új gyűjtemény létrehozása**" gombot ami megjeleníti a kért beviteli mezőket. Ekkor a gomb tartalma megváltozik "**Mégsem**"-re ebben az állapotában az újabb kattintásra eltünteti a beviteli mezőket és a gomb tartalma újra az eredeti szöveg lesz. A mezők értékei minden eltűntetés során törlődnek.

 A mezőket nem lehet üresen hagyni és két megegyező nevű gyüjteményt sem lehet létrehozni. Abban az esetben, ha ezzel próbálkozna a felhasználó, a rendszer jelzi neki a hibát.

 A **Létrehozás** gombra kattintva, megfelelő inputok esetén legenerálódik a kívánt gyűjtemény és az inputmezők eltűnnek.

A gyüjtemények **átnevezése** a legenerált gyűjtemény címsorában szereplő **Átnevezés** gomb segítségével vitelezhető ki. Itt is érvényes, hogy nem lehet olyan nevet megadni neki, amit már egy másik gyűjtemény birtokol.

 ### 2. feladat 

 A meglévő gyűjteményekhez a címsorban szereplő **Hozzáad** gomb segítségével tudunk új elemeket hozzáadni. Itt is érvényes hogy egy név egy elemhez tartozhat.

 Hiba és sikeres hozzáadás esetén is kapunk visszacsatolást a programtól

 ### 3. feladat

 A gyűjtemény minden *eleme* egy a címsort követő sorként van reprezentálva. Ezeknek a jobb oldalán helyezkedik el az elem **neve** a bal oldalán pedig a kért **ikon és lista** 

 Az ikonra kattanva megjelenik a **3 opció:**
- Áthelyezés 
- Átnevezés
- Törlés

 ### 4. feladat

 Ha az **Áthelyezés** opciót választjuk, akkor felugrik egy *felugró ablak* ami tartalmazni fog egy a gyűjtemények neveiből álló listát.( Természetesen az a gyűjtemény, amiből áthelyezni szeretnénk nem jelenik meg az opciók között. ) *Az elemet nem fogjuk tudni olyan listába helyezni ami már tartalmaz egy azonos nevű elemet.* Amennyinben csak egy gyűjteményünk van, és megpróbálkozunk az elem áthelyezésével, akkor bár az ablak megjelenik, de választási opciónk nem lesz. Ebben az esetben az **áthelyezés** gombra kattintva a program tudatni fogja a felhasználóval a hibát.

 Ha az **Átnevezés** opciót választjuk, akkor a *felugró ablak* egy input mezőt fog tartalmazni ami bekéri a felhasználótól az adott elem új nevét és amennyiben nem foglalt megváltoztatja azt a beírt értékre.(Fontos hogy a program különbséget tesz *kis* és *nagy* betű között, de a szó *elején* és *végén* lévő *szóközöket* eltávolítja)

 Ha a **Törlés** opciót választjuk, akkor a *felugró ablak* csak egy megerősítést fog kérni a felhasználótól, hogy valóban törölni szeretné-e a kívánt elemet. Amennyiben ez megtörténik, az elem által birtokolt név felszabadul.

  A folyamat sikeressége és a hiba mindegyik esetben tudatva van a felhasználóval. 

### 5. feladat

A kép hozzáadása funkció szintén a gyűjtemény címsorában szereplő **Kép** gomb segítségével érhető el. Itt szintén megjelenik a *felugró ablak* és egy képnek a **linkjét** várja a felhasználótó. Amennyiben még nem volt kép rendelve az adott gyűjteményhez, a program készít egy új sort, ami tartalmazza az adott képet és beszúrja a címsor mögé. Abban az esetben, ha a gyűjtemény már tartalmazott képet, akkor csak simán megváltoztatja azt