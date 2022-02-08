function bubblesortOnce(a) {
    return [...a].map((e, i, arr) => {
    	e > arr[i+1] ? (arr[i] = arr[i+1], arr[i+1] = e, arr[i]) : e)
  	}
}