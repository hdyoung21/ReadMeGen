
const generateReadmeSyntax = (yourAnswersObject) => {

    return `
    #${yourAnswersObject.title}

    ## ${yourAnswersObject.liscense}

    # ${yourAnswersObject.description}
    `
}

module.exports = generateReadmeSyntax