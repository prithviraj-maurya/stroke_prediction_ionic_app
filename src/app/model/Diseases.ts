export const DISEASE_PARAM_KEY = 'diseases_params';

export const diseases = [
    {
        label: 'Stroke',
        parameters: [
            {
                label: 'Gender',
                field: 'gender',
                type: 'dropdown',
                options: [
                    { value: 'Male', label: 'Male' },
                    { value: 'Female', label: 'Female' }
                ]
            },
            {
                label: 'Age',
                field: 'age',
                type: 'number'
            },
            {
                label: 'Hypertension',
                field: 'hypertension',
                type: 'dropdown',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                ]
            },
            {
                label: 'Heart Disease',
                field: 'heart_disease',
                type: 'dropdown',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                ]
            },
            {
                label: 'Ever Married',
                field: 'ever_married',
                type: 'dropdown',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' }
                ]
            },
            {
                label: 'Work Type',
                field: 'work_type',
                type: 'dropdown',
                options: [
                    { value: 'Private', label: 'Private' },
                    { value: 'Self-employed', label: 'Self Employed' },
                    { value: 'Govt_job', label: 'Government Job' }
                ]
            },
            {
                label: 'Residence Type',
                field: 'Residence_type',
                type: 'dropdown',
                options: [
                    { value: 'Rural', label: 'Rural' },
                    { value: 'Urban', label: 'Urban' }
                ]
            },
            {
                label: 'Avg Glucose Level',
                field: 'avg_glucose_level',
                type: 'number',
            },
            {
                label: 'BMI',
                field: 'bmi',
                type: 'number'
            },
            {
                label: 'Smoking Status',
                field: 'smoking_status',
                type: 'dropdown',
                options: [
                    { value: 'formerly smoked', label: 'Formerly Smoked' },
                    { value: 'never smoked', label: 'Never Smoked' },
                    { value: 'smokes', label: 'Smoke' },
                    { value: 'Unknown', label: 'Unknown' }
                ]
            }
        ]
    },
    {
        label: 'Cancer'
    }
];

export const commonParams = [
    {
        label: 'Gender',
        field: 'gender',
        type: 'dropdown',
        options: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' }
        ]
    },
    {
        label: 'Age',
        field: 'age',
        type: 'number'
    },
    {
        label: 'Height',
        field: 'height',
        type: 'number'
    },
    {
        label: 'Weight',
        field: 'weight',
        type: 'number'
    },
    {
        label: 'Blood Pressure',
        field: 'blood_pressure',
        type: 'number'
    },
    {
        label: 'Cholesterol',
        field: 'cholesterol',
        type: 'number'
    },
    {
        label: 'Hypertension',
        field: 'hypertension',
        type: 'dropdown',
        options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' }
        ]
    },
    {
        label: 'Heart Disease',
        field: 'heart_disease',
        type: 'dropdown',
        options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' }
        ]
    },
    {
        label: 'Ever Married',
        field: 'ever_married',
        type: 'dropdown',
        options: [
            { value: 'Yes', label: 'Yes' },
            { value: 'No', label: 'No' }
        ]
    },
    {
        label: 'Work Type',
        field: 'work_type',
        type: 'dropdown',
        options: [
            { value: 'Private', label: 'Private' },
            { value: 'Self-employed', label: 'Self Employed' },
            { value: 'Govt_job', label: 'Government Job' }
        ]
    },
    {
        label: 'Residence Type',
        field: 'Residence_type',
        type: 'dropdown',
        options: [
            { value: 'Rural', label: 'Rural' },
            { value: 'Urban', label: 'Urban' }
        ]
    },
    {
        label: 'Avg Glucose Level',
        field: 'avg_glucose_level',
        type: 'number',
    },
    {
        label: 'BMI',
        field: 'bmi',
        type: 'number'
    },
    {
        label: 'Smoking Status',
        field: 'smoking_status',
        type: 'dropdown',
        options: [
            { value: 'formerly smoked', label: 'Formerly Smoked' },
            { value: 'never smoked', label: 'Never Smoked' },
            { value: 'smokes', label: 'Smoke' },
            { value: 'Unknown', label: 'Unknown' }
        ]
    }
];