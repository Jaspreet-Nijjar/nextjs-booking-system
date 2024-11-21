'use server';

import { createAdminClient } from '@/config/appwrite';

async function getAllRooms() {
  try {
    const { databases } = createAdminClient();

    // Fetch rooms
    const databaseId = '673c4ef200147b33d1cc'; // Database ID
    const collectionId = 'rooms'; // Collection ID
    const { documents: rooms } = await databases.listDocuments(
      databaseId,
      collectionId
    );

    return rooms;
  } catch (error) {
    console.error('Failed to get rooms:', error);
  }
}

export default getAllRooms;
