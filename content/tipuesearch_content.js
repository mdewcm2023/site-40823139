var tipuesearch = {"pages": [{'title': 'About', 'text': 'my repo: mdewcm2023/site-40823139 \n my page: https://mdewcm2023.github.io/site-40823139/ \n', 'tags': '', 'url': 'About.html'}, {'title': 'W9', 'text': 'Brython 讀取 url中的data \n url = "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt"\ndata = open(url).read().split("\\n")\ndata = data[1:]\nfor i in data:\n    #print(i)\n    stud = i.split(":")[0]\n    score =  i.split(":")[1]\n    print(stud, score) \n Brython讀取url，並顯示五次考試成績平均(沒分數者，視為0分)，此為chatgpt參考答案1 \n urls = ["https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw5.txt",        "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6.txt",        "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw6-2.txt",        "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/075c06b2baf1bb07665f1a98e9f88f7e81ebe1a4/1aw8.txt",        "https://gist.githubusercontent.com/mdecycu/07f0f0817115a68d55d6ca603c5ab393/raw/239f4eb84715978daead6ac1f231af7f190a2a5e/1aw9.txt"]\n\nstudents = {}\nfor url in urls:\n    data = open(url).read().split("\\n")[1:]\n    for i in data:\n        stud, score = i.split(":")\n        if not score.isnumeric():\n            score = 0\n        score = int(score)\n        students.setdefault(stud, []).append(score)\n\nfor stud, scores in students.items():\n    avg_score = sum(scores) / len(scores)\n    print(stud, avg_score)\n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'W10', 'text': '本週任務:利用nginx建立非同步網頁伺服器，並呈現網頁 \n \n 架設所需環境:取得nginx，利用nignx作為web server \n 取得環境參數:在cmd輸入ipconfig取得ipv4的位址 \n 環境參數調整:開啟編輯器，匯入nginx\\conf資料夾中的config檔(nginx.conf)， 修改server name 由localhost改為本地的ipv4地址 \n 執行nginx，並在網頁上輸入其ip地址，正常情況下會顯示nginx\\html底層)的index.html內容 \n 將自己的網頁內容放入nginx\\html中，並重新啟動(啟動後應確認顯示內容) \n 進入防火牆的進階設定，選擇輸入規則，並指定為TCP型式，連接埠設定為80，並允許權限， 新增完成後會在新增規則的頁面中看到 \n 在同網域不同裝置下測試，若有成功顯示網頁則成功 \n \n \n 補充資料: \n [基礎觀念系列] Web Server & Nginx — (2) | by 莫力全 Kyle Mo | Starbugs Weekly 星巴哥技術專欄 | Medium', 'tags': '', 'url': 'W10.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}]};