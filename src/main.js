import App from './App.svelte';
import wasm from '../../domino-counter/Cargo.toml';

const init = async () => {
    const rust = await wasm();

	const app = new App({
		target: document.body,
		props: {
			name: 'world',
			greet: rust.greet,
			count_dominoes: rust.count_dominoes_from_path

		}
	});
};

// export default app;
init();