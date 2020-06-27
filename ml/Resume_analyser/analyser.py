# imports
from gensim.models import KeyedVectors
import pandas as pd
import gensim
import numpy as np
import en_core_web_sm
import sys
nlp = en_core_web_sm.load()

# load google word2vec model
model = KeyedVectors.load_word2vec_format(
    './ml/Resume_analyser/word2vec_model.bin', binary=True, limit=200000)

# skills and experience extracted as strings shall be used in the model
skills = sys.argv[1]
exp = sys.argv[2]

# function to predict n most similar words using word2vec model


def test():
    print('hello')


def most_similar(token, n):
    token = token.lower()
    tokens = [token]
    closest_values = [1]
    try:
        list_similar = model.most_similar(positive=[token], topn=n)

        for tupl in list_similar:
            tokens.append(tupl[0])
            closest_values.append(tupl[1])
    except:
        pass
    return tokens, closest_values


# read job description either from csv or as string
jd = pd.read_csv('./ml/Resume_analyser/jd.csv')
# print(jd['description'])


# function for lemmatisation and cleaning of data
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


# lemmatize job description
for job_desc in jd['description']:
    resume_description = ''
    for w in job_desc.split():
        lemm_w = lemm(w)
        if (lemm_w is not None):
            resume_description += (lemm_w + ' ')
    # print(resume_description)
    break

skills_lem = ""
exp_lem = ""

# lemmatize skills
for w in skills.split():
    lemm_w = lemm(w)
    if (lemm_w is not None):
        skills_lem += (lemm_w + ' ')

# lemmatize exp
for w in exp.split():
    lemm_w = lemm(w)
    if (lemm_w is not None):
        exp_lem += (lemm_w + ' ')

# get the closest words along with similarity score and store as key value pairs
word_val = {}
no_of_sim_w = 2
for w_r in resume_description.split():
    closest_words, sim = most_similar(w_r, no_of_sim_w)
    for i in range(len(closest_words)):
        word_val[closest_words[i]] = word_val.get(closest_words[i], 0)+sim[i]
        #print(closest_words[i], word_val[closest_words[i]])
# word_val.keys()
# word_val['panda']

#  get counts
num_resumes = 1
count = {}
for w in word_val.keys():
    count[w] = 0
    try:
        if w in skills_lem.split() or w in exp_lem.split():
            # if w in skills.split() or w in exp.split():
            count[w] += 1
    except:
        pass

# print(count)

# get resume score
score = {}
for i in range(num_resumes):
    score[i] = 0
    try:
        for w in word_val.keys():
            se = skills_lem.split().count(w) + exp_lem.split().count(w)
            # print(tf)
            score[i] += word_val[w]*se
    except:
        pass

# print score
print("Resume score based on Job requirement :", score[0])
