This repository contain ionic app for predicting Stroke based on several parameters which user inputs on the app.

App contains 3 sections - Parameters, Diseases, Symptoms.

Parameters: 

This section will contain form with several parameters such as Age, BMI, gender etc. and once user adds these, it is stored in app's local Storage and when the user return to this tab the data is prefilled and user can update the parameters.

Diseases:

In this section, user can select a particular disease and then if he has already added parameters for this disease in the parameters tab, it will be prefilled or else user can add the required parameters and get the stroke prediction percentage.

Symptoms:

Yet to be developed.

This application connects to a Heroku server which run a Flask app. API is called to get the prediction based on the disease selected and along with the percentage a list of risks and recommendation for the user.