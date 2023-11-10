import * as THREE from "three";

export default function convertMousePosition(mousePosition, camera) {
  const vector = new THREE.Vector3(mousePosition.x, mousePosition.y, 0.5);
  let position = new THREE.Vector3();

  vector.unproject(camera);

  let dir = vector.sub(camera.position).normalize();

  let distance = -camera.position.z / dir.z;

  position = camera.position.clone().add(dir.multiplyScalar(distance));

  return position;
}
