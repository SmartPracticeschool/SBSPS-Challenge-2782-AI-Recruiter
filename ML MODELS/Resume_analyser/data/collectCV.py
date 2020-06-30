from tkinter import Tk
import os,os.path
import time


PATH = os.path.join(os.getcwd(),'CVs')
p = Tk()
p.withdraw()

res = ""
cv_num = 1
res1 = ""

try:
        while (True):
            try:
                res = p.selection_get(selection = 'CLIPBOARD')
                if res1 != res:
                    with open(os.path.join(PATH,'cv'+str(cv_num)),'wb') as fout:
                        fout.write(res.encode('utf-8'))
                        res1 = res
                       
                        cv_num += 1
                        time.sleep(2)
            except:
                selection =None

except KeyboardInterrupt:
	p.destroy()
