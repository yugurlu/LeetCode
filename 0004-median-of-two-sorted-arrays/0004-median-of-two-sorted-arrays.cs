public class Solution {
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        double median;
        var mergedArray = nums1.Concat(nums2);
        var array= mergedArray.OrderBy(c => c).ToArray();
        int arrLen = array.Length;

        if (arrLen % 2 == 0)
        {
            median = (array[arrLen / 2 - 1] + array[arrLen / 2]) / 2.0;
        }
        else
        {
            median = array[arrLen / 2];
        }

        return median;
    }
}