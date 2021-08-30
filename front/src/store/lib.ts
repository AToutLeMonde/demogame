import { generateAvatar } from "src/utils"

export const buildAvatars = () => {
  return (
    [
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      },
      {
        ...generateAvatar(),
        isVisible: false,
      }
    ]
  )
}