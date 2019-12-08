/**
 * Creates an timer for execution time calculation
 * 
 * @param {string} key The timer key
 * 
 * @returns {Object} The timer
 * 
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const getTimer = (key) => ({
  start: (startText) => {
    console.log(startText)
    console.time(key)
  },
  end: () => {
    console.timeEnd(key)
  }
})

module.exports = {
  getTimer,
}
