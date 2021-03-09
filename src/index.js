import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from './useMeasure'
import './styles.css'

function App() {
  const [open, toggle] = useState(false);
  const [bind, { width }] = useMeasure();
  const props = useSpring({ width: open ? width*0.38 : 0 });

  return (
    <div {...bind} class="main" onClick={() => toggle(!open)}>
      <animated.div class="fill" style={props} />
      <animated.div class="content">{props.width.interpolate(x => (x/width*100).toFixed(0) + "%")}</animated.div>
    </div>
  )
}

render(<App />, document.getElementById('root'))
