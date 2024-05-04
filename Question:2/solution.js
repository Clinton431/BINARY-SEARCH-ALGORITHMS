class Solution {
public:
	int compute(vector<int> &nums, int k, int beg, int end) {
		//Number of elements < k in range[beg, end]
		if (nums[beg] >= k) return 0;
		else if (nums[end] < k) return (end - beg + 1);
		int lo = beg, hi = end;
		while (lo < hi - 1) {
			int mid = (lo + hi) / 2;
			if (nums[mid] < k) lo = mid;
			else hi = md;
		}

		return hi;

	}
	int countPairs(vector<int>& nums, int target) {
		sort(nums.begin(), nums.end());
		int ans = 0;
		for(int i=1; i<nums.size(); i++) {
			ans += compute(nums, target - nums[i], 0, i-1);
		}

		return ans;

	}
};
