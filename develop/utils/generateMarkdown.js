module.exports = generateMarkdown=(data)=> {
  console.log(data)
  return newData = `
  # ${data.title}

  # Description
  ${data.description}

  # Table of Contents
  [Installation] (#installation)
  [Tests] (#tests)
  [Useage] (#useage)
  [Contributing] (#contributing)
  [Liscence] (#liscence)


`;

}


