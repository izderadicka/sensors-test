<script lang="ts">
	import "@picocss/pico";
import { onDestroy } from "svelte";
import { Orientation } from "./types";
	const userAgent = navigator.userAgent;
	const hasMotionEvent = "DeviceMotionEvent" in window;
	let motionRaw: DeviceMotionEventAcceleration;
	let motion: number = 0;

	const hasOrientationEvent = "DeviceOrientationEvent" in window;
	let orientation: Orientation;

	const handleMotionEvent = (evt: DeviceMotionEvent) => {
		motionRaw = evt.acceleration;
		motion = Math.sqrt(motionRaw.x * motionRaw.x + motionRaw.y * motionRaw.y + motionRaw.z * motionRaw.z);
	};

	

	const handleOrientationChange = (evt: DeviceOrientationEvent) => {
		orientation = new Orientation(evt.alpha, evt.beta, evt.gamma);
	}


	window.addEventListener('devicemotion', handleMotionEvent);
	window.addEventListener("deviceorientation", handleOrientationChange);

	onDestroy(() => {
		window.removeEventListener("devicemotion", handleMotionEvent);
		window.removeEventListener("deviceorientation", handleOrientationChange);
	})
	
</script>
<header><h1>Sensors Demo</h1>
<p>Detects sensors and shows their readings</p>
</header>

<main class="container">
	<section>
		{#if hasMotionEvent}
		<div>
			<span class="label">Motion Event: </span>
			<span class="value">{motion.toFixed(2)}</span>
			
		</div>
		{/if}

		{#if hasOrientationEvent}
		<div>
			<span class="label">Orientation Event: </span>
			<span class="value">{orientation}</span>
			
		</div>
		{/if}

	</section>
	
	
</main>
<footer><h4>User Agent: {userAgent}</h4></footer>

<style>
	.label {
		font-weight: bold;
	}
</style>