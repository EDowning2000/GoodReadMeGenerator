function generateMarkdown (data){
return `
  # ${data.title}

  # Description
  ${data.description}

  # Table of Contents
  [Installation] (#installation)
  [Tests] (#tests)
  [Usage] (#usage)
  [Contributing] (#contributing)
  [Liscence] (#liscence)
  [Questions] (#questions)

 # Installation
 Run This Snippet to Run Dependencies 
 ${data.installation}

 # Tests
 Run the Tests with This Snippet
 ${data.tests}

 # Usage
 How to Use This Program
 ${data.usage}

 # Contributing
 How Users can Contribute 
 ${data.contributing}

 # Liscence
 ${data.liscence}

# Questions
If You Have any Questions, You can Reach Me at My [Email]${data.email}

<img src="${data.profilePhoto}" alt="Github Avatar"
`;
}
module.exports=generateMarkdown;
