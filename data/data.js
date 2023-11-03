// Previous editions winners
const prevEditionsDataRaw = [{
    year: "2010",
    description: "HHL Leipzig, Germany"
},
{
    year: "2011",
    description: "CEIBS University, China"
},
{
    year: "2012",
    description: "University of Split, Croatia & 2nd University of Sao Paulo"
},
{
    year: "2013",
    description: "IESEG University, France & 2nd University of Kenya"
},
{
    year: "2014",
    description: "University of Toronto, Canada"
},
{
    year: "2015",
    description: "Bocconi University, Italy"
},
{
    year: "2016",
    description: "National Law School of India, Bangalore, India"
},
{
    year: "2017",
    description: "American University, College School of Law, USA"
},
{
    year: "2018",
    description: "IESEG University, France"
},
{
    year: "2019",
    description: "American University, College School of Law, USA"
},
{
    year: "2020",
    description: "IESEG University, France"
},
{
    year: "2021",
    description: "Twente University, the Netherlands"
},
{
    year: "2022",
    description: "National Law University New Delhi, India"
},
{
    year: "2023",
    description: "Twente University, the Netherlands"
}

];

const prevEditionsData = prevEditionsDataRaw.map(edition => {
    return {...edition, year: `\uD83C\uDFC6 ${edition.year} \uD83C\uDFC6`}
})

// Steps how to participate
const participationData = [{
    step: 1,
    description: "Step 1 - Gather a team of three, consisting of at least 2 people from the same university."
},
{
    step: 2,
    description: 'Step 2 - Prepare a CVs from each team member and cover letter.'
},
{
    step: 3,
    description: 'Step 3 - Fill out the participation survey. Available in January, stay tuned.'
},
{
    step: 4,
    description: 'Step 4 - Wait for the results. If the team is qualified book your flights and apply for a visa (if needed).'
},
{
    step: 5,
    description: 'Step 5 - See you in Warsaw on April 19-21, 2024 during the final of the Warsaw Negotiation Round.'
}
]


// images to the gallery




export { prevEditionsData, participationData};