<script lang="ts">
  import "@picocss/pico";
  import { onDestroy } from "svelte";
  import { createAudioContext, loadAudioFile, playBuffer } from "./audio";
  import { Orientation, ShakeDetector } from "./movement";
  const userAgent = navigator.userAgent;
  const hasMotionEvent = "DeviceMotionEvent" in window;
  let motionRaw: DeviceMotionEventAcceleration;
  let motion: number = 0;
  let motionMax = 0;

  const hasOrientationEvent = "DeviceOrientationEvent" in window;
  let startOrientation: Orientation;
  let orientation: Orientation;
  let orientationDiff: number = 0;

  const handleMotionEvent = (evt: DeviceMotionEvent) => {
    motionRaw = evt.acceleration;
    motion = Math.sqrt(
      motionRaw.x * motionRaw.x +
        motionRaw.y * motionRaw.y +
        motionRaw.z * motionRaw.z
    );
    if (motion > motionMax) {
      motionMax = motion;
    }
  };

  const handleOrientationChange = (evt: DeviceOrientationEvent) => {
    orientation = new Orientation(evt.alpha, evt.beta, evt.gamma);
    if (startOrientation == null) {
      startOrientation = orientation;
    }

    orientationDiff = startOrientation.delta(orientation).maxAbs;
  };

  window.addEventListener("devicemotion", handleMotionEvent);
  window.addEventListener("deviceorientation", handleOrientationChange);

  const hasAccelerometr = "Accelerometer" in window;
  let acceleration: number = 0;
  let maxAcceleration: number = 0;

  if (hasAccelerometr) {
    // @ts-ignore
    navigator.permissions.query({ name: "accelerometer" }).then((result) => {
      console.log(`Permission for accelerometr ${result.state}`);
    });
    try {
      const ametr = new Accelerometer({
        frequency: 10,
        referenceFrame: "device",
      });
      ametr.start();
      ametr.addEventListener("error", (evt) => {
        console.error(`Accelerometer error ${evt.error.name}`, evt.error);
      });
      ametr.addEventListener("activate", (evt) => {
        console.log("Accelerometer activated");
      });
      ametr.addEventListener("reading", (evt) => {
        acceleration = Math.sqrt(ametr.x * ametr.x + ametr.y * ametr.y + ametr.z * ametr.z) - 9.8;
        if (acceleration > maxAcceleration) {
          maxAcceleration = acceleration
        }
      })
    } catch (e) {
      console.error("Error creating Accelerometer", e);
    }
  }

  onDestroy(() => {
    window.removeEventListener("devicemotion", handleMotionEvent);
    window.removeEventListener("deviceorientation", handleOrientationChange);
  });

  let detectMotion: boolean;
  let detector: ShakeDetector;
  let detectorTimeout: number;

  const onDetect = async () => {
    if (detectMotion) {
      const ac = createAudioContext();
      const soundSleep = await loadAudioFile("static/will_sleep_soon.mp3", ac);
      const soundExtended = await loadAudioFile("static/extended.mp3", ac);
      detectorTimeout = window.setTimeout(() => {
        playBuffer(soundSleep, ac);
        detector = new ShakeDetector((how) => {
          playBuffer(soundExtended, ac);
          console.log(`Motion detected ${how}`);
          detectMotion = false;
        });
      }, 1000);
    } else {
      if (detector) {
        detector.finish();
        detector = null;
        window.clearTimeout(detectorTimeout);
      }
    }
  };
</script>

<header>
  <h1>Sensors Demo</h1>
  <p>Detects sensors and shows their readings</p>
</header>

<main class="container">
  <section>
    <label
      >Detect motion <input
        type="checkbox"
        bind:checked={detectMotion}
        on:change={onDetect}
      />
    </label>
  </section>
  <section>
    {#if hasMotionEvent}
      <div>
        <span class="label">Motion Event: </span>
        <span class="complex-value">
          <div class="ori">
            <div>
              <span class="label">actual: </span><span class="value"
                >{motion.toFixed(2)}</span
              >
            </div>
            <div>
              <span class="label">max: </span><span class="value"
                >{motionMax.toFixed(2)}</span
              >
            </div>
          </div>
        </span>
        <span class="value" />
      </div>
    {/if}

    {#if hasOrientationEvent && orientation && orientation.alpha != null}
      <div>
        <span class="label">Orientation Event: </span>
        <span class="complex-value">
          <div class="ori">
            <div>
              <span class="label">alpha: </span><span class="value"
                >{orientation.alpha.toFixed(2)}</span
              >
            </div>
            <div>
              <span class="label">beta: </span><span class="value"
                >{orientation.beta.toFixed(2)}</span
              >
            </div>
            <div>
              <span class="label">gamma: </span><span class="value"
                >{orientation.gamma.toFixed(2)}</span
              >
            </div>
            <div>
              <span class="label">diff: </span><span class="value"
                >{orientationDiff.toFixed(2)}</span
              >
            </div>
          </div>
        </span>
      </div>
    {/if}

    {#if hasAccelerometr}
      <div>
        <span class="label">Accelerometer: </span>
        <span class="complex-value">
          <div class="ori">
            <div>
              <span class="label">actual: </span><span class="value"
                >{acceleration.toFixed(2)}</span
              >
            </div>
            <div>
              <span class="label">max: </span><span class="value"
                >{maxAcceleration.toFixed(2)}</span
              >
            </div>
          </div>
        </span>
      </div>
    {/if}
  </section>
</main>
<footer>User Agent: {userAgent}</footer>

<style>
  .complex-value {
    display: inline-block;
  }

  .ori {
    display: flex;
    flex-flow: column;
  }
  .label {
    font-weight: bold;
  }

  .ori .label {
    min-width: 5rem;
    display: inline-block;
  }

  footer {
    font-weight: bold;
    font-size: 0.5rem;
  }
</style>
