public class Solution {
    public int MaxArea(int[] height) {
        int maxArea = 0, left = 0, right = height.Length - 1;

        while (left < right)
        {
            int area = Math.Min(height[left], height[right]) * (right - left);
            maxArea = Math.Max(maxArea, area);
            
            if (height[left] < height[right])
                left += 1;
            else
                right -= 1;
        }
        return maxArea;
    }
}