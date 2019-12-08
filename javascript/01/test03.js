const input = require("./lib/input")
const utils = require("./lib/utils")

/**
 * Check if it's a valid ticket number
 *
 * @param {number} number The ticket number
 * @returns {boolean}
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const isValidTicketNumber = (number) => !(number.length % 2)
  && number.length >= 10
  && number.length < 106

/**
 * Check if it's a lucky ticket number
 *
 * @param {number} number The ticket number
 * @returns {boolean}
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const isLuckyTicketNumber = (number) => {
  const leftHalf = number.slice(0, number.length / 2)
  const rightHalf = number.slice(number.length / 2)
  const sum = (carry, current) => carry + parseInt(current, 10)
  const leftSum = leftHalf.split("").reduce(sum, 0)
  const rightSum = rightHalf.split("").reduce(sum, 0)

  return leftSum === rightSum
}

(async () => {
  input.open()

  const number = await input.getLine("Ticket number: ")
  const timer = utils.getTimer("Finished in")

  input.close()
  timer.start("Starting calculation...\n")

  if (isValidTicketNumber(number)) {
    if (isLuckyTicketNumber(number)) {
      console.log("It is a lucky ticket number.\n")
    } else {
      console.log("It is not a lucky ticket number.\n")
    }
  } else {
    console.log("The ticket number is not valid, please try again.\n")
  }

  timer.end()
})()
