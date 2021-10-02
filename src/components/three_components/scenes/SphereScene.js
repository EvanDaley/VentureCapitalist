import { OrbitControls, Loader, PerspectiveCamera, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Geo from "./../objects/Geo"

export default function ThreeCanvas({ canvasStyles }) {
  return (
    <>
      <Canvas style={canvasStyles} className="video-overlay" colorManagement={true} invalidateFrameloop pixelRatio={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          <Suspense fallback={null}>
            <Geo position={[0, 0, 0]} />
            <Environment preset={'city'} background={false} />
          </Suspense>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

