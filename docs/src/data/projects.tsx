const blendFinderCode = `\
bf = BlendFinder("<your-path>")  # init with your chosen directory
bf.list_blend_stats()            # gather info on all blend files
bf.export_all_objects()          # create output with all exports and previews`;

export const projects = [
  {
    title: "Blend Finder",
    tags: "Python, Js, Blender API, three.js, glTF",
    id: "BlendFinder",
    desc: "Built a Python tool that scans directories for Blender assets, auto-generates scene previews, and exports to glTF for browser-based 3D viewing via a custom Three.js renderer.",
    content: (
      <>
        <div className="m-8">
          This tool can be easily used from your python scripts
          <br />
          <pre className="rounded-lg overflow-auto text-sm">
            <code className="language-python">{blendFinderCode}</code>
          </pre>
        </div>

        <div className="m-8">
          The resulting output can be seen in your browser, where the left
          sidebard contains a list of previews for each .blend file that was
          found:
          {/* <br /> */}
          {/* <img
            src={`${import.meta.env.BASE_URL}assets/animation.gif`}
            alt="blend finder preview"
            className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
          /> */}
        </div>

        <div className="w-full aspect-video">
          Interactive sample output:
          <iframe
            className="w-full h-full border-0"
            src={`${import.meta.env.BASE_URL}output/BlendFinder_results.html`}
          />
        </div>

        <div className="m-8 arrow">
          <a
            href="https://github.com/teduard/blender-tools/tree/main/BlendFinder"
            target="_blank"
          >
            Go to project{" "}
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Camera Rendering Addon",
    tags: "Python, Scripting",
    id: "CameraRenderingAddon",
    desc: "Developed a Blender Python addon that automates multi-viewpoint scene rendering, reducing manual camera setup time.",
    content: (
      <>
        <div className="m-8">
          After enabling the addon from the Edit {">"} Preferences menu, you can
          easily generate renders from multiple angles using the custom
          displayed panel.
        </div>

        <div className="m-8">
          The rendered images are saved to a specified output directory,
          organized by scene and camera name.
          <br />
          <br />
          <br />
          <img
            src={`${import.meta.env.BASE_URL}assets/demo.png`}
            alt="camera rendering preview"
            className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
          />
        </div>

        <div className="m-8 arrow">
          <a
            href="https://github.com/teduard/blender-tools/tree/main/CameraRenderingAddon"
            target="_blank"
          >
            Go to project{" "}
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Andrew WyethCalendar",
    tags: "Python, Blender API, Scripting",
    id: "AndrewWyethCalendar",
    desc: "Generated a visual calendar programmatically using curated fine art assets — combines data templating with 3D/image tooling.",
    content: (
      <>
        <div className="m-8">
          The <i>andrew_wyeth_calendar.blend</i> file with embedded python
          script is able to generate a full-year calendar using Andrew Wyeth's
          most known paintings as background for each month. The script creates
          a new scene for each month, sets the corresponding painting as the
          background, and renders the scene to an output directory.
        </div>

        <div className="m-8">
          The generated images for the calendar will be rendered in the output
          directory. Leap years are taken into account.
          <img
            src={`${import.meta.env.BASE_URL}/assets/calendar.png`}
            alt="calendar preview"
            className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
          />
        </div>

        <div className="m-8 arrow">
          <a
            href="https://github.com/teduard/blender-tools/tree/main/AndrewWyethCalendar"
            target="_blank"
          >
            Go to project{" "}
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Shapes, color and rendering experiments",
    tags: "Blender",
    id: "experiments",
    desc: "A collection of various experiments exploring different shapes, colors, and rendering techniques in Blender.",
    content: (
      <>
        <div className="m-8">Video showcase of some of the experiments: </div>

        <div className="m-8">
          <video
            controls
            className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
            poster={`${import.meta.env.BASE_URL}assets/poster.jpg`}
          >
            <source
              src={`${import.meta.env.BASE_URL}/assets/04.mp4`}
              type="video/webm"
            />
          </video>

          <div className="m-8">Still renders: </div>
          <div className="flex flex-col md:flex-row min-h-fit">
            <div className="w-full md:w-1/3 still-render">
              <img
                src={`${import.meta.env.BASE_URL}assets/01.png`}
                alt="calendar preview"
                className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
              />
            </div>
            <div className="w-full md:w-1/3 still-render">
              <img
                src={`${import.meta.env.BASE_URL}assets/02.png`}
                alt="calendar preview"
                className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
              />
            </div>
            <div className="w-full md:w-1/3 still-render">
              <img
                src={`${import.meta.env.BASE_URL}assets/03.png`}
                alt="calendar preview"
                className="w-full h-auto mt-4 rounded-xl backdrop-blur-xs"
              />
            </div>
          </div>
        </div>

        <div className="m-8 arrow">
          <a href="https://github.com/teduard/blender-tools" target="_blank">
            Go to project{" "}
          </a>
        </div>
      </>
    ),
  },
];
