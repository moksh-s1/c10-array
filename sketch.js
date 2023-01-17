var weight = [100,120,245,237,160];
function setup() 
{
  createCanvas(400,400);
  var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
  var avg = sum/weight.length;
  console.log(avg);
}

function draw() 
{
background(51);

}

