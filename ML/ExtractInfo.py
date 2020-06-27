# -*- coding: utf-8 -*-
"""
Created on Sat Jun 20 19:58:32 2020

@author: Devdarshan
"""

from Resume_parser import ResumeParser
data = ResumeParser('http://localhost:5000/Resume-1592674231670CV.pdf').get_extracted_data()
print(data)
