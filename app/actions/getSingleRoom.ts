'use server';

import { createAdminClient } from '@/config/appwrite';

async function getSingleRoom(id) {
  try {
    const { databases } = createAdminClient();

    // Fetch rooms
    const databaseId = '673c4ef200147b33d1cc'; // Database ID
    const collectionId = 'rooms'; // Collection ID
    const room = await databases.getDocument(databaseId, collectionId, id);

    return room;
  } catch (error) {
    console.error('Failed to get room', error);
  }
}

export default getSingleRoom;
