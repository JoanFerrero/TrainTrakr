import { useCallback, useContext, useState } from "react"
import NotificationService from "../services/NotificationServices"
import { useContextHook } from "./useContextHook";

export const useNotification = () => {
  const { dispathCustom } = useContextHook();
  const updateNotification = (id) => {
      NotificationService.updateNotification(id)
        .then(({ data, status }) => {
          if (status === 200) {
            dispathCustom('UPDATE_NOTIFICATION', data, 'notifications')
            dispathCustom('UPDATE_NOTIFICATION_NOT_SEEN', data, 'notifications')
            dispathCustom('UPDATE_COUNTER', data, 'notifications')
          }
      }).catch(e => {
        console.error(e);
      });
  }

  return { updateNotification }
}