public class Solution {
    public int RomanToInt(string s)
    {
        int res = 0;
        List<KeyValuePair<char, int>> list = new List<KeyValuePair<char, int>>()
        {
            new KeyValuePair<char, int>('I', 1),
            new KeyValuePair<char, int>('V', 5),
            new KeyValuePair<char, int>('X', 10),
            new KeyValuePair<char, int>('L', 50),
            new KeyValuePair<char, int>('C', 100),
            new KeyValuePair<char, int>('D', 500),
            new KeyValuePair<char, int>('M', 1000),
        };

        if (s.Contains("IV")) s = s.Replace("IV", "IIII");
        if (s.Contains("IX")) s = s.Replace("IX", "VIIII");
        if (s.Contains("XL")) s = s.Replace("XL", "XXXX");
        if (s.Contains("XC")) s = s.Replace("XC", "LXXXX");
        if (s.Contains("CD")) s = s.Replace("CD", "CCCC");
        if (s.Contains("CM")) s = s.Replace("CM", "DCCCC");

        for (int i = 0; i < s.Length; i++)
            res += list.FirstOrDefault(x => x.Key == s[i]).Value;

        return res;
    }
}