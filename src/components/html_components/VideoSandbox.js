
import { useEffect, useRef } from 'react'
import useStore from '../../store'
import mouseState from '../../mouseState.js'

console.log("HERE")

const baseVideoPath = document.location.origin + window.location.pathname + '/video/'
const videoTwo = baseVideoPath + 'blue_hex.mp4'
const videoOne = baseVideoPath + 'red_hex.mp4'
const WIDTH = 1920;
const HEIGHT = 1080;
let offset = WIDTH >> 1
let SCALE_OFFSET = (WIDTH / document.body.scrollWidth)
console.log(SCALE_OFFSET)

export default function Navigation() {
  // const videoIndex = useStore(state => state.videoIndex)
  // const videoPaths = useStore(state => state.videoPaths)
  // const currentVideo = document.location.origin + window.location.pathname + videoPaths[videoIndex]

  const canvasRef = useRef()
  const videoRef = useRef()
  const videoRef2 = useRef()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const video = videoRef.current
    const video2 = videoRef2.current

    canvas.width = video.width = video2.width = WIDTH;
    canvas.height = video.height = video2.height = HEIGHT;

    const draw = () => {
      offset = mouseState.x * SCALE_OFFSET
      ctx.drawImage(video, 0, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT)
      ctx.drawImage(video2, offset, 0, WIDTH-offset, HEIGHT, offset, 0, WIDTH-offset, HEIGHT)
      requestAnimationFrame(draw);
    }

    video.oncanplay = draw;
    ctx.fillText("Loading video...", 20, 20)

  }, []);


  return (
    <>

      <div>
        <video ref={videoRef} autoPlay muted loop key={videoOne} style={{width: '100%', height: '100%'}}>
          <source src={videoOne} type="video/mp4" />
        </video>

        <video ref={videoRef2} autoPlay muted loop key={videoTwo} style={{width: '100%', height: '100%'}}>
          <source src={videoTwo} type="video/mp4" />
        </video>

        <canvas
          ref={canvasRef}
          style={{ backgroundColor: 'black', zIndex: 100 }}
          className="cover-screen"
        />
      </div>
    </>
  )
}