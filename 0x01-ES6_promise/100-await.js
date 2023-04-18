import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const userResponse = await createUser();
    const photoResponse = await uploadPhoto();
    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    return { photo: null, user: null };
  }
}
