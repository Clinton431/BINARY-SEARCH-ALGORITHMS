bool bs(vector<int> &nums, int target) {
	int lo = 0, hi = num.size() - 1;
	while (lo <= hi) {
		int mid = (lo + hi)/2;
		if(nums[mid] == target) return true;
		else if (nums[mid] < target) lo = mid + 1;
		else hi = mid - 1;
	}

	return false;
}

bool twoSum(vector<int> &nums, int k) {
	sort(nums.begin(), nums.end());
	for(int i=0; i<n; i++) {
		int target = k - nums[i];
		if(bs(nums, target)) return true;
	}

	return false;
}
