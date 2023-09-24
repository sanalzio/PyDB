import sys
import urllib.request
import shutil
import os

github_raw_url = "https://raw.githubusercontent.com/sanalzio/PyDB/main/PyDB.py"

try:
    with urllib.request.urlopen(github_raw_url) as response:
        data = response.read()
        with open("temp.tmp", "w") as f:
            f.write(data.decode('utf-8'))
        kaynak_dosya = "temp.tmp"
        hedef_dosya = sys.executable.replace("python.exe", "Lib\\PyDB.py")
        try:
            shutil.copy(kaynak_dosya, hedef_dosya)
        except Exception as e:
            print("Installation error:", e)
            os.system("pause>nul")
        os.remove("temp.tmp")
        print("Installation successful.")
        os.system("pause>nul")
except Exception as e:
    print("Installation error:", e)
    os.system("pause>nul")