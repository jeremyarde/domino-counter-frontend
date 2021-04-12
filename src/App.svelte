<script>
  export let count_dominoes;

  let fileinput = null;
  let result = 0;

  let found_domino_string = "Please upload photo";
  let currentImage;
  let canvas;
  let width;
  let height;
  let edgePositions = [];

  let currentDominoImage = null;
  let currentDominoImageHeight = 0;
  let currentDominoImageWidth = 0;
  let currentDominoImageCropSection = null;

  function rotateImage(event) {
    console.log("rotate image function");
    var context = canvas.getContext("2d");
    console.log(currentImage);
    currentImage.style.transform = "rotate(90deg)";

    // context.rotate((90 * Math.PI) / 180);
    // context.drawImage(currentImage, 0, 0);
    redrawImage();
  }

  function redrawImage() {
    var context = canvas.getContext("2d");

    var hRatio = canvas.width / currentImage.width;
    var vRatio = canvas.height / currentImage.height;
    var ratio = Math.min(hRatio, vRatio);
    context.drawImage(
      currentImage,
      0,
      0,
      currentImage.width,
      currentImage.height,
      0,
      0,
      currentImage.width * ratio,
      currentImage.height * ratio
    );
  }

  function handleMousemove(event) {
    console.log(canvas.getBoundingClientRect());
    let canvas_rectangle = canvas.getBoundingClientRect();

    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    // canvas.width = currentImage.naturalWidth;
    // canvas.height = currentImage.naturalHeight;
    // context.drawImage(currentImage, 0, 0);
    // context.drawImage(
    //   currentImage,
    //   0,
    //   0,
    //   currentImage.width,
    //   currentImage.height,
    //   0,
    //   0,
    //   currentImage.width * ratio,
    //   currentImage.height * ratio
    // );
    redrawImage();

    let x = event.clientX - canvas_rectangle.left;
    let y = event.clientY - canvas_rectangle.top;
    edgePositions.push({ x: x, y: y });

    if (edgePositions.length > 2) {
      edgePositions.shift();
    }

    // draw points
    edgePositions.forEach((pos) => {
      console.log(pos.x);
      console.log(pos.y);
      context.fillStyle = "#3aeb34";
      context.beginPath();
      context.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
      context.fill();
    });

    // draw rectangle through points
    let topLeft;
    let bottomRight;
    if (edgePositions.length == 2) {
      if (edgePositions[0].x < edgePositions[1].x) {
        topLeft = edgePositions[0];
        bottomRight = edgePositions[1];
      } else {
        topLeft = edgePositions[1];
        bottomRight = edgePositions[0];
      }
      context.strokeStyle = "green";
      context.lineWidth = 5;
      context.shadowColor = "#d53";
      currentDominoImageCropSection = {
        x: topLeft.x,
        y: topLeft.y,
        x_len: bottomRight.x - topLeft.x,
        y_len: bottomRight.y - topLeft.y,
      };
      context.strokeRect(
        currentDominoImageCropSection["x"],
        currentDominoImageCropSection["y"],
        currentDominoImageCropSection["x_len"],
        currentDominoImageCropSection["y_len"]
      );
    }

    console.log("domino image section (JS)");
    console.log(currentDominoImageCropSection);
    console.log(`${x}, ${y}`);
  }

  function onSubmitPicture(event) {
    console.log("onSubmitPicture");
    // send the image data to wasm for counting
    found_domino_string = "waiting...";
    let wasm_result;

    if (currentDominoImage != null) {
      if (currentDominoImageCropSection != null) {
        var context = canvas.getContext("2d");
        var imageData = context.getImageData(
          currentDominoImageCropSection["x"],
          currentDominoImageCropSection["y"],
          currentDominoImageCropSection["x_len"],
          currentDominoImageCropSection["y_len"]
        ).data;

        console.log("domino image section (JS)");
        console.log(currentDominoImageCropSection);

        wasm_result = count_dominoes(
          imageData,
          currentDominoImageCropSection["x_len"],
          currentDominoImageCropSection["y_len"],
          true
        );
      } else {
        wasm_result = count_dominoes(
          currentDominoImage,
          currentDominoImageWidth,
          currentDominoImageHeight,
          false
        );
      }
      console.log("Results of count:");
      // console.log(result);
      result = wasm_result["value"];
      console.log(wasm_result);
      found_domino_string = wasm_result["string_rep"];
      console.log("after return");
    } else {
      alert("No picture uploaded yet.");
    }
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
        // canvas.width = img.naturalWidth;
        // canvas.height = img.naturalHeight;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawImage();

        // ctx.drawImage(img, 0, 0);
        // img.style.display = "none";

        var myData = ctx.getImageData(0, 0, img.width, img.height);

        console.log("Image set. Ready to analyze.");
        // console.log(myData);
        currentDominoImage = myData.data;
        currentDominoImageWidth = img.width;
        currentDominoImageHeight = img.height;
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };
</script>

<main>
  <div>
    <input
      type="file"
      accept="image/*"
      on:change={(e) => onFileSelected(e)}
      bind:this={fileinput}
    />
  </div>
  <!-- <canvas
    bind:this={canvas}
    width={32}
    height={32}
    on:click={handleMousemove}
  /> -->

  <div class="container">
    <canvas bind:this={canvas} {width} {height} on:click={handleMousemove} />
  </div>

  <div>
    <button on:click={rotateImage}>ROTATE</button>
    <button on:click={onSubmitPicture}>ANALYZE PICTURE</button>
    <h2>Count: {result}<br />Dominoes Found: {found_domino_string}</h2>
  </div>
  <h2 style="text-align: left">
    Instructions:<br />
  </h2>
  <p style="text-align: left">
    1. Arrange the dominoes in a single file vertical line<br />
    2. Click on the "Browse..." button to and take a photo of the dominoes from directly
    above<br />
    3. Tap on the top left and top right corner of the line of dominoes to crop the
    image (you don't have to be too precise)<br />
    4. Click the "Analyze" button
  </p>
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
