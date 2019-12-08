const readline = require("readline")

const rl = {
  interface: null,
}

/**
 * Opens the input interface
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const open = () => {
  if (!rl.interface) {
    rl.interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }
}

/**
 * Closes the input interface
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const close = () => {
  if (rl.interface) {
    rl.interface.close()
  }
}

/**
 * Gets the terminal input line.
 *
 * @param {string} label Text to show before the input.
 * @returns {Promise}
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const getLine = (label = "") => new Promise((resolve) => {
  rl.interface.question(label, (value) => {
    resolve(value)
  })
})

module.exports = {
  open,
  close,
  getLine,
}
