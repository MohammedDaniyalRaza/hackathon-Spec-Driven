import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// --- 3D Model Placeholders ---
function ModelPlaceholder() {
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'#60a5fa'} wireframe />
    </mesh>
  );
}

// --- Feature Definitions ---
type FeatureItem = {
  title: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: The Robotic Nervous System',
    description: (
      <>
        Learn the fundamentals of ROS 2, the middleware that acts as the nervous system for your robot.
      </>
    ),
  },
  {
    title: 'Module 2: The Digital Twin',
    description: (
      <>
        Explore powerful simulation environments like Gazebo and Unity to build and test your robot in a virtual world.
      </>
    ),
  },
  {
    title: 'Module 3: The AI-Robot Brain',
    description: (
      <>
        Dive into the world of AI-driven perception using NVIDIA Isaac™ tools for visual SLAM, navigation, and synthetic data generation.
      </>
    ),
  },
  {
    title: 'Module 4: Vision-Language-Action',
    description: (
      <>
        Bridge the gap between human language and robot actions. Learn how to use LLMs to create robots that understand voice commands.
      </>
    ),
  },
];

// --- Feature Card Component ---
function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureCard)}>
      <div className={styles.featureScene}>
        <Canvas>
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <ModelPlaceholder />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
