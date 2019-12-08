const input = require("./lib/input")
const utils = require("./lib/utils")

/**
 * Check if the string is valid for calculation
 * 
 * @param {string} string The string
 * @returns {boolean}
 * 
 * @author Renan Batel Rodrigues <renanabtel@gmail.com>
 */
const isValidString = (string) => {

  return /^[a-z]{1,15}$/.test(string)
}

/**
 * Get the occurrence number of each character
 * 
 * @param {string} string
 * @returns {Array}
 * 
 * @author Renan Batel Rodrigues <renanabtel@gmail.com>
 */
const countCharacters = (string) => string
  .split("")
  .reduce((carry, char) => {
    carry[char] = carry[char] ? carry[char] + 1 : 1

    return carry
  }, {})

/**
 * Get the number of common characters between two strings
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {number} The number of common characters
 * 
 * @author Renan Batel Rodrigues <renanabtel@gmail.com>
 */
const countCommonCharacters = (s1, s2) => {
  const s1Characters = countCharacters(s1)
  const s2Characters = countCharacters(s2)
  let commonCharacters = 0

  Object.keys(s1Characters).forEach((char) => {
    if (s1Characters[char] && s2Characters[char]) {
      commonCharacters += Math.min(s1Characters[char], s2Characters[char])
    }
  })

  return commonCharacters
}

(async () => {
  input.open()
  
  const s1 = await input.getLine("String 1: ")
  const s2 = await input.getLine("String 2: ")
  const timer = utils.getTimer("Finished in")

  input.close()
  timer.start("Starting calculation...\n")

  if (isValidString(s1) && isValidString(s2)) {
    const commonCharacters = countCommonCharacters(s1, s2)

    console.log(`Number of common characters between the two strings: ${commonCharacters}\n`)
  } else {
    console.log("Your strings aren't valid, please try again.\n")
  }

  timer.end()  
})()
