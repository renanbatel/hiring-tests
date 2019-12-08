const input = require("./lib/input")
const utils = require("./lib/utils")

/**
 * Check if it's a valid hour value
 *
 * @param {number} hour
 * @returns {boolean}
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const isValidHour = (hour) => hour > 0 && hour <= 12

/**
 * Check if it's a valid minute value
 *
 * @param {number} minute
 * @returns {boolean}
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const isValidMinute = (minute) => minute >= 0 && minute <= 60

/**
 * Gets the angle between hour and minute hands
 *
 * @param {number} hour
 * @param {number} minute
 * @returns {number} The angle
 *
 * @author Renan Batel Rodrigues <renanbatel@gmail.com>
 */
const getAngle = (hour, minute) => {
  const hourAngle = ((hour * 60) + minute) * 0.5
  const minuteAngle = minute * 6
  const angle = Math.abs(hourAngle - minuteAngle)

  return Math.min(angle, 360 - angle)
}

(async () => {
  input.open()

  const hour = parseInt(await input.getLine("Hour: "), 10)
  const minute = parseInt(await input.getLine("Minute: "), 10)
  const timer = utils.getTimer("Finished in")

  input.close()
  timer.start("Starting calculation...\n")

  if (isValidHour(hour) && isValidMinute(minute)) {
    const angle = minute === 60
      ? getAngle(hour === 12 ? 1 : hour + 1, 0)
      : getAngle(hour, minute)

    console.log(`Angle between hour hand and minute hand: ${angle}`)
  } else {
    console.log("Your hour or minute values aren't valid, please try again.\n")
  }

  timer.end()
})()
