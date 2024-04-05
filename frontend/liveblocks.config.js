import { createClient } from "@liveblocks/client";
import { createRoomContext, createLiveblocksContext } from "@liveblocks/react";
  
const client = createClient({
  publicApiKey: "pk_dev_UlxBiD6TtOS0KX6187Gn4qfKZpkTyi9QL83pVyHWLpyP15BDIOQziOT49IjqO2VO",
  //authEndpoint: "/api/liveblocks-auth",
  throttle: 100,
  async resolveUsers({ userIds }) {
    // Used only for Comments and Notifications. Return a list of user information
    // retrieved from `userIds`. This info is used in comments, mentions etc.
    
    // const usersData = await __fetchUsersFromDB__(userIds);
    // 
    // return usersData.map((userData) => ({
    //   name: userData.name,
    //   avatar: userData.avatar.src,
    // }));
    
    return [];
  },
  async resolveMentionSuggestions({ text }) {
    // Used only for Comments. Return a list of userIds that match `text`.
    // These userIds are used to create a mention list when typing in the
    // composer. 
    //
    // For example when you type "@jo", `text` will be `"jo"`, and 
    // you should to return an array with John and Joanna's userIds:
    // ["john@example.com", "joanna@example.com"]

    // const users = await getUsers({ search: text });
    // return users.map((user) => user.id);

    return [];
  },
  async resolveRoomsInfo({ roomIds }) {
    // Used only for Comments and Notifications. Return a list of room information
    // retrieved from `roomIds`.
    
    // const roomsData = await __fetchRoomsFromDB__(roomIds);
    // 
    // return roomsData.map((roomData) => ({
    //   name: roomData.name,
    //   url: roomData.url,
    // }));
    
    return [];
  },
});

// Room-level hooks, use inside `RoomProvider`
export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersListener,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
    useStatus,
    useLostConnectionListener,
    useThreads,
    useCreateThread,
    useEditThreadMetadata,
    useCreateComment,
    useEditComment,
    useDeleteComment,
    useAddReaction,
    useRemoveReaction,
    useThreadSubscription,
    useMarkThreadAsRead,
    useRoomNotificationSettings,
    useUpdateRoomNotificationSettings,
  
    // These hooks can be exported from either context
    // useUser,
    // useRoomInfo
  }
} = createRoomContext(client);

// Project-level hooks, use inside `LiveblocksProvider`
export const {
  suspense: {
    LiveblocksProvider,
    useMarkInboxNotificationAsRead,
    useMarkAllInboxNotificationsAsRead,
    useInboxNotifications,
    useUnreadInboxNotificationsCount,
  
    // These hooks can be exported from either context
    useUser,
    useRoomInfo,
  }
} = createLiveblocksContext(client);
