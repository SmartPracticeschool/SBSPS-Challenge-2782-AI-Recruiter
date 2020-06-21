
import os, math
import pandas as pd
import gensim
import numpy as np
import en_core_web_sm
nlp = en_core_web_sm.load()
from gensim.models import KeyedVectors
from os import path as ospath




root_path = ospath.dirname(os.getcwd())
print(root_path)
model = KeyedVectors.load_word2vec_format('word2vec_model.bin', binary=True, limit=200000)  





def most_similar(token, n):
    token = token.lower()
    tokens = [token]
    closest_values = [1]
    try:
        list_similar = model.most_similar(positive=[token],topn=n)
        
        for tupl in list_similar:
            tokens.append(tupl[0])
            closest_values.append(tupl[1])
    except:
        pass   
    return tokens, closest_values





resumes = pd.read_csv('resume.csv', sep='\t')
resumes = resumes.set_index('Unnamed: 0')
jd = pd.read_csv('jd.csv')
print(jd['description'])




def lemm(word):
    try:
        symb = '''~'`!@#$%^&*)(_+-=}{][|\:;",./<>?'''
        mod_token = ''
        
        for c in word:
            if (c not in symb):
                mod_token += c.lower()

        docx = nlp(mod_token)

        if (len(mod_token) == 0 or docx[0].is_stop):
            return None
        else:
            return docx[0].lemma_
    except:
        return None 




for job_desc in jd['description']:
    resume_description = ''
    for w in job_desc.split():
        lemm_w = lemm(w)
        if (lemm_w is not None):
            resume_description += (lemm_w + ' ')
    print(resume_description)
    break




word_val = {}
no_of_sim_w = 2
for w_r in resume_description.split():
    closest_words, sim = most_similar(w_r, no_of_sim_w)
    for i in range(len(closest_words)):
        word_val[closest_words[i]] = word_val.get(closest_words[i], 0)+sim[i]
        print(closest_words[i], word_val[closest_words[i]])




num_resumes = 21
count = {}
idf = {}
for w in word_val.keys():
    count[w] = 0
    for i in range(num_resumes):
        try:
            if w in resumes.loc(0)['skill'][i].split() or w in resumes.loc(0)['exp'][i].split():
                count[w] += 1
        except:
            pass
    if (count[w] == 0):
        count[w] = 1
    idf[w] = math.log(num_resumes/count[w])
print(count)
print(idf)




score = {}
for i in range(num_resumes):
    score[i] = 0
    try:
        for w in word_val.keys():
            tf = resumes.loc(0)['skill'][i].split().count(w) + resumes.loc(0)['exp'][i].split().count(w)
            score[i] += word_val[w]*tf*idf[w]
    except:
        pass




ranked_resumes = []
for i in range(num_resumes):
    ranked_resumes.append((score[i], i))    
ranked_resumes.sort(reverse = True)
for a, i in ranked_resumes:
    if list(resumes)[i] != '.DS_Store':
        print(list(resumes)[i], ':', a)







