import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoResponse = uploadPhoto();
  const userResponse = createUser();

  return Promise.all([photoResponse, userResponse])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
