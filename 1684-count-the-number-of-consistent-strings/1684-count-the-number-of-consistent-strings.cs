public class Solution {
    public int CountConsistentStrings(string allowed, string[] words)
    {
        int count = 0;
        foreach (var word in words)
        {
            int i = 0;
            while (word.Length > i)
            {
                if (!allowed.Contains(word[i])) break;
                if (++i == word.Length) count++;
            }
        }
        return count;
    }
}