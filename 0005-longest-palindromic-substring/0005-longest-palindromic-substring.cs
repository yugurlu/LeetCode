public class Solution {
    public string LongestPalindrome(string s)
    {
        string currentString;
        string longString = s[0].ToString();
        
        for (int i = 0; i < s.Length; i++)
        {
            int cl = 1;
            int j = i + 1;
            while (j <= s.Length)
            {
                if (j + i <= s.Length)
                    currentString = s.Substring(i, cl);
                else
                    currentString = s.Substring(i, j - i);

                if (IsPalindrom(currentString) && currentString.Length > longString.Length)
                    longString = currentString;
                j++;
                cl++;
            } 
        }
        return longString;
    }

    private bool IsPalindrom(string s)
    {
        for (int i = 0; i < s.Length; i++)
        {
            if (s[i] != s[s.Length - (i + 1)])
                return false;
        }
        return true;
    }
}