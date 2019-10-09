# Test 1

Given two strings, find the number of common characters between them.

__Example__

For `s1 = "aabcc"` and `s2 = "adcaa"`, the output should be `yourFunction(s1, s2) = 3`.

Strings have `3` common characters - `2` `"a"s` and `1` `"c"`.

__Input/Output__

* __[time limit] 500ms (cpp)__
* __[input] string s1__ <br /><br />A string consisting of lowercase latin letters a-z.<br /><br />_Guaranteed constraints:_<br />`1 ≤ s1.length ≤ 15`.

* __[input] string s2__ <br /><br />A string consisting of lowercase latin letters a-z.<br /><br />_Guaranteed constraints:_<br />`1 ≤ s2.length ≤ 15`.

* __[output] integer__

# Test 2

Find the Angle between hour hand and minute hand at the given time.

__Example 1__

- Time `12:45`
- Input `hour = 12`, `minute = 45`
- Output `112.5`

__Example 2__

- Time `3:30`
- Input `hour = 3`, `minute = 30`
- Output `75`

__Approach__

- At 12:00 both hand meet, take it as reference.
- Angle between hand and minute = angle of hour hand ~ angle of minute hand.
- return minimum(angle, 360-angle)
- hour hand moves 360 in 12 hours => 360/12 = 30 degree in one hour or 0.5 degree in 1 min
- Minute hand moves 360 in 60 mins => 360/60 = 6 degree in one min
- So if given time is h hours and m mins, hour hand will move (h*60+m)*0.5 and minute hand will move 6*m

# Test 3

Ticket numbers usually consist of an even number of digits. A ticket number is considered _lucky_ if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number `n`, determine if it's _lucky_ or not.

__Example__

* For `n = 1230`, the output should be `yourFunction(n) = true;`.
* For `n = 239017`, the output should be `yourFunction(n) = false;`.

__Input/Output__

* __[time limit] 3000ms (cs)__
* __[input] integer n__ <br /><br />A ticket number represented as a positive integer with an even number of digits.<br /><br />_Guaranteed constraints:_<br />`10 ≤ n < 106.`<br />
* __[output] boolean__<br />`true` if `n` is a lucky ticket number, `false` otherwise.

# Test 4

Write a function that accepts a positive number N.
The function should console log a pyramid shape with N levels using the # character.
Make sure the pyramid has spaces on both the left *and* right hand sides.

__Example 1__

- Input `levels = 3`
- Output
    ```
        ' # '
        '###'
    ```

__Example 2__

- Input `levels = 3`
- Output
    ```
        ' # '
        '###'
    ```

__Example 3__

- Input `levels = 3`
- Output
    ```
        '  #  '
        ' ### '
        '#####'
    ```
