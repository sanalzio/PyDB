# Simple-PyDB Documentation

## Installation
### For Gnu/Linux or MacOS
```bash
python3 -m pip install s-pydb
```
### For windows
```
pip install s-pydb
```

## pydb Class
### import example
```py
import spydb
db=spydb.pydb("filename")
```

#### ⚠ IMPORTANT
database file extension must be ".pydb"

### add data
old database file:
```plaintext
var1:123
```
code:
```py
db.addData("var2","456")
```
new database file:
```plaintext
var1:123
var2:456
```

### get data
database file content:
```plaintext
var1:123
varTrue:{True}
varFalse:{False}
varNone:{None}
```
code:
```py
print(db.getData("var1"))
print(db.var1)
print(db.getData("varTrue"))
print(db.getData("varFalse"))
print(db.getData("varNone"))
```
output:
```plaintext
123
123
True
False
None
```

### remove data
old database file:
```plaintext
var1:123
var2:456
```
code:
```py
db.removeData("var2")
```
new database file:
```plaintext
var1:123
```

### clear file
old database file:
```plaintext
var1:123
var2:456
```
code:
```py
db.clear()
```
new database file:
(empty)

### backup data
database file content:
```plaintext
var1:123
var2:456
```
code:
```py
db.backUp("backup1")
```
backup1.pydb file content:
```plaintext
var1:123
var2:456
```

### set data
old content:
```plaintext
var1:123
var2:456
```
code:
```py
db.setData("var2", "789")
```
new content:
```plaintext
var1:123
var2:789
```

### retrieve the data in dictionary format
database file content:
```plaintext
var1:123
var2:789
```
code:
```py
content = db.fileToDICT()
print(content)
```
output:
```plaintext
{'var1':'123', 'var2':'789'}
```

### dictionary to file
code:
```py
mydict = {'var':'Hello', 'varint':123}
db.dictToFile(mydict)
```
new database file content:
```plaintext
var:Hello
varint:123
```

### database is contains ...
database file content:
```plaintext
var:Hello
```
code:
```plaintext
print(db.contains("var"))
print(db.contains("varint"))
```
output:
```plaintext
True
False
```

### get datas
database file content:
```plaintext
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
```plaintext
("var", "varint")
("Hello", "123")
(("var", "Hello"), ("varint", "123"))
```

## pylist Class
### import example
```py
import spydb
db=spydb.pylist("filename")
```

<div class="markdown-alert markdown-alert-important" dir="auto"><p class="markdown-alert-title" dir="auto"><svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Important</p><p dir="auto">database file extension must be ".pylist".</p>
</div>

#### ⚠ IMPORTANT
database file extension must be ".pylist"

### add data
old database file:
```plaintext
123
```
code:
```py
db.addData(456)
```
new database file:
```plaintext
123
456
```

### get data
database file content:
```plaintext
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
```plaintext
123
True
Flase
None
```

### remove data
old database file:
```plaintext
123
456
```
code:
```py
db.removeData(1)
```
new database file:
```plaintext
123
```

### clear file
old database file:
```plaintext
123
456
```
code:
```py
db.clear()
```
new database file:
(empty)

### backup data
database file content:
```plaintext
123
456
```
code:
```py
db.backUp("backup1")
```
backup1.pydb file content:
```plaintext
123
456
```

### set data
old content:
```plaintext
123
456
```
code:
```py
db.setData(1, 789)
```
new content:
```plaintext
123
789
```

### get length
db.pydb file content:
```plaintext
123
456
```
code:
```py
print(db.length())
```
output: 
```
2
```

### get variable index
db.pydb file content:
```plaintext
123
456
```
code:
```py
print(db.index("123"))
```
output:
```plaintext
0
```

### retrieve the data in list format
database file content:
```plaintext
Hello
123
```
code:
```py
content = db.listFile()
print(content)
```
output:
```plaintext
["Hello", "123"]
```

### list to file
code:
```py
mylist = ["Hello", "I'm fine thank you"]
db.listToFile(mylist)
```
new database file content:
```plaintext
Hello
I'm fine thank you
```
## convert Functions
### .csv to .pydb file
database.csv database file content:
```csv
keys,variables
key1,var1
key2,var2
```
Code:
```py
import spydb
dbfile=spydb.convert.csv_to_pydb("datavase.csv", "database")
db=spydb.pydb(dbfile)
print(dbfile.key1)
```
Output:
```plaintext
var1
```
### .json to .pydb file
#### Dictionary
database.json database file content:
```json
{
    "key1": "var1",
    "key2": "var2"
}
```
Code:
```py
import spydb
dbfile=spydb.convert.json_to_pydb("datavase.json","database")
db=spydb.pydb(dbfile)
print(dbfile.key1)
```
Output:
```plaintext
var1
```
#### List
database.json database file content:
```json
[
    "var1",
    "var2"
]
```
Code:
```py
import spydb
dbfile=spydb.convert.json_to_pydb("datavase.json","database")
db=spydb.pylist(dbfile)
print(dbfile.getData(0), dbfile.getData(1))
```
Output:
```plaintext
var1 var2
```
## Other Functions
### dictToTABLE
Code:
```py
import spydb
print(spydb.dictToTABLE({"Key":"Value","Apple":"Orange"}))
```
Output:
```plaintext
+---------+---------------+
|   Key   |     Value     |
+---------+---------------+
|Key      |Value          |
+---------+---------------+
|Apple    |Orange         |
+---------+---------------+
```

### listToTABLE
Code:
```py
import spydb
print(spydb.listToTABLE(["Value","Apple"]))
```
Output:
```plaintext
+-----+---------------+
|Index|     Value     |
+-----+---------------+
|0    |Value          |
+-----+---------------+
|1    |Apple          |
+-----+---------------+
```