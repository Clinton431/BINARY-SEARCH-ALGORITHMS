int findIndex(int arr[], int n, int x) {
	// lo, hi points to the lowest and highest indices of search space. Currently
	// We are considering the entire array so 0 and n-1 respectively.
	int lo = 0, hi = n-1;
	while (lo <= hi) {
		int mid = (lo + hi) / 2;
		if (arr[mid] == x) return mid;
		else if (arr[mid] < x) {
			// x is on the right hand side, reject tleft half
			// lo =  md + 1;
		} else {
			// x is on the left hand side, reject right half
			hi = mid - 1;
		}
	}

	// If we come here, then we did not find the element
	return -1;
}
