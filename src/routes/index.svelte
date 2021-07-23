<script context="module">
	export const hydrate = true;
</script>

<script>
	let email;
	let emailInput;
	async function subscribe(e) {
		if (email && emailInput.checkValidity()) {
			e.preventDefault();
			window.location.assign(`https://newsletter.coollabs.io/${email}/subscribe`);
		}
	}
</script>
<div class="">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="text-center flex flex-col justify-center items-center">
			<p class="mt-1 font-extrabold text-white text-5xl  lg:text-6xl text-center gradient">
				Coolify
			</p>
			<h2 class="text-2xl md:text-3xl font-extrabold text-white pt-8">
				An open-source, hassle-free, self-hostable<br />
				<span class="text-indigo-400">Heroku</span>
				& <span class="text-green-400">Netlify</span> alternative
			</h2>
		</div>
	</div>
</div>
<div class="text-center pb-10">
	<p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
		Built for <span id="typed" class="text-red-400" /> like you!
	</p>
</div>
<div class="pb-16">
	<div class="max-w-7xl sm:mx-10  lg:mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mt-10">
			<div class="space-y-10 lg:space-y-0 mx-auto lg:grid lg:grid-cols-3 lg:gap-8 w-custom">
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Applications</div>
						<div class="mt-2 text-base text-gray-300">
							Build & deploy <span class="font-bold text-green-400">Static Sites</span>,
							<span class="font-bold text-green-400"> any Node.js based applications</span>,
							<span class="font-bold text-green-400">PHP</span>,
							<span class="font-bold text-green-400">Rust</span>
							applications hassle-free with
							<span class="font-bold text-green-400">automatic reverse proxy</span>
							and <span class="font-bold text-green-400">SSL certs</span>!
						</div>
					</div>
				</div>
				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Databases</div>
						<div class="mt-2 text-base text-gray-300">
							One-click <span class="font-bold text-yellow-400"
								>MongoDB, MySQL, PostgreSQL, CouchDB, RedisDB</span
							>
							instances ready to use - with
							<span class="font-bold text-yellow-400">one-click backups</span>! <br /><br />Yes,
							everything is one button! <span class="font-bold text-yellow-400">Really!</span>
						</div>
					</div>
				</div>

				<div>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">Services</div>
						<div class="mt-2 text-base text-gray-300">
							Need your own instance of <a href="https://wordpress.org" target="_blank"
								><span class="font-bold text-purple-500 underline hover:text-white">WordPress</span
								>,
								<a href="https://plausible.io" target="_blank"
									><span class="font-bold text-purple-500 underline hover:text-white"
										>Plausible Analytics</span
									></a
								>,
								<a href="https://nocodb.com" target="_blank"
									><span class="font-bold text-purple-500 underline hover:text-white">NocoDB</span
									></a
								>,
								<a href="https://min.io/" target="_blank"
									><span class="font-bold text-purple-500 underline hover:text-white">MinIO</span
									></a
								>
								or
								<a href="https://github.com/cdr/code-server" target="_blank"
									><span class="font-bold text-purple-500 underline hover:text-white"
										>VSCode Server</span
									></a
								> ? You covered here!
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				class="space-y-10 pt-6 lg:pt-10 lg:space-y-0 mx-auto lg:grid justify-center lg:grid-cols-3 lg:gap-8 w-custom"
			>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">
							Commit / Pull Request deployments
						</div>
						<div class="mt-2 text-base text-gray-300">
							Automagically deploy new commits and pull requests to <span
								class="font-bold text-red-500">quickly review contributions</span
							>
							and <span class="font-bold text-red-500">speed up your teamwork</span>!
						</div>
					</div>
				</div>
				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">
							Hassle-free installation and upgrade
						</div>
						<div class="mt-2 text-base text-gray-300">
							<span class="font-bold text-pink-500">Install</span> and
							<span class="font-bold text-pink-500">upgrade </span>
							your all-in-one infrastructure service
							<span class="font-bold text-pink-500">with one button</span>!
						</div>
					</div>
				</div>

				<div>
					<div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
							/>
						</svg>
					</div>
					<div class="mt-5">
						<div class="text-lg leading-6 font-extrabold text-white">
							Cronjobs, monitoring, etc...
						</div>
						<div class="mt-2 text-xs text-red-500">coming soon</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="text-center">
	<h2 class="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
		<span class="block"
			><span class="text-blue-500">Follow</span> for updates
			<a href="https://twitter.com/andrasbacsai"
				><span class="sr-only">Twitter</span>
				<svg
					class="inline-block w-12 h-12 text-blue-500"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
					/>
				</svg></a
			>
			and <span class="text-yellow-400">star</span> it on
			<a
				href="https://github.com/coollabsio/coolify"
				class="text-center text-white pt-10 hover:text-gray-300"
			>
				<svg
					class="inline-block h-12 w-12"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clip-rule="evenodd"
					/>
				</svg></a
			></span
		>
	</h2>
</div>
<div class="bg-coolblack">
	<div class="max-w-7xl mx-auto text-center pt-8 px-4 sm:px-6  lg:pt-8 lg:px-8">
		<div class="text-base font-extrabold tracking-tight text-white sm:text-2xl pb-4">
			Try out now! It only takes 2-3 minutes!
		</div>
		<div class="text-base text-white pb-10">
			(<span class="text-yellow-400 font-bold">Ubuntu 20.04</span> tested at the moment)
		</div>
		<div class="flex justify-center">
			<div class="tracking-tight text-white font-mono bg-black px-4 py-2 rounded text-sm">
				/bin/bash -c "$(curl -fsSL https://get.coollabs.io/coolify/install.sh)"
			</div>
		</div>
		<div class="pb-16">
			<a
				href="https://github.com/coollabsio/get.coollabs.io"
				target="_blank"
				class="tracking-tight text-gray-300 text-xs font-mono hover:underline">(source code)</a
			>
		</div>

		<div
		class=" max-w-3xl text-center pb-10 py-5 my-5 mx-auto"
	>
		<p class="font-bold text-xl">
			Interested about coolTalk or <a
				href="https://coollabs.io/products"
				target="_blank"
				class="underline text-sky-500 hover:text-white font-extrabold">our other projects?</a
			>
		</p>
		<p class="font-bold text-xl py-2">
			<span class="font-extrabold gradient">Subscribe</span> to our newsletter! 👇
		</p>
		<p class="pb-6 text-xs">(No bullsh*t, promise)</p>
		<div>
			<div class="py-5">
				<form>
					<input
						bind:this={emailInput}
						class="w-64"
						placeholder="Email address"
						type="email"
						bind:value={email}
						required
					/>
					<button
						type="submit"
						class="w-32 button py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-center"
						on:click={subscribe}>Subscribe</button
					>
				</form>
			</div>
		</div>
	</div>
	</div>
</div>
