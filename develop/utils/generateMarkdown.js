module.exports = generateMarkdown=(data)=> {
  console.log(data)
  var newData = `

  #github Username
### ${data.github}

# Title
###${data.title}

#Description of The Project
### ${data.description}

#Commands to Install Dependencies 
### ${data.installation}

#Command to Run Testing 
### ${data.tests}

#Usage Information
### ${data.usage}

#How Can the User Contribute 
### ${data.contributing}

#Liscence 
### ${data.liscence}

`;
return newData
}


