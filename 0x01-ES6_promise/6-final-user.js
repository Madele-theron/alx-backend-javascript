import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      const output = [];
      for (const result in results) {
        if (result === 'fulfilled') {
          output.push({
            status: 'fulfilled',
            value: result.value,
          });
        } else {
          output.push({
            status: 'rejected',
            value: result.reason ? result.reason.toString() : 'Unknown error',
          });
        }
      }
      return output;
    });
}
