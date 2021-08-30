import { NotificationService } from "@fcc/ui";
import { formatNumberString, convertNumberToString } from '@fcc/utils'

export const toast = new NotificationService();


export const showApiBad = () => {          
  toast.warning({
    title: 'Что-то пошло не так',
    message: 'API стало плохо',
      
  })
}

export const showGoodLead = (profit) => {          
  toast.success({    
    message: `Вы заработали: ${convertNumberToString(profit)}`,
    delay: 1200,
      
  })
}

export const showBadLead = (profit) => {          
  toast.warning({    
    message: `Вы потеряли: -${convertNumberToString(profit)}`,
    delay: 1200,
      
  })
}

