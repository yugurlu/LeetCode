public class Solution {
    public int MinBitFlips(int start, int goal)
    {
        int minFlips = 0;
        int c = start ^ goal;

        string newBits = Convert.ToString(c, 2);
        
        for (int i = 0; i < newBits.Length; i++)
            if (newBits[i] == '1') minFlips++;
        
        return minFlips;
    }
}