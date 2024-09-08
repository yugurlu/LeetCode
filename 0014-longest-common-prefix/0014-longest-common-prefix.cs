public class Solution {
    public string LongestCommonPrefix(string[] strs)
    {
        bool flag;
        string minStr = "";
        int minSize = Int32.MaxValue, finishIndex = 0;
        
        for (int i = 0; i < strs.Length; i++)
        {
            if (minSize > strs[i].Length)
            {
                minStr = strs[i];
                minSize = strs[i].Length;
            }
        }                                   
                                                     
        for (int i = 0; i < minSize; i++)               
        {
            flag = true;
            for (int j = 0; j < strs.Length; j++)
            {
                if (strs[j][i] != minStr[i])
                    return minStr.Substring(0, finishIndex);
            }
            if (flag) finishIndex++;
        }
        return minStr.Substring(0, finishIndex);
    }
}