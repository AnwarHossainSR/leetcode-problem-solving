// 3. Longest Substring Without Repeating Characters
//  Given a string, find the length of the longest substring without repeating
//  characters. Example 1: Input: "abcabcbb" Output: 3 Explanation: The answer
//  is "abc", with the length of 3.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (seen[char])
      start = Math.max(start, seen[char]);

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  console.log(longest);
  return longest;
};

lengthOfLongestSubstring('abcabcbb');
