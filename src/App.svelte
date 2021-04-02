<script>
  export let name;
  export let greet;
  export let count_dominoes;
  let fileinput = null;

  const onFileSelected = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
      fileinput = e.target.result;
      console.log(`${fileinput} uploaded something`);
      console.log("File input changed");
      result = count_dominoes(fileinput);
      console.log(`result: ${result}`);
    };
  };

  let result;
  if (fileinput != null) {
    console.log("File input changed");
    result = count_dominoes(fileinput);
  }
  // let other_result = count_dominoes("dominoes/IMG-20210324-WA0000.jpg");
  // let other_result = count_dominoes(fileinput);
</script>

<main>
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
