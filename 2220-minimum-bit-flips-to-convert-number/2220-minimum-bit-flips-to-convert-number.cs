public class Solution {
    public int MinBitFlips(int start, int goal)
    {
        int minFlips = 0;

        string s = Convert.ToString(start, 2);
        string g = Convert.ToString(goal, 2);

        int len = s.Length > g.Length ? s.Length : g.Length;

        while (s.Length != len)
            s = s.Insert(0, "0");
        
        while (g.Length != len)
            g = g.Insert(0, "0");

        for (int i = 0; i < len; i++)
            if (g[i] != s[i]) minFlips++;

        return minFlips;
    }
}