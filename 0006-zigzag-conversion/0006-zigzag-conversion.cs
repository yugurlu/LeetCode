public class Solution {
    public string Convert(string s, int numRows) {
        int currRow = 0;
        int currCol = 0;
        int currCharacter = 0;
        char[,] array = new char[numRows, 1000];
        
        if (numRows == 1) return s;

        while (currCharacter != s.Length)
        {
            for (int j = currRow; j < numRows && currCharacter != s.Length; j++)
            { 
                array[j, currCol] = s[currCharacter];
                if (j + 1 != numRows) currRow++; 
                currCharacter++;
            }
    

            for (int j = 0; j < numRows - 2 && currCharacter != s.Length; j++)
            {
                currCol++;
                currRow--;
                array[currRow, currCol] = s[currCharacter];
                currCharacter++;
            }
            currCol++;
            currRow--;
        }

        var result = new System.Text.StringBuilder();
        for (int i = 0; i < numRows; i++)
        {
            for (int j = 0; j <= currCol; j++)
            {
                if (array[i, j] != '\0')
                {
                    result.Append(array[i, j]);
                }
            }
        }
        return result.ToString();
    }
}