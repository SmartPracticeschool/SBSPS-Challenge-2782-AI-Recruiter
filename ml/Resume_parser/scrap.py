import urllib.request
import urllib.parse
import json

url = 'http://localhost:5000/Resume-1592674231670CV.pdf'
data = urllib.request.urlopen(url).read().decode('utf-8')
return data
