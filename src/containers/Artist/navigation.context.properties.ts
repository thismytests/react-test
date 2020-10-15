export const getArtistUrlValue = (artist: string, eventId: string) => {

  const result =  `/events/${artist}/${eventId}`;

  console.log('result ', result);
  return result;
}
