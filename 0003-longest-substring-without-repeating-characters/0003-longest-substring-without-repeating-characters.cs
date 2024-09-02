public class Solution {
    public int LengthOfLongestSubstring(string s)
    {
        if (s.Length == 1) return 1;
        
        int longLenght = 0;
        var charList = new List<Char>();

        for (int i = 0; i < s.Length; i++)
        {
            charList.Add(s[i]);
            for (int j = i + 1; j < s.Length; j++)
            {
                if (!charList.Any(c => c == s[j]))
                    charList.Add(s[j]);
                else
                {
                    longLenght = charList.Count > longLenght ? charList.Count : longLenght;
                    charList.Clear();
                    break;
                }
                if (j + 1 == s.Length)
                {
                    longLenght = charList.Count > longLenght ? charList.Count : longLenght;
                    charList.Clear();
                }
            }
            if (charList.Count > 0) charList.Clear();
        }
        return longLenght;
    }
}