<script>
  export let count_dominoes;

  let fileinput = null;
  let result = 0;
  let width;
  let height;
  let found_domino_string = "DOMINO HERE";
  let top_left;
  let bottom_right;
  let currentImage;
  let canvas;
  let edgePositions = [];

  function handleMousemove(event) {
    console.log(canvas.getBoundingClientRect());
    let canvas_rectangle = canvas.getBoundingClientRect();

    var context = canvas.getContext("2d");
    context.clearRect(0,0, canvas.width, canvas.height);
    canvas.width = currentImage.naturalWidth;
    canvas.height = currentImage.naturalHeight;
    context.drawImage(currentImage, 0, 0);

    let x = event.clientX - canvas_rectangle.left;
		let y = event.clientY - canvas_rectangle.top;
    edgePositions.push({"x": x, "y":y});

    if (edgePositions.length > 2) {
      edgePositions.shift()
    }

    edgePositions.forEach(pos => {
      console.log(pos.x);
      console.log(pos.y);
      context.fillStyle = "#000000";
      context.beginPath();
      context.arc(pos.x, pos.y, 20, 0, 2*Math.PI);
      context.fill();
    });

    console.log(`${x}, ${y }`);
	}

  const onFileSelected = (e) => {
    const ctx = canvas.getContext("2d");

    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        currentImage = img;
        console.log(canvas);
        console.log(`${img.naturalHeight}, ${img.naturalWidth}`);
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        ctx.drawImage(img, 0, 0);
        // img.style.display = "none";

        var myData = ctx.getImageData(0, 0, img.width, img.height);
        console.log("data:");
        console.log(myData.data);

        // send the image data to wasm for counting
        // result = count_dominoes(
        //   myData.data,
        //   img.naturalWidth,
        //   img.naturalHeight
        // );
        // console.log("Results of count:");
        // console.log(result);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  

</script>

<main>
  <div>
    <h2>Domino count: {result}</h2>
    <h3>Found dominoes: {found_domino_string}</h3>
  </div>
<div>
  <input
    type="file"
    accept="image/*"
    capture="environment"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
  />
</div>
  <canvas bind:this={canvas} width={32} height={32} on:click={handleMousemove} />

</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
