public class Solution {
    public int Reverse(int x)
    {
        long result = 0;
        bool negative = false;
        
        if (x < 0)
        {
            x *= -1;
            negative = true;
        }

        while (x > 0)
        {
            result = result * 10 + x % 10;
            x /= 10;
        }
        
        if (result > int.MaxValue || result < int.MinValue) return 0;

        return negative ? ((int)result * -1) : (int)result;
    }
}