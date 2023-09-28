# HELP IN PREVIEWING & GENERATING HTML FROM POSTMAN JSON FILE 
### for web view

 ```bash 
 ./windows_amd64.exe server -f login.postman_collection.json -p 8000
 ```

### for md view

 ```bash
 ./windows_amd64.exe server -f login.postman_collection.json -p 8000 -m
 ```

### fro html file

 ```bash
./windows_amd64.exe build -i input-postman-collection.json -o ./index.html
```