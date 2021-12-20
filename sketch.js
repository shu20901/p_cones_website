function setup()
{

	createCanvas(710, 420
        );
}

function draw()
{
	background(255, 100);
	noStroke();
	fill(0);
	
	const span = width / 3;
	const ns = .4;
	const noffs = 0.4;
	let yCount = 1;
	const cycle = 600;
	const nRad = frameCount % cycle / cycle * TAU;
	
	const nx = cos(nRad) * noffs;
	const ny = sin(nRad) * noffs;
	
	for(let y = -span / 2; y < height; y += span){
		
		let offset = yCount % 2 == 1 ? 0 : span * 1;
		
		for(let x = -offset; x < width; x += span)
		{
			const gx = x + span/2;
			const gy = y + span;
			const rx = span / 1.4;
			const ry = span / 2.6;
			
			const h = span * .6 * (pow (noise(nx + gx * ns, ny + gy * ns), 2) * 1.2 + 0.01);
			const topRatio = noise(nx * 2 + gx * ns, ny * 2 + gy * ns, 10)  + 0.1;
			
			mountain(gx, gy, rx, ry, h, topRatio);
		}
		yCount++;
	}
	
}


function mountain(gx, gy, rx, ry, h, topRatio)
{
		ellipseMode(CENTER);
		push();
		translate(gx, gy);
		let ratio;
		for(let i = 0; i > -h; i-= 1)
		{
			ratio = map(i, 0, -h, 1, topRatio);
			ratio = pow(ratio, 2);
			fill(map(i, 0, -h, 225, 0 ));
			ellipse(0, i, rx * ratio, ry * ratio);
		}
		fill(0);
		ellipse(0, -h, rx * ratio, ry * ratio);
		pop();
}