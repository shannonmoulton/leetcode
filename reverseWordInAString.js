var reverseWords = function (s) {
    return s.split(' ').map(e => e.split('').reverse().join('')).join(' ')
};

//https://leetcode.com/problems/reverse-words-in-a-string-iii/