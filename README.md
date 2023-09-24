# PyDB 2.0
A simple local file-based database module.

![Pydb Thumbnail](pydb.jpg)

# Updates
- **Added Convert class and convert functions. [Go!](https://github.com/sanalzio/PyDB/tree/main#convert-functions)**
- Litle bug fixs.
- Now You can use `pydb.getData(key)` or `pydb.key`. [Go!](https://github.com/sanalzio/PyDB/tree/main#get-data)
- Now, only .pydb file extensions are allowed.
  ```py
  import PyDB
  db=PyDB.pydb("Filename")
  ```
- Now the module allows data with newline(\n) characters.
- The listToTABLE and dictToTABLE functions have been redesigned from scratch.
- Added index function to pylist class. [Go!](https://github.com/sanalzio/PyDB/tree/main#get-variable-index)
- Added lenFile function to pylist class. [Go!](https://github.com/sanalzio/PyDB/tree/main#get-length)

# Install
## First option
**Run install.exe** If the program doesn't work properly, try running it as an administrator.
## Second option
1) Open power shell or cmd as administrator.
2) Use :
    ```shell
    cd <setup.py directory>
    ```
3) Start setup.py with python:
   ```shell
   python setup.py
   ```
## Third option
1) Open power shell or cmd as administrator.
2) Use :
    ```shell
    cd <.whl file directory>
    ```
3) Start setup.py with python:
   ```shell
   pip install pydb-2.0-py3-none-any.whl
   ```
# pydb Class:
## import example:
```py
import PyDB
db=PyDB.pydb("Filename")
```

## add data
old file:
```
var1:123
```
code:
```py
db.addData("var2","456")
```
new file:
```
var1:123
var2:456
```

## get data
file content:
```
var1:123
varTrue:{True}
varFalse:{False}
varNone:{None}
```
code:
```py
print(db.getData("var1"))
# Update
print(db.var1)
print(db.getData("varTrue"))
print(db.getData("varFlas"))
print(db.getData("varNone"))
```
output:
```
123
123
True
Flase
None
```

## remove data
old file:
```
var1:123
var2:456
```
code:
```py
db.removeData("var2")
```
new file:
```
var1:123
```

## clear file
old file:
```
var1:123
var2:456
```
code:
```py
db.clear()
```
new file:
(empty)

## backup data
file content:
```
var1:123
var2:456
```
code:
```py
db.backUp("backup1")
```
backup1.pydb file content:
```
var1:123
var2:456
```

## set data
old content:
```
var1:123
var2:456
```
code:
```py
db.setData("var2", "789")
```
new content:
```
var1:123
var2:789
```

## retrieve the data in dictionary format
file content:
```
var1:123
var2:789
```
code:
```py
content = db.fileToDICT()
print(content)
```
output:
```
{'var1':'123', 'var2':'789'}
```

## dictionary to file
code:
```py
mydict = {'var':'Hello', 'varint':123}
db.dictToFile(mydict)
```
new file content:
```
var:Hello
varint:123
```

## control data
file content:
```
var:Hello
```
code:
```
print(db.control("var"))
print(db.control("varint"))
```
output:
```
True
False
```

## get datas
file content:
```
var:Hello
varint:123
```
code:
```py
print(db.keys())
print(db.values())
print(db.items())
```
output:
```
("var", "varint")
("Hello", "123")
(("var", "Hello"), ("varint", "123"))
```

# pylist Class
## import example:
```py
import PyDB
db=PyDB.pydb("FileName")
```

## add data
old file:
```
123
```
code:
```py
db.addData(456)
```
new file:
```
123
456
```

## get data
file content:
```
123
{True}
{False}
{None}
```
code:
```py
print(db.getData(0))
print(db.getData(1))
print(db.getData(2))
print(db.getData(3))
```
output:
```
123
True
Flase
None
```

## remove data
old file:
```
123
456
```
code:
```py
db.removeData(1)
```
new file:
```
123
```

## clear file
old file:
```
123
456
```
code:
```py
db.clear()
```
new file:
(empty)

## backup data
file content:
```
123
456
```
code:
```py
db.backUp("backup1")
```
backup1.pydb file content:
```
123
456
```

## set data
old content:
```
123
456
```
code:
```py
db.setData(1, 789)
```
new content:
```
123
789
```

## get length
db.pydb file content:
```
123
456
```
code:
```py
print(db.lenFile())
```
output: 
```
2
```

## get variable index
db.pydb file content:
```
123
456
```
code:
```py
print(db.index("123"))
```
output:
```
0
```

## retrieve the data in list format
file content:
```
Hello
123
```
code:
```py
content = db.listFile()
print(content)
```
output:
```
["Hello", "123"]
```

## list to file
code:
```py
mylist = ["Hello", "I'm fine thank you"]
db.listToFile(mylist)
```
new file content:
```
Hello
I'm fine thank you
```
# convert Functions
## .csv to .pydb file
database.csv file content:
```csv
keys,variables
key1,var1
key2,var2
```
Code:
```py
import PyDB
dbfile=PyDB.convert.csv_to_pydb("datavase.csv", "database")
db=PyDB.pydb(dbfile)
print(dbfile.key1)
```
Output:
```
var1
```
## .json to .pydb file
### Dictionary
database.json file content:
```json
{
    "key1": "var1",
    "key2": "var2"
}
```
Code:
```py
import PyDB
dbfile=PyDB.convert.json_to_pydb("datavase.json","database")
db=PyDB.pydb(dbfile)
print(dbfile.key1)
```
Output:
```
var1
```
### List
database.json file content:
```json
[
    "var1",
    "var2"
]
```
Code:
```py
import PyDB
dbfile=PyDB.convert.json_to_pydb("datavase.json","database")
db=PyDB.pylist(dbfile)
print(dbfile.getData(0), dbfile.getData(1))
```
Output:
```
var1 var2
```
# Other Functions
## dictToTABLE
Code:
```py
import PyDB
print(PyDB.dictToTABLE({"Key":"Value","Apple":"Orange"}))
```
Output:
```
+---------+---------------+
|   Key   |     Value     |
+---------+---------------+
|Key      |Value          |
+---------+---------------+
|Apple    |Orange         |
+---------+---------------+
```

## listToTABLE
Code:
```py
import PyDB
print(PyDB.listToTABLE(["Value","Apple"]))
```
Output:
```
+-----+---------------+
|Index|     Value     |
+-----+---------------+
|0    |Value          |
+-----+---------------+
|1    |Apple          |
+-----+---------------+
```