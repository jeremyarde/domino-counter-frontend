import App from './App.svelte';
import wasm from '../../domino-counter/Cargo.toml';

const init = async () => {
    const rust = await wasm();

	const app = new App({
		target: document.body,
		props: {
			name: 'world',
			greet: rust.greet()
		}
	});
};

// export default app;
init();