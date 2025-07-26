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


# Collection

The application allows you to create collections, add items to them, delete items, and move items between collections.

## Created by  
[@Pagivabe0725](https://github.com/Pagivabe0725)

## Running the application

### To use the imports, you need a live-server or an http-server, for example.

#### - Installation:

```sh
npm install -g live-server
```

#### - Running:

```sh
live-server
```

### Or

#### - Installation:

```sh
npm install -g http-server
```

#### - Running:

```sh
http-server
```

## Tasks

### Task 1

The HTML contains a button labeled "**Create New Collection**" which, when clicked, displays the required input fields. At this point, the button text changes to "**Cancel**." Clicking the button again hides the input fields and the button text returns to its original state. The values in the fields are cleared every time the input fields are hidden.

The input fields cannot be left empty, and duplicate collection names are not allowed. If the user tries to create a collection with a name that already exists, the system will notify them of the error.

When the **Create** button is clicked with valid inputs, the requested collection is generated and the input fields are hidden.

Renaming collections is done using the **Rename** button in the header of the generated collection. The same rule applies here — you cannot rename a collection to a name that already exists.

### Task 2

You can add new items to existing collections using the **Add** button located in the collection header. The same naming rule applies here — item names must be unique within the collection.

The program provides feedback to the user whether the addition was successful or if an error occurred.

### Task 3

Each *item* in the collection is displayed as a row below the header. On the right side of the row, the **name** of the item is shown, and on the left side, there is the requested **icon and list**.

Clicking the icon opens a **menu with 3 options:**
- Move
- Rename
- Delete

### Task 4

If you select the **Move** option, a *popup window* appears containing a list of collection names. (Of course, the collection you want to move the item from will not appear in the list of options.) *You cannot move an item to a collection that already contains an item with the same name.* If you have only one collection and try to move an item, the popup will still appear but there will be no options to choose from. In this case, clicking the **Move** button will notify the user of the error.

If you select the **Rename** option, the *popup window* will contain an input field asking the user for a new name for the item. If the new name is not taken, it will be changed accordingly. (Note that the program treats uppercase and lowercase letters as different, but it removes leading and trailing spaces from the input.)

If you select the **Delete** option, the *popup window* will ask for confirmation to delete the selected item. If confirmed, the item's name will be released (available again).

In all cases, the success or failure of the operation will be communicated to the user.

### Task 5

The **Add Image** feature is accessible via the **Image** button in the collection header. This also opens a *popup window* where the user can enter a **link to an image**. If the collection did not have an image before, the program will create a new row containing the image and insert it right after the header. If there was already an image in the collection, it will simply be replaced with the new one.
