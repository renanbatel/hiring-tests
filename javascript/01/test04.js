const input = require("./lib/input")
const utils = require("./lib/utils")

/**
 * Check if it's a valid levels number
 * 
 * @param {number} levels 
 * @returns {boolean}
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const isValidLevelsNumber = (levels) => !isNaN(levels) && parseInt(levels) > 0

/**
 * Gets a pyramid with specified levels
 * 
 * @param {number} levels The pyramid levels number
 * @returns {string} The pyramid
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const getPyramid = (levels) => {
  let pyramid = ""

  for (let i = 0; i < levels; i++) {
    const space = " ".repeat(levels - (i + 1))
    const blocks = "#".repeat(1 + (i * 2))

    pyramid += `'${space}${blocks}${space}'\n`
  }

  return pyramid
}

(async () => {
  input.open()

  const levels = await input.getLine("Levels: ")
  const timer = utils.getTimer("Finished in")

  input.close()
  timer.start("Starting build...\n")

  if (isValidLevelsNumber(levels)) {
    console.log(getPyramid(levels))
  } else {
    console.log("The levels number is not valid, please try again.\n")
  }

  timer.end()
})()
