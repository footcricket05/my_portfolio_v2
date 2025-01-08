'use client'

import Wave from 'react-wavify'

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Wave
        fill='#3B82F6'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
        className="absolute bottom-0 left-0 right-0"
      />
    </div>
  )
}

export default WaveBackground

