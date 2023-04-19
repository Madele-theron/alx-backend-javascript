import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userResponse = signUpUser(firstName, lastName);
  const photoResponse = uploadPhoto(fileName);

  return Promise.allSettled([userResponse, photoResponse]).then((results) => {
    for (const result in results) {
      if (result.reason !== undefined) {
        result.value = result.reason.toString();
        delete result.reason;
      }
    }
    return results;
  });
}
