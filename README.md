# SBSPS-Challenge-2782-AI-Recruiter
# Our Proposed Solution
Our proposed solution aims to make the recruitment process smooth and hassle free
both for the candidate and the employer.All that the candidate needs to do is upload his
resume on our platform and apply for oppurtunities posted by the recruiters in our
website.Our system makes use of artificial intelligence in form of deep learning and
machine learning to rank and select candidates based on their experience, skillset and
company requirement.
The entire process of the recruitment starting from resume parsing , screening test,
interview to selection is automated and is powered by artificially intelligent models such
that no manual intervention is required.
The entire process of recruitment is divided into 4 parts:-
1. The candidate submits his/her resume and his resume is parsed using our resume
parser and relevant information is collected and displayed in the candidate dashboard
which the candidate can update accordingly in case of any error in detection and finally
save it to his profile such that his candidate profile is created .
2. Our model automatically filters out his areas of interest, grant points to the
candidates based on their achievements and experiences and shortlist them based on
some filtering criteria which is basically the skills that the recruiter wants in the
employee along with a threshold for experience.
3. If the candidate is deemed fit for the role posted by the employer by passing all the
threshold criteria and passing the resume screening process , He can attend a objective
screening test which would test the candidates skillset in terms of his domain
knowledge and problem solving.
4. The candidates who are shortlisted from the screening round will receive an
automated mail with a link to an AI based interview. The AI based chatbot will conduct a
video proctored interview and would ask basic question to the candidate which are
often asked in hr rounds in interviews in order to determine the nature, behaviour and
personality of the candidate. The candidate will be given 60 seconds to answer each
question during which the audio and video of the candiate will be processed. The video
of the candidate will be feeded on our facial expression recognition model which would
determine the amunt of positivity and negativity in the appearnce and behaviour of the
candidate.
The audio of the candidate will be feeded into a speech analyser model which would
take the voice and determine features in the speech to determine the candidate's
confidence and the sentiments present in his speech while he speaks.
Lastly we use a speech to text model to catch the answers of the candidate .
Using the video, speech and answers provided by the candidate , scores are given for
each section.
4. Finally the employer is provided with a list of all the candidates who have applied for
the process and along with it a report card of each candidate is provided which is a 
visualisation of the candidates performance in different sections of the screening
process, where candidates are ranked according to their overall performance scores.
The recruiter can go through the profiles of all the candidates and visualise and assess
their performance in all fields and finally select the candidates accordingly.
All the selected candidates will recieve a mail congratulating them on their selection
and urging them for an inperson meet with the employer.
# Data Used
For the resume parser we used our own annotated our own set of resumes to train a
pyresparser model.For resume strength analysis we used google word2vec model. The
facial expression model was trained on Movie face expressions dataset and speech
analyser on movie dialogues dataset.
