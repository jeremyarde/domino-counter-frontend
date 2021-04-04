<script>
  export let name;
  export let greet;
  export let count_dominoes;
  let fileinput = null;
  let result = 0;
  let width;
  let height;

  let canvas;

  const onFileSelected = (e) => {
    const ctx = canvas.getContext("2d");

    var reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        console.log(canvas);
        console.log(`${img.naturalHeight}, ${img.naturalWidth}`);
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);
        // img.style.display = "none";

        var myData = ctx.getImageData(0, 0, img.width, img.height);
        console.log("data:");
        console.log(myData.data);

        result = count_dominoes(
          myData.data,
          img.naturalWidth,
          img.naturalHeight
        );
        console.log("Results of count:");
        console.log(result);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);

    // let reader = new FileReader();
    // console.log(image);

    // reader.readAsDataURL(image);
    // reader.onload = function (e) {
    //   //Initiate the JavaScript Image object.
    //   // ctx.drawImage(image, 0, 0);

    //   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //   console.log("imagedata:");
    //   console.log(imageData);

    //Set the Base64 string return from FileReader as source.
    // image.src = e.target.result;

    // //Validate the File Height and Width.
    // image.onload = () => {
    //   height = Number(image.naturalHeight);
    //   width = Number(image.naturalWidth);
    //   console.log(`[INNER] width: ${width}, height: ${height}`);
    //   console.log(
    //     `[INNER] type width: ${typeof width}, type height: ${typeof height}`
    //   );
    // };
  };

  //   reader = new FileReader();
  //   reader.readAsArrayBuffer(image);
  //   reader.onload = (e) => {
  //     console.log("Result:");
  //     console.log(e.target.result);
  //     fileinput = new Uint8Array(e.target.result);
  //     console.log("File:");
  //     console.log(fileinput);
  //     // console.log(`${JSON.serialize(fileinput)}`);
  //     console.log("File input changed");
  //     console.log(`dimensions: ${width} x ${height}`);
  //     result = count_dominoes(fileinput, width, height);
  //     console.log(`result: ${result}`);
  //   };
  // };

  // if (fileinput != null) {
  //   console.log("File input changed");
  //   result = count_dominoes(fileinput, width, height);
  // }
  // let other_result = count_dominoes("dominoes/IMG-20210324-WA0000.jpg");
  // let other_result = count_dominoes(fileinput);
</script>

<main>
  <canvas bind:this={canvas} width={32} height={32} />
  <input bind:value={name} />

  <input
    type="file"
    accept="image/*"
    capture="environment"
    on:change={(e) => onFileSelected(e)}
    bind:this={fileinput}
  />

  <h1>Hello {name}!</h1>
  <h3>This is something from rust: {greet(name)}!</h3>
  <h4>Domino count:{result}</h4>

  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
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
