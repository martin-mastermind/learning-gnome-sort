let arr = [],
    i = 1,
    j = 2,
    start = false;

function setup() {
  createCanvas(800, 600);
  
  for (let x = 0; x < width; x++) {
    arr.push(random(height));
  }
}
		
function draw() {
  background(32, 194, 14);
  
  for (let n = 0; n < width; n++) {
    line(n, height - arr[n], n, height);
    stroke(0);
  }
  
  if(start){
    for(let n = 0; n < width / 2; n++){
      if(i < arr.length){
    		if(arr[i - 1] < arr[i]) {
        	i = j;
        	j++;
      	} else {
        	swap(arr, i - 1, i);
        	i--;
        
        	if(i === 0) {
          	i = j;
          	j++;
        	}
      	}
      }
    }
  }
}

function swap(a, i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function mousePressed() {
  start = start ? false : true;
}